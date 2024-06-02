import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import checkSign from "../../images/check.png";

const Overlay = tw.div`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-center items-center`;
const PopupContainer = tw.div`bg-white p-8 rounded-lg shadow-lg relative max-w-md mx-auto`;
const CloseButton = tw.button`absolute top-0 right-0 mt-4 mr-4 text-gray-600 hover:text-gray-900`;
const PopupMessage = styled.div`
  ${tw`text-lg text-center`}
  span {
    ${tw`block text-base text-gray-600 mt-2`}
  }
`;

const ImageContainer = styled.div`
  ${tw`flex justify-center items-center`}
`;

const Popup = ({ message, onClose }) => {
  return (
    <Overlay>
      <PopupContainer>
        <CloseButton onClick={onClose}>×</CloseButton>
        <PopupMessage>
          <ImageContainer>
            <img
              src={checkSign}
              alt="checkSign"
              style={{ width: "80px", height: "50px" }}
            />
          </ImageContainer>
          Thank You for Contacting Us
          <span>
            We appreciate your message. Our team will contact you soon.
          </span>
        </PopupMessage>
      </PopupContainer>
    </Overlay>
  );
};

export default Popup;
