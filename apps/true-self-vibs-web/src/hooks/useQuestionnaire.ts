import { useState } from 'react';

export type GenderIdentity =
  | 'Male'
  | 'Female'
  | 'Non-Binary'
  | 'Transgender'
  | 'Trans Female' // Also known as Trans Woman
  | 'Trans Male' // Also known as Trans Man
  | 'Intersex'
  | 'Genderqueer'
  | 'Genderfluid'
  | 'Agender' // Without gender
  | 'Bigender' // Identifying as two genders
  | 'Pangender' // Identifying with all genders
  | 'Gender Variant'
  | 'Two-Spirit' // A Native American term for people with both masculine and feminine spirits
  | 'Neutrois' // Neutral-gender
  | 'Questioning'
  | 'Prefer not to say'
  | 'Self-Describe'
  | '';
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
  userGenderIdentity: string;
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
    step,
    setStep, // Setter for 'step'
    userConsent,
    setUserConsent, // Setter for 'userConsent'
    userName,
    setUserName, // Setter for 'userName'
    userEmail,
    setUserEmail, // Setter for 'userEmail'
    userAge,
    setUserAge, // Setter for 'userAge'
    userGenderIdentity,
    setUserGenderIdentity, // Setter for 'userGenderIdentity'
    userLocation,
    setUserLocation, // Setter for 'userLocation'
    presentingConcern,
    setPresentingConcern, // Setter for 'presentingConcern'
    experiences,
    setExperiences, // Setter for 'experiences'
    understoodMoment,
    setUnderstoodMoment, // Setter for 'understoodMoment'
    healingVision,
    setHealingVision, // Setter for 'healingVision'
    therapyHopes,
    setTherapyHopes, // Setter for 'therapyHopes'
    copingStrategies,
    setCopingStrategies, // Setter for 'copingStrategies'
    innerWorldDescription,
    setInnerWorldDescription, // Setter for 'innerWorldDescription'
    strengths,
    setStrengths, // Setter for 'strengths'
    growthAspirations,
    setGrowthAspirations, // Setter for 'growthAspirations'
    therapyFears,
    setTherapyFears, // Setter for 'therapyFears'
    progress,
    setProgress, // Setter for 'progress'
    handleConsent,
    handleInputChange,
    nextStep,
  };
};
