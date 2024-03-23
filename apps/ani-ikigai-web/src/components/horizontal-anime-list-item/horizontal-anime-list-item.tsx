import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface HorizontalAnimeListItemProps {}

const StyledHorizontalAnimeListItem = styled.div`
  color: pink;
`;

export function HorizontalAnimeListItem(props: HorizontalAnimeListItemProps) {
  return (
    <StyledHorizontalAnimeListItem>
      <h1>Welcome to HorizontalAnimeListItem!</h1>
    </StyledHorizontalAnimeListItem>
  );
}

export default HorizontalAnimeListItem;
