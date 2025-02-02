import React, { useState, useEffect } from "react";
import tw from "twin.macro";
import { motion } from "framer-motion"; // If you're using framer-motion
import { FaArrowUp } from "react-icons/fa";

const BackToTopWrapper = tw.div`fixed bottom-0 right-0 p-8 transform translate-y-[-4rem] z-50`;

const BackToTopButton = motion(
  tw.button`bg-primary-500 hover:bg-primary-700 text-white font-bold py-3 px-4 rounded-full shadow-lg text-lg focus:outline-none transition-transform duration-300`
);

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <BackToTopWrapper>
      {isVisible && (
        <BackToTopButton
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaArrowUp size={24} /> {/* Render the up arrow icon here */}
        </BackToTopButton>
      )}
    </BackToTopWrapper>
  );
};

export default BackToTop;
