import axios, { AxiosInstance } from "axios";

const API_HOST = import.meta.env.VITE_API_HOST;
export const customAxios: AxiosInstance = axios.create({
  baseURL: `${API_HOST}`, // 기본 서버 주소 입력
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization: "Bearer " + (localStorage.getItem("access_token") ?? ""),
  },
});
