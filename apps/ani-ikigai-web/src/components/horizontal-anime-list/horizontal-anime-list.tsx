import styled from '@emotion/styled';
import HorizontalAnimeListItem from '../horizontal-anime-list-item/horizontal-anime-list-item';

/* eslint-disable-next-line */
export interface HorizontalAnimeListProps {}

const StyledHorizontalAnimeList = styled.div`
  color: pink;
`;

export function HorizontalAnimeList(props: HorizontalAnimeListProps) {
  return (
    <StyledHorizontalAnimeList>
      <h1>Welcome to HorizontalAnimeList!</h1>
      <HorizontalAnimeListItem />
    </StyledHorizontalAnimeList>
  );
}

export default HorizontalAnimeList;
