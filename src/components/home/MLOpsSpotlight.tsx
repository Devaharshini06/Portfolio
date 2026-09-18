import React, { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { 
  Database, Cpu, GitBranch, Server, Box, Cloud, Activity, 
  ArrowRight, CheckCircle2, Clock, Terminal, ShieldAlert, Sparkles, Layers
} from 'lucide-react';

interface StageNode {
  id: string;
  name: string;
  tech: string;
  category: string;
  status: 'COMPLETED' | 'IN_DEVELOPMENT' | 'PLANNED';
  icon: React.ElementType;
  description: string;
  specDetails: string[];
}

export const MLOpsSpotlight: React.FC = () => {
  const { navigate } = usePortfolio();

  const stages: StageNode[] = [
    {
      id: 'data',
      name: 'Data Ingestion',
      tech: 'Python, Pandas',
      category: 'Data Layer',
      status: 'COMPLETED',
      icon: Database,
      description: 'Raw telecom customer transaction and usage telemetry ingestion with automated schema validation.',
      specDetails: [
        '7,043 customer records with 21 behavioral features',
        'Automated null handling and churn status mapping',
        'Data versioning and reproducibility checkpoints'
      ]
    },
    {
      id: 'feature',
      name: 'Feature Pipeline',
      tech: 'Scikit-learn, NumPy',
      category: 'Transformation',
      status: 'COMPLETED',
      icon: Layers,
      description: 'Systematic feature preprocessing, tenure quantization, numerical scaling, and categorical one-hot transformations.',
      specDetails: [
        'ColumnTransformer pipeline for deterministic transforms',
        'Handling class imbalance through SMOTE/stratification',
        'Pickled serialization of transformer artifacts'
      ]
    },
    {
      id: 'model',
      name: 'XGBoost Core',
      tech: 'XGBoost 2.0+',
      category: 'Training',
      status: 'COMPLETED',
      icon: Cpu,
      description: 'Extreme gradient boosted tree classifier optimized for tabular churn classification and probability calibration.',
      specDetails: [
        'Hyperparameter search over tree depth and learning rates',
        'Evaluated on ROC-AUC (0.84+) and F1 Score metrics',
        'Feature importance attribution via SHAP values'
      ]
    },
    {
      id: 'mlflow',
      name: 'MLflow Tracking',
      tech: 'MLflow Registry',
      category: 'Registry',
      status: 'COMPLETED',
      icon: GitBranch,
      description: 'Centralized model registry and experiment tracking server logging run parameters, metrics, and model signatures.',
      specDetails: [
        'Automated run logging for hyperparameter sweeps',
        'Tagged model versions for Staging vs Production promotion',
        'Artifact store with serialized model binaries'
      ]
    },
    {
      id: 'api',
      name: 'FastAPI Serving',
      tech: 'FastAPI, Pydantic',
      category: 'Inference',
      status: 'COMPLETED',
      icon: Server,
      description: 'High-throughput async REST API exposing `/predict` and `/health` endpoints with strict schema validation.',
      specDetails: [
        'Pydantic request payload schema enforcement',
        'Sub-15ms inference latency on batched scoring requests',
        'Automated OpenAPI Swagger interactive documentation'
      ]
    },
    {
      id: 'docker',
      name: 'Docker Image',
      tech: 'Docker, Alpine',
      category: 'Packaging',
      status: 'COMPLETED',
      icon: Box,
      description: 'Multi-stage Docker build containerizing the FastAPI service, model artifacts, and minimal runtime dependencies.',
      specDetails: [
        'Slim Python 3.11 base image minimizing attack surface',
        'Non-root user execution for container runtime hardening',
        'Local Docker Compose verification test suite'
      ]
    },
    {
      id: 'cicd',
      name: 'GitHub Actions',
      tech: 'CI/CD Pipelines',
      category: 'Automation',
      status: 'IN_DEVELOPMENT',
      icon: Activity,
      description: 'Continuous integration workflow running automated test suites, building Docker images, and pushing to AWS ECR.',
      specDetails: [
        'Automated flake8 linting and pytest unit suites on pull request',
        'Automated build & tag of Docker images',
        'Secure AWS credentials authentication via GitHub OIDC'
      ]
    },
    {
      id: 'ecs',
      name: 'AWS ECS Fargate',
      tech: 'AWS ECS, Fargate',
      category: 'Cloud Host',
      status: 'IN_DEVELOPMENT',
      icon: Cloud,
      description: 'Serverless container orchestration running FastAPI inference containers without managing underlying EC2 servers.',
      specDetails: [
        'Task definition configuration with CPU/memory limits',
        'Autoscaling policies based on request concurrency spikes',
        'Zero-downtime rolling service deployments'
      ]
    },
    {
      id: 'alb',
      name: 'Load Balancer',
      tech: 'AWS ALB',
      category: 'Traffic',
      status: 'IN_DEVELOPMENT',
      icon: Layers,
      description: 'Application Load Balancer distributing public inference traffic across healthy ECS container instances.',
      specDetails: [
        'Automated health check probes on `/health` endpoint',
        'SSL/TLS certificate termination for secure HTTPS',
        'Target group connection draining for smooth updates'
      ]
    },
    {
      id: 'monitor',
      name: 'Monitoring & Drift',
      tech: 'CloudWatch, Prometheus',
      category: 'Observability',
      status: 'PLANNED',
      icon: ShieldAlert,
      description: 'Telemetry monitoring tracking prediction latency, endpoint error rates, and incoming feature distribution drift.',
      specDetails: [
        'CloudWatch alarm thresholds for 5xx errors and latency',
        'Planned Evidently AI integration for tabular data drift',
        'Automated alert dispatch for model retraining triggers'
      ]
    }
  ];

  const [selectedStage, setSelectedStage] = useState<StageNode>(stages[0]);

  return (
    <section id="mlops-spotlight" className="py-12 sm:py-16 border-b border-white/10 relative bg-[#0a0a0a]">
      <div className="space-y-8">
        {/* Header Eyebrow & Status Notice */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-4">
          <div>
            <div className="flex items-center gap-2 mono text-[10px] text-[#C5A059] uppercase tracking-widest mb-1">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
              <span>SPECIALIZED PRODUCTION ARCHITECTURE SPOTLIGHT</span>
            </div>
            <h2 className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-normal text-[#F4F4F0] tracking-tight">
              Telco Customer Churn ML System
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-amber-950/40 text-amber-300 border border-amber-600/40 text-[10px] font-mono flex items-center gap-1.5 font-bold tracking-wider">
              <Clock className="w-3 h-3 text-amber-400" />
              STATUS: CURRENTLY IN DEVELOPMENT
            </span>
          </div>
        </div>

        {/* Narrative introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-[#111111] p-6 border border-white/10">
          <div className="lg:col-span-8 space-y-2">
            <span className="mono text-[9px] text-[#C5A059] tracking-widest uppercase block">SYSTEM PURPOSE</span>
            <p className="text-sm text-white/80 font-sans leading-relaxed">
              Demonstrating production-grade machine learning engineering by bridging data science models into containerized, monitored cloud microservices. Instead of static notebook prototypes, this system provisions a complete lifecycle: reproducible data pipelines, versioned experiment tracking, async REST inference, automated CI/CD container builds, and cloud deployment orchestration.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-white/10 pt-4 lg:pt-0 lg:pl-6 space-y-2 font-mono text-xs">
            <div className="flex items-center justify-between text-white/60">
              <span>MODEL TYPE:</span>
              <strong className="text-white">XGBoost Classifier</strong>
            </div>
            <div className="flex items-center justify-between text-white/60">
              <span>TRACKING:</span>
              <strong className="text-[#C5A059]">MLflow Registry</strong>
            </div>
            <div className="flex items-center justify-between text-white/60">
              <span>INFRASTRUCTURE:</span>
              <strong className="text-white">Docker + AWS ECS</strong>
            </div>
            <div className="flex items-center justify-between text-white/60">
              <span>AUTOMATION:</span>
              <strong className="text-white">GitHub Actions CI/CD</strong>
            </div>
          </div>
        </div>

        {/* Interactive System Pipeline Strip */}
        <div className="space-y-3">
          <div className="flex items-center justify-between font-mono text-[9px] text-white/50">
            <span>INTERACTIVE PIPELINE VISUALIZATION (CLICK ANY STAGE TO INSPECT ARCHITECTURE)</span>
            <span className="text-[#C5A059]">10 PIPELINE STAGES</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-2">
            {stages.map((stage, idx) => {
              const isSelected = selectedStage.id === stage.id;
              const Icon = stage.icon;
              return (
                <button
                  key={stage.id}
                  onClick={() => setSelectedStage(stage)}
                  className={`p-3 text-left border transition-all cursor-pointer flex flex-col justify-between h-28 relative ${
                    isSelected
                      ? 'bg-[#181818] border-[#C5A059] text-white shadow-md'
                      : 'bg-[#111111] border-white/10 text-white/60 hover:text-white hover:border-white/30'
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="font-mono text-[9px] text-white/40">0{idx + 1}</span>
                    <span className={`w-1.5 h-1.5 rounded-full ${
                      stage.status === 'COMPLETED' ? 'bg-emerald-400' :
                      stage.status === 'IN_DEVELOPMENT' ? 'bg-amber-400 animate-pulse' : 'bg-white/20'
                    }`}></span>
                  </div>

                  <div className="my-1">
                    <Icon className={`w-4 h-4 mb-1 ${isSelected ? 'text-[#C5A059]' : 'text-white/50'}`} />
                    <div className="font-mono text-xs font-semibold truncate text-white">{stage.name}</div>
                  </div>

                  <div className="text-[9px] font-mono text-[#C5A059] truncate">
                    {stage.tech.split(',')[0]}
                  </div>

                  {isSelected && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-1 bg-[#C5A059]"></div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Stage Detail Panel */}
        <div className="bg-[#141414] border border-[#C5A059]/40 p-6 space-y-6 relative animate-in fade-in duration-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-[#0a0a0a] border border-[#C5A059]/40 text-[#C5A059]">
                <selectedStage.icon className="w-5 h-5" />
              </div>
              <div>
                <div className="mono text-[9px] text-white/40 uppercase tracking-wider">
                  STAGE SPECIFICATION // {selectedStage.category}
                </div>
                <h3 className="font-serif-title text-2xl font-normal text-white">
                  {selectedStage.name}
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="mono text-[9px] px-2.5 py-1 bg-white/5 border border-white/10 text-white/80 font-mono">
                STACK: {selectedStage.tech}
              </span>
              <span className={`mono text-[9px] px-2.5 py-1 font-mono font-bold tracking-wider ${
                selectedStage.status === 'COMPLETED' ? 'bg-emerald-950/50 text-emerald-300 border border-emerald-500/40' :
                selectedStage.status === 'IN_DEVELOPMENT' ? 'bg-amber-950/50 text-amber-300 border border-amber-500/40' :
                'bg-white/5 text-white/50 border border-white/10'
              }`}>
                {selectedStage.status === 'COMPLETED' ? 'VERIFIED COMPLETED' :
                 selectedStage.status === 'IN_DEVELOPMENT' ? 'ACTIVE DEVELOPMENT' : 'PLANNED ARCHITECTURE'}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-7 space-y-4">
              <div>
                <span className="mono text-[9px] text-white/40 block mb-1">ARCHITECTURAL RESPONSIBILITY</span>
                <p className="text-sm text-white/80 font-sans leading-relaxed">
                  {selectedStage.description}
                </p>
              </div>

              <div>
                <span className="mono text-[9px] text-[#C5A059] block mb-2 font-semibold">TECHNICAL SPECIFICATIONS</span>
                <ul className="space-y-2">
                  {selectedStage.specDetails.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs font-mono text-white/70">
                      <span className="text-red-400 font-bold">&gt;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="md:col-span-5 bg-[#0a0a0a] p-4 border border-white/10 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[10px] font-mono text-white/40 border-b border-white/10 pb-2">
                  <span>ML SYSTEM TELEMETRY</span>
                  <span className="text-[#C5A059]">SYS.MLOPS-01</span>
                </div>
                <div className="font-mono text-xs space-y-1.5 text-white/70 pt-1">
                  <div>Status: <span className="text-amber-400">{selectedStage.status}</span></div>
                  <div>Component: <span className="text-white">{selectedStage.name}</span></div>
                  <div>Interface: <span className="text-[#C5A059]">{selectedStage.tech}</span></div>
                  <div className="text-[10px] text-white/40 pt-2 border-t border-white/5">
                    "Production ML engineering requires strict reproducibility from raw data to serving container."
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={() => navigate('/projects/telco-customer-churn-mlops')}
                  className="text-xs font-mono text-[#C5A059] hover:underline flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Open Full Project Dossier</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
