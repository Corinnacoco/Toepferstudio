import { useSanityQuery } from "../lib/sanity";

export interface Course {
  id: string;
  title: string;
  level: string;
  description: string;
  date: string;
  duration: string;
  maxParticipants: number;
  price: number;
  category: string;
  spotsLeft: number;
  longDescription?: string;
}

const COURSES_QUERY = `*[_type == "course"] | order(_createdAt asc){
  "id": _id,
  title,
  level,
  category,
  description,
  longDescription,
  date,
  duration,
  maxParticipants,
  price,
  spotsLeft
}`;

export function useCourses(): Course[] | null {
  return useSanityQuery<Course[]>(COURSES_QUERY);
}

export const categories = ["Alle", "Drehen", "Handaufbau", "Glasur", "Intensiv", "Kinder"];
