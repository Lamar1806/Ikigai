import styled from '@emotion/styled';
import { therapistsData } from '../../api/mocks/therapist-data';
import TherapistCard from '../therapist-card/therapist-card';

/* eslint-disable-next-line */
export interface TherapistListProps {}

const StyledTherapistList = styled.div`
  padding: 0px 200px;
`;

export function TherapistList(props: TherapistListProps) {
  return (
    <StyledTherapistList>
      {therapistsData.map((therapist) => (
        <TherapistCard key={therapist.id} therapist={therapist} />
      ))}
    </StyledTherapistList>
  );
}

export default TherapistList;
