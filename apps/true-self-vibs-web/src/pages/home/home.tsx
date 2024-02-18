import styled from '@emotion/styled';
import Hero from '../../components/hero/hero';
import library from '../../assets/images/library 1.jpeg';

/* eslint-disable-next-line */
export interface HomeProps {}

const StyledHome = styled.div`
  color: pink;
`;

export function Home(props: HomeProps) {
  return (
    <StyledHome>
      <Hero
        media={[{ type: 'image', url: library, alt: 'main library image' }]}
        text="True Self Vibs"
      />
    </StyledHome>
  );
}
