import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  requestAccessToken,
  requestUserProfile,
} from "@/lib/services/auths/login.ts";
import { useRecoilState } from "recoil";
import { userState } from "@/states/recoil-states.ts";
import {
  CancelTokenSource,
  setAuthorizationHeader,
} from "@/lib/services/fetcher.ts";

function Loading() {
  const location = useLocation();
  const navigator = useNavigate();
  const [, setUser] = useRecoilState(userState);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const code = location.search.substring(1).split("=")[1];

    const getAccessToken = async (code: string) => {
      const access_token = await requestAccessToken({
        options: {
          provider: "kakao",
          code: code,
        },
      });

      localStorage.setItem("access_token", access_token);
      setAuthorizationHeader(access_token);

      const user = await requestUserProfile();

      setUser(user);
    };

    getAccessToken(code)
      .then(() => {
        navigator("/");
        setIsLoading(false);
      })
      .catch((e) => {
        console.error(e.message);
      });

    return () => {
      CancelTokenSource.cancel();
    };
  }, []);

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p>loading...</p>
      </div>
    );
  }
}

export default Loading;
