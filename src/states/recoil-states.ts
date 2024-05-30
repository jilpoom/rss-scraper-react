import { atom } from "recoil";

export const userState = atom({
  key: "user",
  default: {
    email: "",
    name: "",
    exp: 0,
    iat: 0,
    provider: "",
    sub: 0,
    create_at: "",
  },
});
