const worksObj = [
  {
    slug: 'dsa-learning-platform',
    title: 'DSA Learning Platform',
    time: 2024,
    Subtitle: 'Interactive EdTech Platform',
    bg: 'bg-[#4f46e5]',
    Link: '#',
    color: 'text-[#4f46e5]',
    description: 'An interactive platform for mastering Data Structures and Algorithms using live code execution, 2D/3D visualizations, and gamified learning.',
    techStack: ['React', 'Three.js', 'D3.js', 'Node.js', 'Docker'],
    role: 'Designed and built the end-to-end interactive learning system.',
    keyResponsibilities: [
      'Developed multi-language code execution with sandboxing and timeout protection',
      'Built 2D and 3D algorithm visualizations using Three.js and D3.js',
      'Implemented gamification with XP, levels, achievements, and leaderboards',
      'Integrated an AI chatbot for concept clarification and contextual help'
    ]
  },
  {
    slug: 'project-management-system',
    title: 'Project Management System',
    time: 2024,
    Subtitle: 'Multi-Tenant SaaS Platform',
    bg: 'bg-[#0ea5e9]',
    Link: '#',
    color: 'text-[#0ea5e9]',
    description: 'A multi-tenant project and task management system with real-time search, analytics, and GraphQL APIs.',
    techStack: ['Django', 'GraphQL', 'React', 'TypeScript', 'PostgreSQL'],
    role: 'Implemented backend architecture and frontend data workflows.',
    keyResponsibilities: [
      'Designed multi-tenant GraphQL APIs for projects and tasks',
      'Built real-time search with debounced queries',
      'Developed analytics dashboards for project tracking',
      'Implemented responsive UI with dark mode support'
    ]
  },
  {
    slug: 'player-ball-interaction-analysis',
    title: 'Player–Ball Interaction Analysis',
    time: 2024,
    Subtitle: 'Computer Vision & Sports Analytics',
    bg: 'bg-[#22c55e]',
    Link: '#',
    color: 'text-[#22c55e]',
    description: 'A computer vision pipeline that analyzes player touches, ball rotation, and movement velocity from sports videos.',
    techStack: ['Python', 'OpenCV', 'Pose Estimation', 'NumPy'],
    role: 'Designed the complete computer vision and analytics pipeline.',
    keyResponsibilities: [
      'Implemented pose-based touch detection for left and right leg classification',
      'Analyzed ball spin direction using feature-flow tracking',
      'Estimated player velocity from keypoint trajectories',
      'Generated annotated videos with real-time overlays'
    ]
  },
  {
    slug: 'pdf-chat-application',
    title: 'PDF Chat Application',
    time: 2024,
    Subtitle: 'RAG-based AI Tool',
    bg: 'bg-[#f59e0b]',
    Link: '#',
    color: 'text-[#f59e0b]',
    description: 'A RAG-powered chat application that answers questions strictly based on uploaded PDF documents.',
    techStack: ['Streamlit', 'Python', 'PyPDF2', 'Groq LLM', 'RAG'],
    role: 'Built the retrieval and response pipeline.',
    keyResponsibilities: [
      'Implemented PDF text extraction and preprocessing',
      'Designed relevance checking for document-grounded responses',
      'Integrated Groq LLM for context-aware answering',
      'Built a clean Streamlit-based chat interface'
    ]
  },
  {
    slug: 'stock-market-chatbot',
    title: 'Stock Market Chatbot',
    time: 2024,
    Subtitle: 'Multi-Agent Financial AI',
    bg: 'bg-[#ef4444]',
    Link: '#',
    color: 'text-[#ef4444]',
    description: 'A multi-agent AI system delivering real-time stock prices, historical analysis, and predictive insights.',
    techStack: ['Python', 'Streamlit', 'PostgreSQL', 'yfinance', 'Docker'],
    role: 'Designed the agent architecture and tool orchestration.',
    keyResponsibilities: [
      'Implemented agents for memory, reasoning, and market data retrieval',
      'Integrated MCP tools for dynamic stock queries',
      'Built regression-based price prediction models',
      'Persisted chat history using Dockerized PostgreSQL'
    ]
  },
  {
    slug: 'vidyou-educational-platform',
    title: 'Vidyou',
    time: 2024,
    Subtitle: 'AI-Moderated Social Platform',
    bg: 'bg-[#8b5cf6]',
    Link: '#',
    color: 'text-[#8b5cf6]',
    description: 'An AI-powered educational social platform ensuring content quality through intelligent moderation.',
    techStack: ['Next.js', 'Node.js', 'MongoDB', 'Docker', 'GitHub Actions'],
    role: 'Led full-stack development and DevOps automation.',
    keyResponsibilities: [
      'Built content creation and engagement features',
      'Implemented NLP-based content verification pipelines',
      'Automated CI/CD with Docker and GitHub Actions',
      'Integrated monitoring and logging for production readiness'
    ]
  },
  {
    slug: 'pneumonia-detection-system',
    title: 'Pneumonia Detection System',
    time: 2023,
    Subtitle: 'Medical AI Application',
    bg: 'bg-[#14b8a6]',
    Link: '#',
    color: 'text-[#14b8a6]',
    description: 'A deep learning system that detects pneumonia from chest X-ray images in real time.',
    techStack: ['TensorFlow', 'Keras', 'Flask', 'HTML', 'CSS'],
    role: 'Developed the ML model and inference pipeline.',
    keyResponsibilities: [
      'Trained CNN models for binary X-ray classification',
      'Applied VGG16 preprocessing for image normalization',
      'Integrated model inference into a Flask backend',
      'Built a responsive UI for medical professionals'
    ]
  },
  {
    slug: 'agentic-ai-system',
    title: 'Agentic AI System',
    time: 2024,
    Subtitle: 'Multi-Agent Intelligence Framework',
    bg: 'bg-[#64748b]',
    Link: '#',
    color: 'text-[#64748b]',
    description: 'A modular multi-agent AI framework supporting reasoning, memory, and retrieval workflows.',
    techStack: ['Python', 'Vector Search', 'TF-IDF', 'RAG'],
    role: 'Designed agent responsibilities and coordination logic.',
    keyResponsibilities: [
      'Implemented reasoning and knowledge agents',
      'Built vector-based memory recall mechanisms',
      'Integrated document-grounded retrieval pipelines',
      'Enabled multi-agent collaboration for complex queries'
    ]
  },
  {
    slug: 'optiquery',
    title: 'OptiQuery',
    time: 2023,
    Subtitle: 'Database Query Optimizer',
    bg: 'bg-[#fb7185]',
    Link: '#',
    color: 'text-[#fb7185]',
    description: 'A SQL query optimizer that transforms queries into efficient relational algebra execution plans.',
    techStack: ['SQL', 'Relational Algebra', 'JavaScript', 'Data Structures'],
    role: 'Implemented parsing, optimization, and visualization logic.',
    keyResponsibilities: [
      'Parsed SQL queries into relational algebra trees',
      'Applied predicate pushdown and join reordering',
      'Estimated execution costs before and after optimization',
      'Visualized query plans and performance metrics'
    ]
  },
  {
    slug: 'sonnet-music-recommendation',
    title: 'Sonnet',
    time: 2024,
    Subtitle: 'LLM-Based Recommendation Engine',
    bg: 'bg-[#f97316]',
    Link: '#',
    color: 'text-[#f97316]',
    description: 'A lyric-based song recommendation chatbot powered by vector similarity search and LLMs.',
    techStack: ['LangChain', 'FAISS', 'Python', 'Streamlit'],
    role: 'Built the recommendation and similarity search pipeline.',
    keyResponsibilities: [
      'Embedded large lyric datasets into FAISS vector stores',
      'Implemented semantic similarity search',
      'Integrated LLM-based intent understanding',
      'Optimized response latency to under 3 seconds'
    ]
  },
  {
    slug: 'quillgpt',
    title: 'QuillGPT',
    time: 2024,
    Subtitle: 'Custom GPT Training Framework',
    bg: 'bg-[#06b6d4]',
    Link: '#',
    color: 'text-[#06b6d4]',
    description: 'A from-scratch GPT framework supporting training, inference, and interactive experimentation.',
    techStack: ['PyTorch', 'FastAPI', 'Docker', 'Streamlit'],
    role: 'Implemented model architecture and deployment pipeline.',
    keyResponsibilities: [
      'Built GPT decoder blocks with multi-head attention',
      'Designed custom tokenization and serialization',
      'Deployed inference APIs using FastAPI',
      'Created an interactive Streamlit playground'
    ]
  },
  {
    slug: 'space-mission-autonomy-system',
    title: 'SMAS',
    time: 2024,
    Subtitle: 'Autonomous Space AI System',
    bg: 'bg-[#1e293b]',
    Link: '#',
    color: 'text-[#1e293b]',
    description: 'A physics-informed AI system for fully autonomous deep-space navigation and mission planning.',
    techStack: ['Reinforcement Learning', 'Orbital Mechanics', 'React', 'Three.js', 'Python'],
    role: 'Designed autonomous decision-making and simulation architecture.',
    keyResponsibilities: [
      'Integrated physics-informed RL with differentiable orbital dynamics',
      'Simulated spacecraft motion using JPL Horizons and numerical integrators',
      'Implemented hierarchical planners for thrust and gravity assists',
      'Built real-time 3D mission visualization using Three.js'
    ]
  },
  {
    slug: 'medical-3d-learning-platform',
    title: '3D Medical Learning Ecosystem',
    time: 2024,
    Subtitle: 'Medical EdTech Platform',
    bg: 'bg-[#10b981]',
    Link: '#',
    color: 'text-[#10b981]',
    description: 'A comprehensive 3D medical education platform with simulations, quizzes, and offline learning.',
    techStack: ['React', 'Three.js', 'FastAPI', 'PostgreSQL', 'PWA'],
    role: 'Architected the full learning and visualization system.',
    keyResponsibilities: [
      'Built interactive 3D anatomy and physiology simulations',
      'Implemented adaptive testing and spaced revision logic',
      'Designed offline-first PWA architecture',
      'Structured verified MBBS and BAMS medical content'
    ]
  }
];

export { worksObj };
export default worksObj;


