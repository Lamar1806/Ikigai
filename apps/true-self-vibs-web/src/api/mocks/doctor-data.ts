interface DoctorContact {
  email: string;
  phone: string;
}

interface DoctorBio {
  short: string;
  long: string;
}

export interface Doctor {
  id: number;
  name: string;
  specialties: string[];
  yearsOfExperience: number;
  bio: DoctorBio;
  languages: string[];
  contact: DoctorContact;
  availability: string;
  imageUrl: string;
  licenses: string[];
  licensedStates: string[];
  licensedCountries: string[];
}

export const doctorsData: Doctor[] = [
  {
    id: 1,
    name: 'Dr. Jane Smith',
    specialties: ['Hormone Replacement Therapy (HRT)'],
    yearsOfExperience: 8,
    bio: {
      short: 'Specialist in hormone replacement therapy for trans individuals.',
      long: 'Dr. Jane Smith is a specialist in hormone replacement therapy (HRT) for transgender individuals. With 8 years of experience, she is dedicated to providing compassionate and personalized care to her patients, helping them navigate their transition journey safely and effectively.',
    },
    languages: ['English'],
    contact: {
      email: 'jane.smith@example.com',
      phone: '+1234567891',
    },
    availability: 'Monday to Friday, 8am - 4pm',
    imageUrl: 'url-to-image',
    licenses: ['MD'],
    licensedStates: ['California'],
    licensedCountries: ['USA'],
  },
  // Add more doctors as needed
];
