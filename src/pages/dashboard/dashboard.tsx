import Navbar from "@/layouts/header/navbar.tsx";
import { useRecoilState } from "recoil";
import { userState } from "@/states/recoil-states.ts";
import { useCallback, useEffect, useState } from "react";

export default function Dashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user] = useRecoilState(userState);

  const handleLoggedIn = useCallback(() => {
    setIsLoggedIn(false);
    localStorage.removeItem("access_token");
    // TODO: AccessToken 만료 로직 백엔드 구현
  }, []);

  useEffect(() => {
    if (user.email) {
      setIsLoggedIn(true);
    }
  }, [user]);

  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} handleLoggedIn={handleLoggedIn} />
    </div>
  );
}
