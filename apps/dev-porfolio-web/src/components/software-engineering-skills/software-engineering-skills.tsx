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
  font-size: 18px;
  color: #666;
  line-height: 1.5;
`;

const SkillList = styled.div`
  margin-bottom: 20px;
`;

export const SoftwareEngineerSkills = () => {
  return (
    <SkillsContainer>
      <SkillCategory>Software Engineer</SkillCategory>
      <SkillList>
        <Skill>HTML</Skill>
        <br />
        <Skill>CSS</Skill>
        <br />
        <Skill>Tailwind CSS</Skill>
        <br />
        <Skill>JavaScript</Skill>
        <br />
        <Skill>React</Skill>
        <br />
        <Skill>Redux</Skill>
        <br />
        <Skill>Next.js</Skill>
        <br />
        <Skill>Node.js</Skill>
        <br />
        <Skill>Express.js</Skill>
        <br />
        <Skill>MongoDB</Skill>
        <br />
        <Skill>SQL</Skill>
        <br />
        <Skill>Cypress</Skill>
        <br />
        <Skill>Microsoft PlayWright</Skill>
      </SkillList>
    </SkillsContainer>
  );
};

export const GraphicDesignSkills = () => (
  <SkillsContainer>
    <SkillCategory>Graphic Design</SkillCategory>
    <SkillList>
      <Skill>Adobe Photoshop</Skill>
      <br />
      <Skill>Adobe Illustrator</Skill>
      <br />
      <Skill>Adobe XD</Skill>
    </SkillList>
  </SkillsContainer>
);
