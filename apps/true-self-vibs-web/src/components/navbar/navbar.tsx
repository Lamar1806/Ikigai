import React, { useState } from 'react';
import styled from '@emotion/styled';
import { FaAlignJustify } from 'react-icons/fa6';

// Styled components for navbar elements
const NavbarWrapper = styled.nav`
  background-color: #333; /* Obsidian black */
  /* width: 100vw; */
`;

const NavbarList = styled.ul`
  display: flex;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
  list-style-type: none;
  /* width: 100vw; */
`;

const NavbarItem = styled.li`
  margin: 0 10px;
`;

const NavbarLink = styled.a`
  display: block;
  padding: 10px 20px;
  color: #fff; /* White text */
  text-decoration: none;

  &:hover {
    background-color: #555; /* Darker shade of obsidian black */
  }
`;

const DropdownList = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #333; /* Obsidian black */
  padding: 10px;
  z-index: 999;
`;

const DropdownToggle = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
  }
`;

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarWrapper>
      <DropdownToggle onClick={toggleDropdown}>
        <FaAlignJustify />
      </DropdownToggle>
      <NavbarList>
        <NavbarItem>
          <NavbarLink href="#home">Home</NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink href="#about">About</NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink href="#articles">Articles</NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink href="#videos">Videos</NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink href="#apps">Apps</NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink href="#blog">Blog</NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink href="#contact">Contact</NavbarLink>
        </NavbarItem>
      </NavbarList>
      <DropdownList isOpen={isOpen}>
        <NavbarLink href="#home">Home</NavbarLink>
        <NavbarLink href="#about">About</NavbarLink>
        <NavbarLink href="#articles">Articles</NavbarLink>
        <NavbarLink href="#videos">Videos</NavbarLink>
        <NavbarLink href="#apps">Apps</NavbarLink>
        <NavbarLink href="#blog">Blog</NavbarLink>
        <NavbarLink href="#contact">Contact</NavbarLink>
      </DropdownList>
    </NavbarWrapper>
  );
};
