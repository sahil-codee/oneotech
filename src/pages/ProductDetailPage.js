import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import cableTie from "../images/cableties.jpg";
import mounts from "../images/mounts.jpg";
import dinRail from "../images/dinrails.png";
import laserMarking from "../images/laser.webp";
import AnimationRevealPage from "helpers/AnimationRevealPage";
import Header from "../components/headers/light.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import tea from "../images/tea.jpg";
import teaCups from "../images/cups.jpg";
import tw from "twin.macro";
import emailjs from "emailjs-com";
import { countries } from "countries-list"; // You can use any country list package or API

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

const Image = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;

  @media (min-width: 768px) and (max-width: 1024px) {
    max-width: 300px;
    margin-bottom: 20px;
  }

  @media (min-width: 1024px) {
    max-width: 450px;
    margin-right: 20px;
    height: 450px;
    margin-bottom: 0;
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

  // Define product details based on category and productName
  const products = {
    "Industrial/Nylon Cable Ties": {
      image: cableTie,
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
      image: mounts,
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
      image: dinRail,
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
      image: laserMarking,
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

    "Consumer/Tea": {
      image: tea,
      details: {
        Brand: "Premium Tea Co.",
        Type: "Green Tea",
        Weight: "500 g",
        Origin: "China",
        Flavor: "Jasmine",
        Description:
          "Premium quality tea leaves for a refreshing experience. Our Jasmine Green Tea is sourced from the finest tea gardens in China, ensuring a rich and aromatic flavor.",
      },
    },
  };

  const product = products[`${category}/${productName}`];

  if (!product) {
    return <div>Product details not available</div>;
  }

  const { image, details } = product;

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

    const templateParams = {
      productName: productName,
      mobileNumber: `+${countryCode}${mobileNumber}`,
    };

    emailjs
      .send(
        "your_service_id", // replace with your emailjs service ID
        "your_template_id", // replace with your emailjs template ID
        templateParams,
        "your_user_id" // replace with your emailjs user ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Mobile number sent successfully!");
          handleClosePopup();
        },
        (error) => {
          console.error("FAILED...", error);
          alert("Failed to send mobile number. Please try again.");
        }
      );
  };

  return (
    <AnimationRevealPage>
      <Header />
      <Container>
        <Image src={image} alt={productName} />
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
