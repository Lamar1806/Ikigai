import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface TherapistsPageProps {}

const StyledTherapistsPage = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 250px);
`;

export function TherapistsPage(props: TherapistsPageProps) {
  return (
    <StyledTherapistsPage>
      <h1>Welcome to TherapistsPage!</h1>
    </StyledTherapistsPage>
  );
}

export default TherapistsPage;
