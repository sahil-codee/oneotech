import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as SvgDecoratorBlob3 } from "images/svg-decorator-blob-3.svg";

const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-xl mx-auto py-20 md:py-24`}
`;

const Subheading = tw(SubheadingBase)`mb-4 text-center`;
const Heading = tw(SectionHeading)`w-full text-center`;

const Description = styled(SectionDescription)`
  ${tw`w-full text-center text-center pt-4`}
  max-width: 1200px; /* Adjust max-width as needed */
  margin: 0 auto; /* Center align the text */
`;

const VerticalSpacer = tw.div`mt-10 w-full`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48`}
`;

const PrimaryButton = styled(PrimaryButtonBase)((props) => [
  tw`mt-0 text-sm inline-block ml-0 w-64 flex justify-center`,
  props.buttonRounded && tw`rounded-full`,
]);

export default ({
  primaryButtonText = "Know More",
  primaryButtonUrl = "/about",
  buttonRounded = true,
  heading = "Amazing Features",
  subheading = "Features",
  description = "Oneotech Enterprises, a premier exporter in India, specializes in high-quality industrial products. Based in Delhi, we offer top-grade nylon cable ties, cable tie mounts, and DIN rails. Recognized as a trusted supplier of premium industrial Products, Oneotech Enterprises caters to diverse international markets with a commitment to superior quality and excellence.",
}) => {
  return (
    <Container>
      <ThreeColumnContainer>
        {subheading && <Subheading>{subheading}</Subheading>}
        <Heading>{heading}</Heading>
        {description && <Description>{description}</Description>}
        <VerticalSpacer />
        <PrimaryButton
          buttonRounded={buttonRounded}
          as="a"
          href={primaryButtonUrl}
        >
          {primaryButtonText}
        </PrimaryButton>
      </ThreeColumnContainer>
      <DecoratorBlob />
    </Container>
  );
};
