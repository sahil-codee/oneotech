import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import MainFeature1 from "components/features/TwoColWithButton.js";
import aboutImage from "../images/hero-screenshot-2.webp";
import founderImage from "../images/dad.jpeg"; // Add your founder image here

const Subheading = tw.span`uppercase tracking-wider text-sm`;
export const MissionSubheading = tw.h5`font-bold text-primary-500 mb-6`;

const FullWidthDescription = styled.div`
  ${tw`w-full text-center py-8`}
`;

// Changed Description to div to avoid <p> nesting issues
const Description = styled.div`
  ${tw`lg:text-lg font-medium leading-relaxed text-secondary-100`}
`;

const DescriptionWithSpacing = styled(Description)`
  ${tw`mb-8`}
`;

const FounderSection = styled.div`
  ${tw`flex flex-col md:flex-row items-center md:items-start bg-blue-700 text-white py-8 mb-6 -mx-8 -mb-8`}// Reduced padding and alignment fix
`;

const FounderImage = styled.div`
  ${(props) =>
    css`
      background-image: url(${props.imageSrc});
    `}
  ${tw`w-40 h-40 rounded-full bg-cover bg-center md:w-48 md:h-48 ml-4 mt-8`} // Adjusted image size
  ${tw`md:mr-4 mb-8 md:mb-0`} // Increased margin on the right side to add space between image and content
`;

const FounderContent = styled.div`
  ${tw`w-full md:w-4/5 p-4`} // Increased width to 2/3 to give more space to the text
  ${tw`text-left`} // Ensure text stays aligned to the left
`;

const FounderHeading = tw.h2`text-3xl font-bold mb-4`;

const FounderSubheading = tw.h3`text-xl font-semibold mb-4`; // Added subheading for the name

const FounderDescription = styled.div`
  ${tw`text-lg font-medium leading-relaxed`}// Changed from <p> to <div>
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

      <FounderSection>
        <FounderImage imageSrc={founderImage} />
        <FounderContent>
          <FounderHeading>Meet the Founder</FounderHeading>
          <FounderSubheading>Mr. Rakesh Bakshi</FounderSubheading>
          {/* Updated content */}
          <FounderDescription>
          Our Founder, Mr. Rakesh Bakshi, has a rich experience of over three decades in the industrial product segment. His extensive expertise and visionary leadership have been pivotal in establishing Oneotech Enterprises as a trusted name in the industry. Under his guidance, the company has grown to become a leading supplier and exporter of high-quality nylon cable ties, cable tie mounts, and DIN rails. Rakesh is committed to innovation and excellence, ensuring that the company continues to meet and exceed the expectations of its global clientele.
          </FounderDescription>
        </FounderContent>
      </FounderSection>

      <Footer />
    </AnimationRevealPage>
  );
};
