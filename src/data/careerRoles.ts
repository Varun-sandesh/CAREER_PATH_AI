export interface CareerRole {
  id: string;
  title: string;
  description: string;
  image: string;
  salary: string;
  growth: string;
  demand: string;
}

export const careerRoles: CareerRole[] = [
  {
    id: 'software-engineer',
    title: 'Software Engineer',
    description: 'Design, develop, and maintain software applications using modern programming languages and frameworks.',
    image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    salary: '$80k - $150k',
    growth: 'High',
    demand: 'Very High'
  },
  {
    id: 'data-scientist',
    title: 'Data Scientist',
    description: 'Analyze complex data sets to derive insights and build predictive models using statistical methods and machine learning.',
    image: 'https://images.pexels.com/photos/7567565/pexels-photo-7567565.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    salary: '$90k - $160k',
    growth: 'Very High',
    demand: 'Very High'
  },
  {
    id: 'product-manager',
    title: 'Product Manager',
    description: 'Lead product strategy, define roadmaps, and coordinate cross-functional teams to deliver successful products.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    salary: '$100k - $180k',
    growth: 'High',
    demand: 'High'
  },
  {
    id: 'ux-designer',
    title: 'UX/UI Designer',
    description: 'Create intuitive and beautiful user experiences through research, wireframing, prototyping, and visual design.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    salary: '$70k - $130k',
    growth: 'High',
    demand: 'High'
  },
  {
    id: 'devops-engineer',
    title: 'DevOps Engineer',
    description: 'Automate and optimize deployment processes, manage cloud infrastructure, and ensure system reliability.',
    image: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    salary: '$90k - $160k',
    growth: 'Very High',
    demand: 'Very High'
  },
  {
    id: 'cybersecurity-specialist',
    title: 'Cybersecurity Specialist',
    description: 'Protect organizations from cyber threats by implementing security measures and monitoring for vulnerabilities.',
    image: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    salary: '$85k - $150k',
    growth: 'Very High',
    demand: 'Very High'
  },
  {
    id: 'digital-marketer',
    title: 'Digital Marketing Specialist',
    description: 'Develop and execute marketing strategies across digital channels to drive growth and engagement.',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    salary: '$60k - $110k',
    growth: 'High',
    demand: 'High'
  },
  {
    id: 'cloud-architect',
    title: 'Cloud Architect',
    description: 'Design and implement cloud computing strategies, managing scalable and secure cloud infrastructure.',
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    salary: '$120k - $200k',
    growth: 'Very High',
    demand: 'Very High'
  },
  {
    id: 'business-analyst',
    title: 'Business Analyst',
    description: 'Bridge the gap between business needs and technical solutions through analysis and strategic planning.',
    image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    salary: '$70k - $120k',
    growth: 'Moderate',
    demand: 'High'
  },
  {
    id: 'mobile-developer',
    title: 'Mobile App Developer',
    description: 'Build native or cross-platform mobile applications for iOS and Android using modern frameworks.',
    image: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    salary: '$75k - $140k',
    growth: 'High',
    demand: 'Very High'
  }
];
