import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import teaImage1 from "../images/tea.svg"; // Placeholder image for Tea
import teaImage2 from "../images/tea.svg"; // Add other tea images as needed
import AnimationRevealPage from "helpers/AnimationRevealPage";
import Header from "components/headers/light.js";

// Tea product details
const teaProducts = [
  {
    imageSrc: [teaImage1, teaImage2, teaImage2],
    title: "Platinum CTC Tea",
    price: "₹520/kg",
    brand: "FNG",
    packagingSize: "Loose",
    form: "Loose",
    flavor: "Rich CTC Flavor",
    packagingType: "Loose",
    color: "Black",
    type: "Processed Tea",
    processingType: "CTC",
    shelfLife: "24 months",
    usageApplication: "Beverage",
    bestBefore: "24 months",
    boxPackaging: "Available",
    origin: "Assam, India",
    countryOfOrigin: "Made in India",
    minimumOrderQuantity: "500 Kg",
    description:
      "Premium Assam Platinum CTC Tea, known for its rich flavor and strong brew. Ideal for tea lovers looking for a strong and flavorful cup.",
  },
  {
    imageSrc: [teaImage2, teaImage1],
    title: "Gold CTC Tea",
    price: "₹460/kg",
    brand: "FNG",
    packagingSize: "Loose",
    form: "Loose",
    flavor: "Smooth CTC Flavor",
    packagingType: "Loose",
    color: "Black",
    type: "Processed Tea",
    processingType: "CTC",
    shelfLife: "24 months",
    usageApplication: "Beverage",
    bestBefore: "24 months",
    boxPackaging: "Available",
    origin: "Assam, India",
    countryOfOrigin: "Made in India",
    minimumOrderQuantity: "500 Kg",
    description:
      "High-quality Assam Gold CTC Tea with a smooth and consistent taste. Suitable for daily consumption.",
  },
  {
    imageSrc: [teaImage2, teaImage1], // Replace with specific image if available
    title: "Silver CTC Tea",
    price: "₹320/kg",
    brand: "FNG",
    packagingSize: "Loose",
    form: "Loose",
    flavor: "Mild CTC Flavor",
    packagingType: "Loose",
    color: "Black",
    type: "Processed Tea",
    processingType: "CTC",
    shelfLife: "24 months",
    usageApplication: "Beverage",
    bestBefore: "24 months",
    boxPackaging: "Available",
    origin: "Assam, India",
    countryOfOrigin: "Made in India",
    minimumOrderQuantity: "500 Kg",
    description:
      "Affordable and quality Assam Silver CTC Tea with a mild flavor, perfect for a light and refreshing brew.",
  },
  {
    imageSrc: [teaImage1, teaImage2], // Replace with specific image if available
    title: "Silver CTC Tea (Pouch) 50g",
    price: "₹400/kg",
    brand: "FNG",
    packagingSize: "50g Pouch",
    form: "Pouch",
    flavor: "Mild CTC Flavor",
    packagingType: "Pouch",
    color: "Black",
    type: "Processed Tea",
    processingType: "CTC",
    shelfLife: "24 months",
    usageApplication: "Beverage",
    bestBefore: "24 months",
    boxPackaging: "Available",
    origin: "Assam, India",
    countryOfOrigin: "Made in India",
    minimumOrderQuantity: "500 Kg",
    description:
      "Silver CTC Tea in convenient 50g pouches, ideal for customers looking for smaller quantities while enjoying the mild Assam flavor.",
  },
  {
    imageSrc: [teaImage2, teaImage1], // Replace with specific image if available
    title: "Silver CTC Tea (Pouch) 100g",
    price: "₹350/kg",
    brand: "FNG",
    packagingSize: "100g Pouch",
    form: "Pouch",
    flavor: "Mild CTC Flavor",
    packagingType: "Pouch",
    color: "Black",
    type: "Processed Tea",
    processingType: "CTC",
    shelfLife: "24 months",
    usageApplication: "Beverage",
    bestBefore: "24 months",
    boxPackaging: "Available",
    origin: "Assam, India",
    countryOfOrigin: "Made in India",
    minimumOrderQuantity: "500 Kg",
    description:
      "Silver CTC Tea in 100g pouches, offering an affordable option for Assam tea with a mild and balanced taste.",
  },
  {
    imageSrc: [teaImage1, teaImage2], // Replace with specific image if available
    title: "Premium Green Tea",
    price: "₹4500/kg",
    brand: "FNG",
    packagingSize: "Loose",
    form: "Loose",
    flavor: "Fresh Green Tea Flavor",
    packagingType: "Loose",
    color: "Green",
    type: "Green Tea",
    processingType: "Traditional",
    shelfLife: "18 months",
    usageApplication: "Beverage",
    bestBefore: "18 months",
    boxPackaging: "Available",
    origin: "Assam, India",
    countryOfOrigin: "Made in India",
    minimumOrderQuantity: "200 Kg",
    description:
      "Premium Assam Green Tea, known for its antioxidant properties and fresh, soothing flavor. Ideal for health-conscious consumers.",
  },
  {
    imageSrc: [teaImage2, teaImage1], // Replace with specific image if available
    title: "Orthodox Tea",
    price: "₹2500/kg",
    brand: "FNG",
    packagingSize: "Loose",
    form: "Loose",
    flavor: "Rich Orthodox Flavor",
    packagingType: "Loose",
    color: "Black",
    type: "Processed Orthodox Tea",
    processingType: "Traditional Orthodox",
    shelfLife: "24 months",
    usageApplication: "Beverage",
    bestBefore: "24 months",
    boxPackaging: "Available",
    origin: "Assam, India",
    countryOfOrigin: "Made in India",
    minimumOrderQuantity: "200 Kg",
    description:
      "Finely crafted Assam Orthodox Tea with a rich aroma and strong, flavorful taste. Perfect for tea enthusiasts who appreciate traditional Assam tea.",
  },
  {
    imageSrc: [teaImage1, teaImage2], // Replace with specific image if available
    title: "Organic Green Tea",
    price: "₹2500/kg",
    brand: "FNG",
    packagingSize: "Loose",
    form: "Loose",
    flavor: "Pure Organic Flavor",
    packagingType: "Loose",
    color: "Green",
    type: "Organic Green Tea",
    processingType: "Traditional",
    shelfLife: "18 months",
    usageApplication: "Beverage",
    bestBefore: "18 months",
    boxPackaging: "Available",
    origin: "Assam, India",
    countryOfOrigin: "Made in India",
    minimumOrderQuantity: "200 Kg",
    description:
      "Organic Assam Green Tea, harvested from organic-certified estates. Rich in antioxidants and perfect for a healthy lifestyle.",
  },
  {
    imageSrc: [teaImage2, teaImage1], // Replace with specific image if available
    title: "Blue Tea",
    price: "₹10,000/kg",
    brand: "FNG",
    packagingSize: "Loose",
    form: "Loose",
    flavor: "Floral Blue Tea Flavor",
    packagingType: "Loose",
    color: "Blue",
    type: "Herbal Blue Tea",
    processingType: "Traditional",
    shelfLife: "18 months",
    usageApplication: "Beverage",
    bestBefore: "18 months",
    boxPackaging: "Available",
    origin: "Assam, India",
    countryOfOrigin: "Made in India",
    minimumOrderQuantity: "100 Kg",
    description:
      "Exquisite Blue Tea made from butterfly pea flowers, known for its vibrant color and unique health benefits. Ideal for those seeking an exotic tea experience.",
  },
  {
    imageSrc: [teaImage1, teaImage2], // Replace with specific image if available
    title: "White Tea",
    price: "₹40,000/kg",
    brand: "FNG",
    packagingSize: "Loose",
    form: "Loose",
    flavor: "Delicate White Tea Flavor",
    packagingType: "Loose",
    color: "White",
    type: "Premium White Tea",
    processingType: "Traditional",
    shelfLife: "18 months",
    usageApplication: "Beverage",
    bestBefore: "18 months",
    boxPackaging: "Available",
    origin: "Assam, India",
    countryOfOrigin: "Made in India",
    minimumOrderQuantity: "100 Kg",
    description:
      "Ultra-premium Assam White Tea, handpicked and minimally processed to preserve its delicate flavor and health benefits. A luxurious tea experience for connoisseurs.",
  },
];

// Styled Components
const ProductListContainer = styled.div`
  ${tw`flex flex-col items-center justify-center mt-10`};
  width: 100%;
`;

const ProductCard = styled.div`
  ${tw`flex bg-white shadow-lg rounded-lg p-6 mb-6 w-full max-w-4xl`};
`;

const ProductImageGallery = styled.div`
  ${tw`flex`};
  flex-direction: row; /* Align items horizontally */
`;

const ThumbnailGallery = styled.div`
  ${tw`flex flex-col justify-center items-start mt-0`};
  width: 30%; position-fixed;  max-height: 90vh; overflow-hidden;/* Adjust width as needed */
`;

const Thumbnail = styled.img`
  ${tw`w-48 h-32 object-cover rounded-lg cursor-pointer mb-2 border border-gray-300`};
  ${({ isSelected }) => isSelected && tw`border-blue-500`};
`;

const MainImage = styled.img`
  ${tw`w-full h-72 object-cover rounded-lg ml-4`}; /* Adjust margin as needed */
  flex-grow: 1; /* Allow main image to grow and fill space */
`;

const ProductDetails = styled.div`
  ${tw`ml-6 flex-1`};
`;

const ProductTitle = styled.h3`
  ${tw`text-2xl font-bold mb-2`};
`;

const ProductPrice = styled.p`
  ${tw`text-lg font-semibold mb-2`};
`;

const ProductBrand = styled.p`
  ${tw`text-sm text-gray-600 mb-2`};
`;

const ProductOrigin = styled.p`
  ${tw`text-sm text-gray-600 mb-2`};
`;

const ProductType = styled.p`
  ${tw`text-sm text-gray-600 mb-2`};
`;

const ProductShelfLife = styled.p`
  ${tw`text-sm text-gray-600 mb-2`};
`;

const ProductDescription = styled.p`
  ${tw`text-sm text-gray-800 mt-4`};
`;

// Styled Components
const AdditionalDetails = styled.div`
  ${tw`text-sm text-gray-600 mt-2`};
  p {
    ${tw`mb-2`};
  }
`;

const ReadMoreButton = styled.button`
  ${tw`text-blue-500 text-sm mt-2`};
  cursor: pointer;
`;

const TeaProductsList = () => {
  const [expandedProducts, setExpandedProducts] = useState({});
  const [selectedImage, setSelectedImage] = useState({});

  const toggleReadMore = (index) => {
    setExpandedProducts((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const handleImageClick = (productIndex, imgIndex) => {
    setSelectedImage((prevState) => ({
      ...prevState,
      [productIndex]: imgIndex,
    }));
  };

  const renderProductDetails = (product, index) => {
    const isExpanded = expandedProducts[index] || false;

    return (
      <>
        <ProductPrice>{product.price}</ProductPrice>
        <ProductBrand>
          <strong>Brand:</strong> {product.brand}
        </ProductBrand>
        <ProductOrigin>
          <strong>Origin:</strong> {product.origin}
        </ProductOrigin>
        <ProductType>
          <strong>Type:</strong> {product.type}
        </ProductType>
        {isExpanded ? (
          <>
            <AdditionalDetails>
              <p>
                <strong>Packaging Size:</strong> {product.packagingSize}
              </p>
              <p>
                <strong>Form:</strong> {product.form}
              </p>
              <p>
                <strong>Flavor:</strong> {product.flavor}
              </p>
              <p>
                <strong>Packaging Type:</strong> {product.packagingType}
              </p>
              <p>
                <strong>Color:</strong> {product.color}
              </p>
              <p>
                <strong>Processing Type:</strong> {product.processingType}
              </p>
              <p>
                <strong>Usage/Application:</strong> {product.usageApplication}
              </p>
              <p>
                <strong>Best Before:</strong> {product.bestBefore}
              </p>
              <p>
                <strong>Box Packaging:</strong> {product.boxPackaging}
              </p>
              <p>
                <strong>Minimum Order Quantity:</strong>{" "}
                {product.minimumOrderQuantity}
              </p>
            </AdditionalDetails>
            <ProductDescription>{product.description}</ProductDescription>
            <ReadMoreButton onClick={() => toggleReadMore(index)}>
              Read Less
            </ReadMoreButton>
          </>
        ) : (
          <>
            <ProductShelfLife>
              <strong>Shelf Life:</strong> {product.shelfLife}
            </ProductShelfLife>
            <ReadMoreButton onClick={() => toggleReadMore(index)}>
              Read More
            </ReadMoreButton>
          </>
        )}
      </>
    );
  };

  return (
    <AnimationRevealPage>
      <Header />
      <ProductListContainer>
        {teaProducts.map((product, index) => (
          <ProductCard key={index}>
            <ProductImageGallery>
              <ThumbnailGallery>
                {product.imageSrc.map((image, imgIndex) => (
                  <Thumbnail
                    key={imgIndex}
                    src={image}
                    alt={`${product.title} thumbnail ${imgIndex + 1}`}
                    isSelected={selectedImage[index] === imgIndex}
                    onClick={() => handleImageClick(index, imgIndex)}
                  />
                ))}
              </ThumbnailGallery>
              <MainImage
                src={product.imageSrc[selectedImage[index] || 0]}
                alt={`${product.title} main image`}
              />
            </ProductImageGallery>
            <ProductDetails>
              <ProductTitle>{product.title}</ProductTitle>
              {renderProductDetails(product, index)}
            </ProductDetails>
          </ProductCard>
        ))}
      </ProductListContainer>
    </AnimationRevealPage>
  );
};

export default TeaProductsList;
