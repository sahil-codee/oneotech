import React, { useEffect, useState } from "react";
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
import { motion } from "framer-motion";
import { ReactComponent as ChevronDownIcon } from "feather-icons/dist/icons/chevron-down.svg";

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
const SectionContainer = styled.div`
  ${tw`flex flex-col items-center justify-center p-8`}
`;
const Text = styled.p`
  ${tw`text-lg text-gray-700 mb-6`} max-width: 800px;
  text-align: center;
`;
const FAQSContainer = tw.dl`mt-12 w-full relative`;
const FAQ = tw.div`cursor-pointer select-none mt-5 px-8 sm:px-10 py-5 sm:py-4 rounded-lg text-gray-800 hover:text-gray-900 bg-gray-200 hover:bg-gray-300 transition duration-300 w-full`;
const Question = tw.dt`flex justify-between items-center`;
const QuestionText = tw.span`text-lg lg:text-xl font-semibold`;
const QuestionToggleIcon = motion(
  styled.span`
    ${tw`ml-2 transition duration-300`} svg {
      ${tw`w-6 h-6`}
    }
  `
);
const Answer = motion(
  tw.dd`pointer-events-none text-sm sm:text-base leading-relaxed`
);

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const TeaLandingPage = () => {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);

  useEffect(() => {
    [teaImage1, teaImage2, teaImage3].forEach((image) => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.href = image;
      link.as = "image";
      document.head.appendChild(link);
    });
  }, []);

  const faqs = [
    {
      question:
        "How do black tea exporters in India facilitate international tea imports?",
      answer:
        "Leading Indian black tea exporters, such as Oneotech Enterprises, guide buyers through the purchasing process, ensuring orders meet international standards for quality and freshness.",
    },
    {
      question:
        "What is the process followed by top exporters of black tea from India?",
      answer:
        "The best black tea exporters in India follow a systematic process that includes sourcing the finest teas, conducting quality control, and packaging. Companies like Oneotech ensure timely delivery to global markets.",
    },
    {
      question: "Which regions produce the best black tea in India?",
      answer:
        "Assam and Darjeeling are the primary tea-growing regions in India, known for producing high-quality black teas that are exported by many suppliers.",
    },
    {
      question:
        "What sets Oneotech Enterprises apart from other bulk black tea exporters in India?",
      answer:
        "Oneotech's commitment to quality assurance, sustainable practices, and extensive experience in handling large-scale orders positions it as a trusted partner among leading black tea exporters.",
    },
  ];

  const toggleQuestion = (index) => {
    if (activeQuestionIndex === index) {
      setActiveQuestionIndex(null);
    } else {
      setActiveQuestionIndex(index);
    }
  };

  return (
    <AnimationRevealPage>
      <Helmet>
        <title>
          Top Black Tea Exporters in India | Organic Black Tea Suppliers
        </title>
        <meta
          name="description"
          content="Leading black tea exporters in India offering premium organic black tea globally. Contact us at +91-9810294854 for bulk exports and quality tea supply."
        />
        <link
          rel="canonical"
          href="https://www.oneotechenterprises.com/black-tea-exporters-in-india"
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
                  alt="black tea exporters in india"
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

        {/* FAQs Section */}
        <SectionContainer>
          <Subheading>Frequently Asked Questions</Subheading>
          <FAQSContainer>
            {faqs.map((faq, index) => (
              <FAQ key={index} onClick={() => toggleQuestion(index)}>
                <Question>
                  <QuestionText>{faq.question}</QuestionText>
                  <QuestionToggleIcon
                    initial={
                      activeQuestionIndex === index
                        ? { rotate: 180 }
                        : { rotate: 0 }
                    }
                    animate={
                      activeQuestionIndex === index
                        ? { rotate: 180 }
                        : { rotate: 0 }
                    }
                  >
                    <ChevronDownIcon />
                  </QuestionToggleIcon>
                </Question>
                {activeQuestionIndex === index && (
                  <Answer
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                  >
                    {faq.answer}
                  </Answer>
                )}
              </FAQ>
            ))}
          </FAQSContainer>
        </SectionContainer>
      </Container>
    </AnimationRevealPage>
  );
};

export default TeaLandingPage;
