<!-- PROJECT LOGO -->
<p align="center">
  <img src="https://img.icons8.com/?size=512&id=117564&format=png" width="120" alt="AI Logo"/>
</p>

<h1 align="center">CareerPath AI</h1>

<p align="center">
  🚀 <strong>AI-Powered Personalized Career Guidance, Learning Roadmaps & Growth Assistant</strong>  
  <br/>
  Built with React, TypeScript, Tailwind & Framer Motion  
</p>

<p align="center">
  <a href="#"><img src="https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react" /></a>
  <a href="#"><img src="https://img.shields.io/badge/TailwindCSS-3-blue?style=for-the-badge&logo=tailwindcss" /></a>
  <a href="#"><img src="https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript" /></a>
  <a href="#"><img src="https://img.shields.io/badge/Framer--Motion-Animations-purple?style=for-the-badge&logo=framer" /></a>
</p>

---

# 🌟 Overview

**CareerPath AI** is a modern, interactive career development platform that generates a  
**personalized career journey** using **AI**, **dynamic learning roadmaps**, a **progress dashboard**,  
and a built-in **AI career assistant**.

It helps users:
- Discover their ideal role  
- Learn required skills  
- Follow a clear roadmap  
- Track their progress  
- Ask AI questions anytime  

---

# ✨ Features

## 🧭 AI-Powered Career Guidance
✔ Personalized recommendations  
✔ AI-generated steps, skills, insights  
✔ Expandable sections with animations  
✔ Auto-saved for later viewing  

## 🗺️ Dynamic Learning Roadmaps
✔ Career-specific step-by-step plans  
✔ Skills, resources, estimated timelines  
✔ Supports multiple tracks (SE, DS, PM, UX... etc.)  
✔ Fully interactive UI  

## 📊 Progress Dashboard
✔ Tracks learning milestones  
✔ Visual progress percentage  
✔ Next milestone indicator  
✔ Achievement-style layout  

## 🎯 Intelligent Onboarding Questionnaire
✔ Multi-step animated onboarding  
✔ Collects skill level, goals, learning style  
✔ Generates career guidance using AI API  

## 🧠 AI Career Assistant Chat
✔ Ask questions anytime  
✔ Get explanations, suggestions, advice  
✔ Works like a mini ChatGPT career coach  

## 👤 User Profile
✔ Auto-saves details  
✔ Editable profile info  
✔ Shows learning preferences, strengths, languages  

---

# 🛠️ Tech Stack

| Category | Tools |
|---------|--------|
| Frontend | React, TypeScript |
| Styling | Tailwind CSS |
| UI Enhancements | Framer Motion, Lucide Icons |
| Routing | React Router |
| Storage | LocalStorage |
| AI Layer | Custom API (submitQuestionnaire + getCareerGuidance) |

---

# 📁 Folder Structure

```md
src/
├── 📂 components
│   ├── 🧩 Header.tsx
│   ├── 🧩 Footer.tsx
│   └── 🧩 QuestionCard.tsx
│
├── 📂 pages
│   ├── 🏠 Home.tsx
│   ├── ℹ️ About.tsx
│   ├── 📞 Contact.tsx
│   ├── 👤 Profile.tsx
│   ├── 🧭 Onboarding.tsx
│   ├── 📊 Progress.tsx
│   ├── 🗺️ Roadmap.tsx
│   ├── 🧠 Results.tsx
│   └── 🤖 AIAssistant.tsx
│
├── 📂 data
│   ├── ❓ questions.ts
│   ├── 👨‍💼 careerRoles.ts
│   └── 🛣️ roadmapData.ts
│
├── 📂 services
│   └── 🔌 api.ts
│
├── ⚛️ App.tsx
├── 🚀 main.tsx
└── 🎨 index.css
```


---

# 🧭 User Flow

1. **User starts onboarding** → answers questions  
2. Answers are sent to **submitQuestionnaire()**  
3. AI generates: career path, skills, roadmap reasoning  
4. User sees results in expandable sections  
5. User selects a career roadmap  
6. Progress and completed steps are tracked  
7. AI Assistant is available anytime  

---

# 📘 Key Features Explained

## 🚀 Onboarding (Onboarding.tsx)
- Multi-step animated flow  
- Two types of questions:
  - Multiple-choice  
  - Text-based  
- Saves answers locally  
- On final step → AI API call  
- Generates guidance + stores JSON in LocalStorage  

---

## 🧠 Results Page (Results.tsx)
AI text is parsed into sections:

### 📌 Sections Included
- Career Summary  
- Recommended Path  
- Skill Development  
- Learning Resources  
- Timeline Milestones  
- Networking Tips  
- Market Insights  

Expandable cards built with Framer Motion.

---

## 📊 Progress Dashboard (Progress.tsx)

Displays:

- **% completion**
- **Completed steps**
- **Next step**
- **Roadmap overview**

---

## 🧠 AI Assistant (AIAssistant.tsx)

Chat-style interface where users can ask:

- Career questions  
- Skill recommendations  
- Learning resources  
- Technical explanations  

---

## ⚙️ Installation

### 1️⃣ Install dependencies
```bash
npm install
```

### 2️⃣ Start development server
```bash
npm run dev
```

### 3️⃣ Build for production
```bash
npm run build
```

---

## 🔌 API Layer

### `submitQuestionnaire(answers)`
Sends user onboarding answers → returns **AI-generated guidance text**.

### `getCareerGuidance()`
Fetches guidance from **server** or fallback to **LocalStorage**.

---

## 🎨 UI & Branding

This project uses:

- 🔵 Blue → Purple gradient theme  
- ✨ Smooth animations  
- 🟦 Rounded card UI  
- 🧩 Modern minimal layout  
- 📱 Fully responsive  

---

## 🚀 Future Improvements

- Firebase/Supabase auth  
- Cloud-synced progress  
- More career tracks  
- Resume builder  
- Skill assessments  
- Streak system  
- AI voice assistant  

---

## 🙌 Contributing
PRs, issues, and suggestions are welcome!

---

## 📜 License
MIT License © 2025

---

<p align="center">
  <strong>Made with ❤️ by Varun</strong><br/>
  CareerPath AI — Empowering your future 🚀
</p>


