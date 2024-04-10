export interface TrueSelfUserInterface {
  consent: boolean;
  contactInformation: {
    name: string;
    email: string;
  };
  basicInformation: {
    age: number;
    genderIdentity: string;
    location?: string; // Optional as per your flow
  };
  presentingConcern: string;
  experienceAndPerspective: {
    experiencesShape: string;
    feltUnderstood: string;
  };
  goalsAndExpectations: {
    healingVision: string;
    therapyHopes: string;
  };
  copingAndComfort: string;
  innerWorldDescription: string;
  strengthsAndGrowth: {
    pillarsOfStrength: string;
    growthAspirations: string;
  };
  therapyProcessConcerns?: string; // Optional, as they might not have any
  // Consider adding a field for additional comments or questions
  additionalNotes?: string;
}
