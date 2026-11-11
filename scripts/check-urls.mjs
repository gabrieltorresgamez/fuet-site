// Checks that every URL in the old site's sitemap answers 200, or 301 to a page that answers 200, on the new site.
// Usage: node scripts/check-urls.mjs [https://fuet.ch] [http://localhost:8080]
const [oldSite = 'https://fuet.ch', newSite = 'http://localhost:8080'] = process.argv.slice(2);

const locs = async (url) => [...(await (await fetch(url)).text()).matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
const sitemaps = await locs(`${oldSite}/sitemap.xml`);
const paths = new Set(['/sitemap.xml', '/rss/', '/privacy-policy/']);
for (const sitemap of sitemaps) for (const url of await locs(sitemap)) paths.add(new URL(url).pathname);

let failed = 0;
for (const path of [...paths].sort()) {
  let res = await fetch(newSite + path, { redirect: 'manual' });
  let note = '';
  if (res.status === 301) {
    note = ` -> ${res.headers.get('location')}`;
    res = await fetch(new URL(res.headers.get('location'), newSite));
  }
  if (res.status !== 200) failed++;
  console.log(`${res.status === 200 ? 'ok  ' : 'FAIL'} ${path}${note}${res.status === 200 ? '' : ` (${res.status})`}`);
}
console.log(`${paths.size} URLs, ${failed} failed`);
process.exit(failed ? 1 : 0);
