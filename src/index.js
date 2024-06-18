import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import Modal from "react-modal";
import { SpeedInsights } from "@vercel/speed-insights/react";
import LazyLoad from "react-lazyload";
Modal.setAppElement("#root");

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <>
    <LazyLoad height={200}>
      <App />
    </LazyLoad>
    <SpeedInsights />
  </>
);
