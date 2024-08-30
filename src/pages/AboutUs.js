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
export const MissionSubheading = tw.h5`font-bold text-primary-500 mb-6`;

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
        subheading={<Subheading>About Oneotech Enterprises</Subheading>}
        heading="Welcome to Oneotech Enterprises"
        description={
          <Description>
            Oneotech Enterprises is a trusted exporter of high-quality
            industrial products, including nylon cable ties, cable tie mounts,
            and DIN rails. We are committed to delivering reliable and durable
            solutions that meet the stringent demands of various industries
            worldwide.
          </Description>
        }
        buttonRounded={false}
        primaryButtonText="Explore Products"
        primaryButtonUrl="/products"
        imageSrc={aboutImage}
      />
      <FullWidthDescription>
        <MissionSubheading>Our Mission</MissionSubheading>
        <DescriptionWithSpacing>
          At Oneotech Enterprises, our mission is to provide top-tier industrial
          products like nylon cable ties, cable tie mounts, and DIN rails that
          exceed industry standards. Serving key global markets including the
          USA, Europe, and the UAE, we strive to ensure the highest levels of
          customer satisfaction through quality, reliability, and service
          excellence.
        </DescriptionWithSpacing>
        <Description>
          Whether you require secure cable management solutions or robust
          industrial hardware, Oneotech Enterprises is your go-to source. Our
          expertise and dedication to quality ensure that we meet the specific
          needs of businesses and industries across the globe. Experience the
          reliability and performance of our products designed to support your
          operations efficiently.
        </Description>
      </FullWidthDescription>
      <Footer />
    </AnimationRevealPage>
  );
};
