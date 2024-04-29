import Stripe from 'stripe';
export interface TrueSelfUserInterface {
  consent: boolean;
  name: string;
  email: string;
  age: number;
  genderIdentity: string;
  location?: string;
  presentingConcern: string;
  experiencesShape: string;
  feltUnderstood: string;
  healingVision: string;
  therapyHopes: string;
  copingAndComfort: string;
  innerWorldDescription: string;
  pillarsOfStrength: string;
  growthAspirations: string;
  therapyProcessConcerns?: string;
  additionalNotes?: string;
  stripe_customer_ref_id: Stripe.Customer['id'];
}
