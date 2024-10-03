import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import tw from "twin.macro";
import Carousel from "react-multi-carousel";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-multi-carousel/lib/styles.css";
import { Subheading as SubheadingBase } from "components/misc/Headings.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import AnimationRevealPage from "helpers/AnimationRevealPage";
import Header from "components/headers/light.js";
import teaImage1 from "../images/teaHead.png";
import teaImage2 from "../images/teaHead2.png";
import teaImage3 from "../images/teaHead.png";
import { motion } from "framer-motion";
import { ReactComponent as ChevronDownIcon } from "feather-icons/dist/icons/chevron-down.svg";

const Container = tw.div`relative text-gray-100 -mx-8 -mb-8 mt-8 mb-2`;
const CarouselContainer = styled.div`
  ${tw`relative w-full mt-8`}
`;
// const Subheading = tw(SubheadingBase)`mb-4 text-center`;
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
  ${tw`flex flex-col items-start p-8 w-full`}
`;

const Subheading = tw(SubheadingBase)`mt-4 mb-0 text-center w-full`; // New definition for centered Subheading

const Text = styled.p`
  ${tw`text-lg text-gray-700 mb-6 w-full text-left`}
`;

// Style for list and bullets
const StyledList = styled.ul`
  ${tw`pl-6 mb-6 w-full text-left text-lg text-gray-700`}
  list-style-type: square;
`;
const FAQSContainer = tw.dl`mt-0 w-full relative`;
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
      question: "What types of teas does Oneotech Enterprises export?",
      answer:
        "At Oneotech Enterprises, we export a wide range of high-quality teas, including CTC black tea, orthodox tea, green tea, blue tea, white tea, and herbal teas. Sourced from the best tea-growing regions like Assam and Darjeeling, our teas are perfect for buyers seeking premium export-quality tea from India.",
    },
    {
      question:
        "Are the teas exported by Oneotech Enterprises GMO-free and bleach-free?",
      answer:
        "Yes, all our teas are 100% GMO-free and bleach-free. We are committed to exporting pure, naturally processed teas, ensuring you receive chemical-free, healthy tea from one of the top bulk tea exporters in India.",
    },
    {
      question: "How can I place a bulk tea order with Oneotech Enterprises?",
      answer:
        "Placing a bulk tea order with Oneotech Enterprises is simple. Contact us via phone at +91-9810294854 or email us at info@oneotechenterprises.com. As one of the leading bulk tea suppliers in India, we offer tailored solutions to meet your specific tea sourcing needs.",
    },
    {
      question:
        "How does Oneotech Enterprises ensure the quality of its export teas?",
      answer:
        "We follow a rigorous quality control process, including professional tea tasting for each batch. Our tea tasters evaluate the flavor, aroma, and overall quality to ensure only the finest export-quality teas are shipped. As leading Indian tea exporters, we prioritize freshness and secure packaging for optimal quality in transit.",
    },
    {
      question: "Where does Oneotech Enterprises source its teas from?",
      answer:
        "We source our teas exclusively from India’s most renowned tea-growing regions: Assam and Darjeeling. Each region is known for its distinct flavor profiles, and we ensure that our bulk tea exports reflect the finest qualities of these areas.",
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
          Leading Bulk Tea Exporters in India | Organic & Premium Indian Tea
        </title>
        <meta
          name="description"
          content="Oneotech Enterprises: Trusted bulk tea exporters in India. Exporting high-quality Assam & Darjeeling teas including CTC black tea, orthodox, green, and herbal tea. Contact us for bulk tea orders."
        />
        <link
          rel="canonical"
          href="https://www.oneotechenterprises.com/bulk-tea-exporters-in-india"
        />
        <meta
          property="og:title"
          content="Leading Bulk Tea Exporters in India | Organic & Premium Indian Tea"
        />
        <meta
          property="og:description"
          content="Oneotech Enterprises: Leading bulk tea exporters in India, specializing in high-quality Assam and Darjeeling teas. Contact us for bulk tea exports and premium Indian tea supply."
        />
        <meta
          property="og:image"
          content="https://www.oneotechenterprises.com/black-tea-image.jpg"
        />
        <meta
          property="og:url"
          content="https://www.oneotechenterprises.com/bulk-tea-exporters-in-india"
        />
        <meta name="twitter:card" content="summary_large_image" />
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
                  <Heading>
                    Leading Bulk Tea Exporters in India – Assam & Darjeeling
                    Teas
                  </Heading>
                  <Paragraph>
                    Explore a wide range of premium teas sourced directly from
                    the finest tea-growing regions of Assam and Darjeeling. As
                    one of the leading bulk tea exporters in India, Oneotech
                    Enterprises specializes in CTC black tea, orthodox tea,
                    green tea, herbal blends, and more for global markets.
                  </Paragraph>
                  <Button href="/contact-us">Contact Us</Button>
                </Overlay>
              </div>
              <div>
                <LazyLoadImage
                  src={teaImage2}
                  alt="tea exporters in india"
                  style={{ width: "100%", height: "600px", objectFit: "cover" }}
                />
                <Overlay>
                  <Heading>Trusted Black Tea Exporters in India</Heading>
                  <Paragraph>
                    Oneotech Enterprises, a trusted name among bulk tea
                    exporters in India, offers high-quality black teas including
                    CTC and orthodox varieties. Our Assam and Darjeeling black
                    teas are known for their rich flavor and bold taste, ideal
                    for bulk exports worldwide.
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
                  <Heading>Orthodox and Green Tea Exporters from India</Heading>
                  <Paragraph>
                    As leading bulk tea exporters in India, we provide premium
                    orthodox and green teas that are sourced from Assam and
                    Darjeeling. Our teas are packed with antioxidants and health
                    benefits, making them popular choices for international
                    buyers seeking high-quality Indian teas.
                  </Paragraph>
                  <Button href="/contact-us">Contact Us</Button>
                </Overlay>
              </div>
            </Carousel>
          </CarouselWrapper>
        </CarouselContainer>

        {/* Updated Sections */}
        <Subheading>
          Oneotech Enterprises - Leading Bulk Tea Exporters from India
        </Subheading>
        <SectionContainer>
          <Text>
            Welcome to Oneotech Enterprises, your trusted partner among the top
            tea exporters in India. We specialize in providing a wide range of
            high-quality teas to clients worldwide. As one of the leading bulk
            tea exporters in India, we source our teas from the finest
            tea-growing regions, such as Assam and Darjeeling, offering premium
            CTC black tea, orthodox tea, green tea, blue tea, white tea, and
            herbal tea. Each variety is carefully selected to ensure you receive
            the best export quality tea from India.
          </Text>
        </SectionContainer>
        <Subheading>
          Why Choose Oneotech Enterprises as Your Bulk Tea Exporter?
        </Subheading>
        <SectionContainer>
          <Text>
            At Oneotech Enterprises, we stand out as reputable Indian tea
            exporters. Our tea is organically grown, processed with care, and
            tested by professional tea tasters to ensure only the finest batches
            reach our customers. Whether you're looking to buy Indian tea for
            retail, wholesale, or personal use, we offer unmatched quality and
            consistency in our services. As dedicated tea suppliers from India,
            our range includes:
          </Text>
          <StyledList>
            <li>
              CTC Black Tea: Bold and brisk, perfect for those who enjoy a
              strong cup.
            </li>
            <li>
              Orthodox Tea: Known for its distinct flavor and careful
              processing.
            </li>
            <li>
              Green Tea: Sourced from the best gardens, full of antioxidants and
              health benefits.
            </li>
            <li>
              Blue Tea & White Tea: Rare varieties catering to all tastes.
            </li>
            <li>Herbal Teas: Organic and wellness-focused blends.</li>
          </StyledList>
        </SectionContainer>

        <Subheading>Expert Tea Tasting for Superior Quality</Subheading>
        <SectionContainer>
          <Text>
            Every batch of tea we export is rigorously tested by our
            professional tea tasters to ensure that only the finest leaves are
            selected for export. This stringent quality control helps us
            maintain our reputation as one of the top bulk tea suppliers in
            India. Our tea tasters meticulously assess the aroma, flavor, and
            appearance of the tea to guarantee it meets the high standards that
            global buyers expect from Indian tea exporters.
          </Text>
        </SectionContainer>
        <Subheading>Our Mission as Leading Tea Exporters</Subheading>
        <SectionContainer>
          <Text>
            Our mission is to be the most reliable tea exporters in India,
            offering premium teas that reflect the rich traditions of Indian tea
            culture. We aim to supply export-quality tea from India that meets
            the diverse tastes of tea lovers worldwide. Our passion for tea and
            commitment to excellence make us the go-to bulk tea exporters in
            India.
          </Text>
        </SectionContainer>
        <Subheading>
          Why Choose Oneotech Enterprises for Your Bulk Tea Needs?
        </Subheading>
        <SectionContainer>
          <Text>
            <StyledList>
              <li>
                Wide Range of Teas: From CTC black tea to herbal and rare
                varieties.
              </li>
              <li>
                Expert Quality Control: Every batch is rigorously tested by
                professional tea tasters.
              </li>
              <li>
                Sustainability: We are committed to ethical sourcing and
                sustainable tea production practices.
              </li>
              <li>
                Tailored Export Solutions: Customized services for wholesale
                buyers.
              </li>
              <li>
                Global Reach: Our exports reach clients worldwide, from small
                businesses to large enterprises.
              </li>
            </StyledList>
          </Text>
        </SectionContainer>

        {/* FAQs Section */}
        <Subheading>Frequently Asked Questions</Subheading>
        <SectionContainer>
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
      <Footer />
    </AnimationRevealPage>
  );
};

export default TeaLandingPage;
