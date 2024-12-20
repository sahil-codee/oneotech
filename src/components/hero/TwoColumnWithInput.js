import React, { useEffect } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Carousel from "react-multi-carousel";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-multi-carousel/lib/styles.css";

import Header from "../headers/light.js";
import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-1.svg";
import cableTie from "../../images/cableCarousel.webp";
import spices from "../../images/spicesCarousel.webp";
import teaFarm from "../../images/teaCarousel.webp";
import nylonCableTies from "../../images/cableTies.svg";
import cableTieMounts from "../../images/mounts.svg";
import dinRail from "../../images/dinRail.svg";

const addPreloadLink = (href, as, type) => {
  const link = document.createElement("link");
  link.rel = "preload";
  link.href = href;
  link.as = as;
  if (type) {
    link.type = type;
  }
  document.head.appendChild(link);
};

const Container = tw.div`relative bg-gray-900 text-gray-100 -mx-8 -mb-8 mt-8`;

const CarouselContainer = styled.div`
  ${tw`relative w-full mt-8`};
  overflow: hidden;
  width: 100vw; // Ensures full viewport width
  max-height: 600px; // Limit the height to avoid overflow from the bottom
  margin-left: calc(100vw - 100%) / 5); // Centers the full-width container
`;

const CarouselWrapper = styled.div`
  ${tw`w-full relative`}
  .react-multi-carousel-list {
    ${tw`w-full overflow-hidden`}
  }
  .react-multi-carousel-item {
    ${tw`w-full transition-transform duration-700`}
  }
`;

const Overlay = styled.div`
  ${tw`absolute inset-0 flex flex-col items-center justify-center text-white text-center`}
  background: rgba(0, 0, 0, 0.6);
  overflow: hidden;
`;
const Heading = tw.h1`font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl`;
const Paragraph = tw.p`my-2 lg:my-4 text-base xl:text-lg`;

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none opacity-5 absolute left-0 bottom-0 h-64 w-64 transform -translate-x-2/3 -z-10`}
`;

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const FeaturedProducts = () => {
  useEffect(() => {
    addPreloadLink(cableTie, "image", "image/webp");
    addPreloadLink(spices, "image", "image/webp");
    addPreloadLink(teaFarm, "image", "image/webp");
    addPreloadLink(nylonCableTies, "image", "image/webp");
    addPreloadLink(cableTieMounts, "image", "image/webp");
    addPreloadLink(dinRail, "image", "image/webp");
  }, []);

  return (
    <Container>
      <CarouselContainer>
        <CarouselWrapper>
          <Carousel
            responsive={responsive}
            infinite
            autoPlay
            autoPlaySpeed={10000} // 10 seconds per slide
            transitionDuration={2000} // 2 seconds transition duration
            arrows
          >
            <div>
              <LazyLoadImage
                src={cableTie}
                // sizes="(max-width: 600px) 480px, (max-width: 1200px) 768px, 1200px"
                alt="Cable Ties"
                style={{ width: "100%", height: "600px", objectFit: "cover" }}
              />
              <Overlay>
                <Heading>
                  Nylon Cable Tie Exporter in India - Oneotech Enterprises
                </Heading>
                <Paragraph>
                  Oneotech Enterprises is a leading nylon cable tie exporter in
                  India, offering high-quality and durable nylon cable ties for
                  various industrial applications. Our expertise as a trusted
                  nylon cable tie exporter ensures that our products meet the
                  highest standards of performance and reliability.
                </Paragraph>
                <Paragraph>
                  As a premier nylon cable tie exporter in India, Oneotech
                  Enterprises is committed to delivering top-notch products to
                  meet the needs of our global clients. Our nylon cable ties are
                  designed for efficiency and durability, making us a trusted
                  choice in the industry.
                </Paragraph>
              </Overlay>
            </div>
            {/* <div>
              <LazyLoadImage
                src={nylonCableTies}
                sizes="(max-width: 600px) 480px, (max-width: 1200px) 768px, 1200px"
                alt="Nylon Cable Ties"
                style={{ width: "100%", height: "600px", objectFit: "cover" }}
              />
              <Overlay>
                <Heading>Nylon Cable Ties by Oneotech Enterprises</Heading>
                <Paragraph>
                  Our nylon cable ties are durable and reliable, perfect for a
                  variety of industrial applications.
                </Paragraph>
                <Paragraph>
                  As a leading exporter of nylon cable ties in India, Oneotech
                  Enterprises ensures our products meet the highest standards of
                  quality and performance.
                </Paragraph>
              </Overlay>
            </div> */}
            <div>
              <LazyLoadImage
                src={cableTieMounts}
                // sizes="(max-width: 600px) 480px, (max-width: 1200px) 768px, 1200px"
                alt="Cable Tie Mounts"
                style={{ width: "100%", height: "600px", objectFit: "cover" }}
              />
              <Overlay>
                <Heading>
                  Leading Cable Tie Mounts Exporter in india - Oneotech
                  Enterprises
                </Heading>
                <Paragraph>
                  Our cable tie mounts provide secure and efficient solutions
                  for cable management in various settings.
                </Paragraph>
                <Paragraph>
                  Oneotech Enterprises offers high-quality cable tie mounts that
                  are trusted by industries worldwide for their reliability and
                  performance.
                </Paragraph>
              </Overlay>
            </div>
            <div>
              <LazyLoadImage
                src={dinRail}
                // sizes="(max-width: 600px) 480px, (max-width: 1200px) 768px, 1200px"
                alt="DIN Rail"
                style={{ width: "100%", height: "600px", objectFit: "cover" }}
              />
              <Overlay>
                <Heading>DIN Rail (MCB Channel) - Oneotech Enterprises</Heading>
                <Paragraph>
                  Our DIN rails are designed to provide strong support for
                  mounting electrical equipment in various industrial
                  applications.
                </Paragraph>
                <Paragraph>
                  As a leading exporter of DIN rails, Oneotech Enterprises
                  ensures that our products offer excellent durability and
                  reliability.
                </Paragraph>
              </Overlay>
            </div>
          </Carousel>
        </CarouselWrapper>
      </CarouselContainer>
      <DecoratorBlob1 />
    </Container>
  );
};

const HomePage = ({ roundedHeaderButton }) => {
  return (
    <>
      <Header roundedHeaderButton={roundedHeaderButton} />
      <FeaturedProducts />
    </>
  );
};

export default HomePage;
