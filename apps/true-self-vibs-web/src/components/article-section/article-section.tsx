import styled from '@emotion/styled';
import { articleData } from '../../api/mocks/article';
import Article from '../article/article';
/* eslint-disable-next-line */
export interface ArticleSectionProps {}

const StyledArticleSection = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
`;

const InnerContainer = styled.div`
  width: 100%;
  max-width: 890px;
`;

export function ArticleSection(props: ArticleSectionProps) {
  return (
    <StyledArticleSection>
      <InnerContainer>
        <Article
          title={articleData.title}
          subtitle={articleData.subtitle}
          body={articleData.body}
          readMoreUrl={''}
        />
      </InnerContainer>
    </StyledArticleSection>
  );
}

export default ArticleSection;
