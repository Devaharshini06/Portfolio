export type ProjectCategory = 
  | 'Full-Stack'
  | 'AI'
  | 'GenAI'
  | 'Agentic AI'
  | 'ML'
  | 'DL'
  | 'Data Science'
  | 'Automation'
  | 'Testing'
  | 'Security'
  | 'SaaS'
  | 'Web Development'
  | 'Audio AI'
  | 'NLP';

export interface Project {
  id: string;
  title: string;
  slug: string;
  oneLiner: string;
  shortDescription: string;
  fullDescription?: string;
  problem: string;
  solution: string;
  architecture?: string;
  contribution: string;
  challenges?: string;
  outcomes?: string;
  lessonsLearned?: string;
  futureImprovements?: string;
  categories: ProjectCategory[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  demoUrl?: string;
  thumbnail?: string;
  images?: string[];
  featured: boolean;
  published: boolean;
  technicalComplexity: 'High' | 'Medium' | 'Foundational';
  startDate?: string;
  endDate?: string;
  displayOrder: number;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  isCurrent: boolean;
  description: string;
  responsibilities: string[];
  technologies: string[];
  achievements?: string[];
  logo?: string;
  featured: boolean;
  displayOrder: number;
}

export type SkillProficiencyLabel = 'Frequently Used' | 'Working With' | 'Explored' | 'Familiar';

export interface Skill {
  id: string;
  category: 'Programming' | 'Frontend' | 'Backend' | 'Databases' | 'AI / ML' | 'Generative AI' | 'Automation' | 'Developer Tools' | 'Security / Testing';
  skillName: string;
  proficiencyLabel: SkillProficiencyLabel;
  iconName?: string;
  isPrimary: boolean;
  isExploring: boolean;
  displayOrder: number;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startYear: string;
  endYear: string;
  grade?: string;
  location?: string;
  description?: string;
  logo?: string;
  displayOrder: number;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  image?: string;
  description?: string;
  displayOrder: number;
}

export interface Profile {
  name: string;
  role: string;
  tagline: string;
  heroHeadline: string;
  heroSubtext: string;
  bio: string;
  shortIntro: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  resumeUrl: string;
  availabilityStatus: string;
  profilePhoto: string;
  roleBadges: string[];
}

export interface ExploringTopic {
  id: string;
  title: string;
  category: string;
  description: string;
  status: 'In Progress' | 'Experimenting' | 'Deep Dive';
  displayOrder: number;
}

export interface ToastMessage {
  id: string;
  type: 'success' | 'error' | 'info';
  message: string;
}
