import axios from "axios";

const host = import.meta.env.VITE_API_HOST;

export async function getAccessToken(data: {
  email?: string;
  password?: string;
  options?: {
    provider?: "kakao" | "";
    code: string;
  };
}) {
  const url =
    data.options?.provider === "kakao"
      ? `${host}/auths/kakao/authorize?code=${data.options.code}`
      : `${host}/auths/signIn`;

  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
  };

  let response;

  try {
    if (data.options?.provider === "kakao") {

      response = await axios.get(url, {
        headers,
      });

      return response.data.access_token;
    }

    response = await axios.post(url, data, {
      headers,
    });

    return response.data.access_token;
  } catch (e) {
    throw new Error("Axios Error");
  }
}
