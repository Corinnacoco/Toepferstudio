import { useSanityQuery } from "../lib/sanity";

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  readingTime: string;
  body: string;
  image: string;
}

const POSTS_QUERY = `*[_type == "post"] | order(_createdAt desc){
  "slug": slug.current,
  title,
  date,
  category,
  excerpt,
  readingTime,
  "image": image.asset->url,
  "body": pt::text(body)
}`;

export function usePosts(): BlogPost[] | null {
  return useSanityQuery<BlogPost[]>(POSTS_QUERY);
}
