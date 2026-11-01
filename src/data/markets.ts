import { useEffect, useState } from "react";
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

// Read both Sanity ISO dates and the German dates used in existing entries.
function marketDateKey(value: string): string | null {
  const text = value.trim().toLowerCase();
  const iso = text.match(/^(\d{4})-(\d{2})-(\d{2})(?:$|t)/);
  const months = ["januar", "februar", "märz", "april", "mai", "juni", "juli", "august", "september", "oktober", "november", "dezember"];
  const german = [...text.matchAll(/(\d{1,2})\.\s*(\d{1,2}|[a-zä]+)\.?\s+(\d{4})/g)].at(-1)
    ?? text.match(/^(\d{1,2})\.(\d{1,2})\.(\d{4})$/);
  if (!iso && !german) return null;
  const year = Number(iso ? iso[1] : german![3]);
  const month = iso ? Number(iso[2]) : /^\d+$/.test(german![2]) ? Number(german![2]) : months.indexOf(german![2]) + 1;
  const day = Number(iso ? iso[3] : german![1]);
  const check = new Date(Date.UTC(year, month - 1, day));
  if (check.getUTCFullYear() !== year || check.getUTCMonth() !== month - 1 || check.getUTCDate() !== day) return null;
  return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

function todayInGermany(): string {
  return new Intl.DateTimeFormat("sv-SE", { timeZone: "Europe/Berlin", year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date());
}

export function useMarkets(): Market[] | null {
  const markets = useSanityQuery<Market[]>(MARKETS_QUERY);
  const [today, setToday] = useState(todayInGermany);
  useEffect(() => {
    const timer = window.setInterval(() => setToday(todayInGermany()), 60_000);
    return () => window.clearInterval(timer);
  }, []);
  return markets?.map(market => {
    const lastDay = marketDateKey(market.endDate?.trim() || market.date);
    return { ...market, past: Boolean(market.past || (lastDay && lastDay < today)) };
  }) ?? null;
}

