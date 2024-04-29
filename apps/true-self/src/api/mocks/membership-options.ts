export interface MembershipOption {
  id: string;
  name: string;
  price: number; // Monthly price in USD
  benefits: string[];
  description: string;
}

export const membershipOptions: MembershipOption[] = [
  {
    id: 'basic',
    name: 'Basic',
    price: 999,
    benefits: [
      'Access to basic resources',
      'Monthly newsletters',
      'Limited therapist sessions',
    ],
    description:
      'A starter option for those beginning their journey to self-discovery and healing.',
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 2999,
    benefits: [
      'All Basic tier benefits',
      'Unlimited access to all resources',
      'Weekly newsletters',
      'Access to premium content',
      'Discounts on exclusive events',
    ],
    description:
      'For individuals seeking deeper insights and more extensive resources in their personal growth.',
  },
  {
    id: 'ultimate',
    name: 'Ultimate',
    price: 5999,
    benefits: [
      'All Premium tier benefits',
      'One-on-one sessions with top therapists',
      'Free access to exclusive events',
      'Personalized growth plans',
      'Priority support',
    ],
    description:
      'An all-inclusive membership designed for those who are committed to maximizing their personal development and well-being.',
  },
];
