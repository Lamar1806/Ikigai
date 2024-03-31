import styled from '@emotion/styled';
import Hero from '../../components/hero/hero';
import BlossomsOfRenewal from '../../assets/images/Blossoms of Renewal- A Path to Healing.png';
import GenderSelect from '../../components/gender-select/gender-select';
import { useQuestionnaire } from '../../hooks/useQuestionnaire';
import { GenderIdentity } from '../../api/mocks/genders';

/* eslint-disable-next-line */
export interface WhatBringsYouHerePageProps {}

const StyledWhatBringsYouHerePage = styled.div``;

const FormTtitle = styled.h1`
  font-size: 48px;
  font-weight: 300;
`;

const Form = styled.form`
  background-color: transparent;
  border: 1px solid white;
`;

export function WhatBringsYouHerePage(props: WhatBringsYouHerePageProps) {
  // Destructuring values from useQuestionnaire hook
  const questionnaire = useQuestionnaire();

  return (
    <StyledWhatBringsYouHerePage>
      <Hero
        media={[
          { type: 'image', url: BlossomsOfRenewal, alt: 'main library image' },
        ]}
      >
        <>
          <p style={{ color: 'white' }}></p>
          <Form></Form>
        </>
      </Hero>
    </StyledWhatBringsYouHerePage>
  );
}

export default WhatBringsYouHerePage;

/* <GenderSelect
  onGenderSelect={(genderIdentity) =>
    questionnaire.setUserGenderIdentity(
      genderIdentity as GenderIdentity
    )
  }
/> */
