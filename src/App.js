import React from "react";
import GlobalStyles from "styles/GlobalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SaaSProductLandingPage from "demos/SaaSProductLandingPage.js";
import { Home } from "./pages/Home.js";
import About from "./pages/AboutUs.js";
import Products from "./pages/Products.js";
// import Pricing from "./pages/Pricing.js";
import ContactUs from "./pages/ContactUs";
import { Services } from "./pages/Services.js";


// import ComingSoon from "./ComingSoon.js";

export default function App() {
  // Determine the base URL dynamically based on environment
  const baseUrl =
    process.env.NODE_ENV === "production" ? process.env.PUBLIC_URL : "/";

  console.log("PUBLIC_URL:", process.env.PUBLIC_URL);

  return (
    <>
    
      {/* <ComingSoon /> */}
      <GlobalStyles />
      <Router basename={baseUrl}>
        <Routes>
          <Route path="/" element={<SaaSProductLandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          {/* <Route path="/pricing" element={<Pricing />} /> */}
          <Route path="/services" element={<Services />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </Router>
    </>
  );
}
