import React from "react";
// import styled from "styled-components";
import tw from "twin.macro";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithInput.js";
import Features from "components/features/ThreeColWithSideImage.js";
import MainFeature from "components/features/TwoColWithButton.js";
import FeatureWithSteps from "components/features/TwoColWithSteps.js";
import FAQ from "components/faqs/SingleCol.js";
import GetStarted from "components/cta/GetStarted";
import Footer from "components/footers/MiniCenteredFooter.js";
import macHeroScreenshotImageSrc from "images/hero-screenshot-2.webp";
// import LazyLoad from "react-lazyload";
// import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import Service3 from "../images/services3.webp";


// const PrimaryButton = styled(PrimaryButtonBase)((props) => [
//   tw`mt-8 text-sm inline-block md:ml-0 ml-0`,
//   props.buttonRounded && tw`rounded-full`,
// ]);

// const Container = styled.div`
//   ${tw`flex flex-col items-start`}
// `;

const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
const HighlightedText = tw.span`text-primary-500`;

// const TextContent = tw.div`lg:py-8 text-center md:text-left`;

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
      <MainFeature
        subheading={<Subheading>Our Products</Subheading>}
        heading={"Quality and Variety"}
        description="Explore our extensive catalog of products, including industrial essentials like cable ties and DIN rails, as well as premium consumer goods such as tea and tea cups. Our products are sourced from reputable manufacturers to ensure the highest quality."
        imageSrc={Service3}
        imageBorder={true}
        imageDecoratorBlob={true}
        primaryButtonText={"View All Products"}
        primaryButtonUrl="/products"
        buttonRounded={true}
      />
      <FeatureWithSteps
        subheading={<Subheading>SERVICES</Subheading>}
        heading={
          <>
            Comprehensive <HighlightedText>Support</HighlightedText>
          </>
        }
        textOnLeft={false}
        imageSrc={macHeroScreenshotImageSrc}
        imageDecoratorBlob={true}
        decoratorBlobCss={tw`xl:w-40 xl:h-40 opacity-15 -translate-x-1/2 left-1/2`}
      />
      {/*      <MainFeature2
        subheading={<Subheading>VALUES</Subheading>}
        heading={
          <>
            We Always Abide by Our{" "}
            <HighlightedText>Principles.</HighlightedText>
          </>
        }
        imageSrc={prototypeIllustrationImageSrc}
        showDecoratorBlob={false}
        features={[
          {
            Icon: MoneyIcon,
            title: "Affordable",
            description:
              "We promise to offer you the best rate we can - at par with the industry standard.",
            iconContainerCss: tw`bg-green-300 text-green-800`,
          },
          {
            Icon: BriefcaseIcon,
            title: "Professionalism",
            description:
              "We assure you that our templates are designed and created by professional designers.",
            iconContainerCss: tw`bg-red-300 text-red-800`,
          },
        ]}
      /> */}
      {/* <Pricing
        subheading={<Subheading>Pricing</Subheading>}
        heading={
          <>
            Reasonable & Flexible <HighlightedText>Plans.</HighlightedText>
          </>
        }
        plans={[
          {
            name: "Personal",
            price: "$17.99",
            duration: "Monthly",
            mainFeature: "For Individuals",
            features: [
              "30 Templates",
              "7 Landing Pages",
              "12 Internal Pages",
              "Basic Assistance",
            ],
          },
          {
            name: "Business",
            price: "$37.99",
            duration: "Monthly",
            mainFeature: "For Small Businesses",
            features: [
              "60 Templates",
              "15 Landing Pages",
              "22 Internal Pages",
              "Priority Assistance",
            ],
            featured: true,
          },
          {
            name: "Enterprise",
            price: "$57.99",
            duration: "Monthly",
            mainFeature: "For Large Companies",
            features: [
              "90 Templates",
              "27 Landing Pages",
              "37 Internal Pages",
              "Personal Assistance",
            ],
          },
        ]}
      /> */}
      {/* <Testimonial
        subheading={<Subheading>Testimonials</Subheading>}
        heading={
          <>
            Our Clients <HighlightedText>Love Us.</HighlightedText>
          </>
        }
        testimonials={[
          {
            stars: 5,
            profileImageSrc:
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
            heading: "Amazing User Experience",
            quote:
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
            customerName: "Charlotte Hale",
            customerTitle: "Director, Delos Inc.",
          },
          {
            stars: 5,
            profileImageSrc:
              "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80",
            heading: "Love the Developer Experience and Design Principles !",
            quote:
              "Sinor Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
            customerName: "Adam Cuppy",
            customerTitle: "Founder, EventsNYC",
          },
        ]}
      /> */}
      <FAQ
        subheading={<Subheading>FAQS</Subheading>}
        heading={
          <>
            You have <HighlightedText>Questions ?</HighlightedText>
          </>
        }
        faqs={[
          {
            question: " What types of products do you trade ?",
            answer:
              "We specialize in trading a wide range of industrial and consumer goods, including raw materials, machinery, electronics, home appliances, and more. Our extensive network allows us to source high-quality products at competitive prices.",
          },
          {
            question: "How can I place an order with your company ?",
            answer:
              "You can place an order by contacting our sales team via email, phone, or through our website’s contact form. Provide us with the details of the products you need, and we’ll guide you through the ordering process.",
          },
          {
            question: "Do you offer international shipping ?",
            answer:
              "Yes, we offer international shipping to many countries around the world. Our logistics team ensures that your orders are delivered safely and on time, no matter where you are located.",
          },
          {
            question: "What are your payment terms ?",
            answer:
              "Our payment terms vary depending on the order size and customer profile. We typically accept payments via bank transfer, credit card, and other secure payment methods. For large orders, we may offer flexible payment plans upon agreement.",
          },
          {
            question:
              "Can you source specific products that are not listed on your website ?",
            answer:
              "Yes, we have a broad network of suppliers and can often source specific products upon request. If you need a particular item that is not listed on our website, please contact us with your requirements, and we will do our best to assist you.",
          },
          {
            question: "What quality assurance measures do you have in place ?",
            answer:
              "We prioritize quality and reliability in all our trades. Our team conducts thorough inspections and quality checks on all products before they are shipped. Additionally, we work with reputable manufacturers and suppliers to ensure that you receive the best products available.",
          },
        ]}
      />
      <GetStarted />
      <Footer />
    </AnimationRevealPage>
  );
};


