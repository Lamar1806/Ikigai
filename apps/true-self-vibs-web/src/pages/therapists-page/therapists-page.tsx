import styled from '@emotion/styled';
import HeroForQuarterScreen from '../../components/renewal-banner/HeroForQuarterScreen';
import Blossoms from '../../assets/images/Blossoms of Renewal- A Path to Healing.png';
import TherapistCard from '../../components/therapist-card/therapist-card';
import { therapistsData } from '../../api/mocks/therapist-data';
import TherapistList from '../../components/therapist-list/therapist-list';

const Title = styled.h2`
  font-size: 40px;
  text-align: center;
  font-weight: 300;
  margin-top: 68px;
  margin-bottom: 60px;
`;

/* eslint-disable-next-line */
export interface TherapistsPageProps {}

const StyledTherapistsPage = styled.div`
  display: flex;
  flex-direction: column;
`;

export function TherapistsPage(props: TherapistsPageProps) {
  return (
    <StyledTherapistsPage>
      <HeroForQuarterScreen backgroundImage={Blossoms} />
      <Title>Our Therapists</Title>
      <TherapistList />
    </StyledTherapistsPage>
  );
}

export default TherapistsPage;
