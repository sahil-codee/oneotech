import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import MainFeature1 from "components/features/TwoColWithButton.js";
import aboutImage from "../images/hero-screenshot-2.webp";

const Subheading = tw.span`uppercase tracking-wider text-sm`;
export const MissionSubheading = tw.h5`font-bold text-primary-500`;

const FullWidthDescription = styled.div`
  ${tw`w-full text-center py-8`}
`;

const Description = tw.p`lg:text-lg font-medium leading-relaxed text-secondary-100`;

const DescriptionWithSpacing = styled(Description)`
  ${tw`mb-8`}// Add bottom margin for spacing
`;

export default () => {
  return (
    <AnimationRevealPage>
      <Header />

      <MainFeature1
        subheading={<Subheading>About OneOTech</Subheading>}
        heading="Welcome to OneOTech Enterprises"
        description={
          <Description>
            As a leading exporter of high-quality products, our company takes
            great pride in offering a diverse range of goods to customers around
            the world. From the rich, aromatic teas of Assam and Darjeeling to
            the vibrant, flavorful spices of India, our expertly curated
            selection caters to a wide array of tastes and culinary needs.
            Beyond just tea and spices, we also excel in the export of essential
            industrial supplies like cable ties, DIN rails, and cable tie mounts
            - durable, versatile products relied upon by businesses and
            industries globally.
          </Description>
        }
        buttonRounded={false}
        primaryButtonText="See Products"
        primaryButtonUrl="/products"
        imageSrc={aboutImage}
      />
      <FullWidthDescription>
        <MissionSubheading>Our Mission</MissionSubheading>
        <DescriptionWithSpacing>
          Our commitment to excellence extends far beyond our product range. As
          a trusted spice exporter in India, we are proud to serve clients in
          key markets such as the UAE, Dubai, USA, UK, London, Australia,
          Canada, New Zealand, and Germany. Our reputation as a premier spice
          exporter in India, as well as a leading provider of nylon cable ties,
          cable tie mounts, and DIN rails, is a testament to the care and
          precision we bring to every transaction. With a keen focus on
          delivering the highest standards of quality and customer service, we
          have established ourselves as a go-to source for businesses and
          consumers seeking the finest Indian exports.
        </DescriptionWithSpacing>
        <Description>
          Whether you're in need of fragrant Darjeeling teas, aromatic whole and
          powdered spices, or essential industrial hardware, our team of experts
          is dedicated to exceeding your expectations. We stand ready to connect
          you with the products you require, tailoring our offerings to meet the
          unique needs of markets around the world. Experience the difference
          that our unparalleled expertise and commitment to excellence can make
          in your business or personal endeavors.
        </Description>
      </FullWidthDescription>
      {/* <Features
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
      /> */}
      {/* <TeamCardGrid subheading={<Subheading>Our Team</Subheading>} /> */}
      <Footer />
    </AnimationRevealPage>
  );
};
