import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Profile from './pages/Profile';
import Onboarding from './pages/Onboarding';
import Progress from './pages/Progress';
import Roadmap from './pages/Roadmap';
import Results from './pages/Results';
import AIAssistant from './pages/AIAssistant';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/results" element={<Results />} />
            <Route path="/ai-assistant" element={<AIAssistant />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;