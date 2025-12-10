import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Calendar, Award, Target, TrendingUp } from 'lucide-react';

export default function Profile() {
  const [userStats] = useState({
    userName: 'Career Explorer',
    joinedDate: 'January 2024',
    completedSteps: 12,
    totalSteps: 20,
    skillLevel: 'Intermediate',
    currentGoal: 'Software Engineer',
    nextMilestone: 'Complete React Certification'
  });

  const achievements = [
    { name: 'Profile Complete', description: 'Completed your profile setup', earned: true },
    { name: 'First Assessment', description: 'Completed career assessment', earned: true },
    { name: 'Learning Streak', description: '7 days of consistent learning', earned: true },
    { name: 'Skill Master', description: 'Completed first skill module', earned: false },
    { name: 'Goal Achiever', description: 'Reached your first milestone', earned: false },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Profile</h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center space-x-6 mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <User className="h-12 w-12 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {userStats.userName}
                  </h2>
                  <p className="text-gray-500 flex items-center space-x-2 mt-1">
                    <Calendar className="h-4 w-4" />
                    <span>Joined {userStats.joinedDate}</span>
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="flex items-center space-x-3 mb-2">
                    <Target className="h-6 w-6 text-blue-600" />
                    <h3 className="text-lg font-semibold text-gray-900">Current Goal</h3>
                  </div>
                  <p className="text-blue-700 font-medium">{userStats.currentGoal}</p>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="flex items-center space-x-3 mb-2">
                    <Award className="h-6 w-6 text-green-600" />
                    <h3 className="text-lg font-semibold text-gray-900">Skill Level</h3>
                  </div>
                  <p className="text-green-700 font-medium">{userStats.skillLevel}</p>
                </div>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <TrendingUp className="h-6 w-6 text-purple-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Progress Overview</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700">Career Journey</span>
                      <span className="text-sm text-gray-600">
                        {userStats.completedSteps}/{userStats.totalSteps}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <motion.div
                        className="bg-gradient-to-r from-purple-600 to-blue-600 h-3 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${(userStats.completedSteps / userStats.totalSteps) * 100}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                      />
                    </div>
                  </div>
                  <p className="text-purple-700 font-medium">
                    Next: {userStats.nextMilestone}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Achievements Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
                <Award className="h-6 w-6 text-yellow-600" />
                <span>Achievements</span>
              </h3>
              
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className={`p-4 rounded-lg border-2 ${
                      achievement.earned
                        ? 'border-green-200 bg-green-50'
                        : 'border-gray-200 bg-gray-50'
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                        achievement.earned ? 'bg-green-600' : 'bg-gray-400'
                      }`}>
                        {achievement.earned && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                          >
                            <Award className="h-4 w-4 text-white" />
                          </motion.div>
                        )}
                      </div>
                      <div className="flex-1">
                        <h4 className={`font-semibold ${
                          achievement.earned ? 'text-green-900' : 'text-gray-600'
                        }`}>
                          {achievement.name}
                        </h4>
                        <p className={`text-sm ${
                          achievement.earned ? 'text-green-700' : 'text-gray-500'
                        }`}>
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-6 text-white">
              <h3 className="text-lg font-bold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full text-left py-2 px-3 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-colors">
                  Update Career Goals
                </button>
                <button className="w-full text-left py-2 px-3 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-colors">
                  Retake Assessment
                </button>
                <button className="w-full text-left py-2 px-3 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-colors">
                  View Recommendations
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}