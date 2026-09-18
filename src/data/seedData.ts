import { Profile, Project, Experience, Skill, Education, Certification, ExploringTopic } from '../types';

export const initialProfile: Profile = {
  name: "Vootakoti Devaharshini",
  role: "AI Engineering Student | Full-Stack Developer | Data Science Student | Generative AI & Agentic AI Builder",
  tagline: "Building intelligent software that solves real problems.",
  heroHeadline: "Building intelligent software that solves real problems.",
  heroSubtext: "I'm Devaharshini, an AI Engineering student and full-stack developer exploring Generative AI, agentic systems, data science, automation, and modern web applications.",
  bio: "I am an AI Engineering undergraduate at Vignan's Institute of Information Technology (CGPA 9.4) and a Data Science undergraduate at IIT Madras. I specialize in taking systems from raw problem statements to robust, production-ready implementations. My work spans full-stack architecture, agentic AI workflows, NLP classification engines, deep learning audio processors, and enterprise workflow automation.",
  shortIntro: "Dual-degree AI & Data Science scholar with hands-on experience building end-to-end full-stack products, autonomous AI testing agents, and enterprise automation pipelines.",
  location: "Visakhapatnam, India",
  email: "23f3001285@ds.study.iitm.ac.in",
  phone: "+91 8333955828",
  linkedin: "https://www.linkedin.com/in/devaharshini-vootakoti/",
  github: "https://github.com/Devaharshini06",
  resumeUrl: "#",
  availabilityStatus: "Open for AI Engineering Internships, Full-Stack Roles, Hackathons & Technical Mentorship",
  profilePhoto: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600",
  roleBadges: [
    "AI Engineering",
    "Full-Stack Development",
    "Generative AI",
    "Agentic AI",
    "Data Science"
  ]
};

export const initialProjects: Project[] = [
  {
    id: "proj-1",
    title: "Autonomous AI QA Testing Agent",
    slug: "autonomous-ai-qa-testing-agent",
    oneLiner: "An autonomous browser testing system that uses LLM reasoning to execute workflows, detect failures, and recover from broken interactions.",
    shortDescription: "An AI-powered browser testing system designed to automate end-to-end workflows using LangGraph, Playwright, and local Ollama model execution.",
    fullDescription: "The Autonomous AI QA Testing Agent transforms standard script-based QA testing into an intelligent, self-healing inspection process. By pairing LangGraph reflection-based agent state machines with Playwright headless browser control, the agent dynamically navigates web interfaces, parses DOM changes, verifies functional assertions, and automatically repairs broken selector routes when page layouts change.",
    problem: "Manual end-to-end browser testing is repetitive, time-consuming, and fragile. Traditional Playwright/Selenium scripts break frequently when CSS selectors or page layouts are updated.",
    solution: "Engineered an agentic workflow that converts natural language intent into DOM actions, monitors UI state changes in real time, uses reflection loops to diagnose unexpected UI states, and self-heals interaction paths.",
    architecture: "FastAPI REST API layer orchestrating LangGraph multi-step agent graphs. Playwright handles browser DOM interactions and screenshot capture while Ollama handles local LLM vision and reasoning.",
    contribution: "Designed and implemented the full agent state graph, reflection loops, Playwright automation layer, FastAPI orchestration service, and selector recovery fallback mechanisms.",
    challenges: "Handling asynchronous DOM updates and avoiding infinite loops when an element cannot be found.",
    outcomes: "Successfully automated multi-step browser form submissions, user login flows, and checkout flows with zero manual selector updates required when minor UI edits occurred.",
    lessonsLearned: "Agentic feedback loops must be strictly bounded with structured schema validations to ensure deterministic execution in QA pipelines.",
    futureImprovements: "Add visual regression comparison using computer vision and generate automated HTML bug reports.",
    categories: ["Agentic AI", "AI", "Automation", "Testing", "SaaS"],
    technologies: ["FastAPI", "LangGraph", "Playwright", "Ollama", "Python", "TypeScript"],
    githubUrl: "https://github.com/Devaharshini06/AI-QA-testing-agent.git",
    featured: true,
    published: true,
    technicalComplexity: "High",
    startDate: "2024-05-01",
    endDate: "2024-07-01",
    displayOrder: 1
  },
  {
    id: "proj-2",
    title: "Career Survival Kit AI",
    slug: "career-survival-kit-ai",
    oneLiner: "AI-powered career optimization suite offering instant ATS resume scoring, smart cover letter generation, and realistic AI interview prep.",
    shortDescription: "An AI-powered career platform focused on resume optimization, ATS analysis, interview preparation, and AI-assisted career guidance.",
    fullDescription: "Career Survival Kit AI delivers a comprehensive career readiness toolkit for job seekers. It features deep document structure analysis for resumes, calculates match vectors against job descriptions using Google Gemini API, and provides interactive AI interview practice sessions.",
    problem: "Job applicants struggle to understand why their resumes fail automated Applicant Tracking Systems (ATS) or how to tailor their background for technical interviews.",
    solution: "Built a full-stack platform that parses candidate resumes, computes ATS compliance metrics, highlights missing keywords, and generates structured interview questions with instant feedback.",
    architecture: "Next.js dynamic frontend communicating with Node.js backend services, PostgreSQL database for user profiles, and Gemini API for deep semantic resume analysis.",
    contribution: "Architected the full database schema, Next.js application UI, Gemini API prompts, ATS keyword scoring algorithms, and deployment pipeline.",
    challenges: "Parsing non-standard PDF resume formatting and structuring LLM output consistently into JSON metrics.",
    outcomes: "Deployed full production build live on Render with full functional ATS scoring and interview simulation capabilities.",
    lessonsLearned: "Consistent JSON schemas and few-shot prompting are essential when requesting structured scoring metrics from generative models.",
    futureImprovements: "Integrate audio-based live speech synthesis for voice interview coaching.",
    categories: ["AI", "GenAI", "Full-Stack", "SaaS"],
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Gemini API", "Tailwind CSS", "TypeScript"],
    githubUrl: "https://github.com/Devaharshini06/Career-Toolkit.git",
    liveUrl: "https://career-toolkit-8l2s.onrender.com/",
    featured: true,
    published: true,
    technicalComplexity: "High",
    startDate: "2024-03-01",
    endDate: "2024-05-01",
    displayOrder: 2
  },
  {
    id: "proj-3",
    title: "Placement Portal Application",
    slug: "placement-portal-application",
    oneLiner: "Enterprise-grade placement management platform with role-based workflows for students, recruiters, and university administrators.",
    shortDescription: "A full-stack placement management platform supporting students, company recruiters, and university administrators with automated workflows.",
    fullDescription: "Placement Portal Application streamlines college recruitment operations. It handles company drive registration, student eligibility filtering, interview schedule tracking, role-based document access, and high-performance caching for administrative dashboards.",
    problem: "University placement cells rely on fragmented spreadsheets and manual emails, resulting in communication errors and delayed drive updates.",
    solution: "Developed a single unified portal with granular RBAC (Role-Based Access Control), REST API backend, SQLAlchemy ORM, and Redis cache for fast metrics retrieval.",
    architecture: "Flask microservices backend paired with Vue.js single-page application frontend, PostgreSQL/MySQL relational database, and Redis caching layer.",
    contribution: "Implemented student & admin authentication flows, application tracking pipelines, relational database schemas, and REST endpoints.",
    challenges: "Enforcing complex role permissions across multi-tenant admin views and keeping fast cached metrics in sync.",
    outcomes: "Centralized drive registration, candidate status tracking, and automated candidate export files.",
    lessonsLearned: "DB indexing and Redis query caching are vital for administrative table views handling hundreds of student records.",
    futureImprovements: "Add automated email notifications and interview calendar synchronization.",
    categories: ["Full-Stack", "Web Development", "SaaS"],
    technologies: ["Flask", "Vue.js", "PostgreSQL", "MySQL", "SQLAlchemy", "Redis", "Python"],
    githubUrl: "https://github.com/Devaharshini06/placement_portal.git",
    featured: true,
    published: true,
    technicalComplexity: "High",
    startDate: "2024-01-01",
    endDate: "2024-03-01",
    displayOrder: 3
  },
  {
    id: "proj-4",
    title: "Music Genre Classification using Deep Learning",
    slug: "music-genre-classification-deep-learning",
    oneLiner: "Audio AI classification model utilizing MFCC feature extraction and Convolutional Neural Networks for precise music genre identification.",
    shortDescription: "A deep learning system for music genre classification using audio feature extraction and neural network models.",
    fullDescription: "Explored signal processing and deep neural network architectures to classify raw audio tracks into distinct musical genres. Extracted Mel-Frequency Cepstral Coefficients (MFCCs) and Mel-Spectrograms from GTZAN dataset audio files, feeding them into custom 2D CNNs and ResNet architectures.",
    problem: "Audio signals contain high-dimensional temporal-frequency data that traditional machine learning algorithms struggle to model accurately.",
    solution: "Transformed raw time-domain audio signals into 2D spectrogram representations, leveraging CNN spatial feature extraction for genre pattern recognition.",
    architecture: "Librosa preprocessing pipeline converting WAV files into MFCC matrices, feeding into PyTorch / TensorFlow CNN models with Dropout and Batch Normalization layers.",
    contribution: "Performed complete audio preprocessing, feature engineering, model training, hyperparameter tuning, and performance evaluation.",
    challenges: "Mitigating model overfitting due to dataset size and balancing frequency resolution vs time resolution in STFT transforms.",
    outcomes: "Achieved high classification precision across multi-class genre categories using Mel-spectrogram input representations.",
    lessonsLearned: "Spectrogram visual representation allows computer vision CNN techniques to solve audio classification problems effectively.",
    futureImprovements: "Deploy model into a real-time web interface allowing users to drop MP3 files for instant genre analysis.",
    categories: ["DL", "ML", "Audio AI", "Data Science"],
    technologies: ["Python", "TensorFlow", "PyTorch", "Librosa", "MFCC", "Mel-Spectrograms", "NumPy"],
    githubUrl: "https://github.com/Devaharshini06/Messy_Mashup_DLGenAI.git",
    featured: true,
    published: true,
    technicalComplexity: "High",
    startDate: "2023-10-01",
    endDate: "2023-12-01",
    displayOrder: 4
  },
  {
    id: "proj-5",
    title: "Comment Category Prediction",
    slug: "comment-category-prediction",
    oneLiner: "NLP-driven multi-class comment classification engine evaluating LightGBM, SVM, and Logistic Regression models.",
    shortDescription: "An NLP-based classification system for automatically categorizing comments into actionable topics.",
    fullDescription: "Comment Category Prediction processes unstructured user comments through text normalization, TF-IDF vectorization, and model benchmarking across multiple machine learning estimators.",
    problem: "Online platforms receive massive volumes of feedback comments that require manual tagging for moderation and routing.",
    solution: "Engineered an automated NLP text processing pipeline that cleans input text, extracts TF-IDF n-gram features, and evaluates model predictions.",
    architecture: "Python Scikit-learn feature pipeline comparing Logistic Regression, Support Vector Machines, and LightGBM classifiers with cross-validation.",
    contribution: "Built text preprocessing functions, n-gram TF-IDF vectorizers, hyperparameter grid searches, and metric visualization plots.",
    challenges: "Handling severe class imbalance across niche comment categories.",
    outcomes: "LightGBM achieved superior F1-score performance while preserving sub-10ms prediction latency per comment.",
    lessonsLearned: "Proper n-gram feature selection and class-weight balancing yield larger performance gains than model complexity alone.",
    futureImprovements: "Incorporate transformer embeddings (BERT/RoBERTa) for fine-grained sentiment and context capturing.",
    categories: ["ML", "NLP", "Data Science"],
    technologies: ["Python", "Scikit-learn", "LightGBM", "NLP", "TF-IDF", "Pandas"],
    githubUrl: "https://github.com/Devaharshini06/Comment_Prediction_ML.git",
    featured: false,
    published: true,
    technicalComplexity: "Medium",
    startDate: "2023-08-01",
    endDate: "2023-09-01",
    displayOrder: 5
  },
  {
    id: "proj-6",
    title: "RAG AI Assistant",
    slug: "rag-ai-assistant",
    oneLiner: "Context-aware document query engine using LangChain, ChromaDB vector storage, and local Ollama LLMs.",
    shortDescription: "A document-based AI assistant using Retrieval-Augmented Generation (RAG) to answer questions accurately from custom knowledge files.",
    fullDescription: "RAG AI Assistant enables instant question answering across private documents without hallucination. It chunks PDF/text files, generates semantic vector embeddings, stores them in ChromaDB, retrieves top matching contexts, and prompts local or cloud LLMs.",
    problem: "Generic LLMs lack access to private or context-specific document knowledge and frequently produce convincing hallucinations.",
    solution: "Constructed a Retrieval-Augmented Generation framework with recursive document chunking, semantic similarity vector search, and strict context grounding.",
    architecture: "LangChain workflow orchestrating text loaders, HuggingFace embedding models, ChromaDB vector database, and local Ollama inference server.",
    contribution: "Built document ingestion scripts, chunking strategy comparison tests, ChromaDB integration, and grounded prompt templates.",
    challenges: "Selecting optimum chunk size and overlap parameters to maintain context coherence without overloading the context window.",
    outcomes: "Delivered fast, accurate, zero-hallucination query responses linked directly to source document excerpts.",
    lessonsLearned: "Retrieval quality directly determines RAG accuracy; semantic chunking is far superior to arbitrary length splits.",
    futureImprovements: "Add hybrid search (dense embeddings + sparse BM25 keyword matching) and multi-modal PDF image extraction.",
    categories: ["GenAI", "AI", "Full-Stack"],
    technologies: ["LangChain", "ChromaDB", "Ollama", "Hugging Face", "LLMs", "Python"],
    githubUrl: "https://github.com/Devaharshini06",
    featured: true,
    published: true,
    technicalComplexity: "High",
    startDate: "2024-02-01",
    endDate: "2024-04-01",
    displayOrder: 6
  },
  {
    id: "proj-7",
    title: "WhatsApp CRM",
    slug: "whatsapp-crm",
    oneLiner: "Automated customer communication hub integrating MSG91 WhatsApp Business API with interactive menu workflows and lead tracking.",
    shortDescription: "A WhatsApp CRM platform designed for customer communication and business workflow automation.",
    fullDescription: "WhatsApp CRM bridges business communication with automated message routing. It connects MSG91 WhatsApp Business API to an interactive CRM dashboard, enabling bulk CSV lead importing, automated customer request routing, product menu display, and webhook conversation handling.",
    problem: "Small businesses struggle to manage customer queries, product catalogs, and service leads coming through fragmented WhatsApp messages.",
    solution: "Built a full-stack CRM dashboard with live webhook ingestion, dynamic WhatsApp interactive menu templates, and lead state management.",
    architecture: "React + Vite frontend dashboard communicating with Node.js/Express server, MySQL relational storage, and MSG91 WhatsApp Gateway API.",
    contribution: "Developed webhooks processing logic, lead tracking tables, CSV import parser, and WhatsApp automated reply state engine.",
    challenges: "Managing incoming webhook rate spikes and preserving conversation context state across multi-message menus.",
    outcomes: "Streamlined customer inquiries into categorized service leads with automated instant auto-replies.",
    lessonsLearned: "Webhook reliability requires robust retry policies and database transaction isolation.",
    futureImprovements: "Integrate LLM auto-responses for unstructured conversational queries.",
    categories: ["Full-Stack", "Automation", "AI", "SaaS"],
    technologies: ["React", "Vite", "Node.js", "TypeScript", "MySQL", "MSG91 WhatsApp API", "Express"],
    githubUrl: "https://github.com/Devaharshini06",
    featured: true,
    published: true,
    technicalComplexity: "High",
    startDate: "2024-04-01",
    endDate: "2024-06-01",
    displayOrder: 7
  },
  {
    id: "proj-8",
    title: "FoodBridge",
    slug: "foodbridge",
    oneLiner: "Social impact web platform connecting surplus food donors with community organizations to reduce food wastage.",
    shortDescription: "A web platform designed around food redistribution and donation connection workflows.",
    fullDescription: "FoodBridge matches restaurants, events, and individual donors who have extra food with local shelters and NGOs. Features location-based claim listings, real-time availability status, and donor activity summaries.",
    problem: "Significant quantities of edible surplus food are discarded daily due to the absence of immediate real-time coordination channels.",
    solution: "Created an intuitive platform enabling donors to post food listings with expiration windows and allowing verified organizations to claim items immediately.",
    architecture: "Node.js + Express web server with MongoDB/PostgreSQL storage and responsive HTML/CSS/JS frontend UI.",
    contribution: "Implemented donor & recipient routing, listing creation forms, status update mechanisms, and responsive UI screens.",
    challenges: "Designing simple UI flows accessible to non-technical volunteers under tight time constraints.",
    outcomes: "Created functional prototype demonstrating streamlined claim-to-pickup workflows.",
    lessonsLearned: "Social utility applications thrive on friction-free form design and clear call-to-actions.",
    futureImprovements: "Add SMS alerts for urgent food claims expiring within 2 hours.",
    categories: ["Full-Stack", "Web Development"],
    technologies: ["Node.js", "Express", "HTML", "CSS", "JavaScript", "MongoDB", "PostgreSQL"],
    githubUrl: "https://github.com/Devaharshini06",
    featured: false,
    published: true,
    technicalComplexity: "Medium",
    startDate: "2023-06-01",
    endDate: "2023-08-01",
    displayOrder: 8
  },
  {
    id: "proj-9",
    title: "Sentiment Analysis Application",
    slug: "sentiment-analysis-application",
    oneLiner: "Web tool providing real-time text sentiment evaluation, WordCloud visual generation, and Chart.js reporting.",
    shortDescription: "A web-based sentiment analysis application with text evaluation and interactive visual reporting.",
    fullDescription: "Sentiment Analysis Application allows users to analyze customer feedback, social media posts, or arbitrary text blocks. Outputs sentiment polarity scores, subjective tone metrics, key phrase word clouds, and Chart.js distribution charts.",
    problem: "Raw text feedback is difficult to aggregate manually without visual analytics metrics.",
    solution: "Wrapped TextBlob natural language processing into a Flask web application rendering dynamic Chart.js analytics and generated WordCloud images.",
    architecture: "Flask Python backend providing REST analytics endpoints to a frontend interface rendered with Bootstrap and Chart.js.",
    contribution: "Integrated TextBlob sentiment scoring, WordCloud image rendering pipeline, and Chart.js visual dashboard components.",
    challenges: "Generating dynamic image buffers in memory without requiring server disk writes.",
    outcomes: "Delivered an instant text evaluation tool with clean graphical sentiment breakdowns.",
    lessonsLearned: "Pairing textual NLP outputs with intuitive chart visuals significantly increases user insight comprehension.",
    futureImprovements: "Add aspect-based sentiment analysis to evaluate specific product feature mentions separately.",
    categories: ["ML", "NLP", "Data Science", "Web Development"],
    technologies: ["Flask", "TextBlob", "WordCloud", "Chart.js", "Python", "Bootstrap"],
    githubUrl: "https://github.com/Devaharshini06",
    featured: false,
    published: true,
    technicalComplexity: "Medium",
    startDate: "2023-04-01",
    endDate: "2023-05-01",
    displayOrder: 9
  },
  {
    id: "proj-10",
    title: "Blog Website",
    slug: "blog-website",
    oneLiner: "Full-stack blogging platform built with Flask, Jinja2 template engine, and SQLite relational storage.",
    shortDescription: "A full-stack blog platform utilizing Flask and server-side templates with SQLite database persistence.",
    fullDescription: "A complete content creation and publishing application supporting post drafting, rich HTML rendering, categorization, author management, and comment threads.",
    problem: "Learning fundamental web request cycles, database ORM CRUD operations, and template rendering mechanics.",
    solution: "Built a traditional server-side rendered application utilizing Flask, Jinja2 templates, Bootstrap styling, and SQLite storage.",
    architecture: "Flask Python server using Jinja2 templates for view rendering and SQLite database with SQLAlchemy ORM.",
    contribution: "Designed database schema, route handlers, authentication middleware, and responsive template layouts.",
    challenges: "Sanitizing user-submitted comment input to prevent XSS vulnerability attacks.",
    outcomes: "Built a fully working blogging system demonstrating core Web application architecture.",
    lessonsLearned: "Server-side rendering principles provide a solid foundational understanding before adopting modern SPA frameworks.",
    futureImprovements: "Add markdown editor support and image upload integrations.",
    categories: ["Full-Stack", "Web Development"],
    technologies: ["Flask", "Jinja2", "HTML", "CSS", "Bootstrap", "SQLite", "Python"],
    githubUrl: "https://github.com/Devaharshini06",
    featured: false,
    published: true,
    technicalComplexity: "Foundational",
    startDate: "2023-02-01",
    endDate: "2023-03-01",
    displayOrder: 10
  },
  {
    id: "proj-mlops",
    title: "Telco Customer Churn ML System",
    slug: "telco-customer-churn-mlops",
    oneLiner: "Production-grade MLOps pipeline automating model training, artifact tracking, containerized FastAPI inference, and AWS cloud deployment.",
    shortDescription: "An end-to-end production ML system for telco churn prediction using XGBoost, MLflow tracking, FastAPI containerization, and AWS ECS Fargate CI/CD.",
    fullDescription: "Currently in development, this project establishes a complete enterprise MLOps architecture. The pipeline ingests customer telecom telemetry, executes automated feature engineering pipelines, optimizes an XGBoost classifier with MLflow experiment tracking, wraps the trained model into a high-throughput FastAPI inference microservice, and packages it into Docker containers automated via GitHub Actions CI/CD to AWS ECS Fargate.",
    problem: "Data science prototypes frequently fail in production due to lack of model versioning, fragile manual deployment scripts, unmonitored feature drift, and low inference throughput.",
    solution: "Engineering a fully automated CI/CD machine learning lifecycle: automated data validation, MLflow experiment tracking, containerized microservices, and automated health telemetry.",
    architecture: "Data Ingestion → Feature Engineering → XGBoost Training → MLflow Registry → FastAPI Inference → Docker Container → GitHub Actions CI/CD → AWS ECS Fargate → Application Load Balancer → Prometheus / CloudWatch Monitoring.",
    contribution: "Designing the full end-to-end system architecture, XGBoost feature pipelines, MLflow logging parameters, FastAPI serving endpoints, and Docker containerization scripts.",
    challenges: "Calibrating imbalanced customer churn class distributions and ensuring low-latency inference serialization under load.",
    outcomes: "Active development: Baseline model trained with 84%+ ROC-AUC, MLflow tracking server connected, and Dockerized FastAPI endpoints functioning locally.",
    lessonsLearned: "Production MLOps requires treating models as versioned software artifacts with reproducible data dependencies.",
    futureImprovements: "Implement automated data drift alerts using Evidently AI and automated canary model rollouts.",
    categories: ["ML", "Data Science"],
    technologies: ["Python", "XGBoost", "MLflow", "FastAPI", "Docker", "GitHub Actions", "AWS ECS", "CI/CD"],
    githubUrl: "https://github.com/Devaharshini06",
    featured: true,
    published: true,
    technicalComplexity: "High",
    startDate: "2024-06-01",
    displayOrder: 0
  }
];

export const initialExperiences: Experience[] = [
  {
    id: "exp-1",
    company: "HEITS Pvt. Ltd.",
    role: "AI & Software Engineering Intern",
    location: "Visakhapatnam, Andhra Pradesh, India",
    startDate: "2026-06",
    endDate: "2026-07",
    isCurrent: false,
    description: "Contributed to enterprise-grade AI-powered SaaS solutions, backend REST API development, OCR/NLP data extraction, and browser automation workflows.",
    responsibilities: [
      "Engineered backend REST APIs using Python and PostgreSQL to power enterprise AI-driven SaaS platforms.",
      "Developed automated OCR and LLM-based information extraction pipelines to transform unstructured documents into structured business data.",
      "Implemented browser automation scripts using Playwright to streamline web scraping and automated interaction flows.",
      "Automated Outlook mail extraction pipelines and Excel reporting workflows, reducing repetitive manual reporting overhead.",
      "Participated in developer presentations, code reviews, and knowledge-sharing sessions across engineering teams."
    ],
    technologies: ["Python", "PostgreSQL", "REST APIs", "Playwright", "OCR", "NLP", "LLM Extraction", "Outlook API", "Excel Automation"],
    achievements: [
      "Automated daily mail extraction and reporting tasks, saving engineering hours weekly.",
      "Built resilient LLM document extraction schemas with strict error handling."
    ],
    featured: true,
    displayOrder: 1
  },
  {
    id: "exp-2",
    company: "Deloitte Australia – Forage",
    role: "Data Analytics Virtual Experience",
    location: "Virtual / Australia",
    startDate: "2025",
    endDate: "2025",
    isCurrent: false,
    description: "Conducted practical data analytics simulations focusing on client business telemetry, data cleansing, classification modeling, and dashboard presentation.",
    responsibilities: [
      "Analyzed complex client transaction records and identified anomaly vectors using Python and statistical methods.",
      "Engineered demographic and transactional feature cohorts to evaluate client retention rates.",
      "Built communicative visual dashboards summarizing analytical findings and business risk recommendations."
    ],
    technologies: ["Python", "Data Analytics", "Statistical Analysis", "Data Visualization", "Client Reporting"],
    achievements: [
      "Produced executive-ready analytical briefs simulating real-world consulting deliverables."
    ],
    featured: true,
    displayOrder: 2
  }
];

export const initialSkills: Skill[] = [
  // Programming
  { id: "sk-1", category: "Programming", skillName: "Python", proficiencyLabel: "Frequently Used", isPrimary: true, isExploring: false, displayOrder: 1 },
  { id: "sk-2", category: "Programming", skillName: "Java", proficiencyLabel: "Working With", isPrimary: false, isExploring: false, displayOrder: 2 },
  { id: "sk-3", category: "Programming", skillName: "JavaScript", proficiencyLabel: "Frequently Used", isPrimary: true, isExploring: false, displayOrder: 3 },
  { id: "sk-4", category: "Programming", skillName: "TypeScript", proficiencyLabel: "Frequently Used", isPrimary: true, isExploring: false, displayOrder: 4 },
  { id: "sk-5", category: "Programming", skillName: "SQL", proficiencyLabel: "Frequently Used", isPrimary: true, isExploring: false, displayOrder: 5 },

  // Frontend
  { id: "sk-6", category: "Frontend", skillName: "React", proficiencyLabel: "Frequently Used", isPrimary: true, isExploring: false, displayOrder: 6 },
  { id: "sk-7", category: "Frontend", skillName: "Next.js", proficiencyLabel: "Working With", isPrimary: true, isExploring: false, displayOrder: 7 },
  { id: "sk-8", category: "Frontend", skillName: "Vue.js", proficiencyLabel: "Working With", isPrimary: false, isExploring: false, displayOrder: 8 },
  { id: "sk-9", category: "Frontend", skillName: "Tailwind CSS", proficiencyLabel: "Frequently Used", isPrimary: true, isExploring: false, displayOrder: 9 },
  { id: "sk-10", category: "Frontend", skillName: "HTML5 & CSS3", proficiencyLabel: "Frequently Used", isPrimary: false, isExploring: false, displayOrder: 10 },

  // Backend
  { id: "sk-11", category: "Backend", skillName: "FastAPI", proficiencyLabel: "Frequently Used", isPrimary: true, isExploring: false, displayOrder: 11 },
  { id: "sk-12", category: "Backend", skillName: "Flask", proficiencyLabel: "Frequently Used", isPrimary: true, isExploring: false, displayOrder: 12 },
  { id: "sk-13", category: "Backend", skillName: "Node.js", proficiencyLabel: "Frequently Used", isPrimary: true, isExploring: false, displayOrder: 13 },
  { id: "sk-14", category: "Backend", skillName: "Express.js", proficiencyLabel: "Frequently Used", isPrimary: true, isExploring: false, displayOrder: 14 },
  { id: "sk-15", category: "Backend", skillName: "REST APIs", proficiencyLabel: "Frequently Used", isPrimary: true, isExploring: false, displayOrder: 15 },
  { id: "sk-16", category: "Backend", skillName: "SQLAlchemy", proficiencyLabel: "Working With", isPrimary: false, isExploring: false, displayOrder: 16 },

  // Databases
  { id: "sk-17", category: "Databases", skillName: "PostgreSQL", proficiencyLabel: "Frequently Used", isPrimary: true, isExploring: false, displayOrder: 17 },
  { id: "sk-18", category: "Databases", skillName: "MySQL", proficiencyLabel: "Working With", isPrimary: false, isExploring: false, displayOrder: 18 },
  { id: "sk-19", category: "Databases", skillName: "SQLite", proficiencyLabel: "Working With", isPrimary: false, isExploring: false, displayOrder: 19 },
  { id: "sk-20", category: "Databases", skillName: "Redis", proficiencyLabel: "Working With", isPrimary: false, isExploring: false, displayOrder: 20 },
  { id: "sk-21", category: "Databases", skillName: "MongoDB", proficiencyLabel: "Working With", isPrimary: false, isExploring: false, displayOrder: 21 },

  // AI / ML
  { id: "sk-22", category: "AI / ML", skillName: "Scikit-learn", proficiencyLabel: "Frequently Used", isPrimary: true, isExploring: false, displayOrder: 22 },
  { id: "sk-23", category: "AI / ML", skillName: "TensorFlow", proficiencyLabel: "Working With", isPrimary: true, isExploring: false, displayOrder: 23 },
  { id: "sk-24", category: "AI / ML", skillName: "PyTorch", proficiencyLabel: "Working With", isPrimary: true, isExploring: false, displayOrder: 24 },
  { id: "sk-25", category: "AI / ML", skillName: "LightGBM", proficiencyLabel: "Working With", isPrimary: false, isExploring: false, displayOrder: 25 },
  { id: "sk-26", category: "AI / ML", skillName: "NLP & Text Mining", proficiencyLabel: "Frequently Used", isPrimary: true, isExploring: false, displayOrder: 26 },

  // Generative AI
  { id: "sk-27", category: "Generative AI", skillName: "LangChain", proficiencyLabel: "Frequently Used", isPrimary: true, isExploring: false, displayOrder: 27 },
  { id: "sk-28", category: "Generative AI", skillName: "LangGraph", proficiencyLabel: "Frequently Used", isPrimary: true, isExploring: false, displayOrder: 28 },
  { id: "sk-29", category: "Generative AI", skillName: "RAG Architectures", proficiencyLabel: "Frequently Used", isPrimary: true, isExploring: false, displayOrder: 29 },
  { id: "sk-30", category: "Generative AI", skillName: "Ollama (Local LLMs)", proficiencyLabel: "Frequently Used", isPrimary: true, isExploring: false, displayOrder: 30 },
  { id: "sk-31", category: "Generative AI", skillName: "Gemini API", proficiencyLabel: "Frequently Used", isPrimary: true, isExploring: false, displayOrder: 31 },

  // Automation
  { id: "sk-32", category: "Automation", skillName: "Playwright", proficiencyLabel: "Frequently Used", isPrimary: true, isExploring: false, displayOrder: 32 },
  { id: "sk-33", category: "Automation", skillName: "Browser Automation", proficiencyLabel: "Frequently Used", isPrimary: true, isExploring: false, displayOrder: 33 },
  { id: "sk-34", category: "Automation", skillName: "Workflow Automation", proficiencyLabel: "Frequently Used", isPrimary: true, isExploring: false, displayOrder: 34 },

  // Developer Tools
  { id: "sk-35", category: "Developer Tools", skillName: "Git & GitHub", proficiencyLabel: "Frequently Used", isPrimary: true, isExploring: false, displayOrder: 35 },
  { id: "sk-36", category: "Developer Tools", skillName: "Docker", proficiencyLabel: "Working With", isPrimary: false, isExploring: false, displayOrder: 36 },
  { id: "sk-37", category: "Developer Tools", skillName: "Postman", proficiencyLabel: "Frequently Used", isPrimary: false, isExploring: false, displayOrder: 37 },
  { id: "sk-38", category: "Developer Tools", skillName: "VS Code", proficiencyLabel: "Frequently Used", isPrimary: false, isExploring: false, displayOrder: 38 },

  // Security / Testing
  { id: "sk-39", category: "Security / Testing", skillName: "Burp Suite", proficiencyLabel: "Explored", isPrimary: false, isExploring: true, displayOrder: 39 },
  { id: "sk-40", category: "Security / Testing", skillName: "MobSF", proficiencyLabel: "Explored", isPrimary: false, isExploring: true, displayOrder: 40 },
  { id: "sk-41", category: "Security / Testing", skillName: "Semgrep", proficiencyLabel: "Explored", isPrimary: false, isExploring: true, displayOrder: 41 },
  { id: "sk-42", category: "Security / Testing", skillName: "Automated Testing", proficiencyLabel: "Working With", isPrimary: true, isExploring: false, displayOrder: 42 }
];

export const initialEducation: Education[] = [
  {
    id: "edu-1",
    institution: "Vignan's Institute of Information Technology",
    degree: "B.Tech in Artificial Intelligence Engineering",
    field: "Artificial Intelligence & Software Engineering",
    startYear: "2023",
    endYear: "2027",
    grade: "CGPA: 9.4 / 10",
    location: "Visakhapatnam, India",
    description: "Focusing on artificial intelligence algorithms, data structures, backend engineering, software design patterns, and deep neural networks.",
    displayOrder: 1
  },
  {
    id: "edu-2",
    institution: "Indian Institute of Technology Madras (IIT Madras)",
    degree: "BS in Data Science and Applications",
    field: "Data Science, Statistics & Programming",
    startYear: "2023",
    endYear: "2027",
    location: "Online / IIT Madras",
    description: "Comprehensive rigorous curriculum covering foundational mathematics, data analytics, machine learning, database management, and Python development.",
    displayOrder: 2
  }
];

export const initialCertifications: Certification[] = [
  {
    id: "cert-1",
    name: "NPTEL – Large Language Models",
    issuer: "IIT Madras / NPTEL",
    date: "2024",
    credentialUrl: "https://nptel.ac.in/",
    description: "In-depth certification covering transformer architectures, self-attention mechanisms, prompt engineering, fine-tuning strategies, and LLM evaluations.",
    displayOrder: 1
  },
  {
    id: "cert-2",
    name: "Infosys Springboard – Python Programming",
    issuer: "Infosys Springboard",
    date: "2023",
    description: "Comprehensive mastery of Python object-oriented programming, data structures, file handling, and algorithmic problem-solving.",
    displayOrder: 2
  },
  {
    id: "cert-3",
    name: "Data Science & AI Certification",
    issuer: "Cisco Networking Academy",
    date: "2024",
    description: "Foundational and intermediate concepts in data analytics pipelines, exploratory data analysis, statistical modeling, and machine learning principles.",
    displayOrder: 3
  },
  {
    id: "cert-4",
    name: "JavaScript Essentials",
    issuer: "Cisco Networking Academy",
    date: "2023",
    description: "Core JavaScript language features, asynchronous promises, DOM manipulation, ES6+ standards, and event-driven architecture.",
    displayOrder: 4
  },
  {
    id: "cert-5",
    name: "HTML & CSS Essentials",
    issuer: "Cisco Networking Academy",
    date: "2023",
    description: "Modern semantic HTML5, CSS layout systems (Flexbox & Grid), responsive design principles, and web accessibility standards.",
    displayOrder: 5
  }
];

export const initialExploringTopics: ExploringTopic[] = [
  {
    id: "exp-top-1",
    title: "Agentic AI & Multi-Agent Frameworks",
    category: "AI Engineering",
    description: "Building self-healing, stateful multi-agent systems using LangGraph and CrewAI for complex task decomposition and tool usage.",
    status: "In Progress",
    displayOrder: 1
  },
  {
    id: "exp-top-2",
    title: "LLM Evaluation & Benchmarking",
    category: "GenAI Quality",
    description: "Evaluating retrieval accuracy, hallucination rates, and answer correctness using Ragas and customized benchmark test suites.",
    status: "Deep Dive",
    displayOrder: 2
  },
  {
    id: "exp-top-3",
    title: "AI Automation & Browser Agents",
    category: "Automation",
    description: "Combining Playwright headless browser automation with local vision-language models for autonomous web task execution.",
    status: "Experimenting",
    displayOrder: 3
  },
  {
    id: "exp-top-4",
    title: "MLOps & Model Monitoring",
    category: "Infrastructure",
    description: "Setting up CI/CD pipelines for machine learning models, model registry tracking, drift detection, and automated retraining.",
    status: "In Progress",
    displayOrder: 4
  },
  {
    id: "exp-top-5",
    title: "AI Security & Static Analysis",
    category: "Security",
    description: "Exploring prompt injection vulnerabilities, output sanitization, and automated security scanning tools (Semgrep, MobSF, Burp Suite).",
    status: "Experimenting",
    displayOrder: 5
  }
];
