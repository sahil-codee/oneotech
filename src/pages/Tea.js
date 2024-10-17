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
        "At Oneotech Enterprises, we export a diverse range of teas, including bulk black tea, CTC black tea, orthodox tea, green tea, and herbal teas. Our teas, sourced from Assam and Darjeeling, are known for their rich flavors and high quality, making us one of the leading bulk tea exporters in India.",
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
        "Answer: We follow a stringent quality control process for every batch of tea we export. As one of the top bulk black tea exporters in India, we ensure that our CTC and orthodox black teas undergo professional tasting and thorough testing to guarantee the highest export standards.",
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
          Top Bulk Tea Exporters in India | Bulk Black Tea Exporters & Suppliers
        </title>
        <meta
          name="description"
          content="Leading bulk tea exporters in India, specializing in black tea, green tea, and more. As top bulk black tea exporters, we offer premium tea exports from Assam and Darjeeling. Contact us at info@oneotechenterprises.com for bulk tea supplies."
        />
        <link
          rel="canonical"
          href="https://www.oneotechenterprises.com/bulk-tea-exporters-in-india"
        />
        <meta
          property="og:title"
          content="Bulk Tea Exporters in India | Leading Tea Suppliers"
        />
        <meta
          property="og:description"
          content="Leading bulk tea exporters in India, specializing in high-quality Assam and Darjeeling teas. Contact for bulk tea supply and premium Indian tea exports."
        />
        <meta
          property="og:image"
          content="https://www.oneotechenterprises.com/black-tea-image.jpg"
        />
        <meta
          property="og:url"
          content="https://www.oneotechenterprises.com/tea-exporters-in-india"
        />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Structured Data for FAQs */}
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What types of teas does Oneotech Enterprises export?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "At Oneotech Enterprises, we export a wide range of high-quality teas, including CTC black tea, orthodox tea, green tea, blue tea, white tea, and herbal teas."
                }
              },
              {
                "@type": "Question",
                "name": "Are the teas exported by Oneotech Enterprises GMO-free and bleach-free?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, all our teas are 100% GMO-free and bleach-free. We are committed to exporting pure, naturally processed teas, ensuring you receive chemical-free, healthy tea."
                }
              },
              {
                "@type": "Question",
                "name": "How can I place a bulk tea order with Oneotech Enterprises?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Placing a bulk tea order with Oneotech Enterprises is simple. Contact us via phone or email and we will provide you with tailored solutions."
                }
              }
            ]
          }`}
        </script>
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
                  <Heading>
                    Bulk Tea Exporters in India - Premium Assam & Darjeeling
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
                  alt="bulk tea exporters in india"
                  style={{ width: "100%", height: "600px", objectFit: "cover" }}
                />
                <Overlay>
                  <Heading>Trusted Bulk Black Tea Exporters from India</Heading>
                  <Paragraph>
                    Our bulk black tea exports include premium Assam and
                    Darjeeling varieties. As a trusted supplier among bulk black
                    tea exporters in India, we ensure our CTC and orthodox black
                    teas deliver bold flavors, perfect for international
                    markets.
                  </Paragraph>
                  <Button href="/contact-us">Contact Us</Button>
                </Overlay>
              </div>
              <div>
                <LazyLoadImage
                  src={teaImage3}
                  alt="bulk tea exporters in india"
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
          Oneotech Enterprises - Leading Tea Exporters from India
        </Subheading>
        <SectionContainer>
          <Text>
            Welcome to Oneotech Enterprises, a premier name among bulk tea
            exporters in India, specializing in the export of high-quality teas.
            We provide bulk black tea, green tea, orthodox tea, and herbal tea
            sourced from Assam and Darjeeling, two of India's finest tea-growing
            regions. As one of the leading bulk black tea exporters in India, we
            pride ourselves on offering premium teas for global buyers seeking
            top-notch Indian tea supplies.
          </Text>
        </SectionContainer>
        <Subheading>
          Why Choose Oneotech Enterprises as Your Bulk Tea Exporter?
        </Subheading>
        <SectionContainer>
          <Text>
            At Oneotech Enterprises, we are known for our excellence as bulk tea
            exporters in India, providing a vast array of teas for international
            markets. Our portfolio includes bulk black tea, green tea, and
            herbal varieties, catering to diverse global tastes. As one of the
            top bulk black tea exporters in India, we guarantee the highest
            standards in sourcing, quality control, and packaging to ensure your
            bulk tea shipments arrive fresh and ready to impress your customers.
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
            We understand that our clients rely on us for top-quality bulk black
            tea exports from India. Every batch of black tea we export undergoes
            rigorous tasting and quality checks. This ensures that as one of the
            leading bulk black tea exporters in India, we consistently deliver
            premium, flavorful teas that meet international quality standards.
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
        <Subheading>Leading Bulk Black Tea Exporters in India</Subheading>
        <SectionContainer>
          <Text>
            Oneotech Enterprises stands out as one of the top bulk black tea
            exporters in India, offering high-grade CTC and orthodox black teas
            for export. Black tea is among the most popular beverages globally,
            and we supply it in bulk to cater to international demand. Whether
            you require strong Assam black tea or aromatic Darjeeling black tea,
            our bulk black tea offerings provide rich flavors and bold aromas.
            Our bulk black tea is carefully selected, processed, and packaged to
            ensure maximum freshness. We are dedicated to maintaining long-term
            relationships with global clients by providing the finest bulk black
            tea exports from India.
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
