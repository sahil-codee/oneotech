import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import MainFeature1 from "components/features/TwoColWithButton.js";
// import MainFeature2 from "components/features/TwoColSingleFeatureWithStats.js";
// import MainFeature3 from "components/features/TwoColSingleFeatureWithStats2.js";
import Features from "components/features/ThreeColSimple.js";
// import Features from "components/features/ThreeColWithSideImage.js";
// import TeamCardGrid from "components/cards/ProfileThreeColGrid.js";

import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomerLoveIconImage from "images/simple-icon.svg";

const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {
  return (
    <AnimationRevealPage>
      <Header />

      <MainFeature1
        subheading={<Subheading>About OneOTech</Subheading>}
        heading="Welcome to OneOTech Enterprises"
        description="At OneOTech Enterprises, we specialize in providing top-quality industrial and consumer products to meet the diverse needs of our global clientele. With years of experience in the trading industry, we have built a reputation for reliability, excellence, and customer satisfaction."
        buttonRounded={false}
        primaryButtonText="See Products"
        primaryButtonUrl="/products"
        imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
      />
      <MainFeature1
        subheading={<Subheading>Our Mission</Subheading>}
        heading="Bridging Quality and Customer Needs."
        buttonRounded={false}
        primaryButtonText="Contact Us"
        description="Our mission is to bridge the gap between quality products and our customers' needs, ensuring a seamless and efficient trading experience. We are committed to delivering exceptional value through our comprehensive range of products and unmatched service."
        imageSrc="https://images.unsplash.com/3/doctype-hi-res.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=768&q=80"
        textOnLeft={false}
      />
      <Features
        subheading={<Subheading>Our Vision</Subheading>}
        heading="Aiming for Global Leadership."
        description="We aim to be a global leader in trading, recognized for our commitment to quality and innovation."
        cards={[
          {
            imageSrc: SupportIconImage,
            title: "Quality Products",
            description:
              "We offer a wide range of industrial and consumer products sourced from reputable manufacturers.",
          },
          {
            imageSrc: ShieldIconImage,
            title: "Customer Focused",
            description:
              "Our team is dedicated to providing excellent customer service and support",
          },
          {
            imageSrc: CustomerLoveIconImage,
            title: "Global Reach",
            description:
              " We serve clients worldwide, ensuring timely delivery and compliance with international standards.",
          },
          {
            imageSrc: CustomerLoveIconImage,
            title: "Expertise",
            description:
              "Our experienced team understands the nuances of the trading industry and works tirelessly to meet your needs.",
          },
        ]}
        linkText=""
      />
      {/* <TeamCardGrid subheading={<Subheading>Our Team</Subheading>} /> */}
      <Footer />
    </AnimationRevealPage>
  );
};
