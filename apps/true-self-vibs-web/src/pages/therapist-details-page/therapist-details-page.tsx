import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';

/* eslint-disable-next-line */
export interface TherapistDetailsPageProps {}

const StyledTherapistDetailsPage = styled.div`
  color: pink;
`;

export function TherapistDetailsPage(props: TherapistDetailsPageProps) {
  // @ts-ignore
  const { id } = useParams();
  return (
    <StyledTherapistDetailsPage>
      <h1>Welcome to TherapistDetailsPage {id}!</h1>
    </StyledTherapistDetailsPage>
  );
}

export default TherapistDetailsPage;
