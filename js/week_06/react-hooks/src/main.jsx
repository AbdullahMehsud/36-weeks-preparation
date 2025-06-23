import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RecoilRoot } from "recoil";
import { AppProvider } from "./components/userContext.jsx";

createRoot(document.getElementById("root")).render(
  // <AppProvider>
  <RecoilRoot>
    <App />
  </RecoilRoot>
  // </AppProvider>
);
