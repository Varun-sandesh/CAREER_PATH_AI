import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, Circle, Clock, Star, Target, BookOpen, Bot, Award } from 'lucide-react';
// Assuming this is your data source
import { roadmapData } from '../data/roadmaps'; 
import type { RoadmapStep } from '../data/roadmaps';

// --- NEW INTERFACE DEFINITIONS ---
// Define the structure of the progress data in localStorage
interface RoleProgress {
    completedMilestones: string[];
}

interface AllProgressData {
    [roleId: string]: RoleProgress;
}
// --- END NEW INTERFACE DEFINITIONS ---

interface UserRoadmap {
    role: string;
    level: string;
    timeCommitment: string;
    steps: RoadmapStep[];
}

export default function Roadmap() {
    const [roadmap, setRoadmap] = useState<UserRoadmap | null>(null);
    const [completedSteps, setCompletedSteps] = useState<Set<string>>(new Set());

    useEffect(() => {
        // 1. Load user data to get the desired role
        const userData = JSON.parse(localStorage.getItem('userProfile') || '{}');
        const roleKey = userData.desiredRole; // e.g., 'software-engineer'

        // 2. Load the ENTIRE structured progress object
        const allSavedProgress: AllProgressData = JSON.parse(localStorage.getItem('userProgress') || '{}');
        
        if (roleKey) {
            const personalizedRoadmap = generateRoadmap(userData);
            setRoadmap(personalizedRoadmap);

            // --- CRITICAL FIX (READING): Extract progress specific to this role ---
            const currentRoleProgress = allSavedProgress[roleKey];
            
            if (currentRoleProgress && currentRoleProgress.completedMilestones) {
                // Only load the completed milestones that belong to the active role (roleKey)
                setCompletedSteps(new Set(currentRoleProgress.completedMilestones));
            } else {
                // Initialize with an empty set if this is the first time viewing this role
                setCompletedSteps(new Set());
            }
        }
    }, []);

    const generateRoadmap = (userData: any): UserRoadmap => {
        // Use the desiredRole from userProfile
        const steps = roadmapData[userData.desiredRole] || roadmapData['software-engineer']; 
        
        return {
            role: userData.desiredRole,
            level: userData.currentLevel || 'Beginner', // Added fallback
            timeCommitment: userData.timeCommitment || 'Flexible', // Added fallback
            steps: steps
        };
    };

    const toggleStepCompletion = (stepId: string) => {
        if (!roadmap) return;

        const newCompletedSteps = new Set(completedSteps);
        const isCompleted = completedSteps.has(stepId);

        if (isCompleted) {
            newCompletedSteps.delete(stepId);
        } else {
            newCompletedSteps.add(stepId);
        }
        
        setCompletedSteps(newCompletedSteps);
        
        // --- CRITICAL FIX (SAVING): Save progress using the role ID as the key ---
        const roleKey = roadmap.role;
        const allSavedProgress: AllProgressData = JSON.parse(localStorage.getItem('userProgress') || '{}');
        
        // Update ONLY the section corresponding to the current role
        allSavedProgress[roleKey] = {
            completedMilestones: Array.from(newCompletedSteps)
        };
        
        // Save the entire structured object back to localStorage
        localStorage.setItem('userProgress', JSON.stringify(allSavedProgress));
    };

    const totalSteps = roadmap ? roadmap.steps.length : 0;
    const completedCount = completedSteps.size;
    const completionPercentage = totalSteps > 0 ? (completedCount / totalSteps) * 100 : 0;
    const remainingCount = totalSteps - completedCount;

    if (!roadmap) {
        // ... (No change here)
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
                <div className="text-center">
                    <Target className="w-16 h-16 text-indigo-600 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">No Roadmap Found</h2>
                    <p className="text-gray-600 mb-6">Complete the onboarding questionnaire to get your personalized learning roadmap.</p>
                    <a href="/onboarding" className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
                        Start Assessment
                    </a>
                </div>
            </div>
        );
    }

    // Function to format the role name (e.g., 'software-engineer' -> 'Software Engineer')
    const formatRoleName = (role: string) => role.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Your Personalized Learning Roadmap
                    </h1>
                    <p className="text-xl text-gray-600 mb-6">
                        {formatRoleName(roadmap.role)} • {roadmap.level} Level
                    </p>

                    {/* AI Assistant Button */}
                    <Link
                        to="/ai-assistant"
                        className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl mb-8"
                    >
                        <Bot className="h-5 w-5" />
                        <span>Ask AI for Guidance</span>
                    </Link>

                    {/* Progress Bar (Now role-specific) */}
                    <div className="bg-white rounded-2xl p-6 shadow-xl max-w-2xl mx-auto">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-lg font-bold text-gray-800">Learning Progress</span>
                            <span className="text-2xl font-bold text-indigo-600">{Math.round(completionPercentage)}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-6 shadow-inner">
                            <motion.div
                                className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-6 rounded-full shadow-lg flex items-center justify-end pr-3"
                                initial={{ width: 0 }}
                                animate={{ width: `${completionPercentage}%` }}
                                transition={{ duration: 1, ease: "easeOut" }}
                            >
                                {completionPercentage > 10 && (
                                    <span className="text-white text-sm font-semibold">
                                        {completedCount} / {totalSteps} Steps
                                    </span>
                                )}
                            </motion.div>
                        </div>
                        <div className="mt-3 flex items-center justify-between text-sm text-gray-600">
                            <span>{completedCount} completed</span>
                            <span>{remainingCount} remaining</span>
                        </div>
                    </div>
                </motion.div>

                {/* Roadmap Steps */}
                <div className="space-y-8">
                    {roadmap.steps.map((step, index) => {
                        const isCompleted = completedSteps.has(step.id);
                        
                        return (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className={`bg-white rounded-2xl shadow-lg p-8 border-l-4 ${
                                    isCompleted ? 'border-green-500' : 'border-indigo-500'
                                }`}
                            >
                                <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                        <div className="flex items-center mb-4">
                                            <button
                                                onClick={() => toggleStepCompletion(step.id)}
                                                className="mr-4 transition-colors"
                                            >
                                                {isCompleted ? (
                                                    <CheckCircle className="w-8 h-8 text-green-500" />
                                                ) : (
                                                    <Circle className="w-8 h-8 text-gray-400 hover:text-indigo-500" />
                                                )}
                                            </button>
                                            <div>
                                                <h3 className={`text-2xl font-bold ${isCompleted ? 'text-green-700' : 'text-gray-900'}`}>
                                                    {step.title}
                                                </h3>
                                                <div className="flex items-center text-gray-500 mt-1">
                                                    <Clock className="w-4 h-4 mr-2" />
                                                    <span>{step.duration}</span>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <p className="text-gray-600 mb-6">{step.description}</p>
                                        
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                                                    <BookOpen className="w-5 h-5 mr-2 text-indigo-600" />
                                                    Resources
                                                </h4>
                                                <ul className="space-y-2">
                                                    {step.resources.map((resource, idx) => (
                                                        <li key={idx} className="flex items-center text-gray-600">
                                                            <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3" />
                                                            {resource}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            
                                            <div>
                                                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                                                    <Star className="w-5 h-5 mr-2 text-purple-600" />
                                                    Skills You'll Learn
                                                </h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {step.skills.map((skill, idx) => (
                                                        <span
                                                            key={idx}
                                                            className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
                                                        >
                                                            {skill}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Completion Celebration */}
                {completionPercentage === 100 && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl p-8 text-center text-white mt-12"
                    >
                        <Award className="w-16 h-16 mx-auto mb-4" />
                        <h2 className="text-3xl font-bold mb-2">Congratulations! 🎉</h2>
                        <p className="text-xl mb-4">You've completed your learning roadmap!</p>
                        <p className="text-green-100">
                            You're now ready to pursue opportunities as a {formatRoleName(roadmap.role)}
                        </p>
                    </motion.div>
                )}
            </div>
        </div>
    );
}