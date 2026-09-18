import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  Profile,
  Project,
  Experience,
  Skill,
  Education,
  Certification,
  ExploringTopic,
  ToastMessage,
  ProjectCategory
} from '../types';
import { StorageService } from '../services/storage';

interface PortfolioContextType {
  // Navigation & Routing
  currentPath: string;
  navigate: (path: string) => void;
  isCommandPaletteOpen: boolean;
  setIsCommandPaletteOpen: (open: boolean) => void;
  
  // Toast Notifications
  toasts: ToastMessage[];
  addToast: (message: string, type?: 'success' | 'error' | 'info') => void;
  removeToast: (id: string) => void;

  // Data State
  profile: Profile;
  projects: Project[];
  experiences: Experience[];
  skills: Skill[];
  education: Education[];
  certifications: Certification[];
  exploringTopics: ExploringTopic[];

  // Project Filtering
  selectedCategory: ProjectCategory | 'ALL';
  setSelectedCategory: (cat: ProjectCategory | 'ALL') => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  sortBy: 'Featured' | 'Recent' | 'Technical';
  setSortBy: (sort: 'Featured' | 'Recent' | 'Technical') => void;

  // Admin Auth
  isAdminLoggedIn: boolean;
  loginAdmin: (pass: string) => boolean;
  logoutAdmin: () => void;

  // CRUD Actions
  updateProfile: (profile: Profile) => void;
  saveProject: (project: Project) => void;
  deleteProject: (id: string) => void;
  saveExperience: (exp: Experience) => void;
  deleteExperience: (id: string) => void;
  saveSkill: (skill: Skill) => void;
  deleteSkill: (id: string) => void;
  saveEducation: (edu: Education) => void;
  deleteEducation: (id: string) => void;
  saveCertification: (cert: Certification) => void;
  deleteCertification: (id: string) => void;
  saveExploringTopics: (topics: ExploringTopic[]) => void;
  resetDataToDefaults: () => void;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState<string>(window.location.pathname || '/');
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState<boolean>(false);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Load Initial Data
  const [profile, setProfile] = useState<Profile>(() => StorageService.getProfile());
  const [projects, setProjects] = useState<Project[]>(() => StorageService.getProjects());
  const [experiences, setExperiences] = useState<Experience[]>(() => StorageService.getExperiences());
  const [skills, setSkills] = useState<Skill[]>(() => StorageService.getSkills());
  const [education, setEducation] = useState<Education[]>(() => StorageService.getEducation());
  const [certifications, setCertifications] = useState<Certification[]>(() => StorageService.getCertifications());
  const [exploringTopics, setExploringTopics] = useState<ExploringTopic[]>(() => StorageService.getExploringTopics());

  // Filter States
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | 'ALL'>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'Featured' | 'Recent' | 'Technical'>('Featured');

  // Admin Auth State
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState<boolean>(() => StorageService.isAdminLoggedIn());

  // Navigation listener
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Toast Helpers
  const addToast = (message: string, type: 'success' | 'error' | 'info' = 'info') => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      removeToast(id);
    }, 4000);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  // Keyboard shortcut listener for Ctrl+K or Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Admin Auth Actions
  const loginAdmin = (pass: string): boolean => {
    const validPass = StorageService.getAdminPassword();
    if (pass === validPass) {
      StorageService.setAdminLoggedIn(true);
      setIsAdminLoggedIn(true);
      addToast('Welcome back, Devaharshini! Admin access granted.', 'success');
      navigate('/admin');
      return true;
    } else {
      addToast('Invalid admin credentials.', 'error');
      return false;
    }
  };

  const logoutAdmin = () => {
    StorageService.setAdminLoggedIn(false);
    setIsAdminLoggedIn(false);
    addToast('Logged out from Admin CMS.', 'info');
    navigate('/');
  };

  // CRUD Implementations
  const updateProfile = (newProfile: Profile) => {
    StorageService.saveProfile(newProfile);
    setProfile(newProfile);
    addToast('Profile updated successfully!', 'success');
  };

  const saveProject = (project: Project) => {
    StorageService.saveProject(project);
    setProjects(StorageService.getProjects());
    addToast(`Project "${project.title}" saved.`, 'success');
  };

  const deleteProject = (id: string) => {
    StorageService.deleteProject(id);
    setProjects(StorageService.getProjects());
    addToast('Project removed.', 'info');
  };

  const saveExperience = (exp: Experience) => {
    StorageService.saveExperience(exp);
    setExperiences(StorageService.getExperiences());
    addToast(`Experience at ${exp.company} saved.`, 'success');
  };

  const deleteExperience = (id: string) => {
    StorageService.deleteExperience(id);
    setExperiences(StorageService.getExperiences());
    addToast('Experience removed.', 'info');
  };

  const saveSkill = (skill: Skill) => {
    StorageService.saveSkill(skill);
    setSkills(StorageService.getSkills());
    addToast(`Skill "${skill.skillName}" saved.`, 'success');
  };

  const deleteSkill = (id: string) => {
    StorageService.deleteSkill(id);
    setSkills(StorageService.getSkills());
    addToast('Skill removed.', 'info');
  };

  const saveEducation = (edu: Education) => {
    StorageService.saveEducation(edu);
    setEducation(StorageService.getEducation());
    addToast(`Education at ${edu.institution} saved.`, 'success');
  };

  const deleteEducation = (id: string) => {
    StorageService.deleteEducation(id);
    setEducation(StorageService.getEducation());
    addToast('Education entry removed.', 'info');
  };

  const saveCertification = (cert: Certification) => {
    StorageService.saveCertification(cert);
    setCertifications(StorageService.getCertifications());
    addToast(`Certification "${cert.name}" saved.`, 'success');
  };

  const deleteCertification = (id: string) => {
    StorageService.deleteCertification(id);
    setCertifications(StorageService.getCertifications());
    addToast('Certification removed.', 'info');
  };

  const saveExploringTopics = (topics: ExploringTopic[]) => {
    StorageService.saveExploringTopics(topics);
    setExploringTopics(topics);
    addToast('Currently Exploring topics updated.', 'success');
  };

  const resetDataToDefaults = () => {
    StorageService.resetToDefaults();
    setProfile(StorageService.getProfile());
    setProjects(StorageService.getProjects());
    setExperiences(StorageService.getExperiences());
    setSkills(StorageService.getSkills());
    setEducation(StorageService.getEducation());
    setCertifications(StorageService.getCertifications());
    setExploringTopics(StorageService.getExploringTopics());
    addToast('Reset data to initial factual seed settings.', 'info');
  };

  return (
    <PortfolioContext.Provider
      value={{
        currentPath,
        navigate,
        isCommandPaletteOpen,
        setIsCommandPaletteOpen,
        toasts,
        addToast,
        removeToast,
        profile,
        projects,
        experiences,
        skills,
        education,
        certifications,
        exploringTopics,
        selectedCategory,
        setSelectedCategory,
        searchQuery,
        setSearchQuery,
        sortBy,
        setSortBy,
        isAdminLoggedIn,
        loginAdmin,
        logoutAdmin,
        updateProfile,
        saveProject,
        deleteProject,
        saveExperience,
        deleteExperience,
        saveSkill,
        deleteSkill,
        saveEducation,
        deleteEducation,
        saveCertification,
        deleteCertification,
        saveExploringTopics,
        resetDataToDefaults
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};
