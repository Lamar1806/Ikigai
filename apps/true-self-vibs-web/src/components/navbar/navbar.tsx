import React from 'react';
import styled from '@emotion/styled';

// Styled components for navbar elements
const NavbarWrapper = styled.nav`
  background-color: #333; /* Obsidian black */
  /* width: 100vw; */
`;

const NavbarList = styled.ul`
  display: flex;
  justify-content: center;
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

export const Navbar = () => {
  return (
    <NavbarWrapper>
      <NavbarList>
        <NavbarItem>
          <NavbarLink href="#home">Home</NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink href="#about">About</NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink href="#contact">Contact</NavbarLink>
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
      </NavbarList>
    </NavbarWrapper>
  );
};
