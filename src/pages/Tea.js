// eslint-disable-next-line

import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import tw from "twin.macro";
import Carousel from "react-multi-carousel";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-multi-carousel/lib/styles.css";
import { Subheading as SubheadingBase } from "components/misc/Headings.js";

import AnimationRevealPage from "helpers/AnimationRevealPage";
import Header from "components/headers/light.js";
import teaImage1 from "../images/teaHead.png";
import teaImage2 from "../images/teaHead2.png";
import teaImage3 from "../images/teaHead.png";

// Styled Components for Carousel and Overlay Text
const Container = tw.div`relative text-gray-100 -mx-8 -mb-8 mt-8`;
const CarouselContainer = styled.div`
  ${tw`relative w-full mt-8`}
`;

const Subheading = tw(SubheadingBase)`mb-4 text-center`;
const CarouselWrapper = styled.div`
  ${tw`max-w-screen-xl mx-auto w-full relative`}
  .react-multi-carousel-list {
    ${tw`w-full`}
  }
  .react-multi-carousel-item {
    ${tw`w-full transition-transform duration-700`}
  }
`;

const Overlay = styled.div`
  ${tw`absolute inset-0 flex flex-col items-center justify-center text-white text-center`}
  background: rgba(0, 0, 0, 0.5);
`;

const Heading = tw.h1`font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl`;
const Paragraph = tw.p`my-2 lg:my-4 text-base xl:text-lg`;
const Button = tw.a`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4`;

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

// Main Component
const TeaLandingPage = () => {
  useEffect(() => {
    // Preloading images for the carousel
    [teaImage1, teaImage2, teaImage3].forEach((image) => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.href = image;
      link.as = "image";
      document.head.appendChild(link);
    });
  }, []);

  return (
    <AnimationRevealPage>
      <Helmet>
        <title>Bulk Black Tea Exporters in India | Oneotech Enterprises</title>
        <meta
          name="description"
          content="Oneotech Enterprises is one of the top bulk black tea exporters in India. We offer premium quality black tea sourced from Assam, Darjeeling, and other regions. Contact us for wholesale black tea supply."
        />
        <link
          rel="canonical"
          href="https://www.oneotechenterprises.com/bulk-black-tea-exporters-in-india"
        />
        <meta
          property="og:title"
          content="Bulk Black Tea Exporters in India | Oneotech Enterprises"
        />
        <meta
          property="og:description"
          content="Discover the finest black tea from one of the leading bulk black tea exporters in India. Oneotech Enterprises supplies high-quality tea to global markets."
        />
        <meta
          property="og:image"
          content="https://www.oneotechenterprises.com/black-tea-image.jpg"
        />
      </Helmet>

      <Header />
      <Container>
        {/* Carousel Section */}
        <CarouselContainer>
          <CarouselWrapper>
            <Carousel
              responsive={responsive}
              infinite
              autoPlay
              autoPlaySpeed={10000}
              transitionDuration={2000}
              arrows
            >
              <div>
                <LazyLoadImage
                  src={teaImage1}
                  alt="bulk black tea exporters in india"
                  style={{ width: "100%", height: "600px", objectFit: "cover" }}
                />
                <Overlay>
                  <Heading>Bulk Black Tea Exporters in India</Heading>
                  <Paragraph>
                    Discover the richness of our bulk black tea, sourced from
                    premium tea estates in Assam and Darjeeling.
                  </Paragraph>
                  <Button href="/contactus">Contact Us</Button>
                </Overlay>
              </div>
              <div>
                <LazyLoadImage
                  src={teaImage2}
                  alt="bulk black tea exporters in india"
                  style={{ width: "100%", height: "600px", objectFit: "cover" }}
                />
                <Overlay>
                  <Heading>High-Quality Black Tea</Heading>
                  <Paragraph>
                    We are one of the trusted bulk black tea exporters in India,
                    offering a variety of blends and grades of black tea for
                    wholesale buyers.
                  </Paragraph>
                  <Button href="/contact-us">Contact Us</Button>
                </Overlay>
              </div>
              <div>
                <LazyLoadImage
                  src={teaImage3}
                  alt="bulk black tea exporters in india"
                  style={{ width: "100%", height: "600px", objectFit: "cover" }}
                />
                <Overlay>
                  <Heading>Darjeeling's Finest Black Tea</Heading>
                  <Paragraph>
                    Experience the unique flavor of our handpicked Darjeeling
                    black tea, available for bulk export.
                  </Paragraph>
                  <Button href="/contact-us">Contact Us</Button>
                </Overlay>
              </div>
            </Carousel>
          </CarouselWrapper>
        </CarouselContainer>
      </Container>

      {/* Other Sections */}
      <Container>
        <SectionContainer>
          <Subheading>
            Oneotech Enterprises - Bulk Black Tea Exporters
          </Subheading>
          <Text>
            Oneotech Enterprises is a leading exporter of bulk black tea in
            India. As one of the top bulk black tea exporters in India, we take
            pride in sourcing and supplying premium black tea from Assam and
            Darjeeling. Whether you are looking for strong Assam black tea or
            delicate Darjeeling blends, we provide top-quality bulk black tea
            for global markets.
          </Text>
        </SectionContainer>

        <SectionContainer>
          <Subheading>
            Why Choose Oneotech Enterprises for Bulk Black Tea?
          </Subheading>
          <Text>
            We stand out among bulk black tea exporters in India due to our
            commitment to quality and sustainability. Our bulk black tea is
            organically sourced and processed with care to preserve the natural
            flavor and aroma. As experienced bulk black tea exporters in India,
            we ensure timely delivery and consistent quality for wholesale
            buyers.
          </Text>
        </SectionContainer>

        <SectionContainer>
          <Subheading>Our Mission as Bulk Black Tea Exporters</Subheading>
          <Text>
            At Oneotech Enterprises, our mission is to be the best bulk black
            tea exporters in India, offering sustainable and high-quality black
            tea to our customers around the world. With our expertise and
            extensive network of tea plantations, we deliver bulk black tea that
            meets the needs of international markets.
          </Text>
        </SectionContainer>

        <SectionContainer>
          <Subheading>Bulk Black Tea Export Services</Subheading>
          <Text>
            Our company provides bulk black tea export services to clients
            across the globe. From selecting the finest leaves to packaging and
            shipping, we ensure that every step in the process meets the highest
            standards. If you are looking for reliable bulk black tea exporters
            in India, look no further than Oneotech Enterprises.
          </Text>
        </SectionContainer>
      </Container>
    </AnimationRevealPage>
  );
};

// Styled Components for other sections
const SectionContainer = styled.div`
  ${tw`flex flex-col items-center justify-center p-8`};
`;

const Text = styled.p`
  ${tw`text-lg text-gray-700 mb-6`};
  max-width: 800px;
  text-align: center;
`;

export default TeaLandingPage;
