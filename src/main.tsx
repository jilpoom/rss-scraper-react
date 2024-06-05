import ReactDOM from "react-dom/client";
import "./index.css";
import { RecoilRoot } from "recoil";
import Router from "@/router.tsx";
import { StrictMode } from "react";

export const App = () => {
  return (
    <RecoilRoot>
      <Router />
    </RecoilRoot>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
