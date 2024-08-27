import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import cableTie1 from "../images/cableTies.svg";
import mounts1 from "../images/mounts.svg";
import dinRail1 from "../images/dinRail.svg";
import laserMarking1 from "../images/laser.webp";
import AnimationRevealPage from "helpers/AnimationRevealPage";
import Header from "../components/headers/light.js";
import Footer from "components/footers/MiniCenteredFooter.js";

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
`;

const MainSection = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 20px;
  align-items: flex-start;
  padding: 20px;
  gap: 20px;

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
  object-fit: cover; /* Ensures the image covers the allocated area */
  border-radius: 8px;

  @media (max-width: 768px) {
    max-height: 300px; /* Limit image size on small screens */
  }
`;

const DetailsContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
`;

const Section = styled.div`
  margin-bottom: 20px;
  padding: 20px;
  width: 100%;
`;

const SectionTitle = styled.h2`
  font-size: 2em;
  font-weight: bold;
  margin-bottom: 10px;

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
  width: 100%; /* Make button full width */
  max-width: 320px; /* Limit width on larger screens */
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 100%; /* Full width on small screens */
  }
`;

const BulkOrderText = styled.p`
  font-size: 14px;
  color: #555;
`;

const ProductDetailsPage = () => {
  const { category, productName } = useParams(); // Get the category and productName from URL params

  const products = {
    "Industrial/Nylon Cable Ties": {
      images: [cableTie1],
      details: {
        Name: "Nylon Cable Ties",
        Brand: "ONOTECH ENTERPRISES",
        Length: "100 / 150 / 200 / 250 / 300mm",
        "Usage/Application": "Cable Fitting / Bundling",
        "Packaging Size": "100 pcs",
        Width: "2.5 mm / 3.6 mm / 4.8 mm",
        Material: "Nylon",
        Color: "Natural White / Black",
        Description:
          "We are amongst the leading firms, specializing in supplying a premium quality range of Cable Tie, Nylon Cable Tie, Plastic Cable Ties. With proven efficiency and value, we ensure to fulfill the exact specifications of clients in the best possible manner.",
      },
    },
    "Industrial/Cable Tie Mounts": {
      images: [mounts1],
      details: {
        Name: "Cable Tie Mounts",
        Brand: "ONOTECH ENTERPRISES",
        Sizes: "19 x 19mm / 25 x 25mm / 28 x 28mm",
        "Usage/Application": "Equipment Mounting",
        "Packaging Size": "100 pcs / 200 pcs",
        Material: "Nylon",
        Color: "White / Black",
        Description:
          "We specialize in manufacturing durable mounts for various industrial equipment. Our mounts are designed to withstand heavy loads and provide reliable support for your equipment.",
      },
    },
    "Industrial/Din Rail (MCB Channel)": {
      images: [dinRail1],
      details: {
        Name: "Din Rail (MCB Channel)",
        Brand: "ONOTECH ENTERPRISES",
        Size: "35 x 7.5 / 35 x 15 / 32 x 15/ 15 x 5",
        Length: "1mtr/2mtr",
        "Usage/Application": "Equipment Mounting",
        "Packaging Size": "25 / 50 / 100 / 200",
        Thickness: "0.9mm / 1mm / 1.5mm",
        Material: "CRC",
        Plating: "Zinc",
        Description:
          "We specialize in manufacturing durable Din Rails for various industrial equipment. Our Din Rails are designed to withstand heavy loads and provide reliable support for your equipment.",
      },
    },
    "Industrial/Laser Marking Machine": {
      images: [laserMarking1],
      details: {
        Name: "Laser Marking Machine",
        Brand: "ONOTECH ENTERPRISES",
        "Minimum Order Quantity": "1 Piece",
        "Usage/Application": "All plastics, Glass etc",
        "Offering Laser": "Cables",
        Power: "3W",
        Voltage: "220V",
        "Country of Origin": "Made in India",
        Description:
          "High-quality laser marking machine suitable for all plastics and glass.",
      },
    },
  };

  const product = products[`${category}/${productName}`];

  if (!product) {
    return <div>Product details not available</div>;
  }

  const { images, details } = product;

  const handleInterestClick = () => {
    const whatsappUrl = `https://api.whatsapp.com/send?phone=9810294854&text=Interested%20in%20${productName}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <AnimationRevealPage>
      <Header />
      <ContentContainer>
        <MainSection>
          <ImageContainer>
            <ProductImage src={images[0]} alt={details.Name} />
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
                      key !== "Brand"
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
