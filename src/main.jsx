import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "./i18n"; // Import i18n configuration first
import App from "./App.jsx";

// Force English as default language in localStorage
if (
  !localStorage.getItem("i18nextLng") ||
  localStorage.getItem("i18nextLng") !== "en"
) {
  localStorage.setItem("i18nextLng", "en");
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
