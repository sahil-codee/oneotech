import React from "react";
import AnimationRevealPage from "../helpers/AnimationRevealPage";
import Header from "../components/headers/light.js";
import SaaSProductLandingPage from "../demos/SaaSProductLandingPage";

export const Home = () => {
  return (
    <AnimationRevealPage>
      <Header />
      <SaaSProductLandingPage />
    </AnimationRevealPage>
  );
};
