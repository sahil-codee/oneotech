import React from "react";
import { Link } from "react-router-dom";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "components/headers/light.js";
import Pricing from "components/pricing/TwoPlansWithDurationSwitcher.js";
import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import FAQ from "components/faqs/SingleCol.js";

export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <Pricing />
      <Testimonial heading="Our Paying Customers" />
      <FAQ />
      <div style={{ textAlign: "center", margin: "20px" }}>
        <Link to="/contactus">Contact Us</Link>
      </div>
      <Footer />
    </AnimationRevealPage>
  );
};
