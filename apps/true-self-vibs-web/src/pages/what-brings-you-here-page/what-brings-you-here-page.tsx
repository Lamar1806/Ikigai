import styled from '@emotion/styled';
import Hero from '../../components/hero/hero';
import BlossomsOfRenewal from '../../assets/images/Blossoms of Renewal- A Path to Healing.png';

/* eslint-disable-next-line */
export interface WhatBringsYouHerePageProps {}

const StyledWhatBringsYouHerePage = styled.div`
  color: pink;
`;

const Form = styled.form`
  background-color: transparent;
  border
`;

export function WhatBringsYouHerePage(props: WhatBringsYouHerePageProps) {
  return (
    <StyledWhatBringsYouHerePage>
      <Hero
        media={[
          { type: 'image', url: BlossomsOfRenewal, alt: 'main library image' },
        ]}
      >
        <p style={{ color: 'white' }}>d</p>
        <Form></Form>

      </Hero>
    </StyledWhatBringsYouHerePage>
  );
}

export default WhatBringsYouHerePage;
