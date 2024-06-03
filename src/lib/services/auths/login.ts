import { fetcher } from "@/lib/services/fetcher.ts";

export const requestAccessToken = async (data: {
  email?: string;
  password?: string;
  options?: {
    provider: "kakao";
    code: string;
  };
}) => {
  try {
    if (data?.options?.provider === "kakao") {
      return (
        await fetcher.get(`/auths/kakao/authorize?code=${data.options.code}`)
      ).data?.access_token;
    }

    return (await fetcher.post("/auths/signIn", data)).data?.access_token;
  } catch (e) {
    if (e instanceof Error) {
      throw new Error(e.message);
    }
  }
};

export const requestUserProfile = async () => {
  try {
    return (await fetcher.get("/auths/profile")).data;
  } catch (e) {
    if (e instanceof Error) {
      throw new Error(e.message);
    }
  }
};