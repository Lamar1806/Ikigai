import therapist from '../../assets/images/therapist-smile-girl.webp';
interface TherapistContact {
  email: string;
  phone: string;
}

interface TherapistBio {
  short: string;
  long: string;
}

export interface Therapist {
  id: number;
  name: string;
  specialties: string[];
  yearsOfExperience: number;
  bio: TherapistBio;
  languages: string[];
  contact: TherapistContact;
  availability: string;
  imageUrl: string;
  licenses: string[];
  licensedStates: string[];
  licensedCountries: string[];
}

export const therapistsData: Therapist[] = [
  {
    id: 8,
    name: 'Dr. Rem',
    specialties: [
      'Self-Esteem Building',
      'Relationship Counseling',
      'Overcoming Inadequacy',
    ],
    yearsOfExperience: 5,
    bio: {
      short:
        'Focused on nurturing self-worth, enhancing relationships, and overcoming feelings of inadequacy.',
      long: `Dr. Rem is a dedicated therapist with five years of experience, specializing in Self-Esteem Building, Relationship Counseling, and Overcoming Inadequacy. Inspired by her own challenges and growth, Dr. Rem is passionately committed to helping her clients discover their self-worth and potential.

      Dr. Rem holds a master's degree in clinical psychology, with additional training in cognitive-behavioral therapy and emotional-focused therapy. She has a warm, empathetic approach to therapy, creating a supportive environment where clients can openly express themselves and explore their feelings without fear of judgment.

      Understanding the impact of self-esteem on personal and relational well-being, Dr. Rem employs a range of therapeutic techniques designed to bolster self-confidence and promote a healthy self-image. Her work in relationship counseling focuses on improving communication, fostering understanding, and resolving conflicts, helping couples and families build stronger, more loving connections.

      An advocate for mental health awareness, Dr. Rem is actively involved in community outreach, offering workshops and support groups that address issues of self-esteem, relationship dynamics, and personal growth. Her dedication to her clients' well-being is evident in her compassionate care and commitment to their journey toward healing and fulfillment.

      Outside of her clinical practice, Dr. Rem enjoys gardening and baking, hobbies that reflect her nurturing personality and belief in the therapeutic value of creative expression and connection to nature.

      Dr. Rem's ultimate aim is to empower her clients to overcome internal barriers, cultivate positive relationships, and lead lives filled with confidence and joy.`,
    },
    languages: ['English', 'Japanese'],
    contact: {
      email: 'rem@therapyworld.com',
      phone: '+1234567897',
    },
    availability: 'Wednesday to Sunday, 10am - 6pm',
    imageUrl: therapist,
    licenses: ['LMFT', 'CBT'],
    licensedStates: ['New York', 'Massachusetts'],
    licensedCountries: ['USA'],
  },
  {
    id: 1,
    name: 'Dr. Sakura Haruno',
    specialties: [
      'Cognitive Behavioral Therapy',
      'Family Counseling',
      'Stress Management',
    ],
    yearsOfExperience: 5,
    bio: {
      short: 'Specializes in anxiety, depression, and stress management.',
      long: `Dr. Sakura Haruno is a seasoned therapist with over five years of experience specializing in Cognitive Behavioral Therapy (CBT), Family Counseling, and Stress Management. Her journey in the mental health field began after obtaining her doctorate, where she was drawn to the complexities of human behavior and the resilience of the human spirit.

      Throughout her career, Dr. Haruno has dedicated herself to understanding the nuances of anxiety, depression, and stress-related disorders, firmly believing in the transformative power of evidence-based practices. Her approach is holistic and client-centered, focusing on creating a safe and supportive environment where clients can explore their thoughts, feelings, and behaviors without judgment.

      Dr. Haruno's work extends beyond individual therapy sessions; she is an advocate for mental health awareness in her community, regularly conducting workshops and seminars aimed at destigmatizing mental health issues and promoting wellness and self-care strategies. She has also contributed to several publications on the effectiveness of CBT in treating anxiety and depression, establishing herself as a respected voice in her field.

      Her therapy sessions are characterized by empathy, warmth, and a deep commitment to empowering her clients. Dr. Haruno integrates various techniques tailored to meet the unique needs of each individual, drawing from her extensive training in CBT, mindfulness practices, and stress reduction techniques. She believes in working collaboratively with her clients, setting realistic goals, and celebrating progress, no matter how small.

      Outside of her professional life, Dr. Haruno is passionate about nature and finds solace and inspiration in the outdoors. She often incorporates elements of nature therapy into her practice, encouraging clients to connect with the natural world as a source of healing and renewal.

      Dr. Sakura Haruno's ultimate goal is to help her clients navigate the challenges of life with resilience and grace, equipping them with the tools and insights needed to lead fulfilling and balanced lives.`,
    },
    languages: ['English', 'Japanese'],
    contact: {
      email: 'sakura@therapyworld.com',
      phone: '+1234567890',
    },
    availability: 'Monday to Friday, 9am - 5pm',
    imageUrl: therapist,
    licenses: ['LPC', 'NCC'],
    licensedStates: ['California'],
    licensedCountries: ['USA'],
  },
  {
    id: 2,
    name: 'Dr. Naruto Uzumaki',
    specialties: [
      'Trauma Recovery',
      'Mindfulness Meditation',
      'Adolescent Therapy',
    ],
    yearsOfExperience: 7,
    bio: {
      short: 'Expert in trauma recovery and mindfulness meditation.',
      long: `Dr. Naruto Uzumaki brings over seven years of experience to his practice, specializing in Trauma Recovery, Mindfulness Meditation, and Adolescent Therapy. His passion for helping others heal and grow stems from his own experiences, driving him to become a therapist who genuinely understands the journey of recovery.

      Dr. Uzumaki's approach to therapy is integrative, blending traditional therapeutic techniques with innovative mindfulness practices. He is committed to providing a compassionate, safe space where individuals can explore their experiences and challenges. His work with adolescents is particularly noteworthy, offering them the guidance and support they need during their formative years.

      Beyond his clinical work, Dr. Uzumaki is an active advocate for mental health education, regularly participating in community outreach programs and leading workshops on the benefits of mindfulness in everyday life. His contributions to various mental health publications have helped raise awareness about the importance of trauma-informed care.

      In therapy sessions, Dr. Uzumaki employs a combination of evidence-based practices and personalized strategies designed to empower his clients. He emphasizes the importance of a therapeutic partnership, working collaboratively with clients to achieve lasting change.

      A lover of the outdoors, Dr. Uzumaki often draws parallels between the healing power of nature and the therapeutic process. He encourages clients to engage with their environments in ways that promote peace and well-being.

      Ultimately, Dr. Naruto Uzumaki's goal is to guide his clients toward a path of healing and self-discovery, helping them to unlock their potential and lead lives filled with purpose and joy.`,
    },
    languages: ['English'],
    contact: {
      email: 'naruto@therapyworld.com',
      phone: '+1234567891',
    },
    availability: 'Monday to Friday, 8am - 6pm',
    imageUrl: therapist,
    licenses: ['LCSW', 'BCD'],
    licensedStates: ['New York', 'New Jersey'],
    licensedCountries: ['USA'],
  },
  {
    id: 3,
    name: 'Dr. Hinata Hyuga',
    specialties: [
      'Mindfulness-Based Stress Reduction',
      'Couples Therapy',
      'Anxiety Disorders',
    ],
    yearsOfExperience: 8,
    bio: {
      short: 'Focuses on mindfulness, couples therapy, and anxiety management.',
      long: `Dr. Hinata Hyuga is a dedicated therapist with eight years of experience, specializing in Mindfulness-Based Stress Reduction, Couples Therapy, and Anxiety Disorders. Her approach to therapy is grounded in compassion, empathy, and the belief in each individual's capacity for change and growth.

      With a master’s degree in clinical psychology and a doctorate focused on mindfulness practices, Dr. Hyuga has developed a therapeutic approach that combines evidence-based techniques with mindfulness strategies to help clients achieve a balanced mind and body. Her work with couples is highly regarded, offering paths to communication, understanding, and renewed connection.

      Dr. Hyuga is an advocate for mental health wellness and regularly volunteers her time to lead community-based mindfulness workshops. Her contributions to the field extend to writing articles and speaking at conferences about the effectiveness of mindfulness in therapy.

      In her sessions, Dr. Hyuga creates a supportive and non-judgmental space, encouraging clients to explore their thoughts and emotions openly. Her personalized approach respects the unique journey of each client, focusing on building strengths, resilience, and coping strategies.

      Beyond her clinical practice, Dr. Hyuga enjoys hiking and yoga, practices she often recommends to clients as part of a holistic approach to wellness. She believes in the healing power of nature and the importance of integrating mind-body practices into daily life.

      Dr. Hinata Hyuga is committed to guiding her clients through their challenges, supporting them in navigating life's difficulties with grace, and helping them find lasting well-being and fulfillment.`,
    },
    languages: ['English', 'Spanish'],
    contact: {
      email: 'hinata@therapyworld.com',
      phone: '+1234567892',
    },
    availability: 'Tuesday to Saturday, 10am - 7pm',
    imageUrl: therapist,
    licenses: ['LMFT', 'RPT'],
    licensedStates: ['Texas', 'Florida'],
    licensedCountries: ['USA'],
  },
  {
    id: 4,
    name: 'Dr. Ken Kaneki',
    specialties: [
      'Trauma Therapy',
      'Identity and Self-Discovery',
      'Crisis Intervention',
    ],
    yearsOfExperience: 6,
    bio: {
      short:
        'Expert in trauma recovery, helping clients rediscover themselves and navigate crises.',
      long: `Dr. Ken Kaneki is a compassionate therapist with six years of experience, specializing in Trauma Therapy, Identity and Self-Discovery, and Crisis Intervention. His journey into the mental health field was inspired by his personal experiences with trauma and the complex process of identity formation.

      Dr. Kaneki holds a doctorate in psychology, with a focus on trauma and its long-term impact on identity and personal growth. He is committed to helping his clients navigate the challenges of trauma recovery, offering a supportive and empathetic space for them to explore their experiences and work towards healing.

      With a deep understanding of the intricacies of identity issues, Dr. Kaneki aids his clients in the journey of self-discovery, helping them to understand and embrace their multifaceted selves. His approach is holistic, integrating cognitive-behavioral techniques with narrative therapy to empower clients to rewrite their stories and find meaning in their experiences.

      An advocate for mental health awareness, Dr. Kaneki frequently participates in community outreach programs, aiming to destigmatize mental health issues and promote the importance of seeking support. He believes in the resilience of the human spirit and the capacity for individuals to grow and transform through their adversities.

      Outside of his professional life, Dr. Kaneki is an avid reader and believes in the power of stories to heal and inspire. He often incorporates literature into his therapy sessions as a tool for reflection and understanding.

      Dr. Ken Kaneki is dedicated to supporting his clients through their darkest times, guiding them towards a path of recovery, self-acceptance, and empowerment, and helping them to emerge stronger and more connected to their true selves.`,
    },
    languages: ['English', 'Japanese'],
    contact: {
      email: 'kaneki@therapyworld.com',
      phone: '+1234567893',
    },
    availability: 'Wednesday to Sunday, 11am - 8pm',
    imageUrl: therapist,
    licenses: ['PhD', 'PsyD'],
    licensedStates: ['Illinois'],
    licensedCountries: ['USA'],
  },
  {
    id: 5,
    name: 'Dr. Kishou Arima',
    specialties: [
      'Grief Counseling',
      'Resilience Training',
      'Existential Therapy',
    ],
    yearsOfExperience: 10,
    bio: {
      short:
        "Dedicated to helping individuals navigate grief, build resilience, and find meaning in life's challenges.",
      long: `Dr. Kishou Arima is a distinguished therapist with a decade of experience, particularly in Grief Counseling, Resilience Training, and Existential Therapy. His approach to therapy is profoundly influenced by his background in understanding the complexities of loss, mortality, and the human condition.

      Holding a doctorate in clinical psychology, Dr. Arima has devoted his career to assisting people in their darkest hours, guiding them through the process of grief and helping them to find a path forward. His work is characterized by a deep empathy and a commitment to providing a space where individuals can freely express their feelings and thoughts.

      Dr. Arima's methodology in therapy is rooted in existential principles, focusing on the search for meaning and the capacity to endure and grow from life's adversities. He employs a range of therapeutic techniques, from cognitive-behavioral strategies to mindfulness, all tailored to support individuals in building resilience and finding personal growth in the aftermath of loss.

      Beyond his clinical practice, Dr. Arima is a prolific writer and speaker on topics related to grief, resilience, and the existential quest for meaning. His insights have contributed to a broader understanding of how individuals can navigate the complexities of existence with courage and grace.

      In his free time, Dr. Arima enjoys classical music and chess, pursuits that reflect his contemplative nature and his appreciation for the intricacies of life. He believes in the healing power of connecting with our passions and interests, a theme he often explores with his clients.

      Dr. Kishou Arima's ultimate mission is to support his clients in embracing the full spectrum of human experience, guiding them towards healing, transformation, and a profound engagement with life.`,
    },
    languages: ['English', 'Japanese'],
    contact: {
      email: 'arima@therapyworld.com',
      phone: '+1234567894',
    },
    availability: 'Monday to Friday, 8am - 4pm',
    imageUrl: therapist,
    licenses: ['LCSW', 'CEAP'],
    licensedStates: ['Washington', 'Oregon'],
    licensedCountries: ['USA'],
  },
  {
    id: 6,
    name: 'Dr. Touka Kirishima',
    specialties: ['Adolescent Therapy', 'Emotional Regulation', 'Empowerment'],
    yearsOfExperience: 8,
    bio: {
      short:
        'Empowering young individuals through emotional regulation and resilience strategies.',
      long: `Dr. Touka Kirishima is an insightful therapist with eight years of experience, focusing on Adolescent Therapy, Emotional Regulation, and Empowerment. Inspired by her own journey through challenges, Dr. Kirishima is dedicated to supporting young people in navigating the complexities of emotions and self-discovery.

      With a Master's in Clinical Psychology and a certification in adolescent mental health, Dr. Kirishima combines empathy with evidence-based practices to help her clients develop coping strategies, improve emotional regulation, and build self-esteem. Her approach is client-centered, providing a safe and supportive environment where adolescents feel heard and valued.

      Dr. Kirishima's work extends to empowering her clients, helping them recognize their strengths and potential. She believes in the power of resilience and self-advocacy, guiding her clients to become active participants in their journey toward well-being.

      An advocate for mental health awareness, Dr. Kirishima regularly engages in community outreach, offering workshops on emotional wellness, bullying, and self-empowerment. Her commitment to her clients and the community has made her a respected voice in the field of adolescent therapy.

      Outside the therapy room, Dr. Kirishima enjoys running and photography, hobbies that she often incorporates into her therapeutic practices as means of exploring self-expression and mindfulness.

      Dr. Touka Kirishima's mission is to inspire and support her clients in overcoming obstacles, understanding their emotions, and forging a path of personal growth and empowerment.`,
    },
    languages: ['English', 'Japanese'],
    contact: {
      email: 'touka@therapyworld.com',
      phone: '+1234567895',
    },
    availability: 'Tuesday to Saturday, 10am - 6pm',
    imageUrl: therapist,
    licenses: ['LMHC', 'RPT-S'],
    licensedStates: ['Virginia', 'Maryland'],
    licensedCountries: ['USA'],
  },
  {
    id: 7,
    name: 'Dr. Emilia',
    specialties: ['Trauma Recovery', 'Self-Acceptance', 'Mindfulness'],
    yearsOfExperience: 7,
    bio: {
      short:
        'Dedicated to guiding individuals towards healing, self-acceptance, and mindful living.',
      long: `Dr. Emilia is a compassionate therapist with seven years of experience in Trauma Recovery, Self-Acceptance, and Mindfulness. Her therapeutic approach is deeply influenced by her belief in the inherent strength of individuals to overcome adversity and find peace within themselves.

      Holding a doctorate in psychology with a focus on trauma-informed care, Dr. Emilia has dedicated her career to helping those affected by trauma to reclaim their lives. She believes in the transformative power of understanding and accepting one's self, fostering a therapeutic environment where clients can explore their thoughts and emotions without fear of judgment.

      Dr. Emilia's methodology incorporates mindfulness techniques, encouraging clients to cultivate a present-focused awareness and acceptance of their experiences. She is skilled in a variety of therapeutic modalities, tailoring her approach to meet the unique needs of each client, with a special focus on building resilience and fostering a sense of inner calm.

      Beyond her clinical practice, Dr. Emilia is passionate about mental health advocacy, working to destigmatize mental health issues and promote access to mental health care for all. She is a frequent speaker at conferences and community events, sharing her knowledge and advocating for the importance of mental health awareness.

      In her personal time, Dr. Emilia enjoys nature walks and meditation, practices she often recommends to her clients as part of a holistic approach to wellness. She believes that connection with nature and mindfulness practices can play a crucial role in the healing process, enhancing mental and emotional well-being.

      Dr. Emilia's goal is to empower her clients to navigate their healing journey with courage and grace, supporting them in developing the tools they need to live more mindful, fulfilled lives.`,
    },
    languages: ['English', 'Japanese'],
    contact: {
      email: 'emilia@therapyworld.com',
      phone: '+1234567896',
    },
    availability: 'Monday to Friday, 9am - 5pm',
    imageUrl: therapist,
    licenses: ['LPC', 'NCC'],
    licensedStates: ['Colorado', 'Utah'],
    licensedCountries: ['USA'],
  },
];
