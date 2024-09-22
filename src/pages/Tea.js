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

const Container = tw.div`relative text-gray-100 -mx-8 -mb-8 mt-8`;
const CarouselContainer = styled.div`
  ${tw`relative w-full mt-8`}
`;
const Subheading = tw(SubheadingBase)`mb-4 text-center`;
const CarouselWrapper = styled.div`
  ${tw`max-w-screen-xl mx-auto w-full relative`}
`;
const Overlay = styled.div`
  ${tw`absolute inset-0 flex flex-col items-center justify-center text-white text-center`} background: rgba(0, 0, 0, 0.5);
`;
const Heading = tw.h1`font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl`;
const Paragraph = tw.p`my-2 lg:my-4 text-base xl:text-lg`;
const Button = tw.a`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4`;

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const TeaLandingPage = () => {
  useEffect(() => {
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
          content="Oneotech Enterprises is a top exporter of bulk black tea in India, offering premium quality tea sourced from Assam and Darjeeling."
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
          content="Leading bulk black tea exporters in India, providing high-quality black tea to global markets."
        />
        <meta
          property="og:image"
          content="https://www.oneotechenterprises.com/black-tea-image.jpg"
        />
      </Helmet>

      <Header />
      <Container>
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
                    Discover our premium bulk black tea, sourced directly from
                    Assam and Darjeeling. One of the leading bulk black tea
                    exporters in India.
                  </Paragraph>
                  <Button href="/contact-us">Contact Us</Button>
                </Overlay>
              </div>
              <div>
                <LazyLoadImage
                  src={teaImage2}
                  alt="bulk black tea exporters in india"
                  style={{ width: "100%", height: "600px", objectFit: "cover" }}
                />
                <Overlay>
                  <Heading>Black Tea Exporters in India</Heading>
                  <Paragraph>
                    Oneotech Enterprises, trusted black tea exporters in India,
                    offers a variety of high-quality black tea for bulk export.
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
                  <Heading>Darjeeling Black Tea Exporters</Heading>
                  <Paragraph>
                    As one of the bulk black tea exporters in India, we
                    specialize in exporting premium black tea, including
                    Darjeeling’s finest.
                  </Paragraph>
                  <Button href="/contact-us">Contact Us</Button>
                </Overlay>
              </div>
            </Carousel>
          </CarouselWrapper>
        </CarouselContainer>

        {/* More Sections */}
        <SectionContainer>
          <Subheading>
            Oneotech Enterprises - Bulk Black Tea Exporters in India
          </Subheading>
          <Text>
            Oneotech Enterprises stands out as one of the top bulk black tea
            exporters in India. Our high-quality black tea is sourced from the
            finest tea-growing regions like Assam and Darjeeling. As black tea
            exporters in India, we ensure the best quality for our global
            customers.
          </Text>
        </SectionContainer>

        <SectionContainer>
          <Subheading>Why Choose Us as Bulk Black Tea Exporters?</Subheading>
          <Text>
            Our bulk black tea is organically grown and meticulously processed.
            Among the black tea exporters in India, we are known for our
            sustainability and consistency. Whether you're looking for Assam
            black tea or Darjeeling black tea, Oneotech is your go-to bulk black
            tea exporter.
          </Text>
        </SectionContainer>

        <SectionContainer>
          <Subheading>Our Mission as Leading Black Tea Exporters</Subheading>
          <Text>
            Our mission is to remain one of the most reliable black tea
            exporters in India. We strive to supply only the finest bulk black
            tea that caters to the tastes of tea lovers across the globe.
          </Text>
        </SectionContainer>

        <SectionContainer>
          <Subheading>Bulk Black Tea Export Services</Subheading>
          <Text>
            As trusted bulk black tea exporters in India, we provide seamless
            tea export services. We ensure the highest standards in selecting,
            packaging, and shipping black tea for wholesale buyers. Choose
            Oneotech Enterprises for quality bulk black tea exports.
          </Text>
        </SectionContainer>
      </Container>
    </AnimationRevealPage>
  );
};

const SectionContainer = styled.div`
  ${tw`flex flex-col items-center justify-center p-8`}
`;
const Text = styled.p`
  ${tw`text-lg text-gray-700 mb-6`} max-width: 800px;
  text-align: center;
`;

export default TeaLandingPage;
