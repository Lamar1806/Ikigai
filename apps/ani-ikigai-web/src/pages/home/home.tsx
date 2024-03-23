import styled from '@emotion/styled';
import HorizontalAnimeList from '../../components/horizontal-anime-list/horizontal-anime-list';

/* eslint-disable-next-line */
export interface HomeProps {}

const StyledHome = styled.div`
  color: pink;
`;

export function Home(props: HomeProps) {
  return (
    <StyledHome>
      <h1>Welcome to Home!</h1>
      <HorizontalAnimeList />
    </StyledHome>
  );
}

export default Home;
