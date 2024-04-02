import styled from '@emotion/styled';
import Hero from '../hero/hero';
import HeroImage from '../../assets/images/Hero Image.png';

/* eslint-disable-next-line */
export interface ComingSoonProps {}

const StyledComingSoon = styled.div`
  color: pink;
`;

export function ComingSoon(props: ComingSoonProps) {
  return (
    <StyledComingSoon>
      <Hero
        media={[{ type: 'image', url: HeroImage, alt: 'main library image' }]}
        text="404 Coming Soon"
      />
    </StyledComingSoon>
  );
}

export default ComingSoon;
