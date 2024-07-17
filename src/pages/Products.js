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

import cableTie from "../images/cableties.jpg";
import mounts from "../images/mounts.jpg";
import dinRail from "../images/dinrails.png";
import tea from "../images/teaBag.jpeg";
import laserMarking from "../images/laser.webp";
import cinnamonImage from "../images/cinamon.svg";
import cuminImage from "../images/cumin.svg";
import turmericImage from "../images/turmuric.svg";
import blackPepperImage from "../images/pepper.svg";
import cardamomImage from "../images/cardamom.svg";

const HeadingRow = tw.div`flex justify-center`;
const Heading = tw(SectionHeading)`text-gray-900`;
const FilterContainer = tw.div`flex justify-center mt-4`;
const FilterButton = styled.button`
  ${tw`p-2 border rounded-md mx-2`}
  ${({ isSelected }) => isSelected && tw`bg-primary-500 text-white`}
`;

const Posts = tw.div`mt-6 flex flex-wrap justify-center`;

const PostContainer = styled.div`
  ${tw`mt-10 w-full sm:w-1/2 lg:w-1/3 p-4`}
`;

const Post = styled.div`
  ${tw`cursor-pointer flex flex-col bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 transform hover:scale-105`}
`;

const ImageContainer = styled.div`
  ${tw`relative h-64 w-full overflow-hidden`}
`;

const Image = styled.div`
  ${(props) =>
    css`
      background-image: url(${props.imageSrc});
    `}
  ${tw`absolute inset-0 bg-cover bg-center`}
`;

const Info = tw.div`p-6 border-t border-gray-200`;
const Category = tw.div`uppercase text-primary-500 text-xs font-bold tracking-widest leading-loose mb-2`;
const Title = tw.div`text-lg font-semibold text-gray-900`;
const Description = tw.div`text-sm text-gray-600 mt-2`;

const LoadMoreButtonContainer = tw.div`flex justify-center`;
const LoadMoreButton = tw(PrimaryButton)`mt-16 mx-auto`;

export default () => {
  const [visible, setVisible] = useState(6);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const onSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  const onLoadMoreClick = () => {
    setVisible((v) => v + 6);
  };

  const filteredPosts =
    selectedCategory === "All"
      ? getPlaceholderPosts()
      : getPlaceholderPosts().filter(
          (post) => post.category === selectedCategory
        );

  return (
    <AnimationRevealPage>
      <Header />
      <Container>
        <ContentWithPaddingXl>
          <HeadingRow>
            <Heading>Our Products</Heading>
          </HeadingRow>

          <FilterContainer>
            <FilterButton
              isSelected={selectedCategory === "All"}
              onClick={() => onSelectCategory("All")}
            >
              All
            </FilterButton>
            <FilterButton
              isSelected={selectedCategory === "Industrial"}
              onClick={() => onSelectCategory("Industrial")}
            >
              Industrial Products
            </FilterButton>
            <FilterButton
              isSelected={selectedCategory === "Consumer"}
              onClick={() => onSelectCategory("Consumer")}
            >
              Consumer Products
            </FilterButton>
            <FilterButton
              isSelected={selectedCategory === "Spices"}
              onClick={() => onSelectCategory("Spices")}
            >
              Spices
            </FilterButton>
          </FilterContainer>

          <Posts>
            {filteredPosts.slice(0, visible).map((post, index) => (
              <PostContainer key={index}>
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
                      <Title>{post.title}</Title>
                      {post.description && (
                        <Description>{post.description}</Description>
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
    title: "Nylon Cable Ties",
    description: "High-quality cable ties for industrial applications.",
    url: "https://example.com",
    featured: false,
  },
  {
    imageSrc: mounts,
    category: "Industrial",
    title: "Cable Tie Mounts",
    description: "Durable mounts for industrial equipment.",
    url: "https://example.com",
    featured: false,
  },
  {
    imageSrc: dinRail,
    category: "Industrial",
    title: "Din Rail (MCB Channel)",
    description: "Durable Din Rails for various industrial equipment.",
    url: "https://example.com",
    featured: false,
  },
  {
    imageSrc: laserMarking,
    category: "Industrial",
    title: "Laser Marking Machine",
    description:
      "High-quality laser marking machine suitable for all plastics and glass.",
    url: "https://example.com",
    featured: false,
  },
  {
    imageSrc: tea,
    category: "Consumer",
    title: "Platinum CTC Tea",
    description: "Premium quality tea leaves for a refreshing experience.",
    url: "https://example.com",
    featured: false,
  },
  {
    imageSrc: cuminImage,
    category: "Spices",
    title: "Cumin Seeds",
    description:
      "Being the third most consumed spice in the world, Cumin is known for its aromatic and spicy-sweet flavor. At Pisum, we are leading exporters of the best quality Cumin seeds.",
    url: "https://example.com",
    featured: false,
  },
  {
    imageSrc: cardamomImage,
    category: "Spices",
    title: "Cardamom",
    description:
      "Known as the Queen of Spices, cardamom has a strong, unique taste with an intensely aromatic fragrance. It is used in both sweet and savory dishes.",
    url: "https://example.com",
    featured: false,
  },
  {
    imageSrc: turmericImage,
    category: "Spices",
    title: "Turmeric",
    description:
      "Turmeric is a bright yellow spice that is used in cooking and traditional medicine. It is known for its anti-inflammatory and antioxidant properties.",
    url: "https://example.com",
    featured: false,
  },
  {
    imageSrc: blackPepperImage,
    category: "Spices",
    title: "Black Pepper",
    description:
      "Black pepper is one of the most commonly used spices worldwide. It has a sharp, pungent flavor and is used in various dishes for seasoning.",
    url: "https://example.com",
    featured: false,
  },
  {
    imageSrc: cinnamonImage,
    category: "Spices",
    title: "Cinnamon",
    description:
      "Cinnamon is a popular spice known for its sweet and warm flavor. It is used in both sweet and savory dishes and has various health benefits.",
    url: "https://example.com",
    featured: false,
  },
];
