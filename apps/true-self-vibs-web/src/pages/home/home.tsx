import styled from '@emotion/styled';
import Hero from '../../components/hero/hero';
import herImage from '../../assets/images/Hero Image.png';
import OurMission from '../../components/our-mission/our-mission';
import { missionTextData } from '../../components/our-mission/our-mission-data';
import Features from '../../components/features/features';
import { features } from '../../api/mocks/features';
import Testimonials from '../../components/testimonials/testimonials';
import ArticleSection from '../../components/article-section/article-section';
import Contact from '../../components/contact/contact';

/* eslint-disable-next-line */
export interface HomeProps {}

const StyledHome = styled.div``;

const InnerContainer = styled.div`
  padding: 0 16px;
  /* Extra Small Devices (phones) */
  @media (max-width: 576px) {
    /* CSS styles for extra small devices go here */
  }

  /* Small Devices (tablets) */
  @media (min-width: 576px) and (max-width: 768px) {
    /* CSS styles for small devices go here */
  }

  /* Medium Devices (small laptops, tablets in landscape) */
  @media (min-width: 768px) and (max-width: 992px) {
    /* CSS styles for medium devices go here */
  }

  /* Large Devices (desktops, laptops) */
  @media (min-width: 992px) and (max-width: 1200px) {
    /* CSS styles for large devices go here */
  }

  /* Extra Large Devices (large desktops, wide screens) */
  @media (min-width: 1200px) {
    /* CSS styles for extra large devices go here */
    padding: 0 200px;
  }
`;

export function Home(props: HomeProps) {
  return (
    <StyledHome>
      <Hero
        media={[{ type: 'image', url: herImage, alt: 'main library image' }]}
        text="True Self Vibs"
      />
      <InnerContainer>
        {/*  @ts-ignore */}
        <OurMission missionData={missionTextData} />
        <Features features={features} />
        <Testimonials />
        <ArticleSection />
      </InnerContainer>
      <Contact />
    </StyledHome>
  );
}
