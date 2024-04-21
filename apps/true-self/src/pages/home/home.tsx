import styled from '@emotion/styled';
import Hero from '../../components/hero/hero';
import heroImage from '../../assets/images/Hero Image.png';
import OurMission from '../../components/our-mission/our-mission';
import { missionTextData } from '../../api/mocks/our-mission-data';
import Features from '../../components/features/features';
import { features } from '../../api/mocks/features';
import Testimonials from '../../components/testimonials/testimonials';
import ArticleSection from '../../components/article-section/article-section';
import Contact from '../../components/contact/contact';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../redux/authSlice';

/* eslint-disable-next-line */
export interface HomeProps {}

const StyledHome = styled.div``;

const InnerContainer = styled.div`
  padding: 0 16px;
  /* Extra Large Devices (large desktops, wide screens) */
  @media (min-width: 1200px) {
    /* CSS styles for extra large devices go here */
    padding: 0 200px;
  }
`;

export function Home(props: HomeProps) {
  const dispatch = useDispatch();
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const authStatus = urlParams.get('auth');
    if (authStatus === 'success') {
      // Update your authentication state in the context or state management library
      // dispatch(loginSuccess());
    }
  }, []);
  return (
    <StyledHome>
      <Hero
        media={[{ type: 'image', url: heroImage, alt: 'main library image' }]}
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
