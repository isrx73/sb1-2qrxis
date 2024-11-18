import { Competition } from '../types/competition';

export const competitions: Competition[] = [
  {
    id: '1',
    title: 'NEOM Tech Innovation Challenge',
    description: 'Develop innovative solutions for smart city technologies aligned with NEOM\'s vision. Focus on sustainable urban development, AI integration, and future mobility.',
    deadline: '2024-05-15',
    prize: 'SAR 500,000',
    teamSize: '3-5',
    image: 'https://images.unsplash.com/photo-1519999482648-25049ddd37b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    status: 'open',
    requirements: [
      'Experience in smart city technologies',
      'Innovative solutions for urban challenges',
      'Sustainability focus',
      'Working prototype required'
    ],
    timeline: {
      registration: '2024-04-01',
      start: '2024-04-15',
      submission: '2024-05-15',
      results: '2024-06-01'
    },
    rewards: {
      first: 'SAR 500,000 + NEOM Partnership',
      second: 'SAR 250,000',
      third: 'SAR 100,000',
      other: 'Top 10 teams get incubation support'
    },
    difficulty: 'Expert',
    participants: 245,
    isNew: true,
    isTrending: true,
    skillsRequired: ['AI/ML', 'IoT', 'Urban Planning', 'Sustainability']
  },
  {
    id: '2',
    title: 'Saudi Green Tech Hackathon',
    description: 'Create sustainable solutions for environmental challenges in Saudi Arabia, focusing on renewable energy, water conservation, and waste management.',
    deadline: '2024-05-20',
    prize: 'SAR 300,000',
    teamSize: '2-4',
    image: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    status: 'open',
    requirements: [
      'Environmental impact focus',
      'Scalable solution design',
      'Local implementation strategy',
      'Sustainability metrics'
    ],
    timeline: {
      registration: '2024-04-05',
      start: '2024-04-20',
      submission: '2024-05-20',
      results: '2024-06-05'
    },
    rewards: {
      first: 'SAR 300,000 + Incubation',
      second: 'SAR 150,000',
      third: 'SAR 75,000'
    },
    difficulty: 'Intermediate',
    participants: 180,
    isNew: true,
    skillsRequired: ['Renewable Energy', 'Environmental Science', 'Sustainability']
  },
  {
    id: '3',
    title: 'Vision 2030 AI Challenge',
    description: 'Develop AI solutions that support Saudi Arabia\'s Vision 2030 goals across various sectors including tourism, education, and public services.',
    deadline: '2024-06-01',
    prize: 'SAR 600,000',
    teamSize: '2-5',
    image: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    status: 'open',
    requirements: [
      'AI/ML expertise',
      'Vision 2030 alignment',
      'Scalable architecture',
      'Arabic NLP capabilities'
    ],
    timeline: {
      registration: '2024-04-15',
      start: '2024-05-01',
      submission: '2024-06-01',
      results: '2024-06-15'
    },
    rewards: {
      first: 'SAR 600,000 + Government Contract',
      second: 'SAR 300,000',
      third: 'SAR 150,000',
      other: 'Access to government datasets'
    },
    difficulty: 'Expert',
    participants: 320,
    isTrending: true,
    skillsRequired: ['AI/ML', 'NLP', 'Cloud Computing', 'Big Data']
  },
  {
    id: '4',
    title: 'Saudi Digital Health Innovation',
    description: 'Transform healthcare delivery through innovative digital solutions, focusing on telemedicine, patient care, and health data management.',
    deadline: '2024-06-15',
    prize: 'SAR 450,000',
    teamSize: '3-5',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    status: 'open',
    requirements: [
      'Healthcare IT experience',
      'Data privacy compliance',
      'User-centered design',
      'Integration capabilities'
    ],
    timeline: {
      registration: '2024-05-01',
      start: '2024-05-15',
      submission: '2024-06-15',
      results: '2024-07-01'
    },
    rewards: {
      first: 'SAR 450,000 + Hospital Partnership',
      second: 'SAR 225,000',
      third: 'SAR 112,500'
    },
    difficulty: 'Expert',
    participants: 175,
    skillsRequired: ['Healthcare IT', 'Data Security', 'UX Design']
  },
  {
    id: '5',
    title: 'Red Sea Tourism Tech Challenge',
    description: 'Innovate tourism experiences along the Red Sea coast through technology, focusing on sustainability and cultural preservation.',
    deadline: '2024-07-01',
    prize: 'SAR 400,000',
    teamSize: '2-4',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    status: 'open',
    requirements: [
      'Tourism industry knowledge',
      'Mobile app development',
      'Cultural awareness',
      'Sustainability focus'
    ],
    timeline: {
      registration: '2024-05-15',
      start: '2024-06-01',
      submission: '2024-07-01',
      results: '2024-07-15'
    },
    rewards: {
      first: 'SAR 400,000 + Implementation Contract',
      second: 'SAR 200,000',
      third: 'SAR 100,000'
    },
    difficulty: 'Intermediate',
    participants: 145,
    skillsRequired: ['Mobile Development', 'UX Design', 'Tourism Tech']
  },
  {
    id: '6',
    title: 'Saudi Smart Agriculture Challenge',
    description: 'Revolutionize agriculture in arid environments using smart technology and sustainable practices.',
    deadline: '2024-07-15',
    prize: 'SAR 350,000',
    teamSize: '2-4',
    image: 'https://images.unsplash.com/photo-1628352081506-83c43123ed6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    status: 'open',
    requirements: [
      'AgriTech expertise',
      'IoT implementation',
      'Water management',
      'Desert agriculture knowledge'
    ],
    timeline: {
      registration: '2024-06-01',
      start: '2024-06-15',
      submission: '2024-07-15',
      results: '2024-07-30'
    },
    rewards: {
      first: 'SAR 350,000 + Pilot Project',
      second: 'SAR 175,000',
      third: 'SAR 87,500'
    },
    difficulty: 'Expert',
    participants: 130,
    skillsRequired: ['AgriTech', 'IoT', 'Water Management']
  },
  {
    id: '7',
    title: 'Saudi FinTech Innovation Award',
    description: 'Create innovative financial technology solutions to enhance digital banking and financial inclusion in Saudi Arabia.',
    deadline: '2024-08-01',
    prize: 'SAR 550,000',
    teamSize: '3-5',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    status: 'open',
    requirements: [
      'FinTech experience',
      'Banking regulations knowledge',
      'Security implementation',
      'Mobile-first approach'
    ],
    timeline: {
      registration: '2024-06-15',
      start: '2024-07-01',
      submission: '2024-08-01',
      results: '2024-08-15'
    },
    rewards: {
      first: 'SAR 550,000 + Bank Partnership',
      second: 'SAR 275,000',
      third: 'SAR 137,500'
    },
    difficulty: 'Expert',
    participants: 210,
    isTrending: true,
    skillsRequired: ['FinTech', 'Security', 'Mobile Development']
  },
  {
    id: '8',
    title: 'Saudi EdTech Challenge',
    description: 'Transform education through innovative technology solutions, focusing on personalized learning and Arabic content.',
    deadline: '2024-08-15',
    prize: 'SAR 400,000',
    teamSize: '2-4',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    status: 'open',
    requirements: [
      'EdTech experience',
      'Arabic language support',
      'Learning analytics',
      'Gamification'
    ],
    timeline: {
      registration: '2024-07-01',
      start: '2024-07-15',
      submission: '2024-08-15',
      results: '2024-08-30'
    },
    rewards: {
      first: 'SAR 400,000 + Ministry Pilot',
      second: 'SAR 200,000',
      third: 'SAR 100,000'
    },
    difficulty: 'Intermediate',
    participants: 165,
    skillsRequired: ['EdTech', 'Arabic NLP', 'Learning Design']
  },
  {
    id: '9',
    title: 'Saudi Cultural Heritage Tech',
    description: 'Preserve and promote Saudi cultural heritage through innovative digital solutions and immersive experiences.',
    deadline: '2024-09-01',
    prize: 'SAR 450,000',
    teamSize: '2-4',
    image: 'https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    status: 'open',
    requirements: [
      'Cultural heritage knowledge',
      'AR/VR development',
      'Digital preservation',
      'Storytelling'
    ],
    timeline: {
      registration: '2024-07-15',
      start: '2024-08-01',
      submission: '2024-09-01',
      results: '2024-09-15'
    },
    rewards: {
      first: 'SAR 450,000 + Museum Partnership',
      second: 'SAR 225,000',
      third: 'SAR 112,500'
    },
    difficulty: 'Intermediate',
    participants: 140,
    isNew: true,
    skillsRequired: ['AR/VR', 'Cultural Heritage', '3D Modeling']
  },
  {
    id: '10',
    title: 'Saudi Logistics Innovation',
    description: 'Optimize logistics and supply chain operations through innovative technology solutions.',
    deadline: '2024-09-15',
    prize: 'SAR 500,000',
    teamSize: '3-5',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    status: 'open',
    requirements: [
      'Logistics expertise',
      'Supply chain optimization',
      'Real-time tracking',
      'Route optimization'
    ],
    timeline: {
      registration: '2024-08-01',
      start: '2024-08-15',
      submission: '2024-09-15',
      results: '2024-09-30'
    },
    rewards: {
      first: 'SAR 500,000 + Industry Partnership',
      second: 'SAR 250,000',
      third: 'SAR 125,000'
    },
    difficulty: 'Expert',
    participants: 155,
    skillsRequired: ['Logistics', 'Supply Chain', 'Route Optimization']
  }
];