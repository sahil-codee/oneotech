import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription as SectionDescriptionBase } from "components/misc/Typography.js";
import { Container as ContainerBase, ContentWithPaddingXl as ContentWithPaddingXlBase } from "components/misc/Layouts.js";
import { ReactComponent as ChevronDownIcon } from "feather-icons/dist/icons/chevron-down.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-7.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-8.svg";

const Container = styled(ContainerBase)`
  ${tw`w-full`}
`;

const ContentWithPaddingXl = styled(ContentWithPaddingXlBase)`
  ${tw`w-full`}
`;

const Subheading = tw(SubheadingBase)`mb-4 text-center`;
const Heading = tw(SectionHeading)`w-full`;
const Description = styled(SectionDescriptionBase)`
  ${tw`w-full text-center max-w-none`}
`;

const Column = tw.div`flex flex-col items-center w-full`;
const HeaderContent = tw.div``;

const FAQSContainer = tw.dl`mt-12 w-full relative`;
const FAQ = tw.div`cursor-pointer select-none mt-5 px-8 sm:px-10 py-5 sm:py-4 rounded-lg text-gray-800 hover:text-gray-900 bg-gray-200 hover:bg-gray-300 transition duration-300 w-full`;
const Question = tw.dt`flex justify-between items-center`;
const QuestionText = tw.span`text-lg lg:text-xl font-semibold`;
const QuestionToggleIcon = motion(styled.span`
  ${tw`ml-2 transition duration-300`}
  svg {
    ${tw`w-6 h-6`}
  }
`);
const Answer = motion(tw.dd`pointer-events-none text-sm sm:text-base leading-relaxed`);

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-56 w-56 opacity-15 transform translate-x-2/3 -translate-y-12 text-teal-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-64 w-64 opacity-15 transform -translate-x-2/3 text-primary-500`}
`;

export default ({
  subheading = "FAQS",
  heading = "You have Questions?",
  description = "We understand you may have questions about our products and services. Here, we've compiled answers to some of the most frequently asked questions about our offerings as a bulk spice exporter in India, tea exporter in India, and supplier of nylon cable ties, cable tie mounts, and DIN rails.",
  faqs = [
    {
      question: "What types of products do you trade?",
      answer:
        "We specialize in exporting a range of industrial and consumer goods, including Assam and Darjeeling tea, Indian spices (whole and powdered), nylon cable ties, cable tie mounts, and DIN rails. As a leading spice exporter in India and tea exporter in India, we ensure high-quality products for our global clients.",
    },
    {
      question: "How can I place an order with your company?",
      answer:
        "You can place an order by contacting our sales team via email, phone, or through our website’s contact form. Provide us with the details of the products you need, and we’ll guide you through the ordering process.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we offer international shipping to many countries around the world. Our logistics team ensures that your orders are delivered safely and on time, no matter where you are located.",
    },
    {
      question: "What are your payment terms?",
      answer:
        "Our payment terms vary depending on the order size and customer profile. We typically accept payments via bank transfer, credit card, and other secure payment methods. For large orders, we may offer flexible payment plans upon agreement.",
    },
    {
      question: "Can you source specific products that are not listed on your website?",
      answer:
        "Yes, we have a broad network of suppliers and can often source specific products upon request. If you need a particular item that is not listed on our website, please contact us with your requirements, and we will do our best to assist you.",
    },
    {
      question: "What quality assurance measures do you have in place?",
      answer:
        "We prioritize quality and reliability in all our trades. Our team conducts thorough inspections and quality checks on all products before they are shipped. Additionally, we work with reputable manufacturers and suppliers to ensure that you receive the best products available.",
    },
  ]
}) => {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);

  const toggleQuestion = (questionIndex) => {
    if (activeQuestionIndex === questionIndex) setActiveQuestionIndex(null);
    else setActiveQuestionIndex(questionIndex);
  };

  return (
    <Container>
      <ContentWithPaddingXl>
        <Column>
          <HeaderContent>
            {subheading && <Subheading>{subheading}</Subheading>}
            <Heading>{heading}</Heading>
            {description && <Description>{description}</Description>}
          </HeaderContent>
          <FAQSContainer>
            {faqs.map((faq, index) => (
              <FAQ
                key={index}
                onClick={() => {
                  toggleQuestion(index);
                }}
                className="group"
              >
                <Question>
                  <QuestionText>{faq.question}</QuestionText>
                  <QuestionToggleIcon
                    variants={{
                      collapsed: { rotate: 0 },
                      open: { rotate: -180 },
                    }}
                    initial="collapsed"
                    animate={activeQuestionIndex === index ? "open" : "collapsed"}
                    transition={{ duration: 0.02, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <ChevronDownIcon />
                  </QuestionToggleIcon>
                </Question>
                <Answer
                  variants={{
                    open: { opacity: 1, height: "auto", marginTop: "16px" },
                    collapsed: { opacity: 0, height: 0, marginTop: "0px" },
                  }}
                  initial="collapsed"
                  animate={activeQuestionIndex === index ? "open" : "collapsed"}
                  transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                >
                  {faq.answer}
                </Answer>
              </FAQ>
            ))}
          </FAQSContainer>
        </Column>
      </ContentWithPaddingXl>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};
