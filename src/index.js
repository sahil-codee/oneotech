import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import Modal from "react-modal";
import { SpeedInsights } from "@vercel/speed-insights/react";
import ThemeProvider from "./themeContext/ThemeContext";
import ThemeToggle from "./themeContext/ThemeToggle";
import "./index.css";

Modal.setAppElement("#root");

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  // <ThemeProvider>
  <>
    <App />
    <SpeedInsights />
  </>
  // </ThemeProvider>
);
