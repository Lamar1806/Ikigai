import React from 'react';
import styled from 'styled-components';
import links from '../../api/mocks/links';
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
  width: 60px; // Adjust size as needed
`;

const IconLink = styled.a`
  font-size: 24px;
  color: #fff;
  cursor: pointer;
  // Add any additional styles you want for the icon links

  &:hover {
    // Example hover effect
    opacity: 0.8;
  }
`;

const Footer = () => {
  // Simplify the mapping of links to automatically generate the link icons
  return (
    <FooterContainer>
      <TrueSelfIcon src={trueSelfIcon} alt="TrueSelf Icon" />
      {/* <LinksContainer>
        {Object.entries(links).map(([key, value]) => (
          <IconLink
            key={key}
            href={value.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <value.Icon />
          </IconLink>
        ))}
      </LinksContainer> */}
    </FooterContainer>
  );
};

export default Footer;
