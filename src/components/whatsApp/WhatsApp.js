import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ReactComponent as WhatsAppIcon } from "../../images/whatsappIcon.svg";

const WhatsAppButton = styled.a`
  ${tw`fixed bottom-0 right-0 mb-6 mr-4 lg:mr-8 bg-green-600 p-2 rounded-full shadow-lg cursor-pointer z-50`}
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

const WhatsAppChat = ({ phoneNumber }) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <WhatsAppButton
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      <WhatsAppIcon width="44" height="44" fill="white" />
    </WhatsAppButton>
  );
};

export default WhatsAppChat;
