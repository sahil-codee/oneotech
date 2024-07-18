import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components";
import tw from "twin.macro"; // Importing twin.macro
import cableTie from "../images/cableTies.svg";
import mounts from "../images/mounts.svg";
import dinRail from "../images/dinRail.svg";
import tea from "../images/tea.svg";
import turmuric from "../images/turmuric.svg";
import pepper from "../images/pepper.svg";
import cumin from "../images/cumin.svg";
import coffee from "../images/coffee.svg";
import cinamon from "../images/cinamon.svg";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { Subheading } from "components/misc/Headings";

const featuredProducts = [
  { imageSrc: cableTie, title: "Nylon Cable Ties" },
  { imageSrc: mounts, title: "Cable Tie Mounts" },
  { imageSrc: dinRail, title: "Din Rail (MCB Channel)" },
  { imageSrc: tea, title: "Premium Tea" },
  { imageSrc: cinamon, title: "Cinnamon" },
  { imageSrc: pepper, title: "Pepper" },
  { imageSrc: coffee, title: "Coffee" },
  { imageSrc: cumin, title: "Cumin" },
  { imageSrc: turmuric, title: "Turmeric" },
];

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }, // Ensures 1 item on mobile
};

const Card = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

const CardTitle = styled.h3`
  text-align: center;
  font-size: 1rem;
  margin: 10px 0;
  font-weight: bold;
  @media (max-width: 464px) {
    font-size: 1.2rem; // Smaller size for mobile
    margin: 5px 0; // Adjust margin as needed
  }
`;

const CardContainer = styled.div`
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 420px;
  margin: 0 5px;
  padding-top: 0px;
  cursor: pointer;
`;

const Description = styled.p`
  ${tw`mt-4 text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100 max-w-4xl mx-auto`}
  width: 100%; // Ensures full width
  text-align: center; // Center aligns the text
`;

const SectionContainer = styled.div`
  ${tw`text-center`}
  margin: 40px 0; // Adjust margins for spacing
  max-width: 100%; // Ensures full width
`;

const PrimaryButton = styled(PrimaryButtonBase)((props) => [
  tw`mt-0 text-sm inline-block w-64 flex justify-center mx-auto`, // Center-align using mx-auto
  props.buttonRounded && tw`rounded-full`,
]);

const FeaturedProducts = ({
  primaryButtonText = "View All Our Products",
  primaryButtonUrl = "/products",
  buttonRounded = true,
  subheading = "",
}) => (
  <SectionContainer>
    {subheading && <Subheading>{subheading}</Subheading>}
    <Description>
      Explore Oneotech's popular products including nylon cable ties, cable tie
      mounts, din rails (MCB channels), premium tea, spices like cinnamon,
      pepper, turmeric, and essential commodities such as coffee and cumin.
      Discover top-quality offerings for your needs.
    </Description>
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlay
      autoPlaySpeed={2000}
      centerMode={false}
      containerClass="container-with-dots"
      draggable
      focusOnSelect={false}
      infinite
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      responsive={responsive}
      showDots={false}
      slidesToSlide={1}
      swipeable
      itemClass="carousel-item-margin"
    >
      {featuredProducts.map((product, index) => (
        <CardContainer key={index}>
          <Card>
            <CardImage src={product.imageSrc} alt={product.title} />
            <CardTitle>{product.title}</CardTitle>
          </Card>
        </CardContainer>
      ))}
    </Carousel>
    <PrimaryButton buttonRounded={buttonRounded} as="a" href={primaryButtonUrl}>
      {primaryButtonText}
    </PrimaryButton>
  </SectionContainer>
);

export default FeaturedProducts;
