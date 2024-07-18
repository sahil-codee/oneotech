import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";
import cableTie1 from "../images/cableTies.svg";
import mounts1 from "../images/mounts.svg";
import dinRail1 from "../images/dinRail.svg";
import laserMarking1 from "../images/laser.webp";
import tea1 from "../images/teaBag.svg";
import cinnamonImage from "../images/cinamon.svg";
import cuminImage from "../images/cumin.svg";
import cardamomImage from "../images/cardamom.svg";
import turmericImage from "../images/turmuric.svg";
import blackPepperImage from "../images/pepper.svg";
import indianSpices from "../images/indianSpices.svg";
import AnimationRevealPage from "helpers/AnimationRevealPage";
import Header from "../components/headers/light.js";
import Footer from "components/footers/MiniCenteredFooter.js";

const Banner = styled.div`
  position: relative;
  width: 100vw; /* Full viewport width */
  height: 300px;
  background-image: url(${indianSpices});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px 0 0 0; /* Top margin only */
  left: 50%; /* Centering trick */
  right: 50%; /* Centering trick */
  margin-left: -50vw; /* Move left side to the viewport edge */
  margin-right: -50vw; /* Move right side to the viewport edge */
  color: white;
  font-size: 2.5em;
  font-weight: bold;

  &:after {
    content: "Indian Spices";
    position: absolute;
    bottom: 10px;
    left: 10px;
    font-size: 3em;
    color: #ffffff;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 768px) {
    font-size: 1.5em; /* Smaller font size for small screens */

    &:after {
      font-size: 2em; /* Smaller subtitle on small screens */
    }
  }
`;

const ProductName = styled.h2`
  font-size: 2em;
  font-weight: bold;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.5em; /* Adjust font size on smaller screens */
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 40px; /* Margin below content before footer */
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
  height: auto;
  border-radius: 8px;

  @media (max-width: 768px) {
    max-width: 300px; /* Limit image size on small screens */
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
  margin-top: 20px;
  font-size: 14px;
  color: #555;
`;

const ProductDetailsPage = () => {
  const { category, productName } = useParams(); // Get the category and productName from URL params

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
    "Spices/Cumin Seeds": {
      images: [cuminImage],
      details: {
        Name: "Cumin Seeds",
        Description:
          "Cumin seeds, a staple spice in many global cuisines, are a versatile and flavorful addition to any recipe. As a leading bulk spice exporter in India, we offer the finest quality cumin seeds, rich in earthy, aromatic notes. Our whole cumin seeds are perfect for elevating dishes with their warm, slightly nutty taste. We meticulously source and process our cumin to ensure maximum freshness and potency, meeting the demands of discerning spice enthusiasts worldwide.",
        History:
          "Cumin, believed to have originated in the Eastern Mediterranean region, has been used as a spice for over a thousand years. During the Egyptian civilization, it was used not only as a seasoning but also as a preservative in the mummification process. The spice later became a staple of Roman cuisine. Spanish and Portuguese colonists subsequently introduced cumin to the Americas. Today, the major producers of cumin include India, China, North Africa, Chile, and Mexico.",
        Specification: {
          "Product Name": "Cumin seeds",
          Origin: "Levant (Eastern Mediterranean)",
          Family: "Apiaceae",
          "Binomial name": "Cuminum cyminum",
        },
        Features: {
          Color: "Brownish-yellow (other variants are also available)",
          "Taste and Smell":
            "Earthy, nutty, spicy taste with a strong, warm aroma",
          Quality: "High quality",
        },
        Ingredients: {
          Nutrients: "375 Kcl Calories, 10.5 gm fibre, 44.24 gm carbohydrates",
          Minerals:
            "Calcium, Iron, Magnesium, Manganese, Phosphorus, Potassium, Sodium, Zinc",
          Vitamins: "Vitamin C, E, B",
          Protein: "17.81 gm",
          Fats: "22.27 gm",
        },
        "Uses & Benefits": {
          Uses: [
            "Culinary: Cumin seeds or powder are widely used as a spice in various dishes around the world.",
            "Essential Oils: Cumin's aromatic and pungent properties make it a common ingredient in essential oils and perfumes.",
            "Skincare: Cumin is often combined with other products like honey for exfoliating and other skincare applications.",
            "Medicinal: Cumin is used in traditional medicine to make remedies like kashaya and arishta. It is also commonly used as jira water in many Indian households.",
          ],
          Benefits: [
            " Anti-inflammatory",
            "Detoxification",
            "Weight loss",
            "Improved digestion",
          ],
        },
      },
    },
    "Spices/Cardamom": {
      images: [cardamomImage],
      details: {
        Name: "Cardamom",
        Description:
          "India, renowned for its spice exports, supplies a vast array of aromatic and flavorful spices globally. As a leading bulk spice exporter in india, we offer iconic spices like cardamom, known as the `Queen of Spices`, for its distinctive aroma and taste. Based in Delhi, our spice exports cater to discerning international customers, leveraging India’s rich agricultural heritage. We ensure a consistent supply of high-quality, authentic whole spices, making India a premier global supplier in the spice trade.",
        History:
          "Cardamom, a versatile and ancient spice, originates from the lush forests of India and Sri Lanka. Renowned for its unique, complex flavor, it enhances both savory and sweet dishes in global cuisines, especially Indian, Middle Eastern, and Scandinavian. Prized for its aromatic and medicinal properties, cardamom aids digestion and freshens breath. Today, it remains a sought-after spice for its distinctive flavor and potential health benefits. ",
        Specification: {
          "Product Name": "Cardamom",
          Origin: "India",
          Family: "Zingiberaceae",
          "Binomial name": "Elettaria cardamomum",
        },
        Features: {
          Color: "Green (other variants are also available)",
          "Taste and Smell":
            "Strong, unique taste with an intensely aromatic fragrance",
          Quality: "High quality",
        },
        Ingredients: {
          Nutrients: "300 Kcl Calories, 28 gm fibre, 68 gm carbohydrates",
          Minerals: "Calcium, Iron, Magnesium, Phosphorus, Potassium",
          Vitamins: "Vitamin C, B6",
          Protein: "11 gm",
          Fats: "6.7 gm",
        },
        "Uses & Benefits": {
          Uses: [
            "Culinary - Used in both sweet and savory dishes.",
            "Essential oils - Used in perfumes and essential oils.",
            "Medicinal - Used in traditional medicine for digestion and oral health.",
          ],
          Benefits: [
            "Antioxidant",
            "Improves digestion",
            "Supports oral health",
          ],
        },
      },
    },
    "Spices/Turmeric": {
      images: [turmericImage],
      details: {
        Name: "Turmeric",
        Description:
          "Turmeric, a vibrant yellow spice, has been a staple in cooking and traditional medicine for centuries. Renowned for its potent anti-inflammatory and antioxidant capabilities, this versatile ingredient lends both flavor and health benefits to a wide array of dishes across the cuisines of India, Southeast Asia, and the Middle East.",
        History:
          "Turmeric, originating from the Indian subcontinent, is both a culinary staple and revered medicinal herb with a vibrant, golden hue. Integral to Indian cuisine for millennia, it enhances dishes with its distinctive flavor and color, from South Asian curries to Middle Eastern rice pilafs. Beyond gastronomy, turmeric's active compound curcumin offers potential health benefits, including anti-inflammatory and antioxidant properties, valued in traditional Ayurvedic medicine. Today, turmeric continues to enrich cultural and culinary traditions across the East.",
        Specification: {
          "Product Name": "Turmeric",
          Origin: "India",
          Family: "Zingiberaceae",
          "Binomial name": "Curcuma longa",
        },
        Features: {
          Color: "Bright yellow",
          "Taste and Smell":
            "Bitter, slightly peppery flavor with a warm aroma",
          Quality: "High quality",
        },
        Ingredients: {
          Nutrients: "354 Kcl Calories, 21 gm fibre, 65 gm carbohydrates",
          Minerals: "Calcium, Iron, Magnesium, Phosphorus, Potassium",
          Vitamins: "Vitamin C, E, K",
          Protein: "8 gm",
          Fats: "10 gm",
        },
        "Uses & Benefits": {
          Uses: [
            "Culinary - Used as a spice in a number of dishes.",
            "Medicinal - Known for its anti-inflammatory and antioxidant properties.",
            "Skincare - Used in face masks and other skincare products.",
          ],
          Benefits: [
            "Anti-inflammatory",
            "Antioxidant",
            "Supports joint health",
            "Aids in digestion",
          ],
        },
      },
    },
    "Spices/Black Pepper": {
      images: [blackPepperImage],
      details: {
        Name: "Black Pepper",
        Description:
          "Black pepper, derived from the dried fruit of Piper nigrum, is a versatile and essential spice in kitchens worldwide. Its bold, pungent flavor enhances countless savory dishes, thanks to the presence of piperine, which provides its signature heat. Harvested before ripening and sun-dried, black pepper is known for its slightly smoky taste. Beyond culinary uses, it offers potential health benefits like antioxidant and anti-inflammatory properties. This indispensable spice continues to add depth and complexity to global cuisines.",
        History:
          "Black pepper, originating from South Asia, has been a prized spice for millennia, often called `black gold` due to its value and rarity. Ancient civilizations highly sought after its pungent, aromatic flavor, making it a symbol of status and affluence. Merchants traded it along routes like the Silk Road, and its labor-intensive harvesting added to its exclusivity. Today, black pepper remains a coveted ingredient in global cuisines.",
        Specification: {
          "Product Name": "Black Pepper",
          Origin: "India",
          Family: "Piperaceae",
          "Binomial name": "Piper nigrum",
        },
        Features: {
          Color: "Black",
          "Taste and Smell": "Sharp, pungent flavor with a strong aroma",
          Quality: "High quality",
        },
        Ingredients: {
          Nutrients: "251 Kcl Calories, 25 gm fibre, 64 gm carbohydrates",
          Minerals:
            "Calcium, Iron, Magnesium, Manganese, Phosphorus, Potassium",
          Vitamins: "Vitamin C, K",
          Protein: "10 gm",
          Fats: "3.3 gm",
        },
        "Uses & Benefits": {
          Uses: [
            "Culinary - Used as a seasoning in various dishes.",
            "Medicinal - Used in traditional medicine for its digestive properties.",
          ],
          Benefits: [
            "Improves digestion",
            "Antioxidant properties",
            "Supports respiratory health",
          ],
        },
      },
    },
    "Spices/Cinnamon": {
      images: [cinnamonImage],
      details: {
        Name: "Cinnamon",
        Description:
          "Cinnamon, a beloved and versatile spice, captivates with its enchanting aroma and delectable flavor. Derived from the inner bark of evergreen trees, it enhances sweet and savory dishes globally. Its warm, slightly sweet taste comes from essential oils like cinnamaldehyde. Cinnamon is also revered for its potential health benefits, including anti-inflammatory and antioxidant properties. Whether in coffee, curries, or pastries, cinnamon's essence elevates dishes, inspiring culinary creativity worldwide.",
        History:
          "Cinnamon, derived from the inner bark of evergreen trees, has captivated senses for millennia. Ancient civilizations like Egypt, China, and Greece prized its warm, aromatic properties for culinary, medicinal, and religious uses. Once a symbol of wealth and reverence, cinnamon's historical significance endures, even as it remains a beloved spice today. Its unique flavor continues to inspire culinary creativity worldwide.",
        Specification: {
          "Product Name": "Cinnamon",
          Origin: "Sri Lanka",
          Family: "Lauraceae",
          "Binomial name": "Cinnamomum verum",
        },
        Features: {
          Color: "Brown",
          "Taste and Smell": "Sweet and warm flavor with a strong aroma",
          Quality: "High quality",
        },
        Ingredients: {
          Nutrients: "247 Kcl Calories, 53 gm fibre, 81 gm carbohydrates",
          Minerals: "Calcium, Iron, Magnesium, Phosphorus, Potassium",
          Vitamins: "Vitamin A, K",
          Protein: "4 gm",
          Fats: "1.2 gm",
        },
        "Uses & Benefits": {
          Uses: [
            "Culinary - Used in both sweet and savory dishes.",
            "Medicinal - Known for its anti-inflammatory and antioxidant properties.",
          ],
          Benefits: [
            "Anti-inflammatory",
            "Antioxidant",
            "Supports heart health",
            "Regulates blood sugar",
          ],
        },
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
      <Banner />
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
          </DetailsContainer>
        </MainSection>
        {/* <Section>
          <SectionTitle>Description</SectionTitle>
          <p>{details.Description}</p>
        </Section> */}
        <Section>
          <SectionTitle>History</SectionTitle>
          <p>{details.History}</p>
        </Section>
        <Section>
          <SectionTitle>Specifications</SectionTitle>
          <Table>
            <tbody>
              {Object.entries(details.Specification).map(([key, value]) => (
                <TableRow key={key}>
                  <TableCell>{key}</TableCell>
                  <TableCell>{value}</TableCell>
                </TableRow>
              ))}
            </tbody>
          </Table>
        </Section>
        <Section>
          <SectionTitle>Uses & Benefits</SectionTitle>
          <h3>Uses</h3>
          <ul>
            {details["Uses & Benefits"].Uses.map((use, index) => (
              <li key={index}> &gt; {use}</li>
            ))}
          </ul>
          {}
          <h3>Benefits</h3>
          <ul>
            {details["Uses & Benefits"].Benefits.map((benefit, index) => (
              <li key={index}> &gt; {benefit}</li>
            ))}
          </ul>
        </Section>
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
