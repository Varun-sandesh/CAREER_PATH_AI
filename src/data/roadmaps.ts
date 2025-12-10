export interface RoadmapStep {
  id: string;
  title: string;
  description: string;
  duration: string;
  completed: boolean;
  resources: string[];
  skills: string[];
}

export const roadmapData: Record<string, RoadmapStep[]> = {
  'software-engineer': [
    {
      id: 'programming-basics',
      title: 'Programming Fundamentals',
      description: 'Learn core programming concepts and logic',
      duration: '3-4 weeks',
      completed: false,
      resources: ['freeCodeCamp', 'Codecademy', 'Programming Basics Course'],
      skills: ['Variables', 'Data Types', 'Control Flow', 'Functions']
    },
    {
      id: 'javascript',
      title: 'JavaScript Mastery',
      description: 'Deep dive into JavaScript and ES6+ features',
      duration: '4-6 weeks',
      completed: false,
      resources: ['JavaScript.info', 'Eloquent JavaScript', 'MDN Web Docs'],
      skills: ['ES6+', 'Async/Await', 'Promises', 'DOM Manipulation']
    },
    {
      id: 'html-css',
      title: 'HTML & CSS',
      description: 'Build beautiful and responsive web interfaces',
      duration: '3-4 weeks',
      completed: false,
      resources: ['HTML/CSS Course', 'Flexbox Guide', 'CSS Grid'],
      skills: ['Semantic HTML', 'CSS Flexbox', 'CSS Grid', 'Responsive Design']
    },
    {
      id: 'git-github',
      title: 'Version Control with Git',
      description: 'Master Git for code management and collaboration',
      duration: '2-3 weeks',
      completed: false,
      resources: ['Git Documentation', 'GitHub Learning Lab', 'Pro Git Book'],
      skills: ['Git Commands', 'Branching', 'Pull Requests', 'Collaboration']
    },
    {
      id: 'react',
      title: 'React Framework',
      description: 'Build modern UIs with React and its ecosystem',
      duration: '6-8 weeks',
      completed: false,
      resources: ['React Docs', 'React Course', 'React Router'],
      skills: ['Components', 'Hooks', 'State Management', 'React Router']
    },
    {
      id: 'typescript',
      title: 'TypeScript',
      description: 'Add type safety to your JavaScript applications',
      duration: '3-4 weeks',
      completed: false,
      resources: ['TypeScript Handbook', 'TypeScript Course', 'Type Challenges'],
      skills: ['Type Annotations', 'Interfaces', 'Generics', 'Type Guards']
    },
    {
      id: 'nodejs',
      title: 'Node.js & Backend',
      description: 'Build server-side applications with Node.js',
      duration: '5-6 weeks',
      completed: false,
      resources: ['Node.js Docs', 'Express.js', 'Backend Course'],
      skills: ['Node.js Runtime', 'Express Framework', 'Middleware', 'APIs']
    },
    {
      id: 'databases',
      title: 'Databases & SQL',
      description: 'Work with relational and NoSQL databases',
      duration: '4-5 weeks',
      completed: false,
      resources: ['PostgreSQL Tutorial', 'MongoDB University', 'SQL Course'],
      skills: ['SQL Queries', 'Database Design', 'MongoDB', 'ORMs']
    },
    {
      id: 'rest-apis',
      title: 'RESTful API Development',
      description: 'Design and build scalable REST APIs',
      duration: '4-5 weeks',
      completed: false,
      resources: ['REST API Best Practices', 'API Design Course', 'Postman'],
      skills: ['REST Principles', 'API Design', 'Authentication', 'Testing']
    },
    {
      id: 'testing',
      title: 'Testing & Quality Assurance',
      description: 'Write tests to ensure code quality',
      duration: '3-4 weeks',
      completed: false,
      resources: ['Jest Documentation', 'Testing Library', 'TDD Course'],
      skills: ['Unit Testing', 'Integration Testing', 'TDD', 'Jest']
    },
    {
      id: 'docker',
      title: 'Docker & Containerization',
      description: 'Package applications in containers',
      duration: '3-4 weeks',
      completed: false,
      resources: ['Docker Docs', 'Docker Course', 'Containerization Guide'],
      skills: ['Docker Basics', 'Dockerfile', 'Docker Compose', 'Container Management']
    },
    {
      id: 'cloud-deployment',
      title: 'Cloud Deployment',
      description: 'Deploy applications to cloud platforms',
      duration: '4-5 weeks',
      completed: false,
      resources: ['AWS Free Tier', 'Cloud Deployment Course', 'Vercel/Netlify'],
      skills: ['AWS/Azure Basics', 'CI/CD', 'Deployment', 'Cloud Services']
    },
    {
      id: 'system-design',
      title: 'System Design',
      description: 'Learn to design scalable systems',
      duration: '5-6 weeks',
      completed: false,
      resources: ['System Design Primer', 'Designing Data-Intensive Applications'],
      skills: ['Scalability', 'Load Balancing', 'Caching', 'Microservices']
    },
    {
      id: 'portfolio',
      title: 'Portfolio & Projects',
      description: 'Build impressive projects for your portfolio',
      duration: '6-8 weeks',
      completed: false,
      resources: ['GitHub Projects', 'Portfolio Ideas', 'Project Tutorials'],
      skills: ['Project Planning', 'Full-Stack Apps', 'Documentation', 'Deployment']
    },
    {
      id: 'job-prep',
      title: 'Interview Preparation',
      description: 'Prepare for technical interviews',
      duration: '4-6 weeks',
      completed: false,
      resources: ['LeetCode', 'Interview Prep Course', 'Cracking the Coding Interview'],
      skills: ['Data Structures', 'Algorithms', 'Problem Solving', 'System Design']
    }
  ],
  'data-scientist': [
    {
      id: 'python-basics',
      title: 'Python Programming Basics',
      description: 'Master Python fundamentals',
      duration: '3-4 weeks',
      completed: false,
      resources: ['Python.org Tutorial', 'Automate the Boring Stuff', 'Python Course'],
      skills: ['Python Syntax', 'Functions', 'OOP', 'File Handling']
    },
    {
      id: 'numpy-pandas',
      title: 'NumPy & Pandas',
      description: 'Data manipulation and analysis libraries',
      duration: '4-5 weeks',
      completed: false,
      resources: ['NumPy Docs', 'Pandas Tutorial', 'Data Analysis Course'],
      skills: ['NumPy Arrays', 'Pandas DataFrames', 'Data Cleaning', 'Data Transformation']
    },
    {
      id: 'statistics',
      title: 'Statistics Fundamentals',
      description: 'Essential statistical concepts for data science',
      duration: '5-6 weeks',
      completed: false,
      resources: ['Khan Academy Statistics', 'Statistics Course', 'Think Stats'],
      skills: ['Descriptive Statistics', 'Probability', 'Distributions', 'Hypothesis Testing']
    },
    {
      id: 'data-viz',
      title: 'Data Visualization',
      description: 'Create compelling visualizations',
      duration: '3-4 weeks',
      completed: false,
      resources: ['Matplotlib', 'Seaborn', 'Plotly', 'Data Viz Course'],
      skills: ['Matplotlib', 'Seaborn', 'Interactive Plots', 'Storytelling']
    },
    {
      id: 'sql',
      title: 'SQL & Databases',
      description: 'Query and manage databases',
      duration: '4-5 weeks',
      completed: false,
      resources: ['SQL Tutorial', 'Mode SQL', 'PostgreSQL Course'],
      skills: ['SQL Queries', 'Joins', 'Aggregations', 'Database Design']
    },
    {
      id: 'machine-learning-basics',
      title: 'Machine Learning Fundamentals',
      description: 'Introduction to ML algorithms and concepts',
      duration: '6-8 weeks',
      completed: false,
      resources: ['Coursera ML', 'Scikit-learn Docs', 'ML Course'],
      skills: ['Supervised Learning', 'Regression', 'Classification', 'Model Evaluation']
    },
    {
      id: 'advanced-ml',
      title: 'Advanced Machine Learning',
      description: 'Deep dive into complex ML algorithms',
      duration: '6-8 weeks',
      completed: false,
      resources: ['Advanced ML Course', 'ML Papers', 'Kaggle Competitions'],
      skills: ['Ensemble Methods', 'Dimensionality Reduction', 'Feature Engineering', 'Hyperparameter Tuning']
    },
    {
      id: 'deep-learning',
      title: 'Deep Learning & Neural Networks',
      description: 'Build neural networks with TensorFlow/PyTorch',
      duration: '8-10 weeks',
      completed: false,
      resources: ['Deep Learning Specialization', 'TensorFlow', 'PyTorch Tutorial'],
      skills: ['Neural Networks', 'CNNs', 'RNNs', 'Transfer Learning']
    },
    {
      id: 'nlp',
      title: 'Natural Language Processing',
      description: 'Process and analyze text data',
      duration: '5-6 weeks',
      completed: false,
      resources: ['NLP Course', 'spaCy', 'NLTK', 'Transformers'],
      skills: ['Text Processing', 'Sentiment Analysis', 'Named Entity Recognition', 'Transformers']
    },
    {
      id: 'computer-vision',
      title: 'Computer Vision',
      description: 'Work with image and video data',
      duration: '5-6 weeks',
      completed: false,
      resources: ['OpenCV', 'Computer Vision Course', 'Image Processing'],
      skills: ['Image Processing', 'Object Detection', 'Image Classification', 'OpenCV']
    },
    {
      id: 'big-data',
      title: 'Big Data Technologies',
      description: 'Handle large-scale data processing',
      duration: '5-6 weeks',
      completed: false,
      resources: ['Spark Tutorial', 'Hadoop', 'Big Data Course'],
      skills: ['Apache Spark', 'Hadoop', 'PySpark', 'Distributed Computing']
    },
    {
      id: 'mlops',
      title: 'MLOps & Deployment',
      description: 'Deploy ML models to production',
      duration: '4-5 weeks',
      completed: false,
      resources: ['MLOps Course', 'Docker', 'Model Deployment Guide'],
      skills: ['Model Deployment', 'Docker', 'API Development', 'Monitoring']
    },
    {
      id: 'projects',
      title: 'Real-World Projects',
      description: 'Build end-to-end data science projects',
      duration: '8-10 weeks',
      completed: false,
      resources: ['Kaggle', 'Project Ideas', 'GitHub Portfolio'],
      skills: ['Project Planning', 'Data Pipeline', 'Model Building', 'Documentation']
    },
    {
      id: 'interview-prep',
      title: 'Interview Preparation',
      description: 'Prepare for data science interviews',
      duration: '4-6 weeks',
      completed: false,
      resources: ['Data Science Interview Guide', 'Statistics Questions', 'ML Interview Prep'],
      skills: ['ML Theory', 'Statistics', 'Coding', 'Case Studies']
    }
  ],
  'product-manager': [
    {
      id: 'pm-fundamentals',
      title: 'Product Management Fundamentals',
      description: 'Learn core PM concepts and responsibilities',
      duration: '3-4 weeks',
      completed: false,
      resources: ['PM Course', 'Product Management Books', 'PM Blogs'],
      skills: ['Product Lifecycle', 'PM Role', 'Stakeholder Management', 'Communication']
    },
    {
      id: 'user-research',
      title: 'User Research Methods',
      description: 'Understand user needs through research',
      duration: '4-5 weeks',
      completed: false,
      resources: ['User Research Guide', 'Interview Techniques', 'Survey Design'],
      skills: ['User Interviews', 'Surveys', 'Personas', 'User Journey Mapping']
    },
    {
      id: 'market-analysis',
      title: 'Market Research & Analysis',
      description: 'Analyze markets and competition',
      duration: '3-4 weeks',
      completed: false,
      resources: ['Market Research Course', 'Competitive Analysis', 'Industry Reports'],
      skills: ['Market Sizing', 'Competitive Analysis', 'TAM/SAM/SOM', 'Industry Trends']
    },
    {
      id: 'product-strategy',
      title: 'Product Strategy & Vision',
      description: 'Define product vision and strategy',
      duration: '4-5 weeks',
      completed: false,
      resources: ['Product Strategy Books', 'Vision Framework', 'Strategy Course'],
      skills: ['Vision Setting', 'Strategy Development', 'OKRs', 'Roadmapping']
    },
    {
      id: 'roadmapping',
      title: 'Product Roadmapping',
      description: 'Create and manage product roadmaps',
      duration: '3-4 weeks',
      completed: false,
      resources: ['Roadmapping Guide', 'Aha!', 'ProductPlan'],
      skills: ['Roadmap Creation', 'Prioritization', 'Timeline Planning', 'Stakeholder Alignment']
    },
    {
      id: 'agile-scrum',
      title: 'Agile & Scrum',
      description: 'Master agile methodologies',
      duration: '3-4 weeks',
      completed: false,
      resources: ['Scrum Guide', 'Agile Course', 'Jira Tutorial'],
      skills: ['Scrum Framework', 'Sprint Planning', 'Backlog Management', 'Agile Ceremonies']
    },
    {
      id: 'requirements',
      title: 'Requirements & User Stories',
      description: 'Write clear requirements and user stories',
      duration: '3-4 weeks',
      completed: false,
      resources: ['User Story Guide', 'Requirements Writing', 'Acceptance Criteria'],
      skills: ['User Stories', 'Acceptance Criteria', 'Requirements Documentation', 'Story Mapping']
    },
    {
      id: 'ux-design',
      title: 'UX Design Basics',
      description: 'Understand UX principles and design',
      duration: '4-5 weeks',
      completed: false,
      resources: ['UX Design Course', 'Figma', 'Design Thinking'],
      skills: ['UX Principles', 'Wireframing', 'Prototyping', 'Design Thinking']
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics & Metrics',
      description: 'Track and analyze product metrics',
      duration: '4-5 weeks',
      completed: false,
      resources: ['Google Analytics', 'Mixpanel', 'Product Analytics Course'],
      skills: ['Analytics Tools', 'KPIs', 'A/B Testing', 'Data Analysis']
    },
    {
      id: 'technical-skills',
      title: 'Technical Understanding',
      description: 'Build technical literacy for PM role',
      duration: '5-6 weeks',
      completed: false,
      resources: ['SQL Course', 'API Basics', 'Tech for PMs'],
      skills: ['SQL', 'APIs', 'System Architecture', 'Technical Communication']
    },
    {
      id: 'go-to-market',
      title: 'Go-to-Market Strategy',
      description: 'Plan and execute product launches',
      duration: '4-5 weeks',
      completed: false,
      resources: ['GTM Strategy Guide', 'Product Launch', 'Marketing Fundamentals'],
      skills: ['Launch Planning', 'Marketing Strategy', 'Positioning', 'Messaging']
    },
    {
      id: 'stakeholder-mgmt',
      title: 'Stakeholder Management',
      description: 'Manage relationships with stakeholders',
      duration: '3-4 weeks',
      completed: false,
      resources: ['Stakeholder Management Course', 'Communication Skills', 'Influence Without Authority'],
      skills: ['Stakeholder Communication', 'Conflict Resolution', 'Influence', 'Negotiation']
    },
    {
      id: 'pricing-business',
      title: 'Pricing & Business Models',
      description: 'Understand pricing strategies and business models',
      duration: '3-4 weeks',
      completed: false,
      resources: ['Pricing Strategy', 'Business Models', 'Revenue Models'],
      skills: ['Pricing Strategy', 'Business Models', 'Revenue Analysis', 'Unit Economics']
    },
    {
      id: 'case-studies',
      title: 'PM Case Studies & Practice',
      description: 'Practice with real-world PM scenarios',
      duration: '4-6 weeks',
      completed: false,
      resources: ['PM Interview Guide', 'Case Studies', 'Product Teardowns'],
      skills: ['Product Sense', 'Estimation', 'Root Cause Analysis', 'Product Critique']
    },
    {
      id: 'interview-prep',
      title: 'PM Interview Preparation',
      description: 'Prepare for PM interviews',
      duration: '4-6 weeks',
      completed: false,
      resources: ['Cracking the PM Interview', 'Exponent', 'PM Interview Prep'],
      skills: ['Product Design', 'Estimation', 'Behavioral', 'Technical']
    }
  ],
  'ux-designer': [
    {
      id: 'design-principles',
      title: 'Design Fundamentals',
      description: 'Learn core design principles and theory',
      duration: '3-4 weeks',
      completed: false,
      resources: ['Design Principles Course', 'The Design of Everyday Things', 'Design Theory'],
      skills: ['Visual Hierarchy', 'Composition', 'Balance', 'Contrast']
    },
    {
      id: 'color-typography',
      title: 'Color Theory & Typography',
      description: 'Master color and typography',
      duration: '3-4 weeks',
      completed: false,
      resources: ['Color Theory Course', 'Typography Guide', 'Practical Typography'],
      skills: ['Color Harmony', 'Color Psychology', 'Font Pairing', 'Typography Scale']
    },
    {
      id: 'figma',
      title: 'Figma Design Tool',
      description: 'Master Figma for UI design',
      duration: '4-5 weeks',
      completed: false,
      resources: ['Figma Tutorial', 'Figma Community', 'Design Systems in Figma'],
      skills: ['Figma Basics', 'Components', 'Auto Layout', 'Prototyping']
    },
    {
      id: 'ui-design',
      title: 'UI Design',
      description: 'Create beautiful user interfaces',
      duration: '5-6 weeks',
      completed: false,
      resources: ['UI Design Course', 'Refactoring UI', 'UI Patterns'],
      skills: ['UI Components', 'Layout Design', 'Visual Design', 'Consistency']
    },
    {
      id: 'ux-research',
      title: 'UX Research Methods',
      description: 'Conduct user research',
      duration: '4-5 weeks',
      completed: false,
      resources: ['UX Research Guide', 'Just Enough Research', 'Research Methods'],
      skills: ['User Interviews', 'Usability Testing', 'Surveys', 'Research Analysis']
    },
    {
      id: 'information-architecture',
      title: 'Information Architecture',
      description: 'Organize and structure content',
      duration: '3-4 weeks',
      completed: false,
      resources: ['IA Guide', 'Information Architecture', 'Site Structure'],
      skills: ['Site Mapping', 'Navigation Design', 'Content Organization', 'Card Sorting']
    },
    {
      id: 'wireframing',
      title: 'Wireframing',
      description: 'Create low-fidelity wireframes',
      duration: '3-4 weeks',
      completed: false,
      resources: ['Wireframing Guide', 'Balsamiq', 'Wireframe Examples'],
      skills: ['Low-Fidelity Wireframes', 'User Flows', 'Rapid Prototyping', 'Iteration']
    },
    {
      id: 'prototyping',
      title: 'Interactive Prototyping',
      description: 'Build interactive prototypes',
      duration: '4-5 weeks',
      completed: false,
      resources: ['Prototyping Tutorial', 'Figma Prototyping', 'Framer'],
      skills: ['High-Fidelity Prototypes', 'Interactions', 'Animations', 'User Testing']
    },
    {
      id: 'design-systems',
      title: 'Design Systems',
      description: 'Create and maintain design systems',
      duration: '4-5 weeks',
      completed: false,
      resources: ['Design Systems Guide', 'Material Design', 'Component Libraries'],
      skills: ['Component Libraries', 'Design Tokens', 'Documentation', 'Consistency']
    },
    {
      id: 'accessibility',
      title: 'Accessibility (A11y)',
      description: 'Design for all users',
      duration: '3-4 weeks',
      completed: false,
      resources: ['WCAG Guidelines', 'A11y Course', 'Inclusive Design'],
      skills: ['WCAG Compliance', 'Screen Readers', 'Color Contrast', 'Inclusive Design']
    },
    {
      id: 'mobile-design',
      title: 'Mobile Design',
      description: 'Design for mobile platforms',
      duration: '4-5 weeks',
      completed: false,
      resources: ['iOS Guidelines', 'Material Design', 'Mobile UX Course'],
      skills: ['iOS Design', 'Android Design', 'Mobile Patterns', 'Touch Interactions']
    },
    {
      id: 'usability-testing',
      title: 'Usability Testing',
      description: 'Test and validate designs with users',
      duration: '3-4 weeks',
      completed: false,
      resources: ['Usability Testing Guide', 'UserTesting.com', 'Testing Methods'],
      skills: ['Test Planning', 'Moderation', 'Analysis', 'Iteration']
    },
    {
      id: 'portfolio',
      title: 'Portfolio Development',
      description: 'Build a compelling UX portfolio',
      duration: '6-8 weeks',
      completed: false,
      resources: ['Portfolio Examples', 'Case Study Writing', 'Portfolio Sites'],
      skills: ['Case Studies', 'Portfolio Website', 'Storytelling', 'Presentation']
    },
    {
      id: 'collaboration',
      title: 'Design Collaboration',
      description: 'Work effectively with teams',
      duration: '3-4 weeks',
      completed: false,
      resources: ['Design Collaboration', 'Working with Developers', 'Stakeholder Management'],
      skills: ['Developer Handoff', 'Design Critique', 'Feedback', 'Communication']
    },
    {
      id: 'interview-prep',
      title: 'UX Interview Preparation',
      description: 'Prepare for UX design interviews',
      duration: '4-6 weeks',
      completed: false,
      resources: ['UX Interview Guide', 'Design Challenges', 'Portfolio Review'],
      skills: ['Portfolio Presentation', 'Design Challenges', 'Whiteboarding', 'Behavioral']
    }
  ],
  'devops-engineer': [
    {
      id: 'linux-basics',
      title: 'Linux Fundamentals',
      description: 'Master Linux command line and system administration',
      duration: '4-5 weeks',
      completed: false,
      resources: ['Linux Command Line', 'Linux Admin Course', 'Ubuntu Tutorial'],
      skills: ['Command Line', 'File System', 'Permissions', 'Process Management']
    },
    {
      id: 'bash-scripting',
      title: 'Bash Scripting',
      description: 'Automate tasks with shell scripts',
      duration: '3-4 weeks',
      completed: false,
      resources: ['Bash Scripting Guide', 'Shell Programming', 'Automation Scripts'],
      skills: ['Bash Scripts', 'Automation', 'Cron Jobs', 'Text Processing']
    },
    {
      id: 'networking',
      title: 'Networking Fundamentals',
      description: 'Understand networking concepts',
      duration: '4-5 weeks',
      completed: false,
      resources: ['Networking Course', 'TCP/IP Guide', 'Network Protocols'],
      skills: ['TCP/IP', 'DNS', 'Load Balancing', 'Firewalls']
    },
    {
      id: 'version-control',
      title: 'Git & Version Control',
      description: 'Master Git for code management',
      duration: '2-3 weeks',
      completed: false,
      resources: ['Git Documentation', 'Pro Git Book', 'Git Workflows'],
      skills: ['Git Commands', 'Branching', 'Merging', 'Git Workflows']
    },
    {
      id: 'docker',
      title: 'Docker & Containers',
      description: 'Package applications in containers',
      duration: '4-5 weeks',
      completed: false,
      resources: ['Docker Docs', 'Docker Course', 'Container Best Practices'],
      skills: ['Docker Basics', 'Dockerfile', 'Docker Compose', 'Container Registry']
    },
    {
      id: 'kubernetes',
      title: 'Kubernetes Orchestration',
      description: 'Manage containerized applications at scale',
      duration: '6-8 weeks',
      completed: false,
      resources: ['Kubernetes Docs', 'K8s Course', 'CKA Study Guide'],
      skills: ['K8s Architecture', 'Pods', 'Services', 'Deployments']
    },
    {
      id: 'cicd',
      title: 'CI/CD Pipelines',
      description: 'Build automated deployment pipelines',
      duration: '4-5 weeks',
      completed: false,
      resources: ['Jenkins Tutorial', 'GitHub Actions', 'GitLab CI'],
      skills: ['Jenkins', 'GitHub Actions', 'Pipeline Design', 'Automated Testing']
    },
    {
      id: 'cloud-aws',
      title: 'AWS Cloud Platform',
      description: 'Work with Amazon Web Services',
      duration: '6-8 weeks',
      completed: false,
      resources: ['AWS Free Tier', 'AWS Certified Course', 'AWS Documentation'],
      skills: ['EC2', 'S3', 'RDS', 'Lambda']
    },
    {
      id: 'infrastructure-code',
      title: 'Infrastructure as Code',
      description: 'Manage infrastructure with code',
      duration: '5-6 weeks',
      completed: false,
      resources: ['Terraform Tutorial', 'Ansible Guide', 'IaC Best Practices'],
      skills: ['Terraform', 'Ansible', 'CloudFormation', 'Infrastructure Automation']
    },
    {
      id: 'monitoring',
      title: 'Monitoring & Logging',
      description: 'Monitor applications and infrastructure',
      duration: '4-5 weeks',
      completed: false,
      resources: ['Prometheus', 'Grafana', 'ELK Stack'],
      skills: ['Prometheus', 'Grafana', 'Logging', 'Alerting']
    },
    {
      id: 'security',
      title: 'DevOps Security',
      description: 'Implement security best practices',
      duration: '4-5 weeks',
      completed: false,
      resources: ['Security Best Practices', 'DevSecOps', 'Security Tools'],
      skills: ['Security Scanning', 'Secrets Management', 'Compliance', 'Hardening']
    },
    {
      id: 'configuration-mgmt',
      title: 'Configuration Management',
      description: 'Manage system configurations',
      duration: '3-4 weeks',
      completed: false,
      resources: ['Ansible Playbooks', 'Configuration Management', 'Chef/Puppet'],
      skills: ['Ansible', 'Configuration Automation', 'Idempotency', 'State Management']
    },
    {
      id: 'troubleshooting',
      title: 'Troubleshooting & Debugging',
      description: 'Diagnose and fix production issues',
      duration: '4-5 weeks',
      completed: false,
      resources: ['Debugging Guide', 'Production Issues', 'System Analysis'],
      skills: ['Log Analysis', 'Performance Tuning', 'Incident Response', 'Root Cause Analysis']
    },
    {
      id: 'projects',
      title: 'DevOps Projects',
      description: 'Build real-world DevOps projects',
      duration: '6-8 weeks',
      completed: false,
      resources: ['DevOps Project Ideas', 'GitHub Projects', 'Hands-on Labs'],
      skills: ['End-to-End Pipeline', 'Infrastructure Setup', 'Automation', 'Documentation']
    },
    {
      id: 'interview-prep',
      title: 'DevOps Interview Prep',
      description: 'Prepare for DevOps interviews',
      duration: '4-6 weeks',
      completed: false,
      resources: ['DevOps Interview Questions', 'System Design', 'Practical Scenarios'],
      skills: ['Technical Questions', 'System Design', 'Troubleshooting', 'Best Practices']
    }
  ],
  'cybersecurity-specialist': [
    {
      id: 'networking-basics',
      title: 'Networking Fundamentals',
      description: 'Understand network protocols and architecture',
      duration: '4-5 weeks',
      completed: false,
      resources: ['Networking Course', 'TCP/IP Guide', 'Network Protocols'],
      skills: ['TCP/IP', 'OSI Model', 'Network Protocols', 'Subnetting']
    },
    {
      id: 'linux-security',
      title: 'Linux & System Security',
      description: 'Secure Linux systems',
      duration: '4-5 weeks',
      completed: false,
      resources: ['Linux Security', 'Hardening Guide', 'Security Tools'],
      skills: ['Linux Security', 'Hardening', 'Permissions', 'Security Tools']
    },
    {
      id: 'cryptography',
      title: 'Cryptography',
      description: 'Learn encryption and cryptographic methods',
      duration: '5-6 weeks',
      completed: false,
      resources: ['Cryptography Course', 'Applied Cryptography', 'Encryption Methods'],
      skills: ['Encryption', 'Hashing', 'PKI', 'Digital Signatures']
    },
    {
      id: 'security-principles',
      title: 'Security Principles',
      description: 'Core security concepts and principles',
      duration: '3-4 weeks',
      completed: false,
      resources: ['Security Fundamentals', 'CIA Triad', 'Security Principles'],
      skills: ['CIA Triad', 'Defense in Depth', 'Least Privilege', 'Zero Trust']
    },
    {
      id: 'web-security',
      title: 'Web Application Security',
      description: 'Secure web applications',
      duration: '5-6 weeks',
      completed: false,
      resources: ['OWASP Top 10', 'Web Security Course', 'Burp Suite'],
      skills: ['OWASP Top 10', 'SQL Injection', 'XSS', 'CSRF']
    },
    {
      id: 'penetration-testing',
      title: 'Penetration Testing',
      description: 'Ethical hacking and vulnerability assessment',
      duration: '6-8 weeks',
      completed: false,
      resources: ['Kali Linux', 'Metasploit', 'Penetration Testing Guide'],
      skills: ['Reconnaissance', 'Exploitation', 'Post-Exploitation', 'Reporting']
    },
    {
      id: 'security-tools',
      title: 'Security Tools & Techniques',
      description: 'Master security assessment tools',
      duration: '5-6 weeks',
      completed: false,
      resources: ['Nmap', 'Wireshark', 'Security Tools Guide'],
      skills: ['Nmap', 'Wireshark', 'Vulnerability Scanners', 'SIEM Tools']
    },
    {
      id: 'incident-response',
      title: 'Incident Response',
      description: 'Handle security incidents',
      duration: '4-5 weeks',
      completed: false,
      resources: ['Incident Response Guide', 'IR Framework', 'Forensics Basics'],
      skills: ['Incident Handling', 'Forensics', 'Containment', 'Recovery']
    },
    {
      id: 'malware-analysis',
      title: 'Malware Analysis',
      description: 'Analyze and reverse engineer malware',
      duration: '6-7 weeks',
      completed: false,
      resources: ['Malware Analysis Course', 'Reverse Engineering', 'Analysis Tools'],
      skills: ['Static Analysis', 'Dynamic Analysis', 'Reverse Engineering', 'Malware Detection']
    },
    {
      id: 'cloud-security',
      title: 'Cloud Security',
      description: 'Secure cloud environments',
      duration: '5-6 weeks',
      completed: false,
      resources: ['AWS Security', 'Cloud Security Course', 'Azure Security'],
      skills: ['Cloud Security', 'IAM', 'Security Groups', 'Compliance']
    },
    {
      id: 'compliance',
      title: 'Security Compliance',
      description: 'Understand security frameworks and compliance',
      duration: '4-5 weeks',
      completed: false,
      resources: ['ISO 27001', 'NIST Framework', 'GDPR Guide'],
      skills: ['ISO 27001', 'NIST', 'GDPR', 'Compliance Auditing']
    },
    {
      id: 'threat-intelligence',
      title: 'Threat Intelligence',
      description: 'Monitor and analyze threats',
      duration: '4-5 weeks',
      completed: false,
      resources: ['Threat Intelligence Course', 'MITRE ATT&CK', 'Threat Hunting'],
      skills: ['Threat Analysis', 'MITRE ATT&CK', 'Threat Hunting', 'Intelligence Sharing']
    },
    {
      id: 'certifications',
      title: 'Security Certifications',
      description: 'Prepare for security certifications',
      duration: '8-12 weeks',
      completed: false,
      resources: ['CEH Study Guide', 'Security+ Course', 'OSCP Prep'],
      skills: ['CEH', 'Security+', 'OSCP', 'CISSP']
    },
    {
      id: 'practical-labs',
      title: 'Hands-on Labs & CTFs',
      description: 'Practice with real-world scenarios',
      duration: '6-8 weeks',
      completed: false,
      resources: ['HackTheBox', 'TryHackMe', 'VulnHub'],
      skills: ['CTF Challenges', 'Lab Practice', 'Exploit Development', 'Defense Techniques']
    },
    {
      id: 'interview-prep',
      title: 'Security Interview Prep',
      description: 'Prepare for cybersecurity interviews',
      duration: '4-6 weeks',
      completed: false,
      resources: ['Security Interview Guide', 'Technical Questions', 'Scenario Practice'],
      skills: ['Technical Questions', 'Scenarios', 'Best Practices', 'Communication']
    }
  ],
  'digital-marketer': [
    {
      id: 'marketing-basics',
      title: 'Marketing Fundamentals',
      description: 'Core marketing concepts',
      duration: '3-4 weeks',
      completed: false,
      resources: ['Marketing Course', 'Marketing Books', 'Digital Marketing Guide'],
      skills: ['Marketing Mix', 'Target Audience', 'Brand Positioning', 'Marketing Strategy']
    },
    {
      id: 'seo-basics',
      title: 'SEO Fundamentals',
      description: 'Search engine optimization basics',
      duration: '4-5 weeks',
      completed: false,
      resources: ['SEO Course', 'Moz Guide', 'Google SEO Guide'],
      skills: ['On-Page SEO', 'Keywords', 'Link Building', 'Technical SEO']
    },
    {
      id: 'content-marketing',
      title: 'Content Marketing',
      description: 'Create engaging content',
      duration: '4-5 weeks',
      completed: false,
      resources: ['Content Marketing Course', 'Copywriting Guide', 'Content Strategy'],
      skills: ['Content Strategy', 'Copywriting', 'Blog Writing', 'Content Distribution']
    },
    {
      id: 'social-media',
      title: 'Social Media Marketing',
      description: 'Market on social platforms',
      duration: '4-5 weeks',
      completed: false,
      resources: ['Social Media Course', 'Platform Guides', 'Content Creation'],
      skills: ['Facebook Marketing', 'Instagram', 'LinkedIn', 'Twitter']
    },
    {
      id: 'paid-advertising',
      title: 'Paid Advertising',
      description: 'Run effective paid campaigns',
      duration: '5-6 weeks',
      completed: false,
      resources: ['Google Ads', 'Facebook Ads', 'PPC Course'],
      skills: ['Google Ads', 'Facebook Ads', 'Campaign Optimization', 'Budget Management']
    },
    {
      id: 'email-marketing',
      title: 'Email Marketing',
      description: 'Build and nurture email lists',
      duration: '3-4 weeks',
      completed: false,
      resources: ['Email Marketing Course', 'Mailchimp Guide', 'Email Best Practices'],
      skills: ['Email Campaigns', 'Automation', 'Segmentation', 'A/B Testing']
    },
    {
      id: 'analytics',
      title: 'Marketing Analytics',
      description: 'Track and analyze marketing data',
      duration: '4-5 weeks',
      completed: false,
      resources: ['Google Analytics', 'Analytics Course', 'Data Analysis'],
      skills: ['Google Analytics', 'Data Analysis', 'Conversion Tracking', 'Reporting']
    },
    {
      id: 'conversion-optimization',
      title: 'Conversion Rate Optimization',
      description: 'Optimize for conversions',
      duration: '4-5 weeks',
      completed: false,
      resources: ['CRO Course', 'A/B Testing Guide', 'Landing Pages'],
      skills: ['A/B Testing', 'Landing Pages', 'Conversion Funnels', 'Optimization']
    },
    {
      id: 'marketing-automation',
      title: 'Marketing Automation',
      description: 'Automate marketing processes',
      duration: '3-4 weeks',
      completed: false,
      resources: ['HubSpot', 'Marketing Automation Course', 'Workflow Design'],
      skills: ['HubSpot', 'Automation Workflows', 'Lead Nurturing', 'Marketing Tools']
    },
    {
      id: 'branding',
      title: 'Brand Development',
      description: 'Build and manage brands',
      duration: '3-4 weeks',
      completed: false,
      resources: ['Brand Strategy', 'Visual Identity', 'Brand Guidelines'],
      skills: ['Brand Strategy', 'Visual Identity', 'Brand Messaging', 'Brand Guidelines']
    },
    {
      id: 'influencer-marketing',
      title: 'Influencer Marketing',
      description: 'Collaborate with influencers',
      duration: '2-3 weeks',
      completed: false,
      resources: ['Influencer Marketing Guide', 'Outreach Strategies', 'Campaign Management'],
      skills: ['Influencer Outreach', 'Campaign Management', 'Relationship Building', 'ROI Tracking']
    },
    {
      id: 'video-marketing',
      title: 'Video Marketing',
      description: 'Create video content',
      duration: '4-5 weeks',
      completed: false,
      resources: ['YouTube Marketing', 'Video Creation', 'Video SEO'],
      skills: ['Video Production', 'YouTube', 'Video SEO', 'Video Ads']
    },
    {
      id: 'campaigns',
      title: 'Campaign Management',
      description: 'Plan and execute marketing campaigns',
      duration: '5-6 weeks',
      completed: false,
      resources: ['Campaign Planning', 'Multi-Channel Marketing', 'Project Management'],
      skills: ['Campaign Planning', 'Multi-Channel', 'Budget Management', 'Performance Tracking']
    },
    {
      id: 'portfolio',
      title: 'Marketing Portfolio',
      description: 'Build a marketing portfolio',
      duration: '4-6 weeks',
      completed: false,
      resources: ['Portfolio Examples', 'Case Studies', 'Results Documentation'],
      skills: ['Case Studies', 'Results Tracking', 'Portfolio Website', 'Presentation']
    },
    {
      id: 'interview-prep',
      title: 'Marketing Interview Prep',
      description: 'Prepare for marketing interviews',
      duration: '3-4 weeks',
      completed: false,
      resources: ['Marketing Interview Questions', 'Case Studies', 'Campaign Presentation'],
      skills: ['Interview Questions', 'Case Studies', 'Presentation', 'Communication']
    }
  ],
  'cloud-architect': [
    {
      id: 'cloud-fundamentals',
      title: 'Cloud Computing Basics',
      description: 'Understanding cloud computing models',
      duration: '3-4 weeks',
      completed: false,
      resources: ['Cloud Computing Course', 'Cloud Concepts', 'Service Models'],
      skills: ['IaaS/PaaS/SaaS', 'Cloud Benefits', 'Cloud Providers', 'Service Models']
    },
    {
      id: 'aws-fundamentals',
      title: 'AWS Fundamentals',
      description: 'Master Amazon Web Services basics',
      duration: '5-6 weeks',
      completed: false,
      resources: ['AWS Free Tier', 'AWS Documentation', 'Cloud Practitioner Course'],
      skills: ['EC2', 'S3', 'VPC', 'IAM']
    },
    {
      id: 'networking',
      title: 'Cloud Networking',
      description: 'Design cloud network architectures',
      duration: '4-5 weeks',
      completed: false,
      resources: ['VPC Guide', 'Networking Course', 'Cloud Networking'],
      skills: ['VPC Design', 'Subnets', 'Load Balancers', 'VPN']
    },
    {
      id: 'compute-services',
      title: 'Compute Services',
      description: 'Work with cloud compute options',
      duration: '4-5 weeks',
      completed: false,
      resources: ['EC2 Guide', 'Lambda Tutorial', 'Container Services'],
      skills: ['EC2', 'Lambda', 'ECS', 'Auto Scaling']
    },
    {
      id: 'storage-databases',
      title: 'Storage & Databases',
      description: 'Manage cloud storage and databases',
      duration: '5-6 weeks',
      completed: false,
      resources: ['S3 Guide', 'RDS Tutorial', 'Database Services'],
      skills: ['S3', 'RDS', 'DynamoDB', 'Storage Solutions']
    },
    {
      id: 'security',
      title: 'Cloud Security',
      description: 'Implement cloud security best practices',
      duration: '5-6 weeks',
      completed: false,
      resources: ['AWS Security', 'Security Best Practices', 'IAM Policies'],
      skills: ['IAM', 'Security Groups', 'Encryption', 'Compliance']
    },
    {
      id: 'high-availability',
      title: 'High Availability & Fault Tolerance',
      description: 'Design resilient architectures',
      duration: '5-6 weeks',
      completed: false,
      resources: ['HA Architecture', 'Fault Tolerance', 'Disaster Recovery'],
      skills: ['High Availability', 'Fault Tolerance', 'Multi-AZ', 'Disaster Recovery']
    },
    {
      id: 'monitoring',
      title: 'Monitoring & Logging',
      description: 'Monitor cloud resources',
      duration: '3-4 weeks',
      completed: false,
      resources: ['CloudWatch', 'Monitoring Guide', 'Logging Best Practices'],
      skills: ['CloudWatch', 'Logging', 'Alerting', 'Performance Monitoring']
    },
    {
      id: 'cost-optimization',
      title: 'Cost Optimization',
      description: 'Optimize cloud spending',
      duration: '4-5 weeks',
      completed: false,
      resources: ['Cost Optimization Guide', 'Reserved Instances', 'Cost Management'],
      skills: ['Cost Analysis', 'Reserved Instances', 'Spot Instances', 'Budget Alerts']
    },
    {
      id: 'serverless',
      title: 'Serverless Architecture',
      description: 'Build serverless applications',
      duration: '5-6 weeks',
      completed: false,
      resources: ['Lambda Guide', 'Serverless Framework', 'API Gateway'],
      skills: ['Lambda', 'API Gateway', 'Step Functions', 'Event-Driven Architecture']
    },
    {
      id: 'infrastructure-code',
      title: 'Infrastructure as Code',
      description: 'Automate infrastructure provisioning',
      duration: '5-6 weeks',
      completed: false,
      resources: ['Terraform', 'CloudFormation', 'IaC Best Practices'],
      skills: ['Terraform', 'CloudFormation', 'Infrastructure Automation', 'Version Control']
    },
    {
      id: 'migration',
      title: 'Cloud Migration',
      description: 'Migrate workloads to cloud',
      duration: '5-6 weeks',
      completed: false,
      resources: ['Migration Strategies', 'AWS Migration', 'Migration Tools'],
      skills: ['Migration Planning', '6Rs Strategy', 'Migration Tools', 'Cutover Planning']
    },
    {
      id: 'well-architected',
      title: 'Well-Architected Framework',
      description: 'Design using best practices',
      duration: '4-5 weeks',
      completed: false,
      resources: ['AWS Well-Architected', 'Design Patterns', 'Best Practices'],
      skills: ['5 Pillars', 'Design Patterns', 'Architecture Review', 'Best Practices']
    },
    {
      id: 'certifications',
      title: 'Cloud Certifications',
      description: 'Prepare for cloud certifications',
      duration: '8-12 weeks',
      completed: false,
      resources: ['Solutions Architect Course', 'Certification Prep', 'Practice Exams'],
      skills: ['AWS Certified', 'Azure Certified', 'GCP Certified', 'Multi-Cloud']
    },
    {
      id: 'interview-prep',
      title: 'Cloud Architect Interview Prep',
      description: 'Prepare for architect interviews',
      duration: '4-6 weeks',
      completed: false,
      resources: ['Architecture Questions', 'System Design', 'Case Studies'],
      skills: ['System Design', 'Architecture Patterns', 'Problem Solving', 'Communication']
    }
  ],
  'business-analyst': [
    {
      id: 'ba-fundamentals',
      title: 'Business Analysis Fundamentals',
      description: 'Core BA concepts and practices',
      duration: '3-4 weeks',
      completed: false,
      resources: ['BABOK Guide', 'BA Fundamentals Course', 'Business Analysis Books'],
      skills: ['BA Role', 'Business Analysis', 'Stakeholders', 'Requirements']
    },
    {
      id: 'requirements-gathering',
      title: 'Requirements Gathering',
      description: 'Elicit and document requirements',
      duration: '4-5 weeks',
      completed: false,
      resources: ['Requirements Engineering', 'Elicitation Techniques', 'Documentation'],
      skills: ['Elicitation', 'Interviews', 'Workshops', 'Surveys']
    },
    {
      id: 'process-modeling',
      title: 'Process Modeling',
      description: 'Map and analyze business processes',
      duration: '4-5 weeks',
      completed: false,
      resources: ['BPMN Guide', 'Process Mapping', 'Modeling Tools'],
      skills: ['BPMN', 'Flowcharts', 'Swim Lanes', 'Process Analysis']
    },
    {
      id: 'data-analysis',
      title: 'Data Analysis',
      description: 'Analyze data to inform decisions',
      duration: '5-6 weeks',
      completed: false,
      resources: ['Excel Course', 'Data Analysis Guide', 'Statistical Methods'],
      skills: ['Excel', 'Data Cleaning', 'Statistical Analysis', 'Data Visualization']
    },
    {
      id: 'sql',
      title: 'SQL & Databases',
      description: 'Query and analyze databases',
      duration: '4-5 weeks',
      completed: false,
      resources: ['SQL Tutorial', 'Database Concepts', 'Query Writing'],
      skills: ['SQL Queries', 'Joins', 'Aggregations', 'Database Basics']
    },
    {
      id: 'visualization',
      title: 'Data Visualization',
      description: 'Create compelling visualizations',
      duration: '3-4 weeks',
      completed: false,
      resources: ['Power BI', 'Tableau', 'Visualization Best Practices'],
      skills: ['Power BI', 'Tableau', 'Dashboard Design', 'Storytelling']
    },
    {
      id: 'uml',
      title: 'UML & Modeling',
      description: 'Create system models',
      duration: '3-4 weeks',
      completed: false,
      resources: ['UML Guide', 'Use Case Diagrams', 'Class Diagrams'],
      skills: ['Use Cases', 'Activity Diagrams', 'Sequence Diagrams', 'Class Diagrams']
    },
    {
      id: 'agile-ba',
      title: 'Agile for Business Analysts',
      description: 'Work in agile environments',
      duration: '3-4 weeks',
      completed: false,
      resources: ['Agile BA Course', 'User Stories', 'Scrum for BAs'],
      skills: ['Agile Practices', 'User Stories', 'Backlog Management', 'Sprint Planning']
    },
    {
      id: 'stakeholder-mgmt',
      title: 'Stakeholder Management',
      description: 'Manage stakeholder relationships',
      duration: '3-4 weeks',
      completed: false,
      resources: ['Stakeholder Analysis', 'Communication Skills', 'Influence'],
      skills: ['Stakeholder Analysis', 'Communication', 'Negotiation', 'Conflict Resolution']
    },
    {
      id: 'gap-analysis',
      title: 'Gap Analysis',
      description: 'Identify gaps between current and future state',
      duration: '2-3 weeks',
      completed: false,
      resources: ['Gap Analysis Guide', 'Current vs Future State', 'Analysis Techniques'],
      skills: ['Current State Analysis', 'Future State', 'Gap Identification', 'Recommendations']
    },
    {
      id: 'solution-design',
      title: 'Solution Design',
      description: 'Design business solutions',
      duration: '4-5 weeks',
      completed: false,
      resources: ['Solution Design Guide', 'Business Solutions', 'Design Thinking'],
      skills: ['Solution Options', 'Feasibility Analysis', 'Recommendations', 'Design Thinking']
    },
    {
      id: 'testing',
      title: 'Testing & Validation',
      description: 'Validate solutions meet requirements',
      duration: '3-4 weeks',
      completed: false,
      resources: ['UAT Guide', 'Test Planning', 'Validation Techniques'],
      skills: ['UAT', 'Test Cases', 'Validation', 'Quality Assurance']
    },
    {
      id: 'change-management',
      title: 'Change Management',
      description: 'Manage organizational change',
      duration: '3-4 weeks',
      completed: false,
      resources: ['Change Management Course', 'ADKAR Model', 'Change Strategy'],
      skills: ['Change Strategy', 'Impact Analysis', 'Training', 'Adoption']
    },
    {
      id: 'projects',
      title: 'BA Case Studies & Projects',
      description: 'Apply BA skills to real projects',
      duration: '6-8 weeks',
      completed: false,
      resources: ['Case Studies', 'Project Work', 'Portfolio Examples'],
      skills: ['Requirements Documentation', 'Process Improvement', 'Analysis', 'Communication']
    },
    {
      id: 'certification',
      title: 'BA Certification Prep',
      description: 'Prepare for BA certifications',
      duration: '6-8 weeks',
      completed: false,
      resources: ['CBAP Study Guide', 'PMI-PBA', 'Certification Prep'],
      skills: ['CBAP', 'CCBA', 'PMI-PBA', 'IIBA Standards']
    }
  ],
  'mobile-developer': [
    {
      id: 'mobile-basics',
      title: 'Mobile Development Basics',
      description: 'Introduction to mobile development',
      duration: '3-4 weeks',
      completed: false,
      resources: ['Mobile Dev Course', 'Platform Overview', 'Mobile Design'],
      skills: ['Mobile Platforms', 'App Architecture', 'Mobile UI', 'Development Tools']
    },
    {
      id: 'programming-fundamentals',
      title: 'Programming Fundamentals',
      description: 'Learn programming basics',
      duration: '4-5 weeks',
      completed: false,
      resources: ['Programming Course', 'Data Structures', 'Algorithms'],
      skills: ['Variables', 'Functions', 'OOP', 'Data Structures']
    },
    {
      id: 'kotlin-swift',
      title: 'Kotlin/Swift Basics',
      description: 'Learn native mobile languages',
      duration: '5-6 weeks',
      completed: false,
      resources: ['Kotlin Course', 'Swift Tutorial', 'Language Guides'],
      skills: ['Kotlin', 'Swift', 'Language Syntax', 'Standard Libraries']
    },
    {
      id: 'android-dev',
      title: 'Android Development',
      description: 'Build native Android apps',
      duration: '6-8 weeks',
      completed: false,
      resources: ['Android Developer Docs', 'Android Course', 'Jetpack Compose'],
      skills: ['Android Studio', 'Activities', 'Fragments', 'Jetpack']
    },
    {
      id: 'ios-dev',
      title: 'iOS Development',
      description: 'Build native iOS apps',
      duration: '6-8 weeks',
      completed: false,
      resources: ['iOS Developer Docs', 'SwiftUI', 'iOS Course'],
      skills: ['Xcode', 'SwiftUI', 'UIKit', 'iOS Frameworks']
    },
    {
      id: 'react-native',
      title: 'React Native',
      description: 'Cross-platform development with React Native',
      duration: '6-8 weeks',
      completed: false,
      resources: ['React Native Docs', 'React Native Course', 'Expo'],
      skills: ['React Native', 'Components', 'Navigation', 'Native Modules']
    },
    {
      id: 'flutter',
      title: 'Flutter Development',
      description: 'Build apps with Flutter',
      duration: '6-8 weeks',
      completed: false,
      resources: ['Flutter Docs', 'Dart Language', 'Flutter Course'],
      skills: ['Flutter', 'Dart', 'Widgets', 'State Management']
    },
    {
      id: 'ui-ux',
      title: 'Mobile UI/UX Design',
      description: 'Design mobile user interfaces',
      duration: '4-5 weeks',
      completed: false,
      resources: ['Material Design', 'iOS Guidelines', 'Mobile Design Course'],
      skills: ['Material Design', 'iOS Design', 'Mobile Patterns', 'User Experience']
    },
    {
      id: 'networking',
      title: 'Networking & APIs',
      description: 'Connect to backend services',
      duration: '4-5 weeks',
      completed: false,
      resources: ['REST APIs', 'Networking Guide', 'API Integration'],
      skills: ['REST APIs', 'JSON', 'HTTP Requests', 'API Integration']
    },
    {
      id: 'data-storage',
      title: 'Data Storage',
      description: 'Store data locally and remotely',
      duration: '3-4 weeks',
      completed: false,
      resources: ['SQLite', 'Room Database', 'Core Data'],
      skills: ['Local Storage', 'SQLite', 'Room', 'Core Data']
    },
    {
      id: 'testing',
      title: 'Mobile Testing',
      description: 'Test mobile applications',
      duration: '3-4 weeks',
      completed: false,
      resources: ['Testing Guide', 'Unit Testing', 'UI Testing'],
      skills: ['Unit Testing', 'UI Testing', 'Test Frameworks', 'Debugging']
    },
    {
      id: 'performance',
      title: 'Performance Optimization',
      description: 'Optimize app performance',
      duration: '3-4 weeks',
      completed: false,
      resources: ['Performance Guide', 'Profiling Tools', 'Optimization Techniques'],
      skills: ['Performance Profiling', 'Memory Management', 'Battery Optimization', 'Network Efficiency']
    },
    {
      id: 'publishing',
      title: 'App Store Publishing',
      description: 'Publish apps to stores',
      duration: '2-3 weeks',
      completed: false,
      resources: ['Play Store Guide', 'App Store Guide', 'Publishing Process'],
      skills: ['Play Store', 'App Store', 'App Submission', 'Release Management']
    },
    {
      id: 'projects',
      title: 'Mobile App Projects',
      description: 'Build portfolio projects',
      duration: '8-10 weeks',
      completed: false,
      resources: ['Project Ideas', 'App Development', 'Portfolio Examples'],
      skills: ['Full App Development', 'API Integration', 'UI/UX', 'Deployment']
    },
    {
      id: 'interview-prep',
      title: 'Mobile Dev Interview Prep',
      description: 'Prepare for mobile dev interviews',
      duration: '4-6 weeks',
      completed: false,
      resources: ['Interview Questions', 'Coding Challenges', 'System Design'],
      skills: ['Technical Questions', 'Coding', 'App Architecture', 'Problem Solving']
    }
  ]
};
