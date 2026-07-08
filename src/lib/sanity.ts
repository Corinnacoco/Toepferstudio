import { useEffect, useState } from "react";

const PROJECT_ID = "yypn2i57";
const DATASET = "production";
const API_VERSION = "2024-01-01";

export async function sanityFetch<T>(query: string): Promise<T> {
  const url = `https://${PROJECT_ID}.apicdn.sanity.io/v${API_VERSION}/data/query/${DATASET}?query=${encodeURIComponent(query)}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Sanity request failed: ${res.status}`);
  const json = await res.json();
  return json.result as T;
}

export function useSanityQuery<T>(query: string): T | null {
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    let cancelled = false;
    sanityFetch<T>(query)
      .then((result) => {
        if (!cancelled) setData(result);
      })
      .catch((err) => {
        console.error("Sanity fetch error:", err);
        if (!cancelled) setData([] as unknown as T);
      });
    return () => {
      cancelled = true;
    };
  }, [query]);

  return data;
}
