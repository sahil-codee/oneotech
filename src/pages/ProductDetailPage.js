import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";
import { countries } from "countries-list"; // You can use any country list package or API
import cableTie1 from "../images/cableties.jpg";
// import cableTie2 from "../images/cableties2.jpg";
// import cableTie3 from "../images/cableties3.jpg";
// import cableTie4 from "../images/cableties4.jpg";
// import cableTie5 from "../images/cableties5.jpg";
import mounts1 from "../images/mounts.jpg";
// import mounts2 from "../images/mounts2.jpg";
// import mounts3 from "../images/mounts3.jpg";
// import mounts4 from "../images/mounts4.jpg";
// import mounts5 from "../images/mounts5.jpg";
import dinRail1 from "../images/dinrails.png";
// import dinRail2 from "../images/dinrails2.png";
// import dinRail3 from "../images/dinrails3.png";
// import dinRail4 from "../images/dinrails4.png";
// import dinRail5 from "../images/dinrails5.png";
import laserMarking1 from "../images/laser.webp";
// import laserMarking2 from "../images/laser2.webp";
// import laserMarking3 from "../images/laser3.webp";
// import laserMarking4 from "../images/laser4.webp";
// import laserMarking5 from "../images/laser5.webp";
import tea1 from "../images/teaBag.jpeg";
// import tea2 from "../images/teaBag2.jpeg";
// import tea3 from "../images/teaBag3.jpeg";
// import tea4 from "../images/teaBag4.jpeg";
// import tea5 from "../images/teaBag5.jpeg";
import AnimationRevealPage from "helpers/AnimationRevealPage";
import Header from "../components/headers/light.js";
import Footer from "components/footers/MiniCenteredFooter.js";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6%;
  @media (min-width: 768px) and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 20px;
  }
`;

const MainImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.5);
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    max-width: 300px;
    margin-bottom: 20px;
  }
  @media (min-width: 1024px) {
    max-width: 450px;
    height: 450px;
    margin-bottom: 10px;
  }
`;

const ThumbnailContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 10px;
`;

const Thumbnail = styled.img`
  width: 60px;
  height: 60px;
  margin: 5px;
  cursor: pointer;
  border: 1px solid #ddd;
  &:hover {
    border: 1px solid #007bff;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 50px;
    height: 50px;
  }
  @media (min-width: 1024px) {
    width: 80px;
    height: 80px;
  }
`;
const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  @media (min-width: 768px) {
    width: auto;
  }
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

const ProductName = styled.h2`
  margin-bottom: 20px;
  font-weight: bold;
`;

const InterestButton = styled.button`
  margin-top: 20px;
  padding: 10px;
  width: 220px; /* Set a fixed width for the button */
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const BulkOrderText = styled.p`
  margin-top: 20px;
  font-size: 14px;
  color: #555;
`;

const Popup = styled.div`
  ${tw`fixed top-0 left-0 w-full h-full z-50 bg-gray-900 bg-opacity-50 flex items-center justify-center`}
`;

const PopupContent = styled.div`
  ${tw`bg-white p-8 rounded-lg shadow-lg relative w-full max-w-md`}
`;

const CloseButton = styled.button`
  ${tw`absolute top-0 right-0 m-2 text-gray-500 hover:text-gray-800`}
`;

const Form = styled.form`
  ${tw`flex flex-col`}
`;

const Input = styled.input`
  ${tw`mb-4 p-2 border border-gray-300 rounded`}
`;

const Select = styled.select`
  ${tw`mb-4 p-2 border border-gray-300 rounded`}
`;

const SendButton = styled.button`
  ${tw`bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700`}
`;

const ProductDetailsPage = () => {
  const { category, productName } = useParams(); // Get the category and productName from URL params
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [mobileNumber, setMobileNumber] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [mainImage, setMainImage] = useState("");

  // Define product details based on category and productName
  const products = {
    "Industrial/Nylon Cable Ties": {
      images: [cableTie1],
      details: {
        Length: "100 / 150 / 200 / 250 / 300mm",
        Brand: "ONEOTECH / Ananta",
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
      images: [mounts1, tea1, mounts1],
      details: {
        Sizes: "19 x 19mm / 25 x 25mm / 28 x 28mm",
        Brand: "ONEOTECH",
        "Usage/Application": "Equipment Mounting",
        "Packaging Size": "100 pcs / 200 pcs",
        Material: "Nylon",
        Color: "White / Black",
        Description:
          "We specialize in manufacturing durable mounts for various industrial equipment. Our mounts are designed to withstand heavy loads and provide reliable support for your equipment.",
      },
    },
    "Industrial/Din Rail(MCB Channel)": {
      images: [dinRail1],
      details: {
        Size: "35 x 7.5 / 35 x 15 / 32 x 15/ 15 x 5",
        Length: "1mtr/2mtr",
        Brand: "ONEOTECH",
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
        minimumOrderQuantity: "1 Piece",
        usageApplication: "All plastics, Glass etc",
        offeringLaser: "Cables",
        power: "3W",
        voltage: "220V",
        countryOfOrigin: "Made in India",
        description:
          "High-quality laser marking machine suitable for all plastics and glass.",
      },
    },
    "Consumer/Platinum CTC Tea": {
      images: [tea1],
      details: {
        Brand: "FNG",
        Type: "Platinum CTC Tea",
        MRP: "Rs 520 / per kg",
        Weight: "1kg",
        Origin: "Assam",
        Flavor: "Black Tea",
        Description:
          "Premium quality Platinum CTC Tea leaves for a refreshing experience. Our tea is sourced from the finest tea gardens in Assam, ensuring a rich and robust flavor.",
      },
    },
  };

  const product = products[`${category}/${productName}`];

  if (!product) {
    return <div>Product details not available</div>;
  }

  const { images, details } = product;
  if (!mainImage) setMainImage(images[0]);

  const handleInterestClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleSendClick = (e) => {
    e.preventDefault();

    // Validate input
    if (!mobileNumber || !countryCode) {
      alert("Please enter a valid mobile number and select a country code.");
      return;
    }

    const fullMobileNumber = `+${countryCode}${mobileNumber}`;
    const message = `Interested in ${productName}`;

    // Send the message through WhatsApp
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${9810294854}&text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");

    handleClosePopup();
  };

  return (
    <AnimationRevealPage>
      <Header />
      <Container>
        <ImageContainer>
          <MainImage src={mainImage} alt={`${productName} main image`} />
          <ThumbnailContainer>
            {images.map((img, index) => (
              <Thumbnail
                key={index}
                src={img}
                alt={`${productName} thumbnail ${index + 1}`}
                onClick={() => setMainImage(img)}
              />
            ))}
          </ThumbnailContainer>
        </ImageContainer>
        <div>
          <ProductName>{productName}</ProductName>
          <Table>
            <tbody>
              {Object.entries(details).map(([key, value]) => (
                <TableRow key={key}>
                  <TableCell>{key}</TableCell>
                  <TableCell>{value}</TableCell>
                </TableRow>
              ))}
            </tbody>
          </Table>
          <BulkOrderText>Reach out to us for bulk orders.</BulkOrderText>
          <InterestButton onClick={handleInterestClick}>
            Yes, I'm Interested
          </InterestButton>
        </div>
        {isPopupOpen && (
          <Popup>
            <PopupContent>
              <CloseButton onClick={handleClosePopup}>×</CloseButton>
              <h2>Enter your mobile number</h2>
              <Form onSubmit={handleSendClick}>
                <Select
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                >
                  <option value="">Select Country Code</option>
                  {Object.entries(countries).map(([code, country]) => (
                    <option key={code} value={country.phone}>
                      {country.name} (+{country.phone})
                    </option>
                  ))}
                </Select>
                <Input
                  type="tel"
                  placeholder="Mobile Number"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                />
                <SendButton type="submit">Send</SendButton>
              </Form>
            </PopupContent>
          </Popup>
        )}
      </Container>
      <Footer />
    </AnimationRevealPage>
  );
};

export default ProductDetailsPage;
