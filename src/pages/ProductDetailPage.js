import React from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import cableTie1 from "../images/cableTies.svg";
import mounts1 from "../images/mounts.svg";
import dinRail1 from "../images/dinRail.svg";
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
      altText: "nylon cable tie exporters in india",
      businessType: "Exporters",
      heading_1:
        "Top Nylon Cable Tie Exporters in India - Quality Nylon Cable Solutions",
      details: {
        Name: "Nylon Cable Tie",
        Brand: "Oneotech Enterprises",
        Length: "100 / 150 / 200 / 250 / 300mm",
        "Usage/Application": "Cable Fitting / Bundling",
        "Packaging Size": "100 pcs",
        Width: "2.5 mm / 3.6 mm / 4.8 mm",
        Material: "Nylon",
        Color: "Natural / Black",
        Description:
          "As one of the best nylon cable tie exporters in India, Oneotech Enterprises specializes in delivering a premium range of nylon cable ties, including plastic and high-quality nylon cable ties designed to meet the exact specifications of clients.",
        AdditionalDescription: {
          h2_1: "Why Choose Oneotech Enterprises: Leading Suppliers and Exporters of Nylon Cable Ties in India",
          para_1:
            "As leading nylon cable tie exporters in India, we pride ourselves on delivering products that meet the highest standards of quality and durability. Our nylon cable ties are meticulously crafted to ensure superior strength and reliability, making them perfect for various applications, including cable fitting and bundling. With multiple sizes and colors available, our nylon cable ties cater to diverse industrial and commercial needs. As the leading exporter of nylon cable ties in India, we ensure that every product meets the highest standards.",
          h2_2: "High-Quality Nylon Cable Ties from Leading Exporters in India",
          para_2:
            "At Oneotech Enterprises, we understand the importance of dependable nylon cable ties in maintaining organized and secure wiring systems. Our commitment as top nylon cable tie exporters in India is to offer optimal performance even in challenging environments, ensuring long-lasting use. By choosing us, you benefit from our expertise, dedicated to providing exceptional products tailored to your specifications.",
          para_3:
            "Oneotech Enterprises Nylon Cable Ties are manufactured from high-quality Nylon 6.6 & used for bundling, tightening of wire & cables. Our range includes UV Black Stabilised (For Outdoor Application, Weather Resistant) and Heat Stabilized Material of Fire Retardant (FR) grade. We guarantee the best quality and performance in our products.",
          h2_3: "Features of Oneotech Enterprises Nylon Cable Ties",
          para_4:
            "The specially formulated Nylon 6.6 used offers higher tensile strength and flexibility, as well as a wide temperature range. Even at higher than recommended temperatures or exposure to flame, the cable ties do not emit toxic or irritating by-products. This commitment to high-quality standards is what makes us one of the leading nylon cable tie exporters in India.",
          heading_2:
            "The Silent Features of Oneotech Enterprises Nylon Cable Tie are:",
          points_1:
            " - High-quality Polyamide 6.6 Cable ties\n - Design: According to IEC 62275\n - Halogen-Free Material: Polyamide 6.6\n - UL Recognized Material\n - Continuous Operating Temperature: -40°C to 85°C\n - Colours: Natural / White\n - Good Resistance to Oils and Solvents\n - Greater Flexibility\n - RoHS Compliant\n - Flammability Class: UL 94V2",
          h2_4: "Efficient Export Process by Nylon Cable Tie Exporters in India",
          para_5:
            "As one of the leading bulk nylon cable tie exporters in India, Oneotech Enterprises provides a seamless and efficient export process to clients worldwide. Our strong relationships with logistics partners ensure timely deliveries of bulk orders, making us one of the most reliable exporters of nylon cable ties from India.",
          h3_1: "Frequently Asked Questions (FAQ)",
          faq1_question:
            "How do leading nylon cable tie exporters from India ensure top product quality?",
          faq1_answer:
            "At Oneotech Enterprises, we implement strict quality control measures to ensure that every product meets international standards for strength, flexibility, and durability.",
          faq2_question:
            "What types of nylon cable ties are available for export from India?",
          faq2_answer:
            "As one of the top nylon cable tie exporters in India, we offer a wide range of nylon cable ties, including UV Black Stabilized, Heat Stabilized, and fire-retardant (FR) grade materials.",
          faq3_question:
            "What is the production capacity of Oneotech Enterprises for nylon cable ties?",
          faq3_answer:
            "Our production capacity exceeds 10,000,000 nylon cable ties, allowing us to meet the needs of both large and small-scale clients as one of the leading bulk nylon cable tie exporters in India.",
          heading_3: "Additional Information",
          points_2: "- Production Capacity: 10,000,000\n - Lead Time: 2 weeks",
        },
      },
    },
    "leading-cable-tie-mounts-exporters-in-india": {
      images: [mounts1],
      altText: "leading cable tie mounts exporters in india",
      businessType: "Exporters",
      heading_1:
        "Top Cable Tie Mounts Exporters in India | High-Performance Mounting Solutions",
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
          h1: "Top Cable Tie Mount Exporters in India | High-Performance Mounting Solutions",
          para_1:
            "As one of the leading cable tie mounts exporters in India, Oneotech Enterprises specializes in producing high-quality, durable mounts designed for industrial equipment and heavy-load applications. Our cable tie mounts provide secure anchoring for cable bundles in various settings, making them ideal for industrial and commercial use. We also offer bulk export solutions, ensuring our products meet the needs of large-scale projects globally.",
          h2_1: "Why Choose Oneotech Enterprises: Trusted Cable Tie Mount Exporters in India",
          para_2:
            "As one of the top cable tie mount suppliers and exporters in India, Oneotech Enterprises offers a range of durable and high-performance mounts designed for robust equipment mounting applications. Our cable tie mounts are meticulously engineered to support heavy loads and ensure stability, making them ideal for various industrial and commercial settings. Our products are made from premium polyamide, providing superior strength, durability, and resistance to harsh environmental conditions.",
          h2_2: "Key Features of Our High-Quality Cable Tie Mounts for Industrial Applications",
          para_3:
            "Oneotech Enterprises' 4-way cable tie mounts are made from high-quality polyamide and designed for secure anchoring of cable ties to wire bundles. These mounts can be installed using acrylic-based self-adhesive for lightweight mounting applications or M3 screws for heavy-duty installations. As one of the leading cable tie mount exporters in India, we ensure that our products meet the stringent demands of industrial settings.",
          points_1: [
            "3M acrylic-based adhesive with PE foam carrier provides a strong and reliable bond for medium-duty applications.",
            "Central fixing hole for heavy-duty installations.",
            "Four-sided insertion allows flexibility with a wide range of cable ties.",
            "Max cable tie width for a 19x19 mm base is 4.2 mm.",
            "UL Recognized Material for indoor use.",
          ],
          h2_3: "Advantages of Oneotech Enterprises - Leading Cable Tie Mount Exporters in India",
          para_4:
            "As a trusted cable tie mount exporter in India, Oneotech Enterprises offers numerous advantages with our products:",
          points_2: [
            "High Abrasion Resistance: Ensures long-lasting durability in demanding applications.",
            "Higher Static Load Stability: Ideal for supporting heavy cable bundles.",
            "Halogen-Free Material: Made from Polyamide 6.6, compliant with environmental safety standards.",
          ],
          h3_1: "Frequently Asked Questions (FAQ)",
          faq1_question:
            "What are the main uses of cable tie mounts exported from India?",
          faq1_answer:
            "Oneotech Enterprises is a leading exporter in India known for its high-quality cable tie mounts, designed to withstand tough industrial conditions and provide reliable performance.",
          faq2_question:
            "What sizes of cable tie mounts are available for export?",
          faq2_answer:
            "We offer cable tie mounts in sizes ranging from 19x19mm to 28x28mm, suitable for both light and heavy-duty applications.",
          faq3_question: "How do you ensure timely delivery for bulk orders?",
          faq3_answer:
            "We work closely with our logistics partners to ensure fast and reliable delivery of bulk orders worldwide.",
        },
      },
    },
    "leading-din-rail-supplier-in-india": {
      images: [dinRail1],
      altText: "leading din rail supplier in india",
      businessType: "Supplier",
      heading_1: "Why Choose Oneotech Enterprises for Your DIN Rail Needs?",
      details: {
        Name: "DIN Rail",
        Brand: "Oneotech Enterprises",
        Length: "1m / 2m / 3m",
        Material: "Steel",
        Plating: "Zinc",
        Color: "Silver",
        Description:
          "We specialize in manufacturing durable DIN Rails for various industrial and commercial applications. Our DIN Rails are designed to withstand heavy loads and provide reliable support for electrical equipment.",
        AdditionalDescription: {
          para_1:
            "At Oneotech Enterprises, we take pride in being the leading DIN rail supplier in India, delivering premium, corrosion-resistant DIN rails for both industrial and commercial applications. Our DIN rails are engineered to meet the toughest demands, ensuring reliable and long-lasting performance for mounting and organizing electrical equipment.",
          para_2:
            "As a top DIN rail manufacturer in India, we understand the critical importance of DIN rails in electrical systems. Our DIN rails, made from high-grade steel with zinc plating for added durability, offer the reliability and strength you need. Here’s why Oneotech Enterprises stands out:",
          points_1:
            "- High-Quality Standards: Our DIN rails are designed to endure heavy loads while maintaining performance in industrial environments.\n- Customization Options: Available in various lengths (1m, 2m, 3m) and thicknesses to meet diverse application requirements.\n- Corrosion Resistance: Zinc-plated rails ensure long-lasting protection, even in harsh environments.\n- Fast Production and Delivery: With a production capacity of 5,000,000 units and a lead time of just 2 weeks, we guarantee timely delivery for your projects.",
          heading_2: "High-Quality DIN Rails for Industrial Applications",
          points_2:
            "- Heavy-Duty Equipment Support: Designed to handle substantial loads, providing secure and reliable mounting for electrical components.\n- Corrosion Resistance: Zinc plating protects against rust and environmental damage, ensuring long-lasting performance both indoors and outdoors.\n- Versatile Applications: Suitable for various industrial and commercial settings, including automation systems, control panels, and distribution boards.",
          heading_3: "Product Descriptions",
          points_3:
            "- Brand: Oneotech Enterprises\n- Length: Available in 1m, 2m, 3m\n- Material: High-quality Steel\n- Plating: Zinc-plated for corrosion resistance\n- Color: Silver",
          heading_4: "Silent Features of Oneotech Enterprises DIN Rails",
          points_4:
            "- High-Quality Steel Construction: Built for durability and strength, perfect for mounting electrical components.\n- Zinc Plating: Provides superior resistance to rust and corrosion, extending the lifespan of the DIN rails.\n- Designed for Heavy-Duty Mounting: Ideal for supporting substantial loads in industrial environments.",
          heading_5: "DIN Rail Applications",
          points_5:
            "- DIN Rails for Electrical Installations: Our DIN rails provide secure, organized mounting for electrical components in control panels, distribution boards, and automation systems.\n- How DIN Rails Improve Industrial Equipment Efficiency: By offering reliable, easy-to-install mounting solutions, our DIN rails streamline the organization of electrical wiring and equipment. This leads to reduced maintenance time, increased operational efficiency, and minimized downtime for industrial systems.",
          heading_6: "Additional Information",
          points_6:
            "- Production Capacity: 5,000,000 units\n- Lead Time: 2 weeks",
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
      {/* Dynamic Helmet Meta Data */}
      {/* Helmet for "leading-nylon-cable-tie-exporters-in-india" */}
      {seoUrl === "leading-nylon-cable-tie-exporters-in-india" && (
        <Helmet>
          <title>
            Top Nylon Cable Tie Exporters in India | Oneotech Enterprises
          </title>
          <meta
            name="description"
            content="Leading nylon cable tie exporters in India, offering premium solutions for industrial use. Contact us for bulk orders!"
          />
          <link
            rel="canonical"
            href="https://www.oneotechenterprises.com/products/leading-nylon-cable-tie-exporters-in-india"
          />
        </Helmet>
      )}
      {/* Helmet for "leading-cable-tie-mounts-exporters-in-india" */}
      {seoUrl === "leading-cable-tie-mounts-exporters-in-india" && (
        <Helmet>
          <title>
            Top Cable Tie Mount Exporters in India | Oneotech Enterprises
          </title>
          <meta
            name="description"
            content="Oneotech Enterprises, a leading cable tie mount exporter in India, provides durable solutions for industrial applications. Contact us for bulk!"
          />
          <link
            rel="canonical"
            href="https://www.oneotechenterprises.com/products/leading-cable-tie-mount-exporters-in-india"
          />
        </Helmet>
      )}
      {/* Helmet for "leading-din-rail-supplier-in-india" */}
      {seoUrl === "leading-din-rail-supplier-in-india" && (
        <Helmet>
          <title>Top DIN Rail Supplier in India | Oneotech Enterprises</title>
          <meta
            name="description"
            content="Oneotech Enterprises is a premier DIN rail supplier in India, offering high-quality solutions for various industrial applications."
          />
          <link
            rel="canonical"
            href="https://www.oneotechenterprises.com/products/leading-din-rail-supplier-in-india"
          />
        </Helmet>
      )}

      <Header />
      <ContentContainer>
        <HeadingRow>
          <Heading>
            {product?.heading_1 // Check if heading_1 exists directly in the product object
              ? product.heading_1
              : details?.AdditionalDescription?.heading_1 // Fallback to details.AdditionalDescription.heading_1
              ? details.AdditionalDescription.heading_1
              : `${details.Name} - ${product.businessType}`}{" "}
            {/* Fallback to the default */}
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
              <SectionTitle>Product Specifications</SectionTitle>
              <Table>
                <tbody>
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
          {/* Check for and render h2_1 */}
          {details?.AdditionalDescription?.h2_1 && (
            <>
              <SectionHead>{details.AdditionalDescription.h2_1}</SectionHead>
              <br />
            </>
          )}

          {/* Check for and render para_1 */}
          {details?.AdditionalDescription?.para_1 && (
            <>
              <p>{details.AdditionalDescription.para_1}</p>
              <br />
            </>
          )}

          {/* Check for and render h2_2 */}
          {details?.AdditionalDescription?.h2_2 && (
            <>
              <SectionHead>{details.AdditionalDescription.h2_2}</SectionHead>
              <br />
            </>
          )}

          {/* Check for and render para_2 */}
          {details?.AdditionalDescription?.para_2 && (
            <>
              <p>{details.AdditionalDescription.para_2}</p>
              <br />
            </>
          )}

          {/* Check for and render h2_3 */}
          {details?.AdditionalDescription?.h2_3 && (
            <>
              <SectionHead>{details.AdditionalDescription.h2_3}</SectionHead>
              <br />
            </>
          )}

          {/* Check for and render para_3 */}
          {details?.AdditionalDescription?.para_3 && (
            <>
              <p>{details.AdditionalDescription.para_3}</p>
              <br />
            </>
          )}

          {/* Check for and render h2_4 */}
          {details?.AdditionalDescription?.h2_4 && (
            <>
              <SectionHead>{details.AdditionalDescription.h2_4}</SectionHead>
              <br />
            </>
          )}

          {/* Check for and render para_4 */}
          {details?.AdditionalDescription?.para_4 && (
            <>
              <p>{details.AdditionalDescription.para_4}</p>
              <br />
            </>
          )}

          {/* Check for and render para_5 */}
          {details?.AdditionalDescription?.para_5 && (
            <>
              <p>{details.AdditionalDescription.para_5}</p>
              <br />
            </>
          )}

          {/* Check for and render heading_2 */}
          {details?.AdditionalDescription?.heading_2 && (
            <>
              <SectionHead>
                {details.AdditionalDescription.heading_2}
              </SectionHead>
              <br />
            </>
          )}

          {/* Handle points_1 - Check if it's an array or string */}
          {details?.AdditionalDescription?.points_1 && (
            <>
              {Array.isArray(details.AdditionalDescription.points_1) ? (
                <ul>
                  {details.AdditionalDescription.points_1.map(
                    (point, index) => (
                      <li key={index}>{point}</li>
                    )
                  )}
                </ul>
              ) : typeof details.AdditionalDescription.points_1 === "string" ? (
                <ul>
                  {details.AdditionalDescription.points_1
                    .split("\n")
                    .map((point, index) => (
                      <li key={index}>{point.trim()}</li>
                    ))}
                </ul>
              ) : null}
              <br />
            </>
          )}

          {/* Check for and render heading_3 */}
          {details?.AdditionalDescription?.heading_3 && (
            <>
              <SectionHead>
                {details.AdditionalDescription.heading_3}
              </SectionHead>
              <br />
            </>
          )}

          {/* Handle points_2 - Check if it's an array or string */}
          {details?.AdditionalDescription?.points_2 && (
            <>
              {Array.isArray(details.AdditionalDescription.points_2) ? (
                <ul>
                  {details.AdditionalDescription.points_2.map(
                    (point, index) => (
                      <li key={index}>{point}</li>
                    )
                  )}
                </ul>
              ) : typeof details.AdditionalDescription.points_2 === "string" ? (
                <ul>
                  {details.AdditionalDescription.points_2
                    .split("\n")
                    .map((point, index) => (
                      <li key={index}>{point.trim()}</li>
                    ))}
                </ul>
              ) : null}
              <br />
            </>
          )}

          {/* Check for and render heading_4 */}
          {details?.AdditionalDescription?.heading_4 && (
            <>
              <SectionHead>
                {details.AdditionalDescription.heading_4}
              </SectionHead>
              <br />
            </>
          )}

          {/* Handle points_4 - Check if it's an array or string */}
          {details?.AdditionalDescription?.points_4 && (
            <>
              {Array.isArray(details.AdditionalDescription.points_4) ? (
                <ul>
                  {details.AdditionalDescription.points_4.map(
                    (point, index) => (
                      <li key={index}>{point}</li>
                    )
                  )}
                </ul>
              ) : typeof details.AdditionalDescription.points_4 === "string" ? (
                <ul>
                  {details.AdditionalDescription.points_4
                    .split("\n")
                    .map((point, index) => (
                      <li key={index}>{point.trim()}</li>
                    ))}
                </ul>
              ) : null}
              <br />
            </>
          )}

          {/* Check for and render heading_5 */}
          {details?.AdditionalDescription?.heading_5 && (
            <>
              <SectionHead>
                {details.AdditionalDescription.heading_5}
              </SectionHead>
              <br />
            </>
          )}

          {/* Handle points_5 - Check if it's an array or string */}
          {details?.AdditionalDescription?.points_5 && (
            <>
              {Array.isArray(details.AdditionalDescription.points_5) ? (
                <ul>
                  {details.AdditionalDescription.points_5.map(
                    (point, index) => (
                      <li key={index}>{point}</li>
                    )
                  )}
                </ul>
              ) : typeof details.AdditionalDescription.points_5 === "string" ? (
                <ul>
                  {details.AdditionalDescription.points_5
                    .split("\n")
                    .map((point, index) => (
                      <li key={index}>{point.trim()}</li>
                    ))}
                </ul>
              ) : null}
              <br />
            </>
          )}

          {/* Check for and render heading_6 */}
          {details?.AdditionalDescription?.heading_6 && (
            <>
              <SectionHead>
                {details.AdditionalDescription.heading_6}
              </SectionHead>
              <br />
            </>
          )}

          {/* Handle points_6 - Check if it's an array or string */}
          {details?.AdditionalDescription?.points_6 && (
            <>
              {Array.isArray(details.AdditionalDescription.points_6) ? (
                <ul>
                  {details.AdditionalDescription.points_6.map(
                    (point, index) => (
                      <li key={index}>{point}</li>
                    )
                  )}
                </ul>
              ) : typeof details.AdditionalDescription.points_6 === "string" ? (
                <ul>
                  {details.AdditionalDescription.points_6
                    .split("\n")
                    .map((point, index) => (
                      <li key={index}>{point.trim()}</li>
                    ))}
                </ul>
              ) : null}
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
