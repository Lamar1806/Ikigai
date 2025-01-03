import React from 'react';
import styled from 'styled-components';

// Define styled components for the article elements
const ArticleContainer = styled.div`
  margin: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  /* Extra Large Devices (large desktops, wide screens) */
  @media (min-width: 1200px) {
    /* CSS styles for extra large devices go here */
    font-size: 48px;
  }
`;

const Subtitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
  /* Extra Large Devices (large desktops, wide screens) */
  @media (min-width: 1200px) {
    /* CSS styles for extra large devices go here */
    font-size: 30px;
  }
`;

const StyledParagraph = styled.p`
  font-style: italic;
  margin-bottom: 30px;
  @media (min-width: 1200px) {
    /* CSS styles for extra large devices go here */
  }
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
  letter-spacing: 1px;
  cursor: pointer;

  &:hover {
    background-color: black;
    color: white;
  }

  span {
    font-size: 20px;
    letter-spacing: 1.5px;
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
      <ReadMoreButton href={readMoreUrl}>
        Read more <span>...</span>
      </ReadMoreButton>
    </ArticleContainer>
  );
};

export default Article;
