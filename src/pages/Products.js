import React, { useState } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import Header from "components/headers/light.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import { SectionHeading } from "components/misc/Headings";
import { PrimaryButton } from "components/misc/Buttons";
import TeamIllustrationSrc from "images/team-illustration-2.svg";
import cableTie from "../images/cableties.jpg";

import mounts from "../images/mounts.jpg";
import dinRail from "../images/dinrails.png";
import tea from "../images/tea.jpg";
import teaCups from "../images/cups.jpg";
import laserCutting from "../images/laserCutting.webp";
const HeadingRow = tw.div`flex`;

const Heading = tw(SectionHeading)`text-gray-900`;

const Posts = tw.div`mt-6 sm:-mr-8 flex flex-wrap`;

const PostContainer = styled.div`
  ${tw`mt-10 w-full sm:w-1/2 lg:w-1/3 sm:pr-8`}
  ${(props) =>
    props.featured &&
    css`
      ${tw`w-full!`}
      .post {
        ${tw`sm:flex-row! h-full sm:pr-4`}
      }
      .imageContainer {
        ${tw`sm:h-96 sm:min-h-full sm:w-1/2 lg:w-2/3 sm:rounded-t-none sm:rounded-l-lg pt-2`}
      }
      .info {
        ${tw`sm:-mr-4 sm:pl-8 sm:flex-1 sm:rounded-none sm:rounded-r-lg sm:border-t-2 sm:border-l-0`}
      }
      .description {
        ${tw`text-sm mt-3 leading-loose text-gray-600 font-medium`}
      }
    `}
`;

const Post = tw.div`cursor-pointer flex flex-col bg-gray-100 rounded-lg`;

const ImageContainer = styled.div`
  ${tw`relative h-64 w-full overflow-hidden rounded-t-lg`}
  &::before {
    content: "";
    ${tw`absolute inset-0 bg-black`}
    opacity: 0.3; /* Adjust the opacity as needed */
  }
`;
const Image = styled.div`
  ${(props) =>
    css`
      background-image: url(${props.imageSrc});
    `}
  ${tw`absolute inset-0 bg-cover bg-center pt-12`}
`;

const Info = tw.div`p-8 border-2 border-t-0 rounded-lg rounded-t-none`;
const Category = tw.div`uppercase text-primary-500 text-xs font-bold tracking-widest leading-loose after:content after:block after:border-b-2 after:border-primary-500 after:w-8`;
const CreationDate = tw.div`mt-4 uppercase text-gray-600 italic font-semibold text-xs`;
const Title = tw.div`mt-1 font-black text-2xl text-gray-900 group-hover:text-primary-500 transition duration-300`;
const Description = tw.div``;

const ButtonContainer = styled.div`
  ${tw`relative w-full h-32`}
`;
const ImageWithButton = styled.img`
  ${tw`w-full h-full object-cover`}
`;
const PositionedButton = styled(PrimaryButton)`
  ${tw`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
`;

const LoadMoreButtonContainer = tw.div`flex justify-center`;
const LoadMoreButton = tw(PrimaryButton)`mt-16 mx-auto`;

const AskCategoryPopup = ({ onClose, onSelectCategory }) => {
  const [category, setCategory] = useState("");

  const handleCategorySelection = (category) => {
    setCategory(category);
  };

  const handleConfirm = () => {
    onSelectCategory(category);
    onClose();
  };

  return (
    <div tw="fixed top-0 left-0 w-full h-full z-50 bg-gray-900 bg-opacity-50 flex items-center justify-center">
      <div tw="bg-white p-8 rounded-lg shadow-lg">
        <p tw="text-lg mb-4">What category are you interested in?</p>
        <div tw="flex justify-between space-x-4">
          <PrimaryButton onClick={() => handleCategorySelection("Industrial")}>
            Industrial Products
          </PrimaryButton>
          <PrimaryButton onClick={() => handleCategorySelection("Consumer")}>
            Consumer Products
          </PrimaryButton>
        </div>
        <div tw="mt-4 flex justify-end">
          <PrimaryButton onClick={onClose}>Cancel</PrimaryButton>
          <PrimaryButton onClick={handleConfirm} tw="ml-2">
            Confirm
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default () => {
  const [visible, setVisible] = useState(7);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showCategoryPopup, setShowCategoryPopup] = useState(false);

  const onSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  const onShowCategoryPopup = () => {
    setShowCategoryPopup(true);
  };

  const onCloseCategoryPopup = () => {
    setShowCategoryPopup(false);
  };

  const onLoadMoreClick = () => {
    setVisible((v) => v + 6);
  };

  const filteredPosts = selectedCategory
    ? getPlaceholderPosts().filter((post) => post.category === selectedCategory)
    : [];

  return (
    <AnimationRevealPage>
      <Header />
      <Container>
        <ContentWithPaddingXl>
          <HeadingRow>
            <Heading>Our Products</Heading>
          </HeadingRow>

          <ButtonContainer>
            <ImageWithButton
              src={TeamIllustrationSrc}
              alt="Team Illustration"
            />
            <PositionedButton onClick={onShowCategoryPopup}>
              Select Category
            </PositionedButton>
          </ButtonContainer>

          {showCategoryPopup && (
            <AskCategoryPopup
              onClose={onCloseCategoryPopup}
              onSelectCategory={onSelectCategory}
            />
          )}
          <Posts>
            {filteredPosts.slice(0, visible).map((post, index) => (
              <PostContainer key={index} featured={post.featured}>
                <Post className="group">
                  <a
                    href={`/products/${encodeURIComponent(
                      post.category
                    )}/${encodeURIComponent(post.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ImageContainer>
                      <Image imageSrc={post.imageSrc} />
                    </ImageContainer>
                    <Info>
                      <Category>{post.category}</Category>
                      <CreationDate>{post.date}</CreationDate>
                      <Title>{post.title}</Title>
                      {post.description && (
                        <Description>
                          {post.description && (
                            <Description>{post.description}</Description>
                          )}
                        </Description>
                      )}
                    </Info>
                  </a>
                </Post>
              </PostContainer>
            ))}
          </Posts>
          {visible < filteredPosts.length && (
            <LoadMoreButtonContainer>
              <LoadMoreButton onClick={onLoadMoreClick}>
                Load More
              </LoadMoreButton>
            </LoadMoreButtonContainer>
          )}
        </ContentWithPaddingXl>
      </Container>
      <Footer />
    </AnimationRevealPage>
  );
};

const getPlaceholderPosts = () => [
  {
    imageSrc: cableTie,
    category: "Industrial",
    // date: "April 21, 2020",
    title: "Nylon Cable Ties",
    description: "High-quality cable ties for industrial applications.",
    url: "https://example.com",
    featured: false,
  },
  {
    imageSrc: mounts,
    category: "Industrial",
    // date: "April 22, 2020",
    title: "Cable Tie Mounts",
    description: "Durable mounts for industrial equipment.",
    url: "https://example.com",
    featured: false,
  },
  {
    imageSrc: dinRail,
    category: "Industrial",
    title: "Din Rail(MCB Channel)",
    description: "Durable Din Rails for various industrial equipment.",
    url: "https://example.com",
    featured: false,
  },
  {
    imageSrc: laserCutting,
    alt: "laserCutting",
    category: "Industrial",
    title: "Laser Cutting Machine",
    description:
      "150W CO2 Laser Cutting Machine with high precision and efficiency.",
    url: "https://example.com",
    featured: false,
  },
  {
    imageSrc: tea,
    category: "Consumer",
    // date: "April 23, 2020",
    title: "Tea",
    description: "Premium quality tea leaves for a refreshing experience.",
    url: "https://example.com",
    featured: false,
  },
  {
    imageSrc: teaCups,
    category: "Consumer",
    // date: "April 24, 2020",
    title: "Tea Cups",
    description: "Elegant tea cups for enjoying your favorite brew.",
    url: "https://example.com",
    featured: false,
  },
];
