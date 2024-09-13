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

import cableTie from "../images/cableTies.svg";
import mounts from "../images/mounts.svg";
import dinRail from "../images/dinRail.svg";

const HeadingRow = tw.div`flex justify-center`;
const Heading = tw(SectionHeading)`text-primary-900`;

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

export default () => {
  const [visible, setVisible] = useState(6);

  const onLoadMoreClick = () => {
    setVisible((v) => v + 6);
  };

  // Filtered Posts to show only "Industrial" category
  const filteredPosts = getPlaceholderPosts().filter(
    (post) => post.category === "Industrial"
  );

  // Function to create SEO-friendly URLs
  const generateSeoUrl = (title) => {
    const seoUrls = {
      "Nylon Cable Ties": "leading-nylon-cable-tie-exporters-in-india",
      "Cable Tie Mounts": "leading-cable-tie-mounts-exporters-in-india",
      "Din Rail (MCB Channel)": "leading-din-rail-exporters-in-india",
    };
    return seoUrls[title] || title.toLowerCase().replace(/\s+/g, "-");
  };

  return (
    <AnimationRevealPage>
      <Header />
      <Container>
        <ContentWithPaddingXl>
          <HeadingRow>
            <Heading>Industrial Products</Heading>
          </HeadingRow>

          <Posts>
            {filteredPosts.slice(0, visible).map((post, index) => (
              <PostContainer key={index}>
                <Post className="group">
                  <a
                    href={`/products/${generateSeoUrl(post.altText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ImageContainer>
                      <Image imageSrc={post.imageSrc} alt={post.title} />
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
            <div tw="flex justify-center">
              <PrimaryButton onClick={onLoadMoreClick}>Load More</PrimaryButton>
            </div>
          )}
        </ContentWithPaddingXl>
      </Container>
      <Footer />
    </AnimationRevealPage>
  );
};

// Function to get Placeholder Posts
const getPlaceholderPosts = () => [
  {
    imageSrc: cableTie,
    category: "Industrial",
    title: "Nylon Cable Tie",
    description: "High-quality cable ties for industrial applications.",
    altText: "leading nylon cable tie exporters in india",
  },
  {
    imageSrc: mounts,
    category: "Industrial",
    title: "Cable Tie Mounts",
    description: "Durable mounts for industrial equipment.",
    altText: "leading cable tie mounts exporters in india",
  },
  {
    imageSrc: dinRail,
    category: "Industrial",
    title: "Din Rail (MCB Channel)",
    description: "Durable Din Rails for various industrial equipment.",
    altText: "leading din rail exporters in india",
  },
];
