import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  DashboardPage,
  HomePage,
  LoginLoadingPage,
  LoginPage,
  SignInPage,
} from "@/pages";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/login/auth" element={<LoginLoadingPage />} />
        <Route path="/signIn" element={<SignInPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
}
