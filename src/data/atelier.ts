import { useSanityQuery } from "../lib/sanity";

export interface AtelierInfo {
  description: string;
  address: string;
  openingHours: string;
  note?: string;
}

const ATELIER_QUERY = `*[_type == "atelier"][0]{
  description,
  address,
  openingHours,
  note
}`;

export function useAtelier(): AtelierInfo | null {
  return useSanityQuery<AtelierInfo>(ATELIER_QUERY);
}
