import React, { useState } from 'react';
import styled from '@emotion/styled';
import { FaAlignJustify } from 'react-icons/fa6';
import mask from '../../assets/images/Mask@3x.png';

// Styled components for navbar elements
const NavbarWrapper = styled.nav`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 16px;
  /* width: 100vw; */ /* Extra Small Devices (phones) */
  @media (max-width: 576px) {
    /* CSS styles for extra small devices go here */
    /* padding: 16px; */
  }

  /* Small Devices (tablets) */
  @media (min-width: 576px) and (max-width: 768px) {
    /* CSS styles for small devices go here */
  }

  /* Medium Devices (small laptops, tablets in landscape) */
  @media (min-width: 768px) and (max-width: 992px) {
    /* CSS styles for medium devices go here */
  }

  /* Large Devices (desktops, laptops) */
  @media (min-width: 992px) and (max-width: 1200px) {
    /* CSS styles for large devices go here */
  }

  /* Extra Large Devices (large desktops, wide screens) */
  @media (min-width: 1200px) {
    /* CSS styles for extra large devices go here */
    justify-content: space-between;
    padding: none;
  }
`;

const NavbarList = styled.ul`
  display: none;
  justify-content: flex-end;
  list-style-type: none;
  @media (min-width: 768px) {
    display: flex;
  }
  /* width: 100vw; */
`;

const NavbarItem = styled.li`
  margin: 0 10px;
`;

const NavbarLink = styled.a`
  display: block;
  padding: 10px 20px;
  color: black; /* White text */
  text-decoration: none;

  &:hover {
    background-color: black;
    color: white;
  }
`;
const DropdownList = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: absolute;
  top: 100%;
  right: 0;
  background-color: black; /* Obsidian black */
  padding: 10px;
  z-index: 999;
`;

const NavBarListDropDown = styled.ul`
  list-style-type: none;
`;
const NavbarItemDropDown = styled.li`
  margin: 0 10px;
`;

const NavbarLinkDropDown = styled.a`
  display: block;
  padding: 10px 20px;
  color: white; /* White text */
  text-decoration: none;

  &:hover {
    background-color: white;
    color: black;
  }
`;

const DropdownToggle = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
    font-size: 25px;
  }
`;

const ImageContainer = styled.div`
  padding: 20px;
  @media (max-width: 992px) {
    padding: 0;
  }
`;
const MaskImage = styled.img`
  width: 80px;
  height: 80px;
`;

export const Navbar = () => {
  const links = [
    { text: 'Home', href: '#home' },
    { text: 'About', href: '#about' },
    { text: 'Articles', href: '#articles' },
    { text: 'Videos', href: '#videos' },
    { text: 'Apps', href: '#apps' },
    { text: 'Blog', href: '#blog' },
    { text: 'Contact', href: '#contact' },
  ];
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarWrapper>
      <ImageContainer>
        <MaskImage src={mask} alt="True Self Icon" />
      </ImageContainer>
      <DropdownToggle onClick={toggleDropdown}>
        <FaAlignJustify />
      </DropdownToggle>

      <NavbarList>
        {links.map((link, index) => (
          <NavbarItem key={index}>
            <NavbarLink href={link.href}>{link.text}</NavbarLink>
          </NavbarItem>
        ))}
      </NavbarList>
      <DropdownList isOpen={isOpen}>
        {links.map((link, index) => (
          <NavBarListDropDown>
            <NavbarItemDropDown key={index}>
              <NavbarLinkDropDown href={link.href}>
                {link.text}
              </NavbarLinkDropDown>
            </NavbarItemDropDown>
          </NavBarListDropDown>
        ))}
      </DropdownList>
    </NavbarWrapper>
  );
};
