import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface TherapistDetailsPageProps {}

const StyledTherapistDetailsPage = styled.div`
  color: pink;
`;

export function TherapistDetailsPage(props: TherapistDetailsPageProps) {
  return (
    <StyledTherapistDetailsPage>
      <h1>Welcome to TherapistDetailsPage!</h1>
    </StyledTherapistDetailsPage>
  );
}

export default TherapistDetailsPage;
