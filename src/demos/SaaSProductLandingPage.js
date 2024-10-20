import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet"; // Import react-helmet
import tw from "twin.macro";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import Hero from "components/hero/TwoColumnWithInput.js";

const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
const HighlightedText = tw.span`text-primary-500`;

// Lazy load other components
const Features = React.lazy(() =>
  import("components/features/ThreeColWithSideImage.js")
);
const FAQ = React.lazy(() => import("components/faqs/SingleCol.js"));
const FeaturedProducts = React.lazy(() => import("pages/FeaturedProducts"));

const HomePage = () => {
  const [featuresLoaded, setFeaturesLoaded] = useState(false);
  const [faqLoaded, setFaqLoaded] = useState(false);
  const [productsLoaded, setProductsLoaded] = useState(false);

  useEffect(() => {
    import("components/features/ThreeColWithSideImage.js").then(() =>
      setFeaturesLoaded(true)
    );
    import("components/faqs/SingleCol.js").then(() => setFaqLoaded(true));
    import("pages/FeaturedProducts").then(() => setProductsLoaded(true));
  }, []);

  return (
    <AnimationRevealPage>
      {/* Helmet for setting SEO meta tags */}
      <Helmet>
        <title>
          Oneotech Enterprises | Leading Exporter of Nylon Cable Ties, Cable Tie
          Mounts, and DIN Rails
        </title>
        <meta
          name="description"
          content="Oneotech Enterprises specializes in exporting high-quality nylon cable ties, cable tie mounts, and DIN rails. As a trusted exporter in India, we serve global markets including the USA, Europe, UAE, and Canada."
        />
        <link rel="canonical" href="https://www.oneotechenterprises.com" />

        {/* Open Graph Meta Tags */}
        <meta property="og:site_name" content="Oneotech Enterprises" />
        <meta
          property="og:title"
          content="Oneotech Enterprises - Trusted Exporter of Industrial Products"
        />
        <meta
          property="og:description"
          content="Oneotech Enterprises offers top-quality nylon cable ties, cable tie mounts, and DIN rails. We are dedicated to meeting your industrial needs with reliable products and exceptional service."
        />
        <meta property="og:image" content="%PUBLIC_URL%/logo512.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.oneotechenterprises.com" />

        {/* Structured Data for SEO */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Oneotech Enterprises",
              "url": "https://www.oneotechenterprises.com/",
              "logo": "https://oneotechenterprises.com/logo192.png",
              "sameAs": [
                "https://www.facebook.com/oneotechenterprises",
                "https://www.twitter.com/yourprofile",
                "https://www.instagram.com/yourprofile"
              ],
              "description": "Oneotech Enterprises is a leading exporter of industrial products such as nylon cable ties, cable tie mounts, and DIN rails. Serving markets worldwide, including the USA, Europe, and UAE."
            }
          `}
        </script>
      </Helmet>
      <Hero roundedHeaderButton={true} />
      {featuresLoaded && (
        <Features
          subheading={<Subheading>About Us</Subheading>}
          heading={
            <>
              Aiming for Global <HighlightedText>Leadership.</HighlightedText>
            </>
          }
        />
      )}
      {productsLoaded && (
        <FeaturedProducts subheading={<Subheading>Our Products</Subheading>} />
      )}
      {faqLoaded && (
        <FAQ
          subheading={<Subheading>FAQS</Subheading>}
          heading={
            <>
              You have <HighlightedText>Questions?</HighlightedText>
            </>
          }
          faqs={[
            {
              question: "What types of products do you trade?",
              answer:
                "We specialize in exporting a range of industrial and consumer goods, including nylon cable ties, cable tie mounts, and DIN rails. As a leading exporter in India, we ensure high-quality products for our global clients.",
            },
            {
              question: "How can I place an order with your company?",
              answer:
                "You can place an order by contacting our sales team via email, phone, or through our website’s contact form. Provide us with the details of the products you need, such as cable ties, and we’ll guide you through the ordering process.",
            },
            {
              question: "Do you offer international shipping?",
              answer:
                "Yes, we offer international shipping to many countries around the world. As a nylon cable tie exporter in Delhi, our logistics team ensures that your orders are delivered safely and on time, no matter where you are located.",
            },
            {
              question: "What are your payment terms?",
              answer:
                "Our payment terms vary depending on the order size and customer profile. We typically accept payments via bank transfer, credit card, and other secure payment methods. For large orders, such as bulk exports, we may offer flexible payment plans upon agreement.",
            },
            {
              question:
                "Can you source specific products that are not listed on your website?",
              answer:
                "Yes, we have a broad network of suppliers and can often source specific products upon request. If you need a particular item, such as nylon cable ties, that is not listed on our website, please contact us with your requirements, and we will do our best to assist you.",
            },
            {
              question: "What quality assurance measures do you have in place?",
              answer:
                "We prioritize quality and reliability in all our trades. As a reputable exporter in India, our team conducts thorough inspections and quality checks on all products before they are shipped. Additionally, we work with reputable manufacturers and suppliers to ensure that you receive the best products available.",
            },
          ]}
        />
      )}
      <Footer />
    </AnimationRevealPage>
  );
};

export default HomePage;
