// One-off migration: Ghost JSON export -> src/content. Kept as a record.
// Usage: node scripts/ghost-to-md.mjs <export.json> [https://fuet.ch]
// Images are fetched from the live Ghost site and stored next to each post.
import { mkdir, readFile, writeFile, access } from 'node:fs/promises';
import path from 'node:path';
import TurndownService from 'turndown';

const [exportFile, origin = 'https://fuet.ch'] = process.argv.slice(2);
if (!exportFile) throw new Error('usage: node scripts/ghost-to-md.mjs <export.json> [origin]');

const data = JSON.parse(await readFile(exportFile, 'utf8')).db[0].data;
const byId = (rows) => Object.fromEntries(rows.map((r) => [r.id, r]));
const users = byId(data.users);
const tags = byId(data.tags);
const meta = Object.fromEntries(data.posts_meta.map((m) => [m.post_id, m]));
const joined = (rows, key, lookup) => (postId) =>
  rows
    .filter((r) => r.post_id === postId)
    .sort((a, b) => a.sort_order - b.sort_order)
    .map((r) => lookup[r[key]]);
const authorsOf = joined(data.posts_authors, 'author_id', users);
const tagsOf = joined(data.posts_tags, 'tag_id', tags);

// Ghost stores resized variants in src; srcset's widest entry is the original.
const original = (img) => {
  const set = (img.getAttribute('srcset') || '')
    .split(',')
    .map((s) => s.trim().split(/\s+/))
    .filter(([u]) => u)
    .sort((a, b) => parseInt(b[1]) - parseInt(a[1]));
  return set[0]?.[0] ?? img.getAttribute('src');
};

// Downloads one image into dir and returns its local file name.
async function localImage(url, dir, seen) {
  if (seen.has(url)) return seen.get(url);
  const src = url.replace('__GHOST_URL__', origin);
  let name = decodeURIComponent(path.basename(new URL(src).pathname)).replace(/[^\w.-]/g, '-');
  if (!path.extname(name)) name += '.jpg'; // Unsplash URLs have no extension
  while ([...seen.values()].includes(name)) name = `${seen.size}-${name}`;
  seen.set(url, name);
  const file = path.join(dir, name);
  try {
    await access(file);
  } catch {
    const res = await fetch(src);
    if (!res.ok) throw new Error(`${res.status} ${url}`);
    await writeFile(file, Buffer.from(await res.arrayBuffer()));
  }
  return name;
}

const td = new TurndownService({ headingStyle: 'atx', codeBlockStyle: 'fenced', bulletListMarker: '-', emDelimiter: '*' });
td.remove(['script', 'style']);
td.keep(['sup']);
// ponytail: captions become an italic line under the image, no <figure>. Add a component if captions need styling.
td.addRule('figcaption', { filter: 'figcaption', replacement: (c) => (c.trim() ? `\n\n*${c.trim()}*\n\n` : '') });
td.addRule('callout', {
  filter: (n) => n.nodeName === 'DIV' && /kg-callout-card/.test(n.className),
  replacement: (c) => `\n\n> ${c.trim().replace(/^(\p{Extended_Pictographic}\uFE0F?)\s+/u, '$1 ').replace(/\n/g, '\n> ')}\n\n`,
});
// No third-party requests: embeds become plain links.
td.addRule('iframe', { filter: 'iframe', replacement: (_, n) => `\n\n[${n.getAttribute('src')}](${n.getAttribute('src')})\n\n` });
td.addRule('img', {
  filter: 'img',
  replacement: (_, n) => `![${(n.getAttribute('alt') || '').replace(/[\[\]]/g, '').replace(/\s+/g, ' ')}](${n.getAttribute('data-local') || n.getAttribute('src')})`,
});

const count = (text, words) => words.reduce((n, w) => n + text.split(` ${w} `).length - 1, 0);
const yaml = (o) =>
  Object.entries(o)
    .filter(([, v]) => v != null && v !== '')
    .map(([k, v]) => `${k}: ${JSON.stringify(v)}`) // JSON scalars and flow arrays are valid YAML
    .join('\n');

const posts = data.posts.filter((p) => p.type === 'post' && p.status === 'published');
const usedAuthors = new Set();

for (const p of posts) {
  const dir = path.join('src/content/posts', p.slug);
  await mkdir(dir, { recursive: true });
  const seen = new Map();
  const notes = [];

  let html = p.html;
  // Altair charts load Vega from a CDN. Keep each spec and point at a static SVG instead;
  // render with: npx -p vega -p vega-lite vl2svg chart-N.vl.json chart-N.svg
  let charts = 0;
  const specs = [];
  html = html.replace(
    /<style>[^<]*<\/style>\s*<div id="altair-viz-[^>]*><\/div>\s*<script[^>]*>[\s\S]*?\}\)\((\{[\s\S]*?\}), \{"mode": "vega-lite"\}\);\s*<\/script>/g,
    (_, spec) => (specs.push(spec), `<img data-local="./chart-${++charts}.svg" alt="">`),
  );
  for (const [i, spec] of specs.entries()) await writeFile(path.join(dir, `chart-${i + 1}.vl.json`), spec);
  if (charts) notes.push(`${charts} charts need rendering and alt text`);
  if (/<script/.test(html)) notes.push('scripts removed');
  if (/<iframe/.test(html)) notes.push('iframes turned into links');

  // Swap image URLs for local files before converting (turndown rules are sync).
  const urls = new Set();
  td.addRule('collect', { filter: (n) => n.nodeName === 'IMG' && !n.getAttribute('data-local'), replacement: (_, n) => (urls.add(original(n)), '') });
  td.turndown(html);
  td.rules.array.shift();
  const local = new Map();
  for (const u of urls) local.set(u, await localImage(u, dir, seen));
  td.addRule('localize', {
    filter: (n) => n.nodeName === 'IMG' && !n.getAttribute('data-local') && local.get(original(n)),
    replacement: (_, n) => `![${(n.getAttribute('alt') || '').replace(/[\[\]]/g, '').replace(/\s+/g, ' ')}](./${local.get(original(n))})`,
  });
  let body = td.turndown(html).replace(/\n{3,}/g, '\n\n');
  // Authors skipped heading levels (h2 then h5). Make them consecutive from h2; the hierarchy stays.
  const levels = [...new Set([...body.matchAll(/^(#{1,6}) /gm)].map((m) => m[1].length))].sort();
  body = body.replace(/^(#{1,6}) /gm, (_, h) => '#'.repeat(levels.indexOf(h.length) + 2) + ' ');
  td.rules.array.shift();

  const text = p.plaintext.replace(/\s+/g, ' ').trim();
  const cover = p.feature_image && (await localImage(p.feature_image, dir, seen));
  const authors = authorsOf(p.id);
  authors.forEach((a) => usedAuthors.add(a));
  const front = yaml({
    title: p.title,
    slug: p.slug,
    date: p.published_at,
    updated: p.updated_at,
    authors: authors.map((a) => a.slug),
    tags: tagsOf(p.id).map((t) => t.name),
    excerpt: p.custom_excerpt || text.slice(0, 160).replace(/\s\S*$/, '') + '…',
    cover: cover && `./${cover}`,
    coverAlt: meta[p.id]?.feature_image_alt,
    coverCaption: meta[p.id]?.feature_image_caption && td.turndown(meta[p.id].feature_image_caption).replace(/\?utm_[^)]*/g, ''),
    lang: count(text, ['und', 'der', 'die', 'ich']) > count(text, ['the', 'and', 'of', 'to']) ? 'de' : 'en',
  });
  await writeFile(path.join(dir, 'index.md'), `---\n${front}\n---\n\n${body}\n`);
  console.log(`${p.slug}: ${seen.size} images${notes.length ? ` — CHECK: ${notes.join(', ')}` : ''}`);
}

// ponytail: authors get a name only. Bio and photo are added by hand once each author agrees.
await mkdir('src/content/authors', { recursive: true });
for (const a of usedAuthors) await writeFile(`src/content/authors/${a.slug}.yaml`, `${yaml({ name: a.name })}\n`);
console.log(`${posts.length} posts, ${usedAuthors.size} authors`);
