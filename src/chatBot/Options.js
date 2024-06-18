import React from "react";
import tw from "twin.macro"; // Import twin.macro for Tailwind CSS styling

const Button = tw.button`
   bg-blue-500 hover:bg-blue-700 flex justify-center self-center w-full mb-2 text-white font-bold py-1 px-3 rounded-sm text-sm
`;

const Options = (props) => {
  const options = [
    { text: "Home", handler: props.actionProvider.handleHome, id: 1 },
    { text: "About Us", handler: props.actionProvider.handleAbout, id: 2 },
    { text: "Products", handler: props.actionProvider.handleProducts, id: 3 },
    { text: "Services", handler: props.actionProvider.handleServices, id: 4 },
    { text: "Contact Us", handler: props.actionProvider.handleContact, id: 5 },
    { text: "Personal Requirement", handler: props.actionProvider.handlePersonalInfo, id: 6 },
  ];

  return (
    <div className="flex justify-center">
      {options.map((option) => (
        <Button key={option.id} onClick={option.handler} tw="mr-2 mb-2">
          {option.text}
        </Button>
      ))}
    </div>
  );
};

export default Options;
