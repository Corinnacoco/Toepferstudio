import { useSanityQuery } from "../lib/sanity";

export interface Market {
  id: string;
  name: string;
  date: string;
  endDate?: string;
  city: string;
  address: string;
  description: string;
  openingHours: string;
  type: string;
  past?: boolean;
}

const MARKETS_QUERY = `*[_type == "markt"] | order(_createdAt asc){
  "id": _id,
  name,
  date,
  endDate,
  city,
  address,
  description,
  openingHours,
  type,
  past
}`;

export function useMarkets(): Market[] | null {
  return useSanityQuery<Market[]>(MARKETS_QUERY);
}
