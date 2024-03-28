import React from 'react';
import styled from 'styled-components';

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
`;

const SkillCategory = styled.h2`
  font-size: 24px;
  color: #333;
`;

const Skill = styled.span`
  display: block;
  font-size: 18px;
  color: #666;
  line-height: 1.5;
  &:not(:last-child) {
    margin-bottom: 10px; /* Adds spacing between skills, removing <br /> */
  }
`;

const SkillList = styled.div`
  margin-bottom: 20px;
`;

// Data for software engineer skills
const softwareEngineerSkills = [
  'HTML',
  'CSS',
  'Tailwind CSS',
  'JavaScript',
  'React',
  'Redux',
  'Next.js',
  'Nx (Mono-Repo)',
  'Cypress',
  // Backend and other skills follow
  'Node.js',
  'Express.js',
  'MongoDB',
  'SQL',
];

// Data for graphic design skills
const graphicDesignSkills = [
  'Adobe Photoshop',
  'Adobe Illustrator',
  'Adobe XD',
  'Figma',
];

export const SoftwareEngineerSkills = () => (
  <SkillsContainer>
    <SkillCategory>Software Engineer</SkillCategory>
    <SkillList>
      {softwareEngineerSkills.map((skill) => (
        <Skill key={skill}>{skill}</Skill>
      ))}
    </SkillList>
  </SkillsContainer>
);

export const GraphicDesignSkills = () => (
  <SkillsContainer>
    <SkillCategory>Graphic Design</SkillCategory>
    <SkillList>
      {graphicDesignSkills.map((skill) => (
        <Skill key={skill}>{skill}</Skill>
      ))}
    </SkillList>
  </SkillsContainer>
);
