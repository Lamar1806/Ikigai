// genders.ts
export const GENDERS = {
  Male: 'Male',
  Female: 'Female',
  NonBinary: 'Non-Binary',
  Transgender: 'Transgender',
  TransFemale: 'Trans Female', // Also known as Trans Woman
  TransMale: 'Trans Male', // Also known as Trans Man
  Intersex: 'Intersex',
  Genderqueer: 'Genderqueer',
  Genderfluid: 'Genderfluid',
  Agender: 'Agender', // Without gender
  Bigender: 'Bigender', // Identifying as two genders
  Pangender: 'Pangender', // Identifying with all genders
  GenderVariant: 'Gender Variant',
  TwoSpirit: 'Two-Spirit', // A Native American term for people with both masculine and feminine spirits
  Neutrois: 'Neutrois', // Neutral-gender
  Questioning: 'Questioning',
  PreferNotToSay: 'Prefer not to say',
  SelfDescribe: 'Self-Describe',
} as const;

// In the same or a separate file
export type GenderIdentity = keyof typeof GENDERS | '';
