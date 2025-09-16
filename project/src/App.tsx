import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIAgentDemo from './components/demos/AIAgentDemo';
import ChatbotDemo from './components/demos/ChatbotDemo';
import AutomationDemo from './components/demos/AutomationDemo';
import MLDemo from './components/demos/MLDemo';
import Operations24Demo from './components/demos/Operations24Demo';
import AnalyticsDemo from './components/demos/AnalyticsDemo';

const HomePage = () => (
  <>
    <Header />
    <Hero />
    <Services />
    <Portfolio />
    <About />
    <Testimonials />
    <Contact />
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/demo/ai-agent" element={<AIAgentDemo onBack={() => window.history.back()} />} />
          <Route path="/demo/chatbot" element={<ChatbotDemo onBack={() => window.history.back()} />} />
          <Route path="/demo/automation" element={<AutomationDemo onBack={() => window.history.back()} />} />
          <Route path="/demo/machine-learning" element={<MLDemo onBack={() => window.history.back()} />} />
          <Route path="/demo/operations-24-7" element={<Operations24Demo onBack={() => window.history.back()} />} />
          <Route path="/demo/analytics" element={<AnalyticsDemo onBack={() => window.history.back()} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;