import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; // eslint-disable-line
import { css } from "styled-components/macro"; // eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import MainFeature1 from "components/features/TwoColWithButton.js";
import Services1 from "../images/services1.jpg";
import Services2 from "../images/services2.jpg";
import Services3 from "../images/services3.webp";
import Services4 from "../images/services4.jpg";
import Services5 from "../images/services5.jpg";

const Subheading = tw.span`uppercase tracking-wider text-sm`;

export const Services = () => {
  return (
    <AnimationRevealPage>
      <Header />

      <MainFeature1
        subheading={<Subheading>Consultation and Support</Subheading>}
        heading="Expert Consultation and Support"
        description="Our expert team is available to provide consultation and support, helping you choose the right products and solutions for your specific requirements."
        buttonRounded={false}
        primaryButtonText="Learn More"

        imageSrc={Services1}
      />
      <MainFeature1
        subheading={<Subheading>Logistics and Shipping</Subheading>}
        heading="Efficient Logistics and Shipping"
        buttonRounded={false}
        primaryButtonText="Contact Us"
        description="We manage all aspects of logistics and shipping, ensuring your orders are delivered on time, anywhere in the world. Our efficient supply chain management guarantees that you receive your products in perfect condition."
        imageSrc={Services2}
        textOnLeft={false}
      />
      <MainFeature1
        subheading={<Subheading>Custom Solutions</Subheading>}
        heading="Tailored Custom Solutions"
        description="Need something specific? We offer custom solutions tailored to your unique needs. Whether it’s a special product specification or a unique packaging requirement, we are here to accommodate your requests."
        buttonRounded={false}
        primaryButtonText="Learn More"
        imageSrc={Services4}
      />
      <MainFeature1
        subheading={<Subheading>Quality Assurance</Subheading>}
        heading="Top Quality Assurance"
        buttonRounded={false}
        primaryButtonText="Learn More"
        description="Quality is our top priority. All our products under go rigorous quality checks and are sourced from reliable manufacturers to ensure they meet the highest industry standards."
        primaryButtonUrl="/products"
        imageSrc={Services5}
        textOnLeft={false}
      />
      <MainFeature1
        subheading={<Subheading>After-Sales Service</Subheading>}
        heading="Dedicated After-Sales Service"
        description="We believe in building long-term relationships with our clients. Our after-sales service team is always ready to assist you with any post-purchase inquiries or support you might need."
        buttonRounded={false}
        primaryButtonText="Contact Us"
        imageSrc={Services3}
      />
      <Footer />
    </AnimationRevealPage>
  );
};

export default Services;
