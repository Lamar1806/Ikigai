type FlowStep = {
  step: number;
  title: string;
  description: string;
  explanation?: string;
  designTips?: string[];
};

const flowStructure: FlowStep[] = [
  {
    step: 1,
    title: 'Welcome & Consent',
    description:
      "Begin with a warm, reassuring introduction to the site and its purpose. Briefly explain the questionnaire's purpose and ask for consent to proceed.",
  },
  {
    step: 2,
    title: 'Initial Contact Information',
    description:
      'Question Group 1: Ask for their name (or preferred name) and email address.',
    explanation:
      "We start with your name and email so we can continue our conversation beyond this form. Feel free to use the name you're most comfortable with.",
  },
  {
    step: 3,
    title: 'Basic Information',
    description:
      'Question Group 2: Age, Gender Identity, Location (optional: to understand timezone for scheduling).',
    explanation:
      'This basic info helps us tailor our approach to support you best.',
  },
  {
    step: 4,
    title: 'Presenting Concern',
    description: "Question 1: 'What brings you here?'",
    explanation:
      'In your own words, tell us what’s on your mind. Feel free to share as much or as little as you like.',
  },
  {
    step: 5,
    title: 'Experience and Perspective',
    description:
      "Questions 2 and 3: 'How have your experiences shaped your current perspective?' and 'Can you share a time when you felt truly understood?'",
    explanation:
      'Understanding your journey and moments of connection helps us see the world through your eyes.',
  },
  {
    step: 6,
    title: 'Goals and Expectations',
    description:
      "Questions 4 and 5: 'What does healing look like to you?' and 'What are your hopes for therapy?'",
    explanation:
      'Envisioning your path to healing and what you seek from therapy can guide our journey together.',
  },
  {
    step: 7,
    title: 'Coping and Comfort',
    description:
      "Question 6: 'In moments of discomfort, how do you find comfort?'",
    explanation:
      'Knowing how you navigate difficult times helps us understand your resilience and coping strategies.',
  },
  {
    step: 8,
    title: 'Inner World Exploration',
    description: "Question 7: 'How do you describe your inner world?'",
    explanation:
      'This glimpse into your feelings, thoughts, and dreams offers a deeper understanding of your emotional landscape.',
  },
  {
    step: 9,
    title: 'Strengths and Growth',
    description:
      "Questions 8 and 9: 'What are the pillars of your strength?' and 'How do you wish to grow or change?'",
    explanation:
      'Recognizing your strengths and aspirations for growth enriches our collaborative path forward.',
  },
  {
    step: 10,
    title: 'Therapy Process',
    description:
      "Question 10: 'Is there anything you fear about the therapy process?'",
    explanation:
      'Addressing any concerns or questions you have about therapy can help make this journey more comfortable for you.',
  },
  {
    step: 11,
    title: 'Closing & Next Steps',
    description:
      'Offer a heartfelt thank you for their time and openness. Outline the next steps, including how and when they will hear back from your team.',
  },
  {
    step: 12,
    title: 'Design Tips',
    description: 'Design considerations for the flow structure.',
    designTips: [
      'Progressive Disclosure: Unveil questions one at a time to keep the process feeling manageable and engaging.',
      'Save Progress: Allow users to save their progress and return if they need a break, ensuring they don’t feel rushed.',
      'Empathetic Tone: Use reassuring language throughout, reminding them that their responses are valuable and will be treated with confidentiality and care.',
      'Visual Indicators: Include progress bars or indicators to show how far along they are in the questionnaire.',
    ],
  },
];

export default flowStructure;
