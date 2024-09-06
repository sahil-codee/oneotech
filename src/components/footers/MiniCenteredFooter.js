import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { Container as ContainerBase } from "components/misc/Layouts.js";
import logo from "../../images/ONEOTECH.png";
import { ReactComponent as FacebookIcon } from "../../images/facebook-icon.svg";
import { ReactComponent as TwitterIcon } from "../../images/twitter-icon.svg";
import { ReactComponent as YoutubeIcon } from "../../images/youtube-icon.svg";

const Container = tw(ContainerBase)`bg-gray-900 text-gray-100 -mx-8 -mb-8`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const Row = tw.div`flex items-center justify-center flex-col px-8`;

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-8 h-auto`;
const LogoText = tw.h5`ml-2 text-2xl font-black tracking-wider`;

const LinksContainer = tw.div`mt-8 font-medium flex flex-wrap justify-center items-center flex-col sm:flex-row`;
const Link = tw.a`border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-300 pb-1 transition duration-300 mt-2 mx-4`;

const SocialLinksContainer = tw.div`mt-10 flex justify-center`;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block text-gray-100 hover:text-gray-500 transition duration-300 mx-4`}
  svg {
    ${tw`w-5 h-5`}
  }
`;

const CopyrightText = tw.p`text-center mt-10 font-medium tracking-wide text-sm text-gray-600`;

const FooterWrapper = styled.div`
  ${tw`min-h-[100px]`}/* Set a minimum height to avoid layout shifts */
`;

export default () => {
  return (
    <Container>
      <Content>
        <FooterWrapper>
          <Row>
            <LogoContainer>
              <LogoImg src={logo} alt="Oneotech Enterprises logo" />
              <LogoText>Oneotech Enterprises</LogoText>
            </LogoContainer>
            <LinksContainer>
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact Us</Link>
              <Link href="/products">Products</Link>
              <Link href="/services">Services</Link>
            </LinksContainer>
            <SocialLinksContainer>
              <SocialLink href="https://www.facebook.com/oneotechenterprises">
                <FacebookIcon />
              </SocialLink>
              <SocialLink href="https://twitter.com">
                <TwitterIcon />
              </SocialLink>
              <SocialLink href="https://youtube.com">
                <YoutubeIcon />
              </SocialLink>
            </SocialLinksContainer>
            <a
              href="https://www.exportbureau.com/company_report.html?code=192304&name=oneotech_enterprises"
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginTop: "20px" }}
            >
              <img
                src="https://www.exportbureau.com/images/link/icon135x30approved.gif"
                width="135"
                height="30"
                alt="Export Bureau Approved"
                style={{ border: "0" }}
              />
            </a>
            <CopyrightText>
              &copy; Copyright 2024, Oneotech Enterprises All Rights Reserved.
            </CopyrightText>
          </Row>
        </FooterWrapper>
      </Content>
    </Container>
  );
};
