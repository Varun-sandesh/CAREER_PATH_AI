const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const compression = require('compression');
const path = require('path');
const { GoogleGenerativeAI } = require('@google/generative-ai');

// Load environment variables from the project root .env file
require('dotenv').config({ path: path.resolve(__dirname, '..', '.env') });

const API_KEY = process.env.GEMINI_API_KEY;

if (!API_KEY) {
    console.error("FATAL ERROR: GEMINI_API_KEY is missing. Check your project/.env file.");
    process.exit(1);
}

// Configuration Constants
const MODEL_NAME = "gemini-2.5-flash"; 
const MAX_RETRIES = 3;
const RETRY_DELAY_MS = 2000; // 2 seconds

const genAI = new GoogleGenerativeAI(API_KEY);

const app = express();
const PORT = process.env.PORT || 3001;

// Global state (In a real app, use a database/session store)
let userGuidance = null;
let userAnswers = null;
let chatHistory = [];

// --- Retry Logic Helper ---

/**
 * Utility function to pause execution.
 * @param {number} ms - Milliseconds to wait.
 */
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// --- Security and Middleware Setup ---
app.use(helmet());
app.use(compression());
app.use(cors({
    origin: ['http://localhost:5173', 'http://localhost:3000'], // Allow your frontend
    credentials: true
}));
app.use(morgan('combined'));
app.use(express.json({ limit: '10mb' }));

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
    standardHeaders: true,
    legacyHeaders: false,
});
app.use(limiter);

// --- AI Generation Functions (with Retry Logic) ---

// 1. Function for the initial detailed career questionnaire
async function generateCareerGuidance(answers) {
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });

    const prompt = `
You are an expert career counselor and AI assistant. Based on the following user responses, provide comprehensive career guidance:

User Profile:
- Skill Level: ${answers['skill-level']}
- Desired Role: ${answers['desired-role']}
- Industry: ${answers['industry']}
- Time Commitment: ${answers['time-commitment']}
- Timeline: ${answers['timeline']}
- Learning Style: ${answers['learning-style']}
- Programming Languages: ${answers['programming-languages']}
- Tools/Frameworks: ${answers['tools-frameworks']}
- Strengths/Weaknesses: ${answers['strengths-weaknesses']}
- Career Goals: ${answers['career-goals']}

Please provide a structured response with the following sections:

1. CAREER SUMMARY: Brief overview of their current position and potential
2. RECOMMENDED PATH: Specific career trajectory with 3-5 key steps
3. SKILL DEVELOPMENT: Top 5 skills to focus on with priority order
4. LEARNING RESOURCES: Mix of free and paid resources (courses, books, platforms)
5. TIMELINE MILESTONES: Month-by-month goals for next 12 months
6. NETWORKING TIPS: Industry-specific networking advice
7. MARKET INSIGHTS: Current job market trends for their field

Make it personalized, actionable, and encouraging. Include specific resource recommendations and realistic timelines.
`;

    for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
        try {
            console.log(`Attempt ${attempt} to generate career guidance...`);
            const result = await model.generateContent(prompt);
            return result.response.text(); // Success!
        } catch (error) {
            if (error.status === 503 && attempt < MAX_RETRIES) {
                console.warn(`[503 Warning] Model overloaded on attempt ${attempt}. Retrying in ${RETRY_DELAY_MS / 1000} seconds...`);
                await delay(RETRY_DELAY_MS); 
            } else {
                console.error('AI generation error:', error);
                throw new Error('Failed to generate career guidance');
            }
        }
    }
}

// 2. Function for preset career roadmaps
async function generatePresetRoadmap(role) {
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });
    const roleClean = role.replace(/-/g, ' ');

    const prompt = `
You are an expert career planner. The user wants to see a detailed 12-month roadmap for the role: ${roleClean}.
Provide a structured response with the following sections for a beginner/intermediate aiming for this role:

1. ROLE OVERVIEW: Brief description and typical responsibilities.
2. LEARNING PATH: 4 key learning phases (e.g., Fundamentals, Core Skills, Portfolio Projects, Interview Prep).
3. MONTHLY MILESTONES: Specific, measurable tasks for the next 12 months.
4. KEY RESOURCES: 3 recommended learning resources (e.g., course, book, free platform) specific to this role.
5. SKILL CHECKLIST: A list of 5 essential technical skills for this role.

Make the response encouraging and highly detailed.
`;
    
    for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
        try {
            console.log(`Attempt ${attempt} to generate preset roadmap for ${roleClean}...`);
            const result = await model.generateContent(prompt);
            return result.response.text(); // Success!
        } catch (error) {
            if (error.status === 503 && attempt < MAX_RETRIES) {
                console.warn(`[503 Warning] Model overloaded on attempt ${attempt}. Retrying in ${RETRY_DELAY_MS / 1000} seconds...`);
                await delay(RETRY_DELAY_MS); 
            } else {
                console.error('Roadmap AI generation error:', error);
                throw new Error('Failed to generate preset roadmap');
            }
        }
    }
}


// 3. Function for the ongoing chat interaction
async function generateChatResponse(message, history = [], careerRole = null) {
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });

    const contextPrompt = `
You are a professional AI Career Assistant. You help people with:
- Career advice and planning
- Skill development recommendations
- Job search strategies
- Interview preparation
- Resume and LinkedIn optimization
- Industry insights and trends
- Salary negotiation tips
- Work-life balance advice
- Professional networking
${careerRole ? `\n\nIMPORTANT: The user is currently viewing the roadmap for the **${careerRole.replace('-', ' ')}** role. Tailor your advice specifically for this career path when relevant. Provide insights about skills, learning resources, job market, salary expectations, and career progression for this role.` : ''}

Previous conversation context (last 6 messages):
${history.slice(-6).map(msg => `${msg.sender}: ${msg.text}`).join('\n')}

Current user message: ${message}

Provide helpful, professional, and encouraging career advice. Keep responses concise but informative (2-3 paragraphs max). Be supportive and actionable.
`;

    for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
        try {
            const result = await model.generateContent(contextPrompt);
            return result.response.text(); // Success!
        } catch (error) {
            if (error.status === 503 && attempt < MAX_RETRIES) {
                await delay(RETRY_DELAY_MS);
            } else {
                console.error('Chat AI generation error:', error);
                throw new Error('Failed to generate chat response');
            }
        }
    }
}


// --- API Routes ---

app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.post('/api/questionnaire', async (req, res) => {
    try {
        const { answers } = req.body;

        const aiGuidance = await generateCareerGuidance(answers);

        userGuidance = aiGuidance;
        userAnswers = answers;

        res.json({
            success: true,
            guidance: aiGuidance,
            answers: answers,
            message: 'Career guidance generated successfully'
        });
    } catch (error) {
        console.error('Questionnaire submission error:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to process questionnaire',
            message: error.message
        });
    }
});

// ROUTE: Get a roadmap for a preset role
app.get('/api/roadmap/:roleName', async (req, res) => {
    try {
        const roleName = req.params.roleName;

        if (!roleName) {
             return res.status(400).json({ error: 'Role name is required' });
        }

        const roadmapGuidance = await generatePresetRoadmap(roleName);
        
        res.json({
            success: true,
            role: roleName.replace(/-/g, ' '),
            roadmap: roadmapGuidance,
            message: `Roadmap generated for ${roleName.replace(/-/g, ' ')}`
        });
    } catch (error) {
        console.error('Roadmap generation error:', error);
        res.status(500).json({ error: 'Failed to generate roadmap' });
    }
});


app.get('/api/career-guidance', async (req, res) => {
    try {
        if (!userGuidance) {
            return res.status(404).json({ error: 'No career guidance found. Please complete the questionnaire first.' });
        }

        res.json({
            guidance: userGuidance,
            answers: userAnswers,
            createdAt: new Date(),
            updatedAt: new Date()
        });
    } catch (error) {
        console.error('Get guidance error:', error);
        res.status(500).json({ error: 'Failed to fetch career guidance' });
    }
});

app.post('/api/chat', async (req, res) => {
    try {
        const { message, careerRole } = req.body;

        if (!message || message.trim().length === 0) {
            return res.status(400).json({ error: 'Message is required' });
        }

        // Pass careerRole to context for better answers
        const aiResponse = await generateChatResponse(message, chatHistory, careerRole);

        chatHistory.push(
            { sender: 'user', text: message, timestamp: new Date() },
            { sender: 'ai', text: aiResponse, timestamp: new Date() }
        );

        // Keep chat history manageable
        if (chatHistory.length > 20) {
            chatHistory = chatHistory.slice(-20);
        }

        res.json({
            response: aiResponse,
            timestamp: new Date()
        });
    } catch (error) {
        console.error('Chat error:', error);
        res.status(500).json({
            error: 'Failed to process chat message',
            message: error.message
        });
    }
});

app.get('/api/progress', async (req, res) => {
    try {
        // Static data for progress visualization (in a real app, this would be dynamic)
        const defaultProgress = {
            completedSteps: 3,
            totalSteps: 20,
            skillAssessments: [
                { skill: 'Programming', level: 60, target: 85 },
                { skill: 'Problem Solving', level: 75, target: 90 },
                { skill: 'Communication', level: 70, target: 80 },
                { skill: 'Leadership', level: 45, target: 75 }
            ],
            monthlyProgress: [
                { month: 'Jan', completed: 2, target: 3 },
                { month: 'Feb', completed: 4, target: 5 },
                { month: 'Mar', completed: 6, target: 7 },
                { month: 'Apr', completed: 3, target: 6 },
                { month: 'May', completed: 8, target: 8 },
                { month: 'Jun', completed: 5, target: 6 }
            ],
            achievements: [
                { name: 'Profile Complete', earned: true, date: '2024-01-15' },
                { name: 'First Assessment', earned: true, date: '2024-01-20' },
                { name: 'Learning Streak', earned: true, date: '2024-02-01' },
                { name: 'Skill Master', earned: false, date: null },
                { name: 'Goal Achiever', earned: false, date: null }
            ],
            createdAt: new Date()
        };

        res.json(defaultProgress);
    } catch (error) {
        console.error('Get progress error:', error);
        res.status(500).json({ error: 'Failed to fetch user progress' });
    }
});

app.post('/api/progress', async (req, res) => {
    try {
        // In a real app, logic to update database here
        const { stepCompleted, skillUpdate } = req.body;

        res.json({ success: true, message: 'Progress updated successfully' });
    } catch (error) {
        console.error('Update progress error:', error);
        res.status(500).json({ error: 'Failed to update progress' });
    }
});

app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        console.log('Contact form submitted:', { name, email, subject, message });

        res.json({
            success: true,
            message: 'Contact form submitted successfully'
        });
    } catch (error) {
        console.error('Contact form error:', error);
        res.status(500).json({ error: 'Failed to submit contact form' });
    }
});

// --- Error Handlers ---

app.use((error, req, res, next) => {
    console.error('Unhandled error:', error);
    res.status(500).json({
        error: 'Internal server error',
        message: 'Something went wrong on our end'
    });
});

app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

// --- Server Start ---

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(`📊 Health check: http://localhost:${PORT}/api/health`);
    console.log(`🤖 AI Assistant ready for chat and roadmap requests`);
});

module.exports = app;