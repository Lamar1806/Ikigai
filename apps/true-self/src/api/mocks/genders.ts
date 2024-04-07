// genders.ts
export const GENDERS = {
  Male: 'Male', // Identifies as male
  Female: 'Female', // Identifies as female
  NonBinary: 'Non-Binary', // Does not exclusively identify as male or female
  Transgender: 'Transgender', // Gender identity differs from the sex assigned at birth
  TransFemale: 'Trans Female', // Assigned male at birth but identifies as female, also known as Trans Woman
  TransMale: 'Trans Male', // Assigned female at birth but identifies as male, also known as Trans Man
  Intersex: 'Intersex', // Individuals with physical sex markers that are not exclusively male or female
  Genderqueer: 'Genderqueer', // Identifies outside of the traditional gender binary
  Genderfluid: 'Genderfluid', // Experiences different gender identities at different times
  Agender: 'Agender', // Without gender, or gender-neutral
  Bigender: 'Bigender', // Identifies as two genders
  Pangender: 'Pangender', // Identifies with all genders
  GenderVariant: 'Gender Variant', // Exhibits gender characteristics and identities different from societal norms
  TwoSpirit: 'Two-Spirit', // A Native American term for people with both masculine and feminine spirits
  Neutrois: 'Neutrois', // Neutral-gender, a non-binary gender identity that is considered to be a neutral or null gender
  Questioning: 'Questioning', // Exploring or questioning one's own gender identity
  PreferNotToSay: 'Prefer not to say', // Chooses not to disclose their gender identity
  SelfDescribe: 'Self-Describe', // Provides an option for individuals to describe their gender identity in their own words
} as const;

// In the same or a separate file
export type GenderIdentity = keyof typeof GENDERS | '';
