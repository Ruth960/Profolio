import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Contacts from './components/contacts';
import Resume from './components/Resume'; 
import Blogs from './components/Blogs'; 
import ParticleBackground from './components/ParticleBackground'; 
import ThemeContext from './contexts/ThemeContext'; 

function App() {
  // Theme state (dark/light mode)
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  // Toggle theme function
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // Save preference to localStorage
    localStorage.setItem('darkMode', !isDarkMode);
  };
  
  // Check for saved theme preference on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme !== null) {
      setIsDarkMode(savedTheme === 'true');
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <div
        style={{
          width: '100%',
          minHeight: '100vh',
          backgroundColor: isDarkMode ? '#111827' : '#f8fafc',
          color: isDarkMode ? 'white' : '#334155',
          transition: 'background-color 0.3s, color 0.3s',
        }}
      >
        {/* Particle background that follows theme */}
        <ParticleBackground isDarkMode={isDarkMode} />
        
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/blog" element={<Blogs />} />
          </Routes>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;