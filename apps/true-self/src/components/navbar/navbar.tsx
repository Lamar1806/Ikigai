import React, { useState } from 'react';
import styled from '@emotion/styled';
import { FaAlignJustify } from 'react-icons/fa6';
import mask from '../../assets/images/Mask@3x.png';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/authSlice';
import { useHistory } from 'react-router-dom';

// Styled components for navbar elements
const NavbarWrapper = styled.nav`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 16px;

  @media (min-width: 1200px) {
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
`;

const NavbarItem = styled.li`
  margin: 0 10px;
`;

const NavbarLink = styled(Link)`
  display: block;
  padding: 10px 20px;
  color: black;
  text-decoration: none;

  &:hover {
    background-color: black;
    color: white;
  }
`;

const LogoutButton = styled.button`
  position: relative;
  background: transparent;
  border: none;
  font-size: 16px;
  /* top: 8px; */
  padding: 8px;
  &:hover {
    color: white;
    background-color: black;
    cursor: pointer;
  }
`;

const LogoutButtonDropDown = styled.button`
  color: white;
  background: transparent;
  border: none;
  position: relative;
  left: 20px;
  font-size: 16px;
  margin-top: 8px;
  margin-bottom: 16px;
`;

const DropdownList = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: absolute;
  top: 100%;
  right: 0;
  background-color: black;
  padding: 10px;
  z-index: 999;
`;

const NavBarListDropDown = styled.ul`
  list-style-type: none;
`;

const NavbarItemDropDown = styled.li`
  margin: 0 10px;
`;

const NavbarLinkDropDown = styled(Link)`
  display: block;
  padding: 10px 20px;
  color: white;
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

const Navbar = () => {
  //@ts-ignore
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [isOpen, setIsOpen] = useState(false);
  const dropDownRef = React.useRef(null);
  const dispatch = useDispatch();
  const history = useHistory();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
    history.push('/');
  };

  // Close dropdown if click is outside of navbar
  React.useEffect(() => {
    const handleClickOutside = (event: any) => {
      // Check if the click is outside the dropdown. If so, close it.
      //@ts-ignore
      if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    // Attach the event listener to the document
    document.addEventListener('mousedown', handleClickOutside);

    // Return a cleanup function to remove the event listener when the component unmounts or the useEffect cleanup runs
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const links = [
    ...(isAuthenticated
      ? [
          { text: 'Home', href: '/' },
          { text: 'Memberships', href: '/memberships' },
          { text: 'Articles', href: '/articles' },
          { text: 'Videos', href: '/videos' },
          { text: 'Apps', href: '/apps' },
          { text: 'What Brings You Here...?', href: '/WhatBringsYouHere' },
          { text: 'Therapists', href: '/therapists' },
          { text: 'Doctors', href: '/Doctors' },
          { text: 'Contact', href: '/contact' },
        ]
      : [
          { text: 'Home', href: '/' },
          { text: 'Login', href: '/login' },
          { text: 'Sign Up', href: '/signUp' },
          { text: 'Memberships', href: '/memberships' },
        ]),
  ];
  return (
    <NavbarWrapper>
      <ImageContainer>
        <Link to="/">
          <MaskImage src={mask} alt="True Self Icon" />
        </Link>
      </ImageContainer>
      <DropdownToggle onClick={toggleDropdown}>
        <FaAlignJustify />
      </DropdownToggle>

      <NavbarList>
        {links.map((link, index) => (
          <NavbarItem key={index}>
            <NavbarLink to={link.href}>{link.text}</NavbarLink>
          </NavbarItem>
        ))}
        {isAuthenticated ? (
          <NavbarItem>
            <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
          </NavbarItem>
        ) : null}
      </NavbarList>
      <DropdownList ref={dropDownRef} isOpen={isOpen}>
        {links.map((link, index) => (
          <NavBarListDropDown key={index}>
            <NavbarItemDropDown>
              <NavbarLinkDropDown to={link.href}>
                {link.text}
              </NavbarLinkDropDown>
            </NavbarItemDropDown>
          </NavBarListDropDown>
        ))}
        {isAuthenticated ? (
          <NavBarListDropDown>
            <NavbarItemDropDown>
              <LogoutButtonDropDown onClick={handleLogout}>
                Logout
              </LogoutButtonDropDown>
            </NavbarItemDropDown>
          </NavBarListDropDown>
        ) : null}
      </DropdownList>
    </NavbarWrapper>
  );
};

export default Navbar;
