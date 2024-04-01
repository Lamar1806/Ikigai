import styled from '@emotion/styled';
import HeroForQuarterScreen from '../../components/renewal-banner/HeroForQuarterScreen';
import Blossoms from '../../assets/images/Blossoms of Renewal- A Path to Healing.png';

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
      <HeroForQuarterScreen backgroundImage={Blossoms} />
    </StyledTherapistsPage>
  );
}

export default TherapistsPage;
