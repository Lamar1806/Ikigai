import React from 'react';
import styled from 'styled-components';

// Define styled components for the article elements
const ArticleContainer = styled.div`
  margin: 20px;
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Subtitle = styled.h2`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const StyledParagraph = styled.p`
  font-style: italic;
  margin-bottom: 30px;
`;

const BodyText = styled.p`
  font-size: 20px;
  line-height: 1.5;
`;

const ReadMoreButton = styled.a`
  display: block;
  text-align: center;
  margin-top: 30px;
  padding: 10px 20px;
  background-color: transparent;
  color: black;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;
  cursor: pointer;

  &:hover {
    background-color: black;
    color: white;
  }
`;

// Define the props interface for the article
interface ArticleProps {
  title: string;
  subtitle: string;
  body: string;
  readMoreUrl: string;
}

// Article component
const Article: React.FC<ArticleProps> = ({
  title,
  subtitle,
  body,
  readMoreUrl,
}) => {
  const paragraphs = body.split('\n\n');

  return (
    <ArticleContainer>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      {paragraphs.map((paragraph, index) => {
        // Check if the paragraph starts with a special symbol
        const isStyledParagraph = paragraph.trim().startsWith('—');

        // If it does, render it with the styled component, otherwise render it normally
        return !isStyledParagraph ? (
          <StyledParagraph key={index}>{paragraph}</StyledParagraph>
        ) : (
          <p key={index}>{paragraph}</p>
        );
      })}
      <ReadMoreButton href={readMoreUrl}>Read more</ReadMoreButton>
    </ArticleContainer>
  );
};

export default Article;
