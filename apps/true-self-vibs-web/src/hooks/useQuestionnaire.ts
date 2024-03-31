import { useState } from 'react';
import { GenderIdentity } from '../api/mocks/genders';

interface QuestionnaireHook {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  userConsent: boolean;
  setUserConsent: React.Dispatch<React.SetStateAction<boolean>>;
  userName: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
  userEmail: string;
  setUserEmail: React.Dispatch<React.SetStateAction<string>>;
  userAge: string;
  setUserAge: React.Dispatch<React.SetStateAction<string>>;
  userGenderIdentity: GenderIdentity;
  setUserGenderIdentity: React.Dispatch<React.SetStateAction<GenderIdentity>>;
  userLocation: string;
  setUserLocation: React.Dispatch<React.SetStateAction<string>>;
  presentingConcern: string;
  setPresentingConcern: React.Dispatch<React.SetStateAction<string>>;
  experiences: string;
  setExperiences: React.Dispatch<React.SetStateAction<string>>;
  understoodMoment: string;
  setUnderstoodMoment: React.Dispatch<React.SetStateAction<string>>;
  healingVision: string;
  setHealingVision: React.Dispatch<React.SetStateAction<string>>;
  therapyHopes: string;
  setTherapyHopes: React.Dispatch<React.SetStateAction<string>>;
  copingStrategies: string;
  setCopingStrategies: React.Dispatch<React.SetStateAction<string>>;
  innerWorldDescription: string;
  setInnerWorldDescription: React.Dispatch<React.SetStateAction<string>>;
  strengths: string;
  setStrengths: React.Dispatch<React.SetStateAction<string>>;
  growthAspirations: string;
  setGrowthAspirations: React.Dispatch<React.SetStateAction<string>>;
  therapyFears: string;
  setTherapyFears: React.Dispatch<React.SetStateAction<string>>;
  progress: number;
  setProgress: React.Dispatch<React.SetStateAction<number>>;
  handleConsent: (consent: boolean) => void;
  handleInputChange: (
    setter: React.Dispatch<React.SetStateAction<string>>
  ) => (event: React.ChangeEvent<HTMLInputElement>) => void;
  previousStep: () => void;
  nextStep: () => void;
}

export const useQuestionnaire = (): QuestionnaireHook => {
  const [step, setStep] = useState<number>(1);
  const [userConsent, setUserConsent] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>('');
  const [userEmail, setUserEmail] = useState<string>('');
  const [userAge, setUserAge] = useState<string>('');
  const [userGenderIdentity, setUserGenderIdentity] =
    useState<GenderIdentity>('');
  const [userLocation, setUserLocation] = useState<string>('');
  const [presentingConcern, setPresentingConcern] = useState<string>('');
  const [experiences, setExperiences] = useState<string>('');
  const [understoodMoment, setUnderstoodMoment] = useState<string>('');
  const [healingVision, setHealingVision] = useState<string>('');
  const [therapyHopes, setTherapyHopes] = useState<string>('');
  const [copingStrategies, setCopingStrategies] = useState<string>('');
  const [innerWorldDescription, setInnerWorldDescription] =
    useState<string>('');
  const [strengths, setStrengths] = useState<string>('');
  const [growthAspirations, setGrowthAspirations] = useState<string>('');
  const [therapyFears, setTherapyFears] = useState<string>('');
  const [progress, setProgress] = useState<number>(0);

  const previousStep = () => {
    // Decrease the step, ensuring it doesn't go below 1
    setStep((currentStep) => Math.max(currentStep - 1, 1));
    // Update the progress, ensuring it doesn't go below 0%
    setProgress((currentProgress) =>
      Math.max(currentProgress - (1 / 11) * 100, 0)
    );
  };

  const nextStep = () => {
    setStep((currentStep) => currentStep + 1);
    setProgress((currentStep) => (currentStep / 11) * 100);
  };

  const handleConsent = (consent: boolean) => {
    setUserConsent(consent);
    if (consent) nextStep();
  };

  const handleInputChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setter(event.target.value);
    };

  return {
    // Step 1: Welcome & Consent
    step,
    setStep,
    userConsent,
    setUserConsent,
    // Step 2: Initial Contact Information
    userName,
    setUserName,
    userEmail,
    setUserEmail,
    // Step 3: Basic Information
    userAge,
    setUserAge,
    userGenderIdentity,
    setUserGenderIdentity,
    userLocation,
    setUserLocation,
    // Step 4: Presenting Concern
    presentingConcern,
    setPresentingConcern,
    // Step 5: Experience and Perspective
    experiences,
    setExperiences,
    understoodMoment,
    setUnderstoodMoment,
    // Step 6: Goals and Expectations
    healingVision,
    setHealingVision,
    therapyHopes,
    setTherapyHopes,
    // Step 7: Coping and Comfort
    copingStrategies,
    setCopingStrategies,
    // Step 8: Inner World Exploration
    innerWorldDescription,
    setInnerWorldDescription,
    // Step 9: Strengths and Growth
    strengths,
    setStrengths,
    growthAspirations,
    setGrowthAspirations,
    // Step 10: Therapy Process
    therapyFears,
    setTherapyFears,
    progress,
    setProgress,
    // Utility Functions
    handleConsent,
    handleInputChange,
    previousStep,
    nextStep,
  };
};
