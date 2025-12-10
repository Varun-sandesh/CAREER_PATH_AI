export const questions = [
  {
    id: 'skill-level',
    text: 'What is your current skill level in your field of interest?',
    type: 'multiple-choice' as const,
    options: [
      { value: 'beginner', label: 'Beginner - Just starting out' },
      { value: 'intermediate', label: 'Intermediate - Some experience' },
      { value: 'advanced', label: 'Advanced - Considerable experience' },
      { value: 'expert', label: 'Expert - Highly experienced' }
    ]
  },
  {
    id: 'desired-role',
    text: 'What is your desired job role or career path?',
    type: 'multiple-choice' as const,
    options: [
      { value: 'software-engineer', label: 'Software Engineer' },
      { value: 'data-scientist', label: 'Data Scientist' },
      { value: 'product-manager', label: 'Product Manager' },
      { value: 'designer', label: 'UX/UI Designer' },
      { value: 'marketing', label: 'Digital Marketing' },
      { value: 'other', label: 'Other' }
    ]
  },
  {
    id: 'industry',
    text: 'Which industry interests you most?',
    type: 'multiple-choice' as const,
    options: [
      { value: 'technology', label: 'Technology & Software' },
      { value: 'finance', label: 'Finance & Banking' },
      { value: 'healthcare', label: 'Healthcare & Medical' },
      { value: 'education', label: 'Education & Training' },
      { value: 'ecommerce', label: 'E-commerce & Retail' },
      { value: 'startups', label: 'Startups & Innovation' }
    ]
  },
  {
    id: 'time-commitment',
    text: 'How much time can you dedicate to learning per week?',
    type: 'multiple-choice' as const,
    options: [
      { value: '1-5', label: '1-5 hours per week' },
      { value: '5-10', label: '5-10 hours per week' },
      { value: '10-20', label: '10-20 hours per week' },
      { value: '20+', label: '20+ hours per week' }
    ]
  },
  {
    id: 'timeline',
    text: 'What is your expected timeline to reach your career goals?',
    type: 'multiple-choice' as const,
    options: [
      { value: '3-months', label: '3 months' },
      { value: '6-months', label: '6 months' },
      { value: '1-year', label: '1 year' },
      { value: '2-years', label: '2+ years' }
    ]
  },
  {
    id: 'learning-style',
    text: 'What is your preferred learning style?',
    type: 'multiple-choice' as const,
    options: [
      { value: 'visual', label: 'Visual (videos, diagrams, infographics)' },
      { value: 'hands-on', label: 'Hands-on (projects, coding, practice)' },
      { value: 'reading', label: 'Reading (books, articles, documentation)' },
      { value: 'interactive', label: 'Interactive (courses, tutorials, mentorship)' }
    ]
  },
  {
    id: 'programming-languages',
    text: 'Which programming languages do you know? (if any)',
    type: 'text' as const,
    placeholder: 'e.g., JavaScript, Python, Java, C++, or "None yet"'
  },
  {
    id: 'tools-frameworks',
    text: 'What tools, frameworks, or technologies have you used?',
    type: 'text' as const,
    placeholder: 'e.g., React, Node.js, Docker, AWS, or "None yet"'
  },
  {
    id: 'strengths-weaknesses',
    text: 'What do you consider your main strengths and areas for improvement?',
    type: 'text' as const,
    placeholder: 'Describe your strengths and what you\'d like to improve on...'
  },
  {
    id: 'career-goals',
    text: 'What are your specific career goals and aspirations?',
    type: 'text' as const,
    placeholder: 'Describe what you want to achieve in your career...'
  }
];