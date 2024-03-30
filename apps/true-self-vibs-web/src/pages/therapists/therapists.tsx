import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface TherapistsProps {}

const StyledTherapists = styled.div`
  color: pink;
`;

export function Therapists(props: TherapistsProps) {
  return (
    <StyledTherapists>
      <h1>Welcome to Therapists!</h1>
    </StyledTherapists>
  );
}

export default Therapists;
