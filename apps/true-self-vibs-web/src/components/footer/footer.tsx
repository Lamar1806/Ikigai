import React from 'react';
import styled from 'styled-components';
import links from '../../api/mocks/links';
import {
  FaYoutube,
  FaFacebook,
  FaInstagram,
  FaMedium,
  FaQuora,
} from 'react-icons/fa';
import trueSelfIcon from '../../assets/images/Mask.png';

const FooterContainer = styled.footer`
  background-color: #000;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const LinksContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const TrueSelfIcon = styled.img`
  width: 50px; /* Adjust size as needed */
`;

// Define a custom styled component for each icon
const CustomIcon = styled.div`
  font-size: 24px;
  color: #fff;
  cursor: pointer;

  /* Add any additional styles you want */
`;

const Footer = () => {
  const { YouTube, Facebook, Instagram, Medium, Quora } = links;
  console.log(YouTube);
  return (
    <FooterContainer>
      <TrueSelfIcon src={trueSelfIcon} alt="TrueSelf Icon" />
      <LinksContainer>
        <a href={YouTube.url} target="_blank" rel="noopener noreferrer">
          <CustomIcon>
            <FaYoutube />
          </CustomIcon>
        </a>
        <a href={Facebook.url} target="_blank" rel="noopener noreferrer">
          <CustomIcon>
            <FaFacebook />
          </CustomIcon>
        </a>
        <a href={Instagram.url} target="_blank" rel="noopener noreferrer">
          <CustomIcon>
            <FaInstagram />
          </CustomIcon>
        </a>
        <a href={Medium.url} target="_blank" rel="noopener noreferrer">
          <CustomIcon>
            <FaMedium />
          </CustomIcon>
        </a>
        <a href={Quora.url} target="_blank" rel="noopener noreferrer">
          <CustomIcon>
            <FaQuora />
          </CustomIcon>
        </a>
      </LinksContainer>
    </FooterContainer>
  );
};

export default Footer;
