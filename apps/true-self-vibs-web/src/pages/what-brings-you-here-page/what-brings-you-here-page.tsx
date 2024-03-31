import styled from '@emotion/styled';
import Hero from '../../components/hero/hero';
import BlossomsOfRenewal from '../../assets/images/Blossoms of Renewal- A Path to Healing.png';
import GenderSelect from '../../components/gender-select/gender-select';
import { useQuestionnaire } from '../../hooks/useQuestionnaire';
import { GenderIdentity } from '../../api/mocks/genders';
import FormStepper from '../../components/form-stepper/form-stepper';
import { flowStructure } from '../../api/mocks/stepFlow';

/* eslint-disable-next-line */
export interface WhatBringsYouHerePageProps {}

const StyledWhatBringsYouHerePage = styled.div``;

const InnerContainer = styled.div``;

const FormTitle = styled.h1`
  font-size: 48px;
  font-weight: 300;
  margin-bottom: 20px;
`;

const Form = styled.div`
  background-color: transparent;
  border: 1px solid white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  /* Target both text input and textarea */
  & input,
  & textarea {
    width: 100%;
    max-width: 600px;
    background: transparent;
    border: 1px solid black;
    margin-bottom: 16px;
    padding: 20px;
    border-radius: 15px;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: grey;
    }
  }
`;

const Input = styled.input``;

const TextArea = styled.textarea`
  height: 300px;
`;

export function WhatBringsYouHerePage(props: WhatBringsYouHerePageProps) {
  // Destructuring values from useQuestionnaire hook
  const questionnaire = useQuestionnaire();
  const formTitles = [
    'Concent',
    'Basic Information',
    'Presenting Concern',
    'Experience and Perspective',
    'Goals and Expectations',
    'Coping and Comfort',
    'Inner World Exploration',
    'Strengths and Growth',
    'Therapy Process',
  ];

  // Handle input changes for Name and Email
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    questionnaire.setUserName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    questionnaire.setUserEmail(e.target.value);
  };

  // Handle input changes for Basic Information
  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    questionnaire.setUserAge(e.target.value);
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    questionnaire.setUserLocation(e.target.value);
  };

  // Handle input changes for Presenting Concern
  const handleConcernChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    questionnaire.setPresentingConcern(e.target.value);
  };

  // Handle input changes for Experience and Perspective
  const handleExperienceChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    questionnaire.setExperiences(e.target.value);
  };

  const handleMomentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    questionnaire.setUnderstoodMoment(e.target.value);
  };

  // Handle input changes for Goals and Expectations
  const handleVisionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    questionnaire.setHealingVision(e.target.value);
  };

  const handleHopesChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    questionnaire.setTherapyHopes(e.target.value);
  };

  // Handle input changes for Coping and Comfort
  const handleStrategiesChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    questionnaire.setCopingStrategies(e.target.value);
  };

  // Handle input changes for Inner World Exploration
  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    questionnaire.setInnerWorldDescription(e.target.value);
  };

  // Handle input changes for Strengths and Growth
  const handleStrengthsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    questionnaire.setStrengths(e.target.value);
  };

  const handleAspirationsChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    questionnaire.setGrowthAspirations(e.target.value);
  };

  // Handle input changes for Therapy Process
  const handleFearsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    questionnaire.setTherapyFears(e.target.value);
  };

  return (
    <StyledWhatBringsYouHerePage>
      {/* <Hero
        media={[
          { type: 'image', url: BlossomsOfRenewal, alt: 'main library image' },
        ]}
      ></Hero> */}
      <InnerContainer>
        <Form>
          <FormStepper
            step={questionnaire.step}
            title={flowStructure[questionnaire.step].title || ''}
            handleNext={questionnaire.nextStep}
            handlePrevious={questionnaire.previousStep}
            stepsLength={formTitles.length}
            explanation={flowStructure[questionnaire.step].explanation || ''}
          >
            {/* Initial Contact Information Information */}
            {questionnaire.step === 1 && (
              <>
                <Input
                  type="text"
                  placeholder="Name"
                  value={questionnaire.userName}
                  onChange={handleNameChange}
                />
                <Input
                  type="text"
                  placeholder="Email"
                  value={questionnaire.userEmail}
                  onChange={handleEmailChange}
                />
              </>
            )}
            {questionnaire.step === 2 && (
              <>
                <Input
                  type="number"
                  placeholder="Age"
                  value={questionnaire.userAge}
                  onChange={handleAgeChange}
                />
                <GenderSelect
                  onGenderSelect={(genderIdentity) =>
                    questionnaire.setUserGenderIdentity(
                      genderIdentity as GenderIdentity
                    )
                  }
                />
                <Input
                  type="text"
                  placeholder="Location"
                  value={questionnaire.userLocation}
                  onChange={handleLocationChange}
                />
              </>
            )}
            {/* Step 4: Presenting Concern */}
            {questionnaire.step === 3 && (
              <TextArea
                placeholder="What brings you here?"
                value={questionnaire.presentingConcern}
                onChange={handleConcernChange}
              />
            )}

            {/* Step 5: Experience and Perspective */}
            {questionnaire.step === 4 && (
              <>
                <TextArea
                  placeholder="How have your experiences shaped your current perspective?"
                  value={questionnaire.experiences}
                  onChange={handleExperienceChange}
                />
                <TextArea
                  placeholder="Can you share a time when you felt truly understood?"
                  value={questionnaire.understoodMoment}
                  onChange={handleMomentChange}
                />
              </>
            )}

            {/* Step 6: Goals and Expectations */}
            {questionnaire.step === 5 && (
              <>
                <TextArea
                  placeholder="What does healing look like to you?"
                  value={questionnaire.healingVision}
                  onChange={handleVisionChange}
                />
                <TextArea
                  placeholder="What are your hopes for therapy?"
                  value={questionnaire.therapyHopes}
                  onChange={handleHopesChange}
                />
              </>
            )}

            {/* Step 7: Coping and Comfort */}
            {questionnaire.step === 6 && (
              <TextArea
                placeholder="In moments of discomfort, how do you find comfort?"
                value={questionnaire.copingStrategies}
                onChange={handleStrategiesChange}
              />
            )}

            {/* Step 8: Inner World Exploration */}
            {questionnaire.step === 7 && (
              <TextArea
                placeholder="How do you describe your inner world?"
                value={questionnaire.innerWorldDescription}
                onChange={handleDescriptionChange}
              />
            )}

            {/* Step 9: Strengths and Growth */}
            {questionnaire.step === 8 && (
              <>
                <TextArea
                  placeholder="What are the pillars of your strength?"
                  value={questionnaire.strengths}
                  onChange={handleStrengthsChange}
                />
                <TextArea
                  placeholder="How do you wish to grow or change?"
                  value={questionnaire.growthAspirations}
                  onChange={handleAspirationsChange}
                />
              </>
            )}

            {/* Step 10: Therapy Process */}
            {questionnaire.step === 8 && (
              <TextArea
                placeholder="Is there anything you fear about the therapy process?"
                value={questionnaire.therapyFears}
                onChange={handleFearsChange}
              />
            )}
          </FormStepper>
        </Form>
      </InnerContainer>
    </StyledWhatBringsYouHerePage>
  );
}

export default WhatBringsYouHerePage;
