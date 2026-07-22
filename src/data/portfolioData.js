export const profile = {
  name: 'Bhumika Gadade',
  email: 'gadadebhumika@gmail.com',
  roles: [
    'Machine Learning',
    'Deep Learning',
    'Computer Vision',
    'NLP',
    'Generative AI',
    'LLMs',
    'Python Development'
  ],
  tagline: 'AI Engineer · Machine Learning Engineer · Data Scientist',
  about:
    "Passionate AI and Machine Learning enthusiast with strong foundations in data science, deep learning and artificial intelligence. I enjoy solving real-world problems using data-driven approaches and building intelligent systems that create measurable impact — from research prototypes to production-ready models.",
  resumeUrl: '/resume.pdf',
  socials: {
    github: 'https://github.com/',
    linkedin: 'https://linkedin.com/in/',
    email: 'mailto:gadadebhumika@gmail.com'
  }
};

export const stats = [
  { label: 'Projects Shipped', value: 12, suffix: '+' },
  { label: 'Internships', value: 2, suffix: '' },
  { label: 'Hackathons', value: 6, suffix: '+' },
  { label: 'Certifications', value: 8, suffix: '+' }
];

export const skillGroups = [
  {
    title: 'Programming',
    skills: ['Python', 'SQL', 'Java', 'C++', 'JavaScript']
  },
  {
    title: 'ML / DL Libraries',
    skills: ['NumPy', 'Pandas', 'Matplotlib', 'Scikit-learn', 'TensorFlow', 'PyTorch', 'OpenCV', 'Keras', 'NLTK', 'SpaCy', 'Transformers', 'LangChain']
  },
  {
    title: 'Frameworks',
    skills: ['Flask', 'FastAPI', 'React', 'Node.js']
  },
  {
    title: 'Databases',
    skills: ['MySQL', 'MongoDB', 'PostgreSQL']
  },
  {
    title: 'Cloud',
    skills: ['AWS', 'Azure', 'Google Cloud']
  },
  {
    title: 'Developer Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Jupyter Notebook', 'Docker']
  }
];

export const projects = [
  {
    id: 'resume-screening',
    title: 'AI Resume Screening System',
    description:
      'An end-to-end recruitment assistant that parses resumes, extracts skills and ranks candidates against a job description using contextual embeddings.',
    features: ['Resume parsing', 'Candidate ranking', 'Skill extraction', 'BERT embeddings'],
    stack: ['Python', 'Flask', 'NLP', 'Scikit-learn'],
    metric: 'Ranks candidates in < 2s',
    github: '#',
    demo: '#'
  },
  {
    id: 'plant-disease',
    title: 'Plant Disease Detection',
    description:
      'A CNN-based image classifier that identifies crop diseases from leaf photographs to support early intervention for farmers.',
    features: ['Deep learning', 'CNN architecture', 'Image classification', 'Transfer learning'],
    stack: ['TensorFlow', 'CNN', 'Keras', 'OpenCV'],
    metric: '95% test accuracy',
    github: '#',
    demo: '#'
  },
  {
    id: 'churn-prediction',
    title: 'Customer Churn Prediction',
    description:
      'A predictive analytics pipeline that flags at-risk customers and surfaces retention insights through an interactive dashboard.',
    features: ['Feature engineering', 'Ensemble modeling', 'Power BI dashboard', 'Model interpretability'],
    stack: ['Random Forest', 'XGBoost', 'Power BI', 'Python'],
    metric: '0.89 ROC-AUC',
    github: '#',
    demo: '#'
  },
  {
    id: 'medical-assistant',
    title: 'AI Medical Diagnosis Assistant',
    description:
      'A retrieval-augmented LLM assistant that grounds clinical Q&A in verified medical literature via a vector knowledge base.',
    features: ['Healthcare AI', 'RAG pipeline', 'Vector database', 'LLM orchestration'],
    stack: ['LangChain', 'LLM', 'RAG', 'Vector DB'],
    metric: 'Cites sources per answer',
    github: '#',
    demo: '#'
  },
  {
    id: 'fake-news',
    title: 'Fake News Detection using NLP',
    description:
      'A transformer-based classifier that scores news article credibility using linguistic and sentiment signals.',
    features: ['Transformer fine-tuning', 'Sentiment analysis', 'Text preprocessing', 'Explainability'],
    stack: ['Transformers', 'BERT', 'NLP', 'PyTorch'],
    metric: '92% F1-score',
    github: '#',
    demo: '#'
  },
  {
    id: 'stock-lstm',
    title: 'Stock Market Prediction using LSTM',
    description:
      'A time-series forecasting model that learns temporal patterns in market data to project short-term price movement.',
    features: ['LSTM architecture', 'Time-series forecasting', 'Feature scaling', 'Backtesting'],
    stack: ['TensorFlow', 'LSTM', 'Time Series'],
    metric: 'Backtested on 5yr data',
    github: '#',
    demo: '#'
  }
];

export const experience = [
  {
    role: 'Machine Learning Intern',
    org: 'Placeholder Company',
    period: '2025',
    points: [
      'Worked on predictive analytics for a business-critical dataset',
      'Built and validated ML models across multiple algorithms',
      'Performed feature engineering to improve signal quality',
      'Improved model accuracy through systematic experimentation'
    ]
  },
  {
    role: 'Freelance AI Developer',
    org: 'Independent',
    period: '2024 — Present',
    points: [
      'Created custom AI solutions for small business clients',
      'Developed automation tools to streamline manual workflows',
      'Integrated LLM APIs into client-facing products'
    ]
  }
];

export const achievements = [
  { label: 'Hackathon Finals', value: 4, suffix: '+', desc: 'National-level hackathons reached finals' },
  { label: 'Kaggle Notebooks', value: 15, suffix: '+', desc: 'Public notebooks & competition entries' },
  { label: 'Research Reads', value: 30, suffix: '+', desc: 'Papers studied & summarized' },
  { label: 'AI Competitions', value: 5, suffix: '', desc: 'Competitive AI/ML challenges entered' }
];

export const education = {
  degree: "Bachelor's Degree in Artificial Intelligence & Computer Science",
  university: 'University Name Placeholder',
  period: '2022 — 2026',
  cgpa: '8.7 / 10 (Placeholder)',
  coursework: ['Machine Learning', 'Deep Learning', 'Data Structures & Algorithms', 'Probability & Statistics', 'NLP', 'Computer Vision']
};

export const certificates = [
  { name: 'Google Data Analytics', issuer: 'Google', year: '2024' },
  { name: 'IBM AI Engineering', issuer: 'IBM', year: '2024' },
  { name: 'Deep Learning Specialization', issuer: 'DeepLearning.AI', year: '2025' },
  { name: 'AWS Machine Learning', issuer: 'Amazon Web Services', year: '2025' },
  { name: 'Azure AI Fundamentals', issuer: 'Microsoft', year: '2024' },
  { name: 'TensorFlow Developer Certificate', issuer: 'TensorFlow', year: '2025' }
];

export const researchInterests = [
  { title: 'Large Language Models', desc: 'Efficient fine-tuning, retrieval augmentation and evaluation of LLM systems.' },
  { title: 'Computer Vision', desc: 'Convolutional and transformer-based architectures for visual understanding.' },
  { title: 'Natural Language Processing', desc: 'Semantic representation, information extraction and sentiment modeling.' },
  { title: 'Responsible AI', desc: 'Fairness, interpretability and safety in deployed machine learning systems.' },
  { title: 'Reinforcement Learning', desc: 'Sequential decision-making and reward-driven policy optimization.' },
  { title: 'Generative AI', desc: 'Diffusion models, generative adversarial networks and synthetic data.' }
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' }
];
