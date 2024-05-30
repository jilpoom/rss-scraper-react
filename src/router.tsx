import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DashboardPage, LoginPage, SignInPage } from "@/pages";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signIn" element={<SignInPage />} />
      </Routes>
    </BrowserRouter>
  );
}
