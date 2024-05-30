import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getAccessToken } from "@/lib/services/auths/login.ts";

function Loading() {
  const location = useLocation();
  const navigator = useNavigate();

  useEffect(() => {
    const code = location.search.substring(1).split("=")[1];

    getAccessToken({
      options: {
        provider: "kakao",
        code,
      },
    })
      .then((access_token) => {
        localStorage.setItem("access_token", access_token);
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
