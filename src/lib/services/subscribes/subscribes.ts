import { fetcher } from "@/lib/services/fetcher.ts";

export const requestSubscribesById = async (user_id: number) => {
  return (await fetcher.get(`/subscribes/${user_id}`)).data;
};
