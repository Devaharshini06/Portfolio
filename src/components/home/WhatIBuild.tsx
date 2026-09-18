import React, { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { ProjectCategory } from '../../types';
import { Bot, Workflow, Layout, Brain, Cpu, ArrowRight, Sparkles, Network, Terminal } from 'lucide-react';

interface DomainModule {
  index: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  icon: React.ElementType;
  description: string;
  coreTech: string[];
  subModules: string[];
  schematic: string;
}

export const WhatIBuild: React.FC = () => {
  const { setSelectedCategory, navigate } = usePortfolio();
  const [activeModuleIndex, setActiveModuleIndex] = useState<number | null>(null);

  const domains: DomainModule[] = [
    {
      index: "01",
      title: "GENERATIVE AI",
      subtitle: "LLMs / RAG / Prompt Engineering / Agents",
      category: "GenAI" as ProjectCategory,
      icon: Bot,
      description: "Architecting context-grounded AI systems using Retrieval-Augmented Generation, vector embeddings, local Ollama LLMs, and structured prompt pipelines that eliminate hallucinations.",
      coreTech: ["LangChain", "ChromaDB", "Ollama", "Gemini API", "Hugging Face"],
      subModules: ["Semantic Chunking", "Dense Vector Search", "Grounded Verification", "Few-Shot In-Context Learning"],
      schematic: "INPUT → EMBEDDING → VECTOR INDEX → CONTEXT RETRIEVAL → LLM GENERATION"
    },
    {
      index: "02",
      title: "AI AUTOMATION",
      subtitle: "Workflow Automation / Browser Agents / AI QA",
      category: "Agentic AI" as ProjectCategory,
      icon: Workflow,
      description: "Developing autonomous browser agents and self-healing QA workflows using LangGraph cyclic state graphs, Playwright execution, and automated document extraction.",
      coreTech: ["LangGraph", "Playwright", "Python State Graphs", "OCR Pipeline", "Outlook API"],
      subModules: ["Cyclic State Routing", "Headless DOM Interaction", "Visual Anomaly Checks", "Automated Excel Ingestion"],
      schematic: "TASK → AGENT PLANNER → DOM ACTION → OBSERVATION → HEALING RETRY"
    },
    {
      index: "03",
      title: "FULL-STACK SYSTEMS",
      subtitle: "Next.js / Node.js / FastAPI / Flask",
      category: "Full-Stack" as ProjectCategory,
      icon: Layout,
      description: "Designing end-to-end full-stack architectures combining high-throughput Python/Node REST microservices with reactive TypeScript interfaces and relational SQL backends.",
      coreTech: ["React", "Next.js", "FastAPI", "Node.js", "PostgreSQL", "Tailwind CSS"],
      subModules: ["JWT Role-Based Auth", "PostgreSQL Schemas", "Real-Time WebSocket Webhooks", "Optimized Asset Bundles"],
      schematic: "CLIENT (REACT) ⇄ REST/SOCKET API (FASTAPI) ⇄ ORM (SQLALCH) ⇄ POSTGRES"
    },
    {
      index: "04",
      title: "DATA & ML",
      subtitle: "Machine Learning / Deep Learning / NLP",
      category: "ML" as ProjectCategory,
      icon: Brain,
      description: "Constructing predictive machine learning models, natural language processing pipelines, text sentiment evaluations, and deep neural networks for multi-modal audio signals.",
      coreTech: ["Scikit-learn", "TensorFlow", "PyTorch", "TextBlob", "Pandas", "Librosa"],
      subModules: ["TF-IDF Matrix Extraction", "Spectrogram CNN Classification", "Cross-Validation Ensembles", "Sentiment Polarity"],
      schematic: "RAW SIGNALS → FEATURE EXTRACTION → NEURAL NETWORK → PROBABILITY VECTOR"
    },
    {
      index: "05",
      title: "MLOPS",
      subtitle: "MLflow / Docker / CI/CD / AWS",
      category: "AI" as ProjectCategory,
      icon: Cpu,
      description: "Production machine learning lifecycle operations: model versioning, experiment tracking registries, containerized inference microservices, and automated cloud deployments.",
      coreTech: ["MLflow", "Docker", "GitHub Actions", "AWS ECS", "AWS Fargate", "CloudWatch"],
      subModules: ["Artifact Version Tracking", "Multi-Stage Docker Packaging", "Automated Lint/Test CI", "Cloud Load Balancing"],
      schematic: "DATA ➔ MLFLOW REGISTRY ➔ FASTAPI DOCKER ➔ GITHUB ACTIONS CI/CD ➔ AWS ECS"
    }
  ];

  const handleDomainClick = (cat: ProjectCategory) => {
    setSelectedCategory(cat);
    navigate('/projects');
  };

  return (
    <section id="domains" className="py-12 sm:py-16 border-b border-white/10 relative bg-[#080808]">
      <div className="space-y-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-4 gap-2">
          <div>
            <div className="flex items-center gap-2 mono text-[10px] text-[#C5A059] uppercase tracking-widest mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></span>
              <span>CORE TECHNICAL MODULES &amp; DOMAIN SPECIALIZATIONS</span>
            </div>
            <h2 className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-normal text-[#F4F4F0] tracking-tight">
              Engineering Domains
            </h2>
          </div>
          <p className="mono text-[10px] text-white/50">
            Click module to filter verified projects
          </p>
        </div>

        {/* 5 Technical Modules Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
          {domains.map((item, idx) => {
            const Icon = item.icon;
            const isHovered = activeModuleIndex === idx;
            return (
              <div
                key={item.index}
                onMouseEnter={() => setActiveModuleIndex(idx)}
                onMouseLeave={() => setActiveModuleIndex(null)}
                onClick={() => handleDomainClick(item.category)}
                className="system-panel group p-5 bg-[#0e0e0e] border border-white/10 hover:border-[#C5A059]/60 transition-all duration-300 flex flex-col justify-between cursor-pointer relative"
              >
                {/* Crosshair corners */}
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/10 group-hover:border-[#C5A059] pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/10 group-hover:border-[#C5A059] pointer-events-none"></div>

                <div className="space-y-3">
                  {/* Module Number Header */}
                  <div className="flex items-center justify-between pb-2 border-b border-white/10 font-mono text-[9px]">
                    <span className="text-red-500 font-bold tracking-wider">
                      MOD [{item.index}]
                    </span>
                    <div className="p-1.5 bg-[#141414] border border-white/10 text-white/70 group-hover:text-[#C5A059] group-hover:border-[#C5A059]/40 transition-colors">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="font-serif-title text-xl font-normal text-[#F4F4F0] group-hover:text-[#C5A059] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="mono text-[8px] text-[#C5A059] tracking-wider mt-0.5 truncate">
                      {item.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-white/70 leading-relaxed font-sans font-light line-clamp-4 pt-1">
                    {item.description}
                  </p>

                  {/* Schematic preview */}
                  <div className="p-2 bg-[#080808] border border-white/5 font-mono text-[8px] text-white/50 tracking-tight leading-tight">
                    <span className="text-white/30 block text-[7px] uppercase tracking-widest mb-0.5">SCHEMATIC:</span>
                    <span className="text-white/80 line-clamp-2">{item.schematic}</span>
                  </div>
                </div>

                {/* Tech Pills & Filter Link */}
                <div className="pt-4 mt-4 border-t border-white/10 space-y-3">
                  <div className="flex flex-wrap gap-1">
                    {item.coreTech.slice(0, 3).map((t) => (
                      <span key={t} className="px-1.5 py-0.5 bg-[#141414] text-[9px] font-mono text-white/70 border border-white/5">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-[10px] font-mono text-[#C5A059] group-hover:translate-x-0.5 transition-transform pt-1">
                    <span>EXPLORE WORKS</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
