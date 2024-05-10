export interface TrueSelfUser {
  contactInformation: {
    email: string;
    name: string;
  };
  presentingConcern: string;
  goalsAndExpectations: {
    healingVision: string;
    therapyHopes: string;
  };
  consent: boolean;
  experienceAndPerspective: {
    feltUnderstood: string;
    experiencesShape: string;
  };
  innerWorldDescription: string;
  basicInformation: {
    location: string;
    age: number;
    genderIdentity: string;
  };
  strengthsAndGrowth: {
    growthAspirations: string;
    pillarsOfStrength: string;
  };
  copingAndComfort: string;
  customerId: string;
}
