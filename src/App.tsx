import React from 'react';
import { PortfolioProvider, usePortfolio } from './context/PortfolioContext';
import { Navbar } from './components/layout/Navbar';
import { SidebarLeft } from './components/layout/SidebarLeft';
import { SidebarRight } from './components/layout/SidebarRight';
import { Footer } from './components/layout/Footer';
import { CommandPalette } from './components/layout/CommandPalette';
import { ToastContainer } from './components/layout/ToastContainer';

// Homepage Sections
import { HeroSection } from './components/hero/HeroSection';
import { QuickIntro } from './components/home/QuickIntro';
import { WhatIBuild } from './components/home/WhatIBuild';
import { AISystemMap } from './components/home/AISystemMap';
import { FeaturedProjects } from './components/home/FeaturedProjects';
import { MLOpsSpotlight } from './components/home/MLOpsSpotlight';
import { ExperienceSection } from './components/home/ExperienceSection';
import { EducationSection } from './components/home/EducationSection';
import { SkillsSection } from './components/home/SkillsSection';
import { CertificationsSection } from './components/home/CertificationsSection';
import { CurrentlyExploring } from './components/home/CurrentlyExploring';
import { GitHubSection } from './components/home/GitHubSection';
import { ContactSection } from './components/home/ContactSection';

// View Pages
import { ProjectExplorer } from './components/projects/ProjectExplorer';
import { ProjectDetailPage } from './components/projects/ProjectDetailPage';
import { AboutPage } from './components/about/AboutPage';
import { AdminLayout } from './components/admin/AdminLayout';

const MainContent: React.FC = () => {
  const { currentPath } = usePortfolio();

  const renderContentPage = () => {
    if (currentPath.startsWith('/admin')) {
      return <AdminLayout />;
    }

    if (currentPath.startsWith('/projects/')) {
      const slug = currentPath.replace('/projects/', '');
      return <ProjectDetailPage slug={slug} />;
    }

    if (currentPath === '/projects') {
      return <ProjectExplorer />;
    }

    if (currentPath === '/about') {
      return <AboutPage />;
    }

    // Default Homepage
    return (
      <main>
        <HeroSection />
        <QuickIntro />
        <WhatIBuild />
        <AISystemMap />
        <FeaturedProjects />
        <MLOpsSpotlight />
        <ExperienceSection />
        <EducationSection />
        <SkillsSection />
        <CertificationsSection />
        <CurrentlyExploring />
        <GitHubSection />
        <ContactSection />
      </main>
    );
  };

  return (
    <div className="min-h-screen bg-[#080808] text-[#F4F4F0] font-sans antialiased selection:bg-red-900/60 selection:text-[#C5A059]">
      {/* Mobile Navbar Header */}
      <Navbar />

      {/* Main 3-Column Editorial App Shell (Desktop) */}
      <div className="app-shell max-w-[1600px] mx-auto lg:grid lg:grid-cols-[260px_1fr_320px] min-h-screen bg-[#080808]">
        {/* Left Column Navigation */}
        <div className="hidden lg:block">
          <SidebarLeft />
        </div>

        {/* Center Main Scrollable Content */}
        <div className="content-area p-4 sm:p-6 lg:p-8 min-w-0 border-x border-white/10 bg-[#080808]">
          {renderContentPage()}
          <Footer />
        </div>

        {/* Right Column Meta & Credentials */}
        <div className="hidden lg:block">
          <SidebarRight />
        </div>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <PortfolioProvider>
      <MainContent />
      <CommandPalette />
      <ToastContainer />
    </PortfolioProvider>
  );
}
