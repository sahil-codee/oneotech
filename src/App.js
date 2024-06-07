import React, { useState } from "react";
import GlobalStyles from "styles/GlobalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SaaSProductLandingPage from "demos/SaaSProductLandingPage.js";
import { Home } from "./pages/Home.js";
import About from "./pages/AboutUs.js";
import Products from "./pages/Products.js";
// import Pricing from "./pages/Pricing.js";
import ContactUs from "./pages/ContactUs";
import { Services } from "./pages/Services.js";
import Chatbot from "react-chatbot-kit";
import config from "./chatBot/chatbotConfig.js";
import ActionProvider from "./chatBot/ActionProvider.js";
import MessageParser from "./chatBot/MessageParser.js";
import "react-chatbot-kit/build/main.css";
import "./chatBot/ChatBot.css"; // Import the CSS file
import chatIcon from "./images/chatIcon.png";
import closeIcon from "./images/closeIcon.png";
export default function App() {
  // Determine the base URL dynamically based on environment
  const [showChatbot, setShowChatbot] = useState(false);

  const handleToggle = () => {
    setShowChatbot(!showChatbot);
  };
  const baseUrl =
    process.env.NODE_ENV === "production" ? process.env.PUBLIC_URL : "/";

  console.log("PUBLIC_URL:", process.env.PUBLIC_URL);

  return (
    <>
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
      <div className="App">
        {showChatbot && (
          <div className="chatbot-container">
            <div className="chatbot-header">OnotechBot</div>
            <div className="chatbot-main">
              <Chatbot
                config={config}
                actionProvider={ActionProvider}
                messageParser={MessageParser}
              />
            </div>
          </div>
        )}
        <button className="chatbot-toggle" onClick={handleToggle}>
          {showChatbot ? (
            <img src={closeIcon} alt="Close Icon" />
          ) : (
            <img src={chatIcon} alt="Chat Icon" />
          )}
        </button>
      </div>
    </>
  );
}
