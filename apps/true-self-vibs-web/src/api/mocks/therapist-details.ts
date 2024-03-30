interface Therapist {
  id: number;
  name: string;
  specialties: string[];
  yearsOfExperience: number;
  bio: string;
  languages: string[];
  contact: {
    email: string;
    phone: string;
  };
  availability: string;
  imageUrl: string;
  licenses: string[];
  licensedStates: string[];
  licensedCountries: string[];
}

export const therapists: Therapist[] = [
  {
    id: 1,
    name: 'Dr. Sakura Haruno',
    specialties: [
      'Cognitive Behavioral Therapy',
      'Family Counseling',
      'Stress Management',
    ],
    yearsOfExperience: 5,
    bio: 'Passionate about helping clients build resilience and overcome challenges through evidence-based practices. Specializes in anxiety, depression, and stress management.',
    languages: ['English', 'Japanese'],
    contact: {
      email: 'sakura@therapyworld.com',
      phone: '+1234567890',
    },
    availability: 'Monday to Friday, 9am - 5pm',
    imageUrl: 'https://example.com/images/sakura.jpg',
    licenses: ['LPC', 'NCC'],
    licensedStates: ['California'],
    licensedCountries: ['USA'],
  },
  {
    id: 2,
    name: 'Dr. Levi Ackerman',
    specialties: ['Anxiety Disorders', 'OCD', 'Trauma'],
    yearsOfExperience: 7,
    bio: 'Dedicated to providing a safe space for healing and recovery, specializing in trauma and anxiety disorders.',
    languages: ['English', 'German'],
    contact: {
      email: 'levi@healingpaths.com',
      phone: '+1234567891',
    },
    availability: 'Tuesday to Saturday, 10am - 6pm',
    imageUrl: 'https://example.com/images/levi.jpg',
    licenses: ['PsyD', 'MD'],
    licensedStates: ['New York', 'New Jersey'],
    licensedCountries: ['USA'],
  },
  {
    id: 3,
    name: 'Dr. Hinata Shoyo',
    specialties: [
      'Child and Adolescent Therapy',
      'Behavioral Issues',
      'Educational Assessments',
    ],
    yearsOfExperience: 4,
    bio: 'Focused on helping young individuals and their families navigate behavioral and emotional challenges.',
    languages: ['English', 'Japanese'],
    contact: {
      email: 'hinata@youngminds.com',
      phone: '+1234567892',
    },
    availability: 'Monday to Friday, 8am - 4pm',
    imageUrl: 'https://example.com/images/hinata.jpg',
    licenses: ['LMFT', 'RPT'],
    licensedStates: ['Illinois'],
    licensedCountries: ['USA'],
  },
  {
    id: 4,
    name: 'Dr. Toshinori Yagi',
    specialties: [
      'Stress Management',
      'Positive Psychology',
      'Life Transitions',
    ],
    yearsOfExperience: 10,
    bio: 'Committed to empowering clients to achieve their fullest potential, focusing on strengths and positive outcomes.',
    languages: ['English'],
    contact: {
      email: 'toshinori@heroesupport.com',
      phone: '+1234567893',
    },
    availability: 'Weekends, 9am - 3pm',
    imageUrl: 'https://example.com/images/toshinori.jpg',
    licenses: ['LPC', 'CC'],
    licensedStates: ['Texas', 'Florida'],
    licensedCountries: ['USA'],
  },
  {
    id: 5,
    name: 'Dr. Katsuki Bakugo',
    specialties: [
      'Anger Management',
      'Adolescent Therapy',
      'Crisis Intervention',
    ],
    yearsOfExperience: 6,
    bio: 'Focused on helping individuals navigate anger and frustration, providing tools for emotional regulation.',
    languages: ['English', 'Japanese'],
    contact: {
      email: 'katsuki@explosivetherapy.com',
      phone: '+1234567894',
    },
    availability: 'Monday to Thursday, 12pm - 8pm',
    imageUrl: 'https://example.com/images/katsuki.jpg',
    licenses: ['PsyD', 'BC-TMH'],
    licensedStates: ['Washington'],
    licensedCountries: ['USA'],
  },
  {
    id: 6,
    name: 'Dr. Shoto Todoroki',
    specialties: ['Family Therapy', 'Trauma Recovery', 'Mindfulness'],
    yearsOfExperience: 8,
    bio: 'Integrating traditional and holistic approaches to healing, specializing in trauma and family dynamics.',
    languages: ['English', 'Japanese', 'Spanish'],
    contact: {
      email: 'shoto@balancedminds.com',
      phone: '+1234567895',
    },
    availability: 'Wednesday to Sunday, 10am - 6pm',
    imageUrl: 'https://example.com/images/shoto.jpg',
    licenses: ['LMFT', 'RPT-S'],
    licensedStates: ['Oregon', 'California'],
    licensedCountries: ['USA'],
  },
  {
    id: 7,
    name: 'Dr. Momo Yaoyorozu',
    specialties: [
      'Cognitive Development',
      'Educational Therapy',
      'Self-Esteem Issues',
    ],
    yearsOfExperience: 5,
    bio: 'Employs a creative approach to therapy, aiding in cognitive development and building self-esteem.',
    languages: ['English', 'Japanese', 'French'],
    contact: {
      email: 'momo@creativityintherapy.com',
      phone: '+1234567896',
    },
    availability: 'Tuesday to Saturday, 11am - 7pm',
    imageUrl: 'https://example.com/images/momo.jpg',
    licenses: ['EdD', 'NCC'],
    licensedStates: ['Colorado', 'Utah'],
    licensedCountries: ['USA'],
  },
];
