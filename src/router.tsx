import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  DashboardPage,
  HomePage,
  LoginLoadingPage,
  LoginPage,
  SignInPage,
} from "@/pages";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { userState } from "@/states/recoil-states.ts";
import Navbar from "@/layouts/header/navbar.tsx";
import Sidebar from "@/layouts/sidebar/sidebar.tsx";

export default function Router() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user] = useRecoilState(userState);

  const handleLoggedIn = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("access_token");
    // TODO: AccessToken 만료 로직 백엔드 구현
  };

  useEffect(() => {
    if (user.email || localStorage.getItem("access_token")) {
      setIsLoggedIn(true);
    }
  }, [user]);

  return (
    <BrowserRouter>
      <Navbar isLoggedIn={isLoggedIn} handleLoggedIn={handleLoggedIn} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/login/auth" element={<LoginLoadingPage />} />
        <Route path="/signIn" element={<SignInPage />} />
        <Route element={<Sidebar />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/dashboard/subscribe" element={<DashboardPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
