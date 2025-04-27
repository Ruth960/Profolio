import React, { useState, useContext } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import { Moon, Sun, Menu, X } from 'lucide-react';
import ThemeContext from '../contexts/ThemeContext';

export default function Navbar({ links, title }) {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      style={{
        width: '100%',
        margin: '0 auto',
        background: isDarkMode ? 'rgba(17, 24, 39, 0.8)' : 'rgba(248, 250, 252, 0.8)',
        backdropFilter: 'blur(10px)',
        color: isDarkMode ? 'white' : '#334155',
        padding: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'fixed',
        top: 0,
        zIndex: 1000,
        transition: 'all 0.3s ease',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      }}
    >
      {/* Logo/Title area */}
      <div 
        style={{ 
          fontWeight: 'bold', 
          fontSize: '30px',
          background: 'linear-gradient(to right, #4f46e5, #ec4899)',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
        }}
      >
        {title}
      </div>
      
      {/* Desktop Navigation Links */}
      <div 
        style={{ 
          display: 'flex', 
          gap: '10px',
          alignItems: 'center',
          '@media (maxWidth: 768px)': {
            display: 'none',
          }
        }}
        className="hidden md:flex"
      >
        {links && links.map((link, index) => (
          <ScrollLink
            key={index}
            to={link.path}
            smooth={true}
            duration={500}
            style={{
              color: isDarkMode ? 'white' : '#334155',
              borderRadius: '5px',
              padding: '10px 20px',
              textDecoration: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
            }}
          >
            {link.text}
          </ScrollLink>
        ))}
        
        {/* Additional navigation links */}
        <RouterLink
          to="/resume"
          style={{
            color: isDarkMode ? 'white' : '#334155',
            borderRadius: '5px',
            padding: '10px 20px',
            textDecoration: 'none',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'transparent';
          }}
        >
          Resume
        </RouterLink>
        
        
        
        {/* Theme toggle button */}
        <button
          onClick={toggleTheme}
          style={{
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: '10px',
            padding: '8px',
            borderRadius: '50%',
            color: isDarkMode ? 'white' : '#334155',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'transparent';
          }}
        >
          {isDarkMode ? (
            <Sun size={24} />
          ) : (
            <Moon size={24} />
          )}
        </button>
      </div>
      
      {/* Mobile menu button */}
      <div className="md:hidden flex items-center">
        <button
          onClick={toggleTheme}
          style={{
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            marginRight: '15px',
            padding: '8px',
            borderRadius: '50%',
            color: isDarkMode ? 'white' : '#334155',
          }}
        >
          {isDarkMode ? (
            <Sun size={24} />
          ) : (
            <Moon size={24} />
          )}
        </button>
        
        <button
          onClick={toggleMenu}
          style={{
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {isMenuOpen ? (
            <X size={24} color={isDarkMode ? 'white' : '#334155'} />
          ) : (
            <Menu size={24} color={isDarkMode ? 'white' : '#334155'} />
          )}
        </button>
      </div>
      
      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '70px',
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: isDarkMode ? 'rgba(17, 24, 39, 0.95)' : 'rgba(248, 250, 252, 0.95)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            flexDirection: 'column',
            padding: '2rem',
            zIndex: 999,
            animation: 'fadeIn 0.3s ease',
          }}
        >
          {links && links.map((link, index) => (
            <ScrollLink
              key={index}
              to={link.path}
              smooth={true}
              duration={500}
              onClick={() => setIsMenuOpen(false)}
              style={{
                color: isDarkMode ? 'white' : '#334155',
                borderRadius: '5px',
                padding: '15px',
                textDecoration: 'none',
                cursor: 'pointer',
                textAlign: 'center',
                fontSize: '1.2rem',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
              }}
            >
              {link.text}
            </ScrollLink>
          ))}
          
          <RouterLink
            to="/resume"
            onClick={() => setIsMenuOpen(false)}
            style={{
              color: isDarkMode ? 'white' : '#334155',
              borderRadius: '5px',
              padding: '15px',
              textDecoration: 'none',
              cursor: 'pointer',
              textAlign: 'center',
              fontSize: '1.2rem',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
            }}
          >
            Resume
          </RouterLink>
          
          <RouterLink
            to="/blog"
            onClick={() => setIsMenuOpen(false)}
            style={{
              color: isDarkMode ? 'white' : '#334155',
              borderRadius: '5px',
              padding: '15px',
              textDecoration: 'none',
              cursor: 'pointer',
              textAlign: 'center',
              fontSize: '1.2rem',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
            }}
          >
            Blog
          </RouterLink>
        </div>
      )}
    </nav>
  );
}