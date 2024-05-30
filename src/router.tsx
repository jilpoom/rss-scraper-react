import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  DashboardPage,
  LoginLoadingPage,
  LoginPage,
  SignInPage,
} from "@/pages";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/login/auth" element={<LoginLoadingPage />}/>
        <Route path="/signIn" element={<SignInPage />} />
      </Routes>
    </BrowserRouter>
  );
}
