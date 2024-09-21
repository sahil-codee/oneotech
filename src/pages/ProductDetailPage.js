import React from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import cableTie1 from "../images/cableTies.svg";
import mounts1 from "../images/mounts.svg";
import dinRail1 from "../images/dinRail.svg";
import laserMarking1 from "../images/laser.webp";
import AnimationRevealPage from "helpers/AnimationRevealPage";
import Header from "../components/headers/light.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import { SectionHeading } from "components/misc/Headings";
import tw from "twin.macro";

const ProductName = styled.h2`
  font-size: 2em;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ContentContainer = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 40px;
  box-sizing: border-box;
`;

const MainSection = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 20px;
  align-items: flex-start;
  padding: 20px;
  gap: 20px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack on small screens */
    align-items: center;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  max-width: 400px;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 500px; /* Increased height for larger product image */
  object-fit: cover;
  border-radius: 8px;

  @media (max-width: 768px) {
    max-height: 300px; /* Limit image size on small screens */
  }
`;

const DetailsContainer = styled.div`
  flex: 2;
  width: 100%;
  display: block; /* Ensure it does not behave as a flex container */
  box-sizing: border-box;
`;

const Section = styled.div`
  margin-bottom: 20px;
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
`;

const SectionTitle = styled.h2`
  font-size: 2em;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.5em; /* Adjust font size on smaller screens */
  }
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin-top: 20px;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableCell = styled.td`
  padding: 8px;
  border: 1px solid #dddddd;
  text-align: left;
`;

const InterestButton = styled.button`
  margin-top: 20px;
  padding: 10px;
  width: 100%;
  max-width: 320px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const BulkOrderText = styled.p`
  font-size: 14px;
  color: #555;
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
`;

const AdditionalDescriptionSection = styled.div`
  width: 100%;
  margin: 20px 0;
  padding: 20px;
  box-sizing: border-box;
  display: block; /* Ensure it does not inherit flex properties */
`;

const SectionHead = styled.h3`
  font-size: 1em;
  font-weight: bold;
`;

const HeadingRow = tw.div`flex justify-center`;
const Heading = tw(SectionHeading)`text-primary-900`;

const ProductDetailsPage = () => {
  const { seoUrl } = useParams(); // Get the seoUrl from URL params

  const products = {
    "leading-nylon-cable-tie-exporters-in-india": {
      images: [cableTie1],
      altText: "leading nylon cable tie exporters in india",
      businessType: "Exporters",
      details: {
        Name: "Nylon Cable Tie",
        Brand: "Oneotech Enterprises",
        Length: "100 / 150 / 200 / 250 / 300mm",
        "Usage/Application": "Cable Fitting / Bundling",
        "Packaging Size": "100 pcs",
        Width: "2.5 mm / 3.6 mm / 4.8 mm",
        Material: "Nylon",
        Color: "Natural / White / Black",
        Description:
          "We are amongst the leading nylon cable tie exporters in india, specializing in supplying a premium quality range of Cable Tie, Nylon Cable Tie, Plastic Cable Ties. With proven efficiency and value, we ensure to fulfill the exact specifications of clients in the best possible manner.",
        AdditionalDescription: {
          para1: `As leading nylon cable tie exporters in India, we pride ourselves on delivering products that meet the highest standards of quality and durability. Our nylon cable ties, as a top nylon cable tie exporters in India, are meticulously crafted to ensure superior strength and reliability, making them perfect for various applications, including cable fitting and bundling. With multiple sizes and colors available, our nylon cable ties cater to diverse industrial and commercial needs. As the leading exporter of nylon cable ties in India, we ensure that every product meets the highest standards.\n\n`,
          para2: `At Oneotech Enterprises, we understand the importance of dependable nylon cable ties in maintaining organized and secure wiring systems. Our commitment as leading nylon cable tie exporters in India is to offer optimal performance even in challenging environments, ensuring long-lasting use. By choosing us, you benefit from our expertise as the top nylon cable tie exporters in India, dedicated to providing exceptional products tailored to your specifications. Our experience and dedication as a leading nylon cable tie exporters in India set us apart from the competition.\n\n
      Our commitment to excellence and customer satisfaction has established us as a trusted name in the industry. Whether you require nylon cable ties for small-scale or large-scale projects, as leading nylon cable tie exporters in India, we deliver solutions that exceed expectations.`,
          para3: `Oneotech Enterprises Cable Ties are manufactured from high-quality Nylon 6.6 & used for bundling, tightening of wire & cables. Our range includes UV Black Stabilised (For Outdoor Application, Weather Resistant) and Heat Stabilized Material of Fire Retardant (FR) grade. As a leading nylon cable tie exporters in India, we guarantee the best quality and performance in our products.\n\n`,
          para4: `The specially formulated Nylon 6.6 used offers higher tensile strength and flexibility, as well as a wide temperature range. Even at higher than recommended temperatures or exposure to flame, the cable ties do not emit toxic or irritating by-products. This commitment to high-quality standards is what makes us one of the leading nylon cable tie exporters in India.`,
          heading1: `The Silent Features of Oneotech Enterprises Nylon Cable Tie are:\n\n`,
          points1: ` - High quality Polyamide 6.6 Cable ties\n
      - Design: According to IEC 62275\n
      - Halogen Free Material: Polyamide 6.6\n
      - UL Recognised Material\n
      - Continuous Operating Temperature: -40°C to 85°C\n
      - Colours: Natural / White\n
      - Good Resistance to Oils and Solvents\n
      - Greater Flexibility\n
      - RoHS Compliance\n
      - Flammability Class: UL 94V2`,
          heading2: `Additional Information:`,
          points2: `- Production Capacity: 10,000,000\n
      - Delivery Time: 7 - 10 Days\n\n`,
        },
      },
    },

    "leading-cable-tie-mounts-exporters-in-india": {
      images: [mounts1],
      altText: "leading cable tie mounts exporters in india",
      businessType: "Exporters",
      details: {
        Name: "Cable Tie Mounts",
        Brand: "Oneotech Enterprises",
        Sizes: "19 x 19mm / 25 x 25mm / 28 x 28mm",
        "Usage/Application": "Equipment Mounting",
        "Packaging Size": "100 pcs / 200 pcs",
        Material: "Nylon",
        Color: "White / Black",
        Description:
          "We specialize in manufacturing durable mounts for various industrial equipment. Our mounts are designed to withstand heavy loads and provide reliable support for your equipment.",
        AdditionalDescription: {
          para1: `Oneotech Enterprises offers 4-way cable tie mounts, manufactured from high-quality polyamide for secure anchoring of cable ties to wire bundles.\n\n
          Our cable tie mounts can be installed using acrylic-based self-adhesive for lightweight mounting applications or alternatively M3 screws for heavy-duty installations. These mounts ensure strong and secure installations for cable bundles.\n\n`,
          para2: `As leading cable tie mounts exporters in India, we offer a range of durable and high-performance mounts designed for robust equipment mounting applications. Our cable tie mounts are engineered to support heavy loads and ensure stability, making them ideal for various industrial and commercial settings.`,
          heading1: `The Silent Features of 4-way Cable Tie Mounts are:\n\n`,
          points1: ` - 3M acrylic-based adhesive with PE foam carrier provides a strong and reliable bond for medium applications.\n
        - Central fixing hole for heavy-duty applications.\n
        - Allows four-sided insertion with a wide range of cable ties.\n
        - Max cable tie width for a 19x19 mm base is 4.2 mm.\n
        - Indoor use only.\n\n`,
          heading2: `Benefits of Using Oneotech Enterprises Cable Tie Mounts:\n\n`,
          points2: ` - High Abrasion Resistance.\n
        - Higher static load stability for cable bundles.\n
        - Halogen-free material - Polyamide 6.6.\n
        - UL Recognized Material.\n
        - Continuous Operating Temp: -40°C to +85°C.\n
        - Colour: White 3M Tape.\n
        - RoHS Compliance.\n
        - Flammability Class: UL 94V2.\n\n`,
          heading3: `Additional Information:\n\n`,
          points3: `- Production Capacity: 1,000,000.\n
        - Delivery Time: 7 - 10 Days.\n\n`,
        },
      },
    },
    "leading-din-rail-supplier-in-india": {
      images: [dinRail1],
      altText: "leading din rail supplier in india",
      businessType: "Supplier",
      details: {
        Name: "Din Rail",
        Brand: "Oneotech Enterprises",
        Length: "1m / 2m / 3m",
        Material: "Steel",
        Plating: "Zinc",
        color: "Silver",
        Description:
          "We specialize in manufacturing durable Din Rail for various industrial equipment. Our Din Rail are designed to withstand heavy loads and provide reliable support for your equipment.",
        AdditionalDescription: {
          para1: `As leading din rail supplier in india, we specialize in providing high-quality din rails that are essential for effective equipment mounting and organization. Our din rails are designed to handle substantial loads and offer reliable support, ensuring the stability and safety of your electrical installations. Available in various sizes and thicknesses, our din rails meet diverse application requirements with precision.\n\n`,
          para2: `Oneotech Enterprises is dedicated to delivering superior din rails that adhere to stringent quality standards. Our commitment to excellence as top din rail supplier in india is reflected in the durability and performance of our products. Whether you need din rails for industrial or commercial use, we offer solutions that guarantee optimal functionality and dependability.\n\n`,
          heading1: `Silent Features of Oneotech Enterprises Din Rail:\n\n`,
          points1: `- High-quality steel construction.\n - Zinc plating for corrosion resistance.\n - Designed for heavy-duty equipment mounting.\n`,
          heading2: `Additional Information:\n\n`,
          points2: `- Production Capacity: 5,000,000.\n - Delivery Time: 7 - 10 Days.\n\n
          Our expertise and dedication to quality ensure that you receive the best products for your mounting needs. As leading din rail supplier in india, we are focused on providing products that enhance your operational efficiency and contribute to the success of your projects.`,
        },
      },
    },
    "laser-marking-machine": {
      images: [laserMarking1],
      details: {
        Name: "Laser Marking Machine",
        Brand: "Oneotech Enterprises",
        "Minimum Order Quantity": "1 Piece",
        "Usage/Application": "All plastics, Glass etc",
        "Offering Laser": "Cables",
        Power: "3W",
        Voltage: "220V",
        "Country of Origin": "Made in India",
        Description:
          "High-quality laser marking machine suitable for all plastics and glass.",
        AdditionalDescription: {
          para1: `As leading laser marking machine exporters in India, we offer cutting-edge solutions designed for precise and high-quality marking on various materials, including plastics and glass. Our laser marking machines are engineered to provide accurate and permanent markings, making them ideal for a range of applications from industrial labeling to intricate designs.\n\n`,
          para2: `At Oneotech Enterprises, we are committed to providing advanced laser marking technology that meets the highest standards of performance and reliability. Our machines are designed to handle diverse marking needs with efficiency and precision, reflecting our expertise as top laser marking machine exporters in India. With a focus on innovation and quality, we ensure that our products deliver exceptional results.\n\n`,
          heading1: `The Silent Features of Oneotech Enterprises Laser Marking Machine:\n\n`,
          points1: ` - Precision marking on a variety of materials.\n - High-quality construction for durability.\n - Suitable for industrial and commercial use.\n`,
          heading2: `Additional Information:\n\n`,
          points2: `- Production Capacity: 500,000.\n - Delivery Time: 7 - 10 Days.\n\n`,
        },
      },
    },
  };

  const product = products[seoUrl];

  if (!product) {
    return <div>Product details not available</div>;
  }

  const { images, details } = product;

  const handleInterestClick = () => {
    const whatsappUrl = `https://api.whatsapp.com/send?phone=9810294854&text=Interested%20in%20${details.Name}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <AnimationRevealPage>
      <Helmet>
        <title>
          Leading Nylon Cable Tie Exporters in India | Oneotech Enterprises
        </title>
        <meta
          name="description"
          content="Oneotech Enterprises is one of the leading nylon cable tie exporters in India. We offer a premium range of high-quality nylon cable ties, plastic cable ties, and more for industrial applications."
        />
        <link
          rel="canonical"
          href="https://www.oneotechenterprises.com/products/leading-nylon-cable-tie-exporters-in-india"
        />
        <meta
          property="og:title"
          content="Leading Nylon Cable Tie Exporters in India | Oneotech Enterprises"
        />
        <meta
          property="og:description"
          content="Explore our top-quality nylon cable ties at Oneotech Enterprises. As a leading nylon cable tie exporters in India, we specialize in delivering superior strength and durability for all your bundling needs."
        />
        <meta
          property="og:image"
          content="https://www.oneotechenterprises.com/nylon-cable-tie-image.jpg"
        />
      </Helmet>
      <Helmet>
        <title>
          Leading Cable Tie Mount Exporters in India | Oneotech Enterprises
        </title>
        <meta
          name="description"
          content="Oneotech Enterprises is one of the leading cable tie mount exporters in India, offering a premium range of high-quality cable tie mounts and nylon cable ties for various industrial and commercial applications."
        />
        <link
          rel="canonical"
          href="https://www.oneotechenterprises.com/products/leading-cable-tie-mount-exporters-in-india"
        />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Leading Cable Tie Mount Exporters in India | Oneotech Enterprises"
        />
        <meta
          property="og:description"
          content="Explore high-quality cable tie mounts and nylon cable ties from Oneotech Enterprises. As one of the leading cable tie mount exporters in India, we provide durable and reliable products for industrial needs."
        />
        <meta
          property="og:image"
          content="https://www.oneotechenterprises.com/cable-tie-mount-image.jpg"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.oneotechenterprises.com/products/leading-cable-tie-mount-exporters-in-india"
        />

        {/* Structured Data for SEO */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Oneotech Enterprises",
              "url": "https://www.oneotechenterprises.com/",
              "logo": "https://www.oneotechenterprises.com/logo192.png",
              "sameAs": [
                "https://www.facebook.com/oneotechenterprises",
                "https://www.twitter.com/oneotechenterprises",
                "https://www.instagram.com/oneotechenterprises"
              ],
              "description": "Oneotech Enterprises is a leading exporter of cable tie mounts and industrial products such as nylon cable ties. Serving markets worldwide, including the USA, Europe, and UAE."
            }
          `}
        </script>
      </Helmet>
      <Helmet>
        <title>Leading Din Rail Supplier in India | Oneotech Enterprises</title>
        <meta
          name="description"
          content="Oneotech Enterprises is a leading Din Rail supplier in India, providing high-quality Din Rails designed for heavy-duty industrial equipment mounting with zinc plating for corrosion resistance."
        />
        <link
          rel="canonical"
          href="https://www.oneotechenterprises.com/products/leading-din-rail-supplier-in-india"
        />

        {/* Open Graph Meta Tags for Social Sharing */}
        <meta
          property="og:title"
          content="Leading Din Rail Supplier in India | Oneotech Enterprises"
        />
        <meta
          property="og:description"
          content="Explore durable and high-performance Din Rails from Oneotech Enterprises. As a top Din Rail supplier in India, we offer solutions for heavy-duty equipment mounting and support."
        />
        <meta
          property="og:image"
          content="https://www.oneotechenterprises.com/din-rail-image.jpg"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.oneotechenterprises.com/products/leading-din-rail-supplier-in-india"
        />

        {/* Structured Data for SEO */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Oneotech Enterprises",
              "url": "https://www.oneotechenterprises.com/",
              "logo": "https://www.oneotechenterprises.com/logo192.png",
              "sameAs": [
                "https://www.facebook.com/oneotechenterprises",
                "https://www.twitter.com/oneotechenterprises",
                "https://www.instagram.com/oneotechenterprises"
              ],
              "description": "Oneotech Enterprises is a leading Din Rail supplier in India. We specialize in providing high-quality steel Din Rails with zinc plating for corrosion resistance, designed for heavy-duty industrial applications."
            }
          `}
        </script>
      </Helmet>
      <Header />
      <ContentContainer>
        <HeadingRow>
          <Heading>
            {" "}
            {`Leading ${details.Name} ${product.businessType} in India`}
          </Heading>
        </HeadingRow>
        <MainSection>
          <ImageContainer>
            <ProductImage src={images[0]} alt={product.altText} />
          </ImageContainer>
          <DetailsContainer>
            <Section>
              <ProductName>{details.Name}</ProductName>
              <p>{details.Description}</p>
            </Section>
            <Section>
              <SectionTitle>Product Description</SectionTitle>
              <Table>
                <tbody>
                  {/* Move "Brand" to the top */}
                  {details.Brand && (
                    <TableRow>
                      <TableCell>Brand</TableCell>
                      <TableCell>{details.Brand}</TableCell>
                    </TableRow>
                  )}
                  {Object.entries(details).map(([key, value]) => {
                    if (
                      key !== "Name" &&
                      key !== "Description" &&
                      key !== "Brand" &&
                      key !== "AdditionalDescription"
                    ) {
                      return (
                        <TableRow key={key}>
                          <TableCell>{key}</TableCell>
                          <TableCell>{value}</TableCell>
                        </TableRow>
                      );
                    }
                    return null;
                  })}
                </tbody>
              </Table>
            </Section>
          </DetailsContainer>
        </MainSection>
        <AdditionalDescriptionSection>
          <SectionTitle>
            {`Leading ${details.Name} ${product.businessType} in India`}
          </SectionTitle>
          <p>{details.AdditionalDescription.para1}</p>
          <br />
          <p>{details.AdditionalDescription.para2}</p>
          <br />
          <p>{details.AdditionalDescription.para3}</p>
          <br />
          <p>{details.AdditionalDescription.para4}</p>
          <br />
          <SectionHead>{details.AdditionalDescription.heading1}</SectionHead>
          <br />
          <ul>
            {details.AdditionalDescription.points1
              .split("\n")
              .map((point, index) => (
                <li key={index}>{point.trim()}</li>
              ))}
          </ul>
          <br />
          <SectionHead>{details.AdditionalDescription.heading2}</SectionHead>
          <br />
          <ul>
            {details.AdditionalDescription.points2
              .split("\n")
              .map((point, index) => (
                <li key={index}>{point.trim()}</li>
              ))}
          </ul>
          <br />
          {details.AdditionalDescription.heading3 && (
            <>
              <SectionHead>
                {details.AdditionalDescription.heading3}
              </SectionHead>
              <br />
              <ul>
                {details.AdditionalDescription.points3
                  .split("\n")
                  .map((point, index) => (
                    <li key={index}>{point.trim()}</li>
                  ))}
              </ul>
              <br />
            </>
          )}
        </AdditionalDescriptionSection>
        <BulkOrderText>Reach out to us for bulk orders.</BulkOrderText>
        <InterestButton onClick={handleInterestClick}>
          Yes, I'm Interested
        </InterestButton>
      </ContentContainer>
      <Footer />
    </AnimationRevealPage>
  );
};

export default ProductDetailsPage;
