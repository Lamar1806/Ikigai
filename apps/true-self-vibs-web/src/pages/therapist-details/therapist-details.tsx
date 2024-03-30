import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface TherapistDetailsProps {}

const StyledTherapistDetails = styled.div`
  color: pink;
`;

export function TherapistDetails(props: TherapistDetailsProps) {
  return (
    <StyledTherapistDetails>
      <h1>Welcome to TherapistDetails!</h1>
    </StyledTherapistDetails>
  );
}

export default TherapistDetails;
