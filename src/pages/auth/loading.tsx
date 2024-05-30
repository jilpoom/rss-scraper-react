import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {
  requestAccessToken,
  requestUserProfile,
} from "@/lib/services/auths/login.ts";
import { useRecoilState } from "recoil";
import { userState } from "@/states/recoil-states.ts";

function Loading() {
  const location = useLocation();
  const navigator = useNavigate();
  const [, setUser] = useRecoilState(userState);

  useEffect(() => {
    const code = location.search.substring(1).split("=")[1];

    const getAccessToken = async (code: string) => {
      const access_token = await requestAccessToken({
        options: {
          provider: "kakao",
          code: code,
        },
      });

      localStorage.setItem("access_token", access_token);

      const user = await requestUserProfile();

      setUser(user);
      console.log(user);
    };

    getAccessToken(code)
      .then(() => {
        navigator("/");
      })
      .catch((e) => {
        console.error(e.message);
      });
  }, []);

  return (
    <div className="h-screen flex items-center justify-center">
      <p>loading...</p>
    </div>
  );
}

export default Loading;
