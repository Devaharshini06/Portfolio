import {
  Profile,
  Project,
  Experience,
  Skill,
  Education,
  Certification,
  ExploringTopic
} from '../types';
import {
  initialProfile,
  initialProjects,
  initialExperiences,
  initialSkills,
  initialEducation,
  initialCertifications,
  initialExploringTopics
} from '../data/seedData';

const KEYS = {
  PROFILE: 'vootakoti_portfolio_profile_v1',
  PROJECTS: 'vootakoti_portfolio_projects_v1',
  EXPERIENCE: 'vootakoti_portfolio_experience_v1',
  SKILLS: 'vootakoti_portfolio_skills_v1',
  EDUCATION: 'vootakoti_portfolio_education_v1',
  CERTIFICATIONS: 'vootakoti_portfolio_certs_v1',
  EXPLORING: 'vootakoti_portfolio_exploring_v1',
  ADMIN_AUTH: 'vootakoti_portfolio_admin_auth_v1',
  ADMIN_PASS: 'vootakoti_portfolio_admin_pass_v1'
};

function getStored<T>(key: string, defaultValue: T): T {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (err) {
    console.error(`Failed to load key ${key} from storage:`, err);
    return defaultValue;
  }
}

function setStored<T>(key: string, value: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.error(`Failed to save key ${key} to storage:`, err);
  }
}

export const StorageService = {
  // Reset all to initial seed data
  resetToDefaults() {
    setStored(KEYS.PROFILE, initialProfile);
    setStored(KEYS.PROJECTS, initialProjects);
    setStored(KEYS.EXPERIENCE, initialExperiences);
    setStored(KEYS.SKILLS, initialSkills);
    setStored(KEYS.EDUCATION, initialEducation);
    setStored(KEYS.CERTIFICATIONS, initialCertifications);
    setStored(KEYS.EXPLORING, initialExploringTopics);
  },

  // Profile
  getProfile(): Profile {
    return getStored<Profile>(KEYS.PROFILE, initialProfile);
  },
  saveProfile(profile: Profile): void {
    setStored(KEYS.PROFILE, profile);
  },

  // Projects
  getProjects(): Project[] {
    const projects = getStored<Project[]>(KEYS.PROJECTS, initialProjects);
    return projects.sort((a, b) => a.displayOrder - b.displayOrder);
  },
  saveProjects(projects: Project[]): void {
    setStored(KEYS.PROJECTS, projects);
  },
  saveProject(project: Project): void {
    const projects = this.getProjects();
    const index = projects.findIndex(p => p.id === project.id);
    if (index >= 0) {
      projects[index] = project;
    } else {
      projects.push(project);
    }
    this.saveProjects(projects);
  },
  deleteProject(id: string): void {
    const projects = this.getProjects().filter(p => p.id !== id);
    this.saveProjects(projects);
  },

  // Experience
  getExperiences(): Experience[] {
    return getStored<Experience[]>(KEYS.EXPERIENCE, initialExperiences).sort((a, b) => a.displayOrder - b.displayOrder);
  },
  saveExperiences(experiences: Experience[]): void {
    setStored(KEYS.EXPERIENCE, experiences);
  },
  saveExperience(exp: Experience): void {
    const list = this.getExperiences();
    const idx = list.findIndex(e => e.id === exp.id);
    if (idx >= 0) list[idx] = exp;
    else list.push(exp);
    this.saveExperiences(list);
  },
  deleteExperience(id: string): void {
    const list = this.getExperiences().filter(e => e.id !== id);
    this.saveExperiences(list);
  },

  // Skills
  getSkills(): Skill[] {
    return getStored<Skill[]>(KEYS.SKILLS, initialSkills).sort((a, b) => a.displayOrder - b.displayOrder);
  },
  saveSkills(skills: Skill[]): void {
    setStored(KEYS.SKILLS, skills);
  },
  saveSkill(skill: Skill): void {
    const list = this.getSkills();
    const idx = list.findIndex(s => s.id === skill.id);
    if (idx >= 0) list[idx] = skill;
    else list.push(skill);
    this.saveSkills(list);
  },
  deleteSkill(id: string): void {
    const list = this.getSkills().filter(s => s.id !== id);
    this.saveSkills(list);
  },

  // Education
  getEducation(): Education[] {
    return getStored<Education[]>(KEYS.EDUCATION, initialEducation).sort((a, b) => a.displayOrder - b.displayOrder);
  },
  saveEducationList(list: Education[]): void {
    setStored(KEYS.EDUCATION, list);
  },
  saveEducation(edu: Education): void {
    const list = this.getEducation();
    const idx = list.findIndex(e => e.id === edu.id);
    if (idx >= 0) list[idx] = edu;
    else list.push(edu);
    this.saveEducationList(list);
  },
  deleteEducation(id: string): void {
    const list = this.getEducation().filter(e => e.id !== id);
    this.saveEducationList(list);
  },

  // Certifications
  getCertifications(): Certification[] {
    return getStored<Certification[]>(KEYS.CERTIFICATIONS, initialCertifications).sort((a, b) => a.displayOrder - b.displayOrder);
  },
  saveCertifications(list: Certification[]): void {
    setStored(KEYS.CERTIFICATIONS, list);
  },
  saveCertification(cert: Certification): void {
    const list = this.getCertifications();
    const idx = list.findIndex(c => c.id === cert.id);
    if (idx >= 0) list[idx] = cert;
    else list.push(cert);
    this.saveCertifications(list);
  },
  deleteCertification(id: string): void {
    const list = this.getCertifications().filter(c => c.id !== id);
    this.saveCertifications(list);
  },

  // Exploring Topics
  getExploringTopics(): ExploringTopic[] {
    return getStored<ExploringTopic[]>(KEYS.EXPLORING, initialExploringTopics).sort((a, b) => a.displayOrder - b.displayOrder);
  },
  saveExploringTopics(list: ExploringTopic[]): void {
    setStored(KEYS.EXPLORING, list);
  },

  // Admin Auth
  isAdminLoggedIn(): boolean {
    return getStored<boolean>(KEYS.ADMIN_AUTH, false);
  },
  setAdminLoggedIn(status: boolean): void {
    setStored(KEYS.ADMIN_AUTH, status);
  },
  getAdminPassword(): string {
    return getStored<string>(KEYS.ADMIN_PASS, 'admin123');
  },
  setAdminPassword(newPass: string): void {
    setStored(KEYS.ADMIN_PASS, newPass);
  }
};
