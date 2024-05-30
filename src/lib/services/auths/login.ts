import { customAxios } from "@/lib/services/customAxios.ts";

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
        await customAxios.get(
          `/auths/kakao/authorize?code=${data.options.code}`,
        )
      ).data?.access_token;
    }

    return (await customAxios.post("auths/signIn", data)).data?.access_token;
  } catch (e) {
    if (e instanceof Error) {
      throw new Error(e.message);
    }
  }
};

export const requestUserProfile = async () => {
  try {
    return (await customAxios.get("/auths/profile")).data;
  } catch (e) {
    if (e instanceof Error) {
      throw new Error(e.message);
    }
  }
};

// export async function getAccessToken(data: {
//   email?: string;
//   password?: string;
//   options?: {
//     provider?: "kakao" | "";
//     code: string;
//   };
// }) {
//   const url =
//     data.options?.provider === "kakao"
//       ? `${host}/auths/kakao/authorize?code=${data.options.code}`
//       : `${host}/auths/signIn`;
//
//   const headers = {
//     "Content-Type": "application/x-www-form-urlencoded",
//   };
//
//   let response;
//
//   try {
//     if (data.options?.provider === "kakao") {
//       response = await axios.get(url, {
//         headers,
//       });
//
//       return response.data.access_token;
//     }
//
//     response = await axios.post(url, data, {
//       headers,
//     });
//     return response.data.access_token;
//   } catch (e) {
//     throw new Error("Axios Error");
//   }
// }

// export async function getProfile({ access_token }: { access_token: string }) {
//   const url = `${host}/auths/profile`;
//
//   let response;
//
//   try {
//     response = await axios.get(url, {
//       headers: {
//         Authorization: "Bearer" + access_token,
//       },
//     });
//     return response.data;
//   } catch (e) {
//     throw new Error("Axios Error");
//   }
// }
