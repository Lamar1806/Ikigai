import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface TherapistdetailsProps {}

const StyledTherapistdetails = styled.div`
  color: pink;
`;

export function Therapistdetails(props: TherapistdetailsProps) {
  return (
    <StyledTherapistdetails>
      <h1>Welcome to Therapistdetails!</h1>
    </StyledTherapistdetails>
  );
}

export default Therapistdetails;
