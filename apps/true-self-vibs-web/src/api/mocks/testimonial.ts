import smilingGirl from '../../assets/images/Smiling Girl.png';

export interface TestimonialData {
  thumbnailSrc: string;
  name: string;
  experience: string;
}

export const testimonialData: TestimonialData[] = [
  {
    thumbnailSrc: smilingGirl,
    name: 'John Doe',
    experience:
      'Joining the TrueSelf community has been a turning point in my life. For years, I struggled with self-doubt and felt like I was living someone else’s story. Through the guided paths and unwavering support, I’ve discovered strengths I never knew I had. I’ve learned to embrace my journey, imperfections and all, finding a sense of peace and purpose I’d been missing. Thank you for helping me unlock my true potential.',
  },
  {
    thumbnailSrc: smilingGirl,
    name: 'Jane Smith',
    experience:
      'TrueSelf has been my guiding light during times of darkness. It’s not just a platform; it’s a family that accepts and supports you for who you are. I’ve found courage in vulnerability and strength in community. With TrueSelf, I’ve embarked on a journey of self-discovery, and I’m forever grateful for the transformation it has brought to my life.',
  },
  {
    thumbnailSrc: smilingGirl,
    name: 'Emily Johnson',
    experience:
      'TrueSelf has been my guiding light during times of darkness. When I felt lost and overwhelmed, the TrueSelf community embraced me with warmth and understanding. Through shared stories and supportive mentors, I’ve learned to navigate life’s challenges with grace and resilience. TrueSelf isn’t just a platform; it’s a lifeline—a place where I’ve found courage, compassion, and a renewed sense of purpose. I’m grateful for the transformative journey I’ve embarked on and the connections forged along the way.',
  },
  {
    thumbnailSrc: smilingGirl,
    name: 'Michael Brown',
    experience:
      'My journey with TrueSelf has been nothing short of extraordinary. From the moment I joined, I was met with encouragement and acceptance. Through engaging workshops and meaningful interactions, I’ve gained invaluable insights into myself and the world around me. TrueSelf isn’t just a community; it’s a catalyst for growth and self-discovery. With each step forward, I’ve uncovered layers of potential I never knew existed, propelling me towards a future filled with purpose and possibility.',
  },
];
