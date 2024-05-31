import axios, { AxiosInstance } from "axios";

const API_HOST = import.meta.env.VITE_API_HOST;

export const fetcher: AxiosInstance = axios.create({
  baseURL: `${API_HOST}`, // 기본 서버 주소 입력
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

export const setAuthorizationHeader = (access_token: string) => {
  fetcher.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ` + access_token;
    return config;
  });
};
