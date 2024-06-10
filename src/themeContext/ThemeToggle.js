import React, { useContext } from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import moonStars from "../images/night.svg";
import { ThemeContext } from "./ThemeContext.js";

const ToggleWrapper = styled.div`
  ${tw`flex items-center`}
`;

const IconWrapper = styled.div`
  ${tw`relative w-8 h-8`}
`;

const Icon = styled.div`
  ${tw`absolute w-full h-full flex items-center justify-center text-primary-700`}
  ${({ position }) =>
    position === "left"
      ? css`
          left: 0;
        `
      : css`
          right: 0;
        `}
  ${({ theme }) =>
    theme === "light"
      ? css`
          ${tw`opacity-100`}
        `
      : css`
          ${tw`opacity-0`}
        `}
`;

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <ToggleWrapper onClick={toggleTheme} css={tw`cursor-pointer`}>
      <IconWrapper>
        <Icon position="left" theme={theme === "light" ? "light" : "dark"}>
          <img src={moonStars} />
        </Icon>
        <Icon position="right" theme={theme === "light" ? "dark" : "light"}>
          <FontAwesomeIcon icon={faSun} />
        </Icon>
      </IconWrapper>
    </ToggleWrapper>
  );
};

export default ThemeToggle;
