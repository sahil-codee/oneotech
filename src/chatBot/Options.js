import React from "react";

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
    <div>
      {options.map((option) => (
        <button key={option.id} onClick={option.handler}>
          {option.text}
        </button>
      ))}
    </div>
  );
};

export default Options;
