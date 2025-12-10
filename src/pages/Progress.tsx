import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, RadialBarChart, RadialBar, Legend } from 'recharts';
import { TrendingUp, Award, Target, Calendar, Star, Percent, ArrowUp, CheckCircle, Clock, Zap, BookOpen, Trophy } from 'lucide-react';
import { roadmapData } from '../data/roadmaps';

// --- Interface Definitions ---
interface RoadmapStep {
  id: string;
  title: string;
  description: string;
  duration: string;
  completed: boolean;
  resources: string[];
  skills: string[];
}

// New interface for the structured progress data
interface RoleProgress {
  completedMilestones: string[];
}

interface AllProgressData {
  [roleId: string]: RoleProgress;
}

export default function Progress() {
  const [completedSteps, setCompletedSteps] = useState<Set<string>>(new Set());
  const [userRole, setUserRole] = useState<string>('');
  const [roadmap, setRoadmap] = useState<RoadmapStep[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load user profile to get the desired role
    const userData = JSON.parse(localStorage.getItem('userProfile') || '{}');
    
    // Load ALL saved progress (expecting the new, structured format)
    const allSavedProgress: AllProgressData = JSON.parse(localStorage.getItem('userProgress') || '{}'); 

    if (userData.desiredRole) {
      const roleKey = userData.desiredRole; // e.g., 'software-engineer'
      setUserRole(roleKey);

      // Load the roadmap for the current role
      const roleRoadmap = roadmapData[roleKey] || roadmapData['software-engineer'];
      setRoadmap(roleRoadmap);

      // --- CRITICAL CHANGE: Extract progress specific to this role ---
      const currentRoleProgress = allSavedProgress[roleKey];

      if (currentRoleProgress && currentRoleProgress.completedMilestones) {
        // Set completed steps only for the currently active role
        setCompletedSteps(new Set(currentRoleProgress.completedMilestones));
      } else {
        // Initialize with an empty set if no progress exists for this role
        setCompletedSteps(new Set());
      }
    }

    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  if (!userRole || roadmap.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <Target className="w-16 h-16 text-indigo-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">No Progress Data</h2>
          <p className="text-gray-600 mb-6">Complete your onboarding to start tracking progress.</p>
          <a href="/onboarding" className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
            Start Assessment
          </a>
        </div>
      </div>
    );
  }

  const totalSteps = roadmap.length;
  const completedCount = completedSteps.size;
  const overallProgress = (completedCount / totalSteps) * 100;
  const remainingSteps = totalSteps - completedCount;

  // Calculate skills distribution (using dummy data as before, but based on the role's roadmap)
  const allSkills = roadmap.flatMap(step => step.skills);
  const completedSkills = roadmap
    .filter(step => completedSteps.has(step.id))
    .flatMap(step => step.skills);

  const skillCategories = ['Technical', 'Soft Skills', 'Tools', 'Frameworks'];
  const skillsData = skillCategories.map(category => ({
    name: category,
    // Note: Reusing your original random calculation for chart population
    value: Math.floor(Math.random() * 30) + 20, 
    fill: category === 'Technical' ? '#3B82F6' :
          category === 'Soft Skills' ? '#10B981' :
          category === 'Tools' ? '#F59E0B' : '#8B5CF6'
  }));

  // Calculate time investment
  const totalWeeksEstimate = roadmap.reduce((acc, step) => {
    const weeks = parseInt(step.duration.split('-')[0]) || 4;
    return acc + weeks;
  }, 0);

  const completedWeeksEstimate = roadmap
    .filter(step => completedSteps.has(step.id))
    .reduce((acc, step) => {
      const weeks = parseInt(step.duration.split('-')[0]) || 4;
      return acc + weeks;
    }, 0);

  // Recent activity (last 5 completed steps for the CURRENT role)
  const recentCompletions = roadmap
    .filter(step => completedSteps.has(step.id))
    .slice(-5);

  // Progress by category (split into quarters based on the current roadmap)
  const quarterSize = Math.ceil(totalSteps / 4);
  const categoryProgress = [
    {
      name: 'Foundation',
      completed: roadmap.slice(0, quarterSize).filter(s => completedSteps.has(s.id)).length,
      total: quarterSize,
      percentage: (roadmap.slice(0, quarterSize).filter(s => completedSteps.has(s.id)).length / quarterSize) * 100
    },
    {
      name: 'Intermediate',
      completed: roadmap.slice(quarterSize, quarterSize * 2).filter(s => completedSteps.has(s.id)).length,
      total: quarterSize,
      percentage: (roadmap.slice(quarterSize, quarterSize * 2).filter(s => completedSteps.has(s.id)).length / quarterSize) * 100
    },
    {
      name: 'Advanced',
      completed: roadmap.slice(quarterSize * 2, quarterSize * 3).filter(s => completedSteps.has(s.id)).length,
      total: quarterSize,
      percentage: (roadmap.slice(quarterSize * 2, quarterSize * 3).filter(s => completedSteps.has(s.id)).length / quarterSize) * 100
    },
    {
      name: 'Expert',
      completed: roadmap.slice(quarterSize * 3).filter(s => completedSteps.has(s.id)).length,
      total: roadmap.slice(quarterSize * 3).length,
      percentage: (roadmap.slice(quarterSize * 3).filter(s => completedSteps.has(s.id)).length / roadmap.slice(quarterSize * 3).length) * 100
    }
  ];

  // Radial progress data
  const radialData = [
    {
      name: 'Progress',
      value: overallProgress,
      fill: '#3B82F6'
    }
  ];

  const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#8B5CF6'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Progress Dashboard</h1>
          <p className="text-xl text-gray-600">
            Track your journey to becoming a <span className="text-indigo-600 font-semibold">{userRole.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</span>
          </p>
        </motion.div>

        {/* Main Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-xl p-6 text-white"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="bg-white bg-opacity-20 rounded-xl p-3">
                <TrendingUp className="h-8 w-8" />
              </div>
              <div className="text-right">
                <p className="text-5xl font-bold">{Math.round(overallProgress)}%</p>
              </div>
            </div>
            <p className="text-blue-100 text-sm font-medium">Overall Progress</p>
            <div className="mt-3 w-full bg-blue-400 bg-opacity-30 rounded-full h-2">
              <motion.div
                className="bg-white h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${overallProgress}%` }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl shadow-xl p-6 text-white"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="bg-white bg-opacity-20 rounded-xl p-3">
                <CheckCircle className="h-8 w-8" />
              </div>
              <div className="text-right">
                <p className="text-5xl font-bold">{completedCount}</p>
              </div>
            </div>
            <p className="text-green-100 text-sm font-medium">Steps Completed</p>
            <p className="text-green-200 text-xs mt-2">{remainingSteps} remaining of {totalSteps}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl shadow-xl p-6 text-white"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="bg-white bg-opacity-20 rounded-xl p-3">
                <Clock className="h-8 w-8" />
              </div>
              <div className="text-right">
                <p className="text-5xl font-bold">{completedWeeksEstimate}</p>
              </div>
            </div>
            <p className="text-purple-100 text-sm font-medium">Weeks Invested</p>
            <p className="text-purple-200 text-xs mt-2">{totalWeeksEstimate} weeks total</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl shadow-xl p-6 text-white"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="bg-white bg-opacity-20 rounded-xl p-3">
                <Zap className="h-8 w-8" />
              </div>
              <div className="text-right">
                <p className="text-5xl font-bold">{completedSkills.length}</p>
              </div>
            </div>
            <p className="text-orange-100 text-sm font-medium">Skills Acquired</p>
            <p className="text-orange-200 text-xs mt-2">{allSkills.length} total skills</p>
          </motion.div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Learning Progress by Category */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Target className="h-6 w-6 mr-3 text-indigo-600" />
              Progress by Level
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={categoryProgress}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="name" stroke="#6B7280" />
                <YAxis stroke="#6B7280" />
                <Tooltip
                  contentStyle={{ backgroundColor: '#FFF', border: '1px solid #E5E7EB', borderRadius: '8px' }}
                  formatter={(value, name) => [
                    name === 'completed' ? `${value} steps` : `${Math.round(value as number)}%`,
                    name === 'completed' ? 'Completed' : 'Progress'
                  ]}
                />
                <Bar dataKey="completed" fill="#3B82F6" radius={[8, 8, 0, 0]} />
                <Bar dataKey="percentage" fill="#E5E7EB" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Overall Progress Radial */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Trophy className="h-6 w-6 mr-3 text-yellow-600" />
              Overall Completion
            </h3>
            <div className="flex items-center justify-center">
              <ResponsiveContainer width="100%" height={300}>
                <RadialBarChart
                  cx="50%"
                  cy="50%"
                  innerRadius="60%"
                  outerRadius="90%"
                  barSize={30}
                  data={radialData}
                  startAngle={90}
                  endAngle={-270}
                >
                  <RadialBar
                    background
                    dataKey="value"
                    cornerRadius={30}
                    fill="#3B82F6"
                  />
                  <text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="text-4xl font-bold"
                    fill="#1F2937"
                  >
                    {Math.round(overallProgress)}%
                  </text>
                </RadialBarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-blue-50 rounded-lg">
                <p className="text-2xl font-bold text-blue-600">{completedCount}</p>
                <p className="text-sm text-gray-600">Completed</p>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <p className="text-2xl font-bold text-gray-600">{remainingSteps}</p>
                <p className="text-sm text-gray-600">Remaining</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Star className="h-6 w-6 mr-3 text-purple-600" />
            Skills Distribution
          </h3>
          <div className="flex flex-col lg:flex-row items-center justify-around">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={skillsData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  // --- FIX APPLIED HERE ---
                  label={({ name, percent }) => `${name}: ${((percent ?? 0) * 100).toFixed(0)}%`}
                  // -------------------------
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {skillsData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="grid grid-cols-2 gap-4 lg:ml-8">
              {skillsData.map((skill, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-4 h-4 rounded-full" style={{ backgroundColor: skill.fill }} />
                  <div>
                    <p className="font-semibold text-gray-900">{skill.name}</p>
                    <p className="text-sm text-gray-600">{skill.value} skills</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Recent Completions */}
        {recentCompletions.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-white rounded-2xl shadow-xl p-8 mb-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Award className="h-6 w-6 mr-3 text-green-600" />
              Recent Achievements
            </h3>
            <div className="space-y-4">
              {recentCompletions.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                  className="flex items-center space-x-4 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl"
                >
                  <div className="bg-green-500 rounded-full p-2">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{step.title}</h4>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                  <div className="text-sm text-gray-500">{step.duration}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Next Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white shadow-2xl"
        >
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <BookOpen className="h-6 w-6 mr-3" />
            Your Next Steps
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {roadmap
              .filter(step => !completedSteps.has(step.id))
              .slice(0, 2)
              .map((step, index) => (
                <div key={step.id} className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl">
                  <div className="flex items-center mb-3">
                    <div className="bg-white bg-opacity-20 rounded-full p-2 mr-3">
                      <Target className="h-5 w-5" />
                    </div>
                    <h4 className="font-bold text-lg">{step.title}</h4>
                  </div>
                  <p className="text-blue-100 text-sm mb-3">{step.description}</p>
                  <div className="flex items-center text-sm">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{step.duration}</span>
                  </div>
                </div>
              ))}
          </div>
          {remainingSteps > 0 && (
            <div className="mt-6 text-center">
              <a
                href="/roadmap"
                className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-lg"
              >
                View Full Roadmap
              </a>
            </div>
          )}
        </motion.div>

        {/* Completion Celebration */}
        {overallProgress === 100 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-8 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-2xl p-8 text-center text-white shadow-2xl"
          >
            <Trophy className="w-20 h-20 mx-auto mb-4" />
            <h2 className="text-4xl font-bold mb-4">Congratulations! 🎉</h2>
            <p className="text-2xl mb-4">You've completed your entire learning roadmap!</p>
            <p className="text-yellow-100 text-lg">
              You're now ready to pursue opportunities as a {userRole.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}