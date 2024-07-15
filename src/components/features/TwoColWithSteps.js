import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";

import defaultCardImage from "images/shield-icon.svg";

import { ReactComponent as SvgDecoratorBlob3 } from "images/svg-decorator-blob-3.svg";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import CustomSolutionsIcon from "images/shield-icon.svg";
import BulkOrdersIcon from "images/shield-icon.svg";
import ConsultancyIcon from "images/shield-icon.svg";
import ProductSelectionIcon from "images/shield-icon.svg";
import TimelyDeliveryIcon from "images/shield-icon.svg";
import AfterSalesIcon from "images/shield-icon.svg";

const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto py-20 md:py-24`}
`;
const Subheading = tw(SubheadingBase)`mb-4`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center`;

const VerticalSpacer = tw.div`mt-10 w-full`;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 max-w-sm`}
`;

const Card = styled.div`
  ${tw`flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left h-full mx-4 px-2 py-8`}
  .imageContainer {
    ${tw`border text-center rounded-full p-5 flex-shrink-0`}
    img {
      ${tw`w-12 h-12`}
    }
  }

  .textContainer {
    ${tw`sm:ml-4 mt-4 sm:mt-2`}
  }

  .title {
    ${tw`mt-4 tracking-wide font-bold text-2xl leading-none`}
  }

  .description {
    ${tw`mt-1 sm:mt-4 font-medium text-secondary-100 leading-loose`}
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;
const PrimaryButton = styled(PrimaryButtonBase)((props) => [
  tw`mt-2 text-sm inline-block ml-0 w-64 flex justify-center`, // No centering, align to the left
  props.buttonRounded && tw`rounded-full`,
]);

const services = [
  {
    imageSrc: CustomSolutionsIcon,
    title: "Custom Solutions",
    description: "Tailored solutions to meet your specific needs.",
  },
  {
    imageSrc: BulkOrdersIcon,
    title: "Bulk Orders",
    description: "Efficient handling of bulk orders.",
  },
  {
    imageSrc: ConsultancyIcon,
    title: "Consultancy",
    description: "Expert consultancy services for your business.",
  },
  {
    imageSrc: ProductSelectionIcon,
    title: "Product Selection",
    description: "Choose the right product with the help of our experts.",
  },
  {
    imageSrc: TimelyDeliveryIcon,
    title: "Timely Delivery",
    description: "Ensuring timely and efficient delivery.",
  },
  {
    imageSrc: AfterSalesIcon,
    title: "After-Sales Support",
    description: "Comprehensive after-sales support and service.",
  },
];

const Services = ({
  primaryButtonText = "Learn More",
  primaryButtonUrl = "/contactus",
  buttonRounded = true,
  cards = services,
  heading = "Our Services",
  subheading = "Services",
  description = "We provide a range of services to cater to your specific needs and ensure a seamless experience.",
}) => {
  return (
    <Container>
      <ThreeColumnContainer>
        {subheading && <Subheading>{subheading}</Subheading>}
        <Heading>{heading}</Heading>
        {description && <Description>{description}</Description>}
        <VerticalSpacer />
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className="imageContainer">
                <img src={card.imageSrc || defaultCardImage} alt="" />
              </span>
              <span className="textContainer">
                <span className="title">{card.title}</span>
                <p className="description">{card.description}</p>
              </span>
            </Card>
          </Column>
        ))}
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

export default Services;
