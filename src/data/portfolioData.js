export const projects = [
  {
    id: 1,
    title: "AI for Organisation (Enterprise LLM Infrastructure)",
    description: "Architected a role-based access control system, organization-specific fine-tuning pipeline, and management analytics dashboard. Designed a structured intermediate AI layer between employees and LLMs to ensure data privacy and organizational context.",
    image: "https://placehold.co/600x400/1d1d1f/ffffff?text=Enterprise+LLMs",
    link: "#",
    category: "ai",
    techStack: ["LLMs", "Fine-Tuning", "RBAC", "Data Privacy"]
  },
  {
    id: 2,
    title: "AI-Powered Learning & Career Platform (SkillGap AI)",
    description: "Full-stack LMS built with React, Node.js, and GPT API. Automates skill gap analysis and resume evaluation to generate personalized career roadmaps. Also includes mentorship and workshop management modules.",
    image: "https://placehold.co/600x400/0066cc/ffffff?text=SkillGap+AI",
    link: "#",
    category: "engineering",
    techStack: ["React", "Node.js", "GPT API", "LMS"]
  },
  {
    id: 3,
    title: "Low-Code / No-Code App Development Platform",
    description: "Web-based IDE that transforms natural language prompts into deployable applications using OpenAI GPT and Codex APIs.",
    image: "https://placehold.co/600x400/333333/ffffff?text=No-Code+Platform",
    link: "#",
    category: "engineering",
    techStack: ["OpenAI GPT", "Codex API", "Web IDE"]
  },
  {
    id: 4,
    title: "Agentic Research Assistant (Multi-Agent Pipeline)",
    description: "Multi-agent system (built with Google ADK) with persistent long-term memory, state management, and tool use for multi-turn, long-horizon task completion.",
    image: "https://placehold.co/600x400/1d1d1f/ffffff?text=Agentic+Research",
    link: "https://github.com/sandeepvijayarao09/agentic-research-assistant",
    category: "ai",
    techStack: ["Google ADK", "Multi-Agent System", "State Management"]
  },
  {
    id: 5,
    title: "Distributed Transformer Training Benchmark",
    description: "Implemented distributed training experiments for transformer models using PyTorch DDP across multi-GPU workloads. Evaluated scaling efficiency, communication overhead, and GPU utilization.",
    image: "https://placehold.co/600x400/333333/ffffff?text=Distributed+Training",
    link: "#",
    category: "engineering",
    techStack: ["PyTorch DDP", "Transformers", "Multi-GPU", "Distributed Training"]
  },
  {
    id: 6,
    title: "Hospital Management System",
    description: "Full-stack web application streamlining patient records, appointments, and billing operations.",
    image: "https://placehold.co/600x400/0066cc/ffffff?text=Hospital+System",
    link: "https://github.com/sandeepvijayarao09/Hospital-Management-System-Updated",
    category: "engineering",
    techStack: ["React", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS"]
  },
  {
    id: 7,
    title: "LLM Evaluation & Fine-Tuning Framework",
    description: "Evaluation harness benchmarking instruction-following, factual accuracy, and hallucination rates across open-source LLMs (LLaMA, Mistral). Fine-tuned models using DPO and RLHF-inspired pipelines, and designed RAG pipelines evaluated with MRR/NDCG metrics.",
    image: "https://placehold.co/600x400/1d1d1f/ffffff?text=LLM+Evaluation",
    link: "https://github.com/sandeepvijayarao09/llm-eval-finetuning",
    category: "ai",
    techStack: ["LLaMA", "Mistral", "DPO", "RLHF", "RAG"]
  },
  {
    id: 8,
    title: "Neural Studio (Multimodal AI Productivity Suite)",
    description: "Dual-mode multimodal AI system (Gemini Pro + Flash) with a RAG-based research suite for automated literature search, synchronized multi-user brainstorming, and content creation workflows.",
    image: "https://placehold.co/600x400/1d1d1f/ffffff?text=Neural+Studio",
    link: "https://github.com/sandeepvijayarao09/Gemini-Devpost-Hackathon-Feb09",
    category: "ai",
    techStack: ["Gemini Pro", "Gemini Flash", "RAG", "Vector Embeddings"]
  },
  {
    id: 9,
    title: "Real-Time Human Pose Estimation System",
    description: "System utilizing MediaPipe, OpenCV, TensorFlow, CNN/RNN, and Django for real-time tracking at 30 FPS. Published findings at IEEE AISP 2024.",
    image: "https://placehold.co/600x400/1d1d1f/ffffff?text=Pose+Estimation",
    link: "https://github.com/sandeepvijayarao09/realtime-pose-estimation",
    category: "ai",
    techStack: ["MediaPipe", "OpenCV", "TensorFlow", "CNN", "RNN", "Django"]
  },
  {
    id: 10,
    title: "Real-Time Lane Detection for Autonomous Driving",
    description: "Optimized deep learning pipeline using PyTorch, OpenCV, and CNN segmentation techniques for robust real-time lane detection across varied environmental conditions.",
    image: "https://placehold.co/600x400/1d1d1f/ffffff?text=Lane+Detection",
    link: "https://github.com/sandeepvijayarao09/realtime-lane-detection",
    category: "ai",
    techStack: ["PyTorch", "OpenCV", "CNN Segmentation"]
  },
  {
    id: 11,
    title: "Speech & Emotion Analysis using NLP & CNN",
    description: "NLP-CNN pipeline for e-commerce product reviews achieving high transcription accuracy and improved emotion detection from vocal audio. Designed a real-time visualization system to map emotional trajectories.",
    image: "https://placehold.co/600x400/1d1d1f/ffffff?text=Speech+%26+Emotion",
    link: "#",
    category: "ai",
    techStack: ["NLP", "CNN", "Data Visualization"]
  },
  {
    id: 12,
    title: "Vision-Language Grounding with CLIP & Diffusion Models",
    description: "Experimental pipeline integrating CLIP-based zero-shot image-text grounding and prompt-conditioned image generation (Stable Diffusion). Includes visualization of cross-modal attention maps and embedding spaces.",
    image: "https://placehold.co/600x400/1d1d1f/ffffff?text=Vision-Language",
    link: "https://github.com/sandeepvijayarao09/vision-language-grounding",
    category: "ai",
    techStack: ["CLIP", "Stable Diffusion", "Vision-Language Models"]
  }
];

export const experience = [
  {
    id: 1,
    role: "AI Developer",
    company: "Trominosoft, Hyderabad, India",
    dates: "Feb 2025 - Aug 2025",
    description: "Engineered enterprise-grade AI workflows on Microsoft Azure and Azure AI Foundry to perform RAG Based LLM. Developed a full-stack Asset Management Website, front-end with Angular and database with Docker. Integrated a chatbot service using the LLAMA API.",
    techStack: ["Azure", "RAG", "LLM", "Angular", "Docker", "LLAMA API"]
  },
  {
    id: 2,
    role: "Artificial Intelligence Intern",
    company: "Infosys Springboard, India",
    dates: "Sep 2024 - Dec 2024",
    description: "Designed and developed an interactive AI platform integrating Streamlit, BLIP, and ChatGPT-3.5 to deliver key features including image captioning, story generation, and Google GTTS audio narration.",
    techStack: ["Streamlit", "BLIP", "ChatGPT-3.5", "Google GTTS"]
  },
  {
    id: 3,
    role: "Software Engineering Intern",
    company: "Global Techno Solutions, India",
    dates: "Jan 2024 - Apr 2024",
    description: "Refactored legacy codebase and implemented automated tests, improving reliability and maintainability by 20%. Optimized SQL queries and caching mechanism, enhancing performance and reducing latency.",
    techStack: ["Automated Testing", "SQL", "Caching"]
  }
];

export const technicalSkills = {
  programmingLanguages: ["Python", "Java", "C/C++", "JavaScript", "TypeScript", "Kotlin", "SQL", "HTML/CSS"],
  frameworksAndTools: ["React", "Django REST", "Node.js", "Streamlit", "Azure AI", "MongoDB", "PostgreSQL", "Git"],
  aiml: ["TensorFlow", "PyTorch", "scikit-learn", "Keras", "Hugging Face", "Transformers (BERT, GPT, LLaMA)", "CNN", "RNN", "LSTM", "YOLO", "RAFT", "OpenCV", "MediaPipe", "GPT APIs", "LangChain"]
};

export const publications = [
  {
    id: 1,
    title: "Real-Time Human Pose Estimation Using MediaPipe and Artificial Intelligence Applications in Health and Fitness",
    venue: "IEEE International Conference on Artificial Intelligence and Signal Processing (AISP 2024)",
    date: "2024",
    link: "#",
    type: "paper"
  }
];

export const education = [
  {
    id: 1,
    degree: "Master of Computer Science",
    school: "Northeastern University, San Jose, California, USA",
    year: "Sep 2025 - May 2027",
    gpa: "CGPA: 3.67"
  },
  {
    id: 2,
    degree: "B.E. in Computer Science and Engineering (Honors: Artificial Intelligence)",
    school: "R.M.K. Engineering College, Chennai, India",
    year: "Oct 2021 - May 2025",
    gpa: "CGPA: 3.75",
    courses: [
      "Artificial Intelligence",
      "Machine Learning",
      "Deep Learning Techniques",
      "Natural Language Processing",
      "Computational Intelligence",
      "Knowledge Engineering",
      "Data Analytics",
      "Probability & Statistics"
    ]
  }
];

export const press = [];

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/sandeepvijayarao",
  github: "https://github.com/sandeepvijayarao09",
  email: "mailto:sandeepvijayarao07@gmail.com",
  phone: "tel:+14082106329"
};

export const now = {
  focus: "AI Research & Building the Intelligent Second Brain",
  currentProject: "Neural Studio",
  reading: "Zero to One by Peter Thiel",
  academics: "Master of Computer Science, Northeastern University",
  location: "San Francisco, CA",
  updated: "Mar 2026"
};
