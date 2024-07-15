import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithInput.js";
import Features from "components/features/ThreeColWithSideImage.js";
import FAQ from "components/faqs/SingleCol.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import FeaturedProducts from "pages/FeaturedProducts";

const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
const HighlightedText = tw.span`text-primary-500`;

export default () => {
  return (
    <AnimationRevealPage>
      <Hero roundedHeaderButton={true} />
      <Features
        subheading={<Subheading>About Us</Subheading>}
        heading={
          <>
            Aiming for Global <HighlightedText>Leadership.</HighlightedText>
          </>
        }
      />
      <FeaturedProducts
        subheading={<Subheading>Popular Products</Subheading>}
      />
      <FAQ
        subheading={<Subheading>FAQS</Subheading>}
        heading={
          <>
            You have <HighlightedText>Questions ?</HighlightedText>
          </>
        }
        faqs={[
          {
            question: "What types of products do you trade?",
            answer:
              "We specialize in exporting a range of industrial and consumer goods, including Assam and Darjeeling tea, Indian spices (whole and powdered), nylon cable ties, cable tie mounts, and DIN rails. As a leading spice exporter in India and tea exporter in India, we ensure high-quality products for our global clients.",
          },
          {
            question: "How can I place an order with your company?",
            answer:
              "You can place an order by contacting our sales team via email, phone, or through our website’s contact form. Provide us with the details of the products you need, such as spices, tea, or cable ties, and we’ll guide you through the ordering process.",
          },
          {
            question: "Do you offer international shipping?",
            answer:
              "Yes, we offer international shipping to many countries around the world. As a bulk spice exporter in India, a spice exporter in Delhi, and a nylon cable tie exporter in Delhi, our logistics team ensures that your orders are delivered safely and on time, no matter where you are located.",
          },
          {
            question: "What are your payment terms?",
            answer:
              "Our payment terms vary depending on the order size and customer profile. We typically accept payments via bank transfer, credit card, and other secure payment methods. For large orders, such as bulk spice exports or tea exports, we may offer flexible payment plans upon agreement.",
          },
          {
            question: "Can you source specific products that are not listed on your website?",
            answer:
              "Yes, we have a broad network of suppliers and can often source specific products upon request. If you need a particular item, whether it be a whole spice, tea, or nylon cable ties, that is not listed on our website, please contact us with your requirements, and we will do our best to assist you.",
          },
          {
            question: "What quality assurance measures do you have in place?",
            answer:
              "We prioritize quality and reliability in all our trades. As a reputable spice exporter in India and a tea exporter in India, our team conducts thorough inspections and quality checks on all products before they are shipped. Additionally, we work with reputable manufacturers and suppliers to ensure that you receive the best products available.",
          },
        ]}
      />
      <Footer />
    </AnimationRevealPage>
  );
};
