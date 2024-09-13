import React, { useState, useEffect } from "react";
import GlobalStyles from "./styles/GlobalStyles.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SaaSProductLandingPage from "demos/SaaSProductLandingPage.js";
import { Home } from "./pages/Home.js";
import About from "./pages/AboutUs.js";
import Products from "./pages/Products.js";
import ContactUs from "./pages/ContactUs";
import Services from "./pages/Services.js";
import ProductDetailsPage from "pages/ProductDetailPage.js";
import WhatsAppChat from "components/whatsApp/WhatsApp.js";

export default function App() {
  const [showWhatsApp, setShowWhatsApp] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWhatsApp(true);
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer);
  }, []);

  const phoneNumber = "9810294854"; // Replace with your WhatsApp phone number

  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<SaaSProductLandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:seoUrl" element={<ProductDetailsPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </Router>
      {showWhatsApp && <WhatsAppChat phoneNumber={phoneNumber} />}
    </>
  );
}
