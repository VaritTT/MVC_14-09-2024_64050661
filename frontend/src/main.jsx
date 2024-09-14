import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CowManagement from "./views/CowManagement";
import "./assets/styles/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CowManagement />
  </StrictMode>
);
