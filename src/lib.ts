import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'posts'>;

export const allPosts = async () => (await getCollection('posts')).sort((a, b) => +b.data.date - +a.data.date);

// Same slugs Ghost used: "Challenges and Mini Challenges" -> challenges-and-mini-challenges
export const tagSlug = (name: string) => name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

export const formatDate = (d: Date) =>
  d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'Europe/Zurich' });
