import { fetcher } from "@/lib/services/fetcher.ts";

export const requestNewsPapers = async () => {
  return (await fetcher.get("/newspapers")).data;
};

export const requestRssByNewsPaper = async (newspaper_id: number) => {
  return (await fetcher.get(`/newspapers/${newspaper_id}/rss`)).data;
};

export const requestScrap = async (rss_id: number) => {
  return (await fetcher.get(`/scraper/rss/${rss_id}`)).data;
};
