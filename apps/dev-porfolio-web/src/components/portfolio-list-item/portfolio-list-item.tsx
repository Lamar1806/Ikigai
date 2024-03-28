import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  margin: 20px 0;
  text-align: center;
`;

const ProjectImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const ProjectTitle = styled.h2``;

const ProjectDescription = styled.p``;

const LinkButton = styled.a`
  display: inline-block;
  margin: 10px;
  padding: 10px 15px;
  background-color: #0077cc;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
`;

interface ProjectListItemProps {
  title: string;
  description: string;
  imageUrl: string;
  liveUrl: string;
  detailUrl: string;
}

export const ProjectListItem: React.FC<ProjectListItemProps> = ({
  title,
  description,
  imageUrl,
  liveUrl,
  detailUrl,
}) => (
  <Container>
    <ProjectTitle>{title}</ProjectTitle>
    <ProjectImage src={imageUrl} alt={title} />
    <ProjectDescription>{description}</ProjectDescription>
    <LinkButton href={detailUrl} target="_blank" rel="noopener noreferrer">
      View Details
    </LinkButton>
    <LinkButton href={liveUrl} target="_blank" rel="noopener noreferrer">
      Live View
    </LinkButton>
  </Container>
);
