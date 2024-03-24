import React from 'react';
import styled from '@emotion/styled';
import { AiOutlineMail } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';
import { SiUpwork } from 'react-icons/si';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding: 20px; */
`;

const RotatedText = styled.div`
  transform: rotate(-90deg);
  margin-right: 10px;
  font-weight: bold;
`;

const Line = styled.div`
  height: 2px;
  width: 100%;
  background-color: #000;
  margin: 10px 0;
`;

const Summary = styled.p`
  text-align: center;
  font-size: 16;
  letter-spacing: 1px;
`;

const IconLink = styled.a`
  margin: 0 10px;
  color: #0077cc; // Adjust the color as needed
  font-size: 24px; // Adjust size as needed
`;

// New ContactLinks Component
export const ContactLinks = () => (
  <div>
    <IconLink href="mailto:segrestbrooks@gmail.com" target="_blank">
      <AiOutlineMail title="Email" />
    </IconLink>
    <IconLink
      href="https://www.linkedin.com/in/dalmar-brooks-61194b99/"
      target="_blank"
    >
      <FaLinkedin title="LinkedIn" />
    </IconLink>
    <IconLink
      href="https://www.upwork.com/freelancers/dalmarbrooks"
      target="_blank"
    >
      <SiUpwork title="Upwork" />
    </IconLink>
  </div>
);

export const AboutDalmar = () => (
  <Container>
    <Summary>
      Seasoned Software Architect and Mental Health Tech Innovator with
      expertise in React & React Native. Passionate about creating user-friendly
      applications that promote mental health. Skilled in leading teams to
      deliver innovative solutions.
    </Summary>
    <ContactLinks />
  </Container>
);
