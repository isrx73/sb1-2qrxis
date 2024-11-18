export interface Competition {
  id: string;
  title: string;
  description: string;
  deadline: string;
  prize: string;
  teamSize: string;
  image: string;
  status: 'open' | 'closing-soon' | 'closed';
  requirements: string[];
  timeline: {
    registration: string;
    start: string;
    submission: string;
    results: string;
  };
  rewards: {
    first: string;
    second: string;
    third: string;
    other?: string;
  };
  difficulty: 'Beginner' | 'Intermediate' | 'Expert';
  participants: number;
  isNew?: boolean;
  isTrending?: boolean;
  skillsRequired: string[];
}