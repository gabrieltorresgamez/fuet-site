import { defineCollection, reference } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const posts = defineCollection({
  loader: glob({ pattern: '*/index.md', base: './src/content/posts' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      slug: z.string(), // the post's URL: /<slug>/
      date: z.coerce.date(),
      updated: z.coerce.date().optional(),
      authors: z.array(reference('authors')).min(1),
      tags: z.array(z.string()).default([]), // tag pages are derived from these names
      excerpt: z.string(),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      coverCaption: z.string().optional(),
      lang: z.enum(['de', 'en']),
    }),
});

const authors = defineCollection({
  loader: glob({ pattern: '*.yaml', base: './src/content/authors' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      bio: z.string().optional(),
      avatar: image().optional(),
    }),
});

export const collections = { posts, authors };
