import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { allPosts } from '../lib';

export async function GET(context: APIContext) {
  return rss({
    title: 'FUET',
    description: 'A blog by Gabriel Torres Gamez and friends.',
    site: context.site!,
    items: (await allPosts()).map((post) => ({
      title: post.data.title,
      description: post.data.excerpt,
      pubDate: post.data.date,
      link: `/${post.id}/`,
    })),
  });
}
