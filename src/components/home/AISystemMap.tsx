import React, { useState } from 'react';
import { 
  HelpCircle, Database, Cpu, Workflow, Server, Cloud, Activity, 
  ArrowRight, CheckCircle2, ChevronRight, Sparkles 
} from 'lucide-react';

interface PipelineStep {
  stepNumber: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  description: string;
  inputs: string;
  outputs: string;
  engineeringSafeguard: string;
}

export const AISystemMap: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState<number>(0);

  const steps: PipelineStep[] = [
    {
      stepNumber: "01",
      title: "PROBLEM",
      subtitle: "System Bottleneck",
      icon: HelpCircle,
      description: "Isolating manual, error-prone human workflows (e.g. flaky manual QA cycles, ATS keyword filtering bias, high customer churn, or document data extraction fatigue).",
      inputs: "Business operational logs, high-latency user complaints, error reports",
      outputs: "Formal technical problem specification & target quantitative metrics",
      engineeringSafeguard: "Scope constraint: Only apply AI where deterministic algorithmic logic cannot solve the problem reliably."
    },
    {
      stepNumber: "02",
      title: "DATA",
      subtitle: "Ingestion & Schema",
      icon: Database,
      description: "Designing reproducible data ingestion pipelines: audio spectrogram extraction, PDF chunking, tabular customer usage records, and relational PostgreSQL schemas.",
      inputs: "Unstructured PDFs, customer telecom records, raw WAV audio samples",
      outputs: "Standardized vector embeddings, normalized tables, train/test splits",
      engineeringSafeguard: "Strict schema validation and data leakage elimination before any model sees the distribution."
    },
    {
      stepNumber: "03",
      title: "MODEL / LLM",
      subtitle: "Reasoning Core",
      icon: Cpu,
      description: "Selecting optimal intelligence tier: local privacy-first Ollama LLMs, high-capacity Gemini APIs, XGBoost classifiers, or PyTorch CNN feature extractors.",
      inputs: "Preprocessed numerical matrices, chunked contexts, calibrated prompt templates",
      outputs: "Trained serialized weights, probability scores, inference token streams",
      engineeringSafeguard: "Quantized model weights and strict temperature boundaries to prevent stochastic hallucinations."
    },
    {
      stepNumber: "04",
      title: "AGENT / WORKFLOW",
      subtitle: "State Orchestration",
      icon: Workflow,
      description: "Embedding reasoning inside deterministic state machines using LangGraph, cyclical execution graphs, Playwright browser tools, and automated retry loops.",
      inputs: "Model decisions, structured tool invocation requests, runtime DOM state",
      outputs: "Autonomous browser actions, self-healed bug reports, verified answers",
      engineeringSafeguard: "Loop guards and max-iteration timeouts preventing runaway autonomous agent cycles."
    },
    {
      stepNumber: "05",
      title: "API",
      subtitle: "Inference Endpoint",
      icon: Server,
      description: "Wrapping intelligence inside low-latency asynchronous FastAPI / Express REST microservices with Pydantic request validation and token authentication.",
      inputs: "External client HTTP requests, authenticated JWT payloads",
      outputs: "JSON inference responses, streaming Server-Sent Events, telemetry logs",
      engineeringSafeguard: "Rate limiting, payload sanitization, and graceful degradation when upstream LLMs timeout."
    },
    {
      stepNumber: "06",
      title: "DEPLOYMENT",
      subtitle: "Container & Cloud",
      icon: Cloud,
      description: "Containerizing microservices into minimal Docker images, automating build/test suites with GitHub Actions, and hosting on AWS ECS Fargate or Cloud Run.",
      inputs: "Committed source code, Dockerfiles, cloud environment parameters",
      outputs: "Deployable container images, live HTTPS cloud endpoints, auto-scaling clusters",
      engineeringSafeguard: "Zero-downtime rolling deploys with automated rollback on failed health check probes."
    },
    {
      stepNumber: "07",
      title: "MONITORING",
      subtitle: "Telemetry & Drift",
      icon: Activity,
      description: "Continuous observability tracking 99th percentile inference latency, API error rates, model prediction drift, and human feedback loops.",
      inputs: "CloudWatch telemetry logs, user feedback signals, production feature distributions",
      outputs: "Drift alarms, automated retraining tickets, latency performance dashboards",
      engineeringSafeguard: "Automated canary evaluations ensuring degraded models never serve 100% of live traffic."
    }
  ];

  return (
    <section id="skills" className="py-12 sm:py-16 border-b border-white/10 relative bg-[#080808]">
      <div className="space-y-8">
        {/* Header */}
        <div className="border-b border-white/10 pb-4 flex flex-col md:flex-row md:items-end justify-between gap-2">
          <div>
            <div className="flex items-center gap-2 mono text-[10px] text-[#C5A059] uppercase tracking-widest mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></span>
              <span>ENGINEERING METHODOLOGY &amp; LIFECYCLE</span>
            </div>
            <h2 className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-normal text-[#F4F4F0] tracking-tight">
              Architecture &amp; Process Pipeline
            </h2>
          </div>
          <span className="mono text-[10px] text-white/50">
            Click any phase to inspect engineering mechanics
          </span>
        </div>

        {/* 7-Stage Process Sequence Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
          {steps.map((step, idx) => {
            const isSelected = selectedStep === idx;
            const Icon = step.icon;
            return (
              <button
                key={step.title}
                onClick={() => setSelectedStep(idx)}
                className={`p-3 border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between h-28 relative ${
                  isSelected
                    ? 'bg-[#181818] border-[#C5A059] shadow-md'
                    : 'bg-[#0e0e0e] border-white/10 hover:border-white/30 text-white/70'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className="font-mono text-[9px] text-red-500 font-bold">{step.stepNumber}</span>
                  {idx < steps.length - 1 && (
                    <ChevronRight className="w-3 h-3 text-white/30 hidden lg:block" />
                  )}
                </div>

                <div className="my-1">
                  <Icon className={`w-4 h-4 mb-1 ${isSelected ? 'text-[#C5A059]' : 'text-white/40'}`} />
                  <div className="font-mono text-xs font-semibold text-white tracking-wide truncate">
                    {step.title}
                  </div>
                </div>

                <div className="font-mono text-[9px] text-white/50 truncate">
                  {step.subtitle}
                </div>

                {isSelected && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-1 bg-[#C5A059]"></div>
                )}
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Breakdown Panel */}
        {steps[selectedStep] && (
          <div className="bg-[#111111] border border-[#C5A059]/40 p-6 sm:p-7 relative animate-in fade-in duration-200">
            {/* Top Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-[#181818] border border-[#C5A059]/40 text-[#C5A059]">
                  {React.createElement(steps[selectedStep].icon, { className: 'w-5 h-5' })}
                </div>
                <div>
                  <div className="mono text-[9px] text-[#C5A059] uppercase tracking-wider">
                    PHASE {steps[selectedStep].stepNumber} SPECIFICATION
                  </div>
                  <h3 className="font-serif-title text-2xl font-normal text-[#F4F4F0]">
                    {steps[selectedStep].title}: {steps[selectedStep].subtitle}
                  </h3>
                </div>
              </div>

              <span className="mono text-[9px] px-2.5 py-1 bg-white/5 border border-white/10 text-white/70 font-mono self-start sm:self-auto">
                STAGE {steps[selectedStep].stepNumber} / 07
              </span>
            </div>

            {/* Content Details */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-5">
              <div className="lg:col-span-7 space-y-4">
                <div>
                  <span className="mono text-[9px] text-white/40 block mb-1">OPERATIONAL OBJECTIVE</span>
                  <p className="text-sm text-white/80 font-sans leading-relaxed">
                    {steps[selectedStep].description}
                  </p>
                </div>

                <div className="p-3 bg-[#0a0a0a] border border-red-900/30 font-mono text-xs text-red-300">
                  <span className="text-red-400 font-bold block text-[9px] uppercase tracking-wider mb-1">
                    ENGINEERING SAFEGUARD // RELIABILITY CHECK:
                  </span>
                  <p className="text-[11px] leading-relaxed text-red-200/90">
                    {steps[selectedStep].engineeringSafeguard}
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5 bg-[#0a0a0a] p-4 border border-white/10 space-y-3 font-mono text-xs">
                <div>
                  <span className="text-[9px] text-white/40 uppercase tracking-widest block mb-1">STAGE INPUTS:</span>
                  <div className="text-white/80 bg-[#141414] p-2 border border-white/5 text-[11px]">
                    {steps[selectedStep].inputs}
                  </div>
                </div>

                <div>
                  <span className="text-[9px] text-[#C5A059] uppercase tracking-widest block mb-1">STAGE OUTPUTS:</span>
                  <div className="text-white/80 bg-[#141414] p-2 border border-[#C5A059]/20 text-[11px]">
                    {steps[selectedStep].outputs}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
