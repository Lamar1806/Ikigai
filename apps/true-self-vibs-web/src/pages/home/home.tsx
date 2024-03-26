import styled from '@emotion/styled';
import Hero from '../../components/hero/hero';
import library from '../../assets/images/library 1.jpeg';
import OurMission from '../../components/our-mission/our-mission';
import { missionTextData } from '../../components/our-mission/our-mission-data';
import Features from '../../components/features/features';
import { features } from '../../api/mocks/features';
import Testimonials from '../../components/testimonials/testimonials';
/* eslint-disable-next-line */
export interface HomeProps {}

const StyledHome = styled.div``;

const InnerContainer = styled.div`
  padding: 0 200px;
`;

export function Home(props: HomeProps) {
  return (
    <StyledHome>
      <Hero
        media={[{ type: 'image', url: library, alt: 'main library image' }]}
        text="True Self Vibs"
      />
      <InnerContainer>
        {/*  @ts-ignore */}
        <OurMission missionData={missionTextData} />
        <Features features={features} />
        <Testimonials />
      </InnerContainer>
    </StyledHome>
  );
}
