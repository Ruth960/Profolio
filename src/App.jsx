import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./components/Home'));
const Contacts = lazy(() => import('./components/contacts'));
const Resume = lazy(() => import('./components/Resume'));
const Blogs = lazy(() => import('./components/Blogs')); 
 
import ThemeContext from './contexts/ThemeContext'; 
import emailjs from 'emailjs-com';


emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

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
    // Check for saved theme preference
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
        
        
        <Router>
          <Suspense fallback={
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                backgroundColor: isDarkMode ? '#111827' : '#f8fafc',
              }}>
                <div style={{
                  border: '4px solid rgba(0, 0, 0, 0.1)',
                  borderLeftColor: isDarkMode ? '#f8fafc' : '#334155',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  animation: 'spin 1s linear infinite',
                }}></div>
                <style>
                  {`
                    @keyframes spin {
                      0% { transform: rotate(0deg); }
                      100% { transform: rotate(360deg); }
                    }
                  `}
                </style>
              </div>
            }>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/blog" element={<Blogs />} />
            </Routes>
          </Suspense>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;