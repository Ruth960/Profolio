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
      className={`
        w-full fixed top-0 z-50 px-4 py-5
        flex justify-between items-center
        transition-all duration-300 shadow-sm
        ${isDarkMode 
          ? 'bg-gray-900/80 text-white' 
          : 'bg-slate-50/80 text-slate-700'
        } backdrop-blur-md
      `}
    >
      {/* Logo/Title area */}
      <div className="font-bold text-2xl sm:text-3xl bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent">
        {title}
      </div>
      
      {/* Desktop Navigation Links */}
      <div className="hidden md:flex items-center gap-2">
        {links && links.map((link, index) => (
            <ScrollLink
              key={index}
              to={link.path}
              smooth={true}
              duration={500}
              className={`
                px-5 py-2.5 rounded-md cursor-pointer
                transition-all duration-300 hover:bg-opacity-10
                ${isDarkMode ? 'hover:bg-white' : 'hover:bg-black'}
              `}
            >
              {link.text}
            </ScrollLink>
          ))}
        
        {/* Additional navigation links */}
        <RouterLink
          to="/resume"
          className={`
            px-5 py-2.5 rounded-md cursor-pointer
            transition-all duration-300 hover:bg-opacity-10
            ${isDarkMode ? 'hover:bg-white' : 'hover:bg-black'}
          `}
        >
          Resume
        </RouterLink>
        
        {/* Theme toggle button */}
        <button
          onClick={toggleTheme}
          className={`
            bg-transparent border-none cursor-pointer
            flex items-center justify-center ml-2 p-2 rounded-full
            transition-all duration-300 hover:bg-opacity-10
            ${isDarkMode ? 'hover:bg-white' : 'hover:bg-black'}
          `}
        >
          {isDarkMode ? (
            <Sun size={24} />
          ) : (
            <Moon size={24} />
          )}
        </button>
      </div>
      
      {/* Mobile menu button */}
      <div className="flex items-center md:hidden">
        <button
          onClick={toggleTheme}
          className={`
            bg-transparent border-none cursor-pointer p-2 rounded-full mr-4
            ${isDarkMode ? 'text-white' : 'text-slate-700'}
          `}
        >
          {isDarkMode ? (
            <Sun size={22} />
          ) : (
            <Moon size={22} />
          )}
        </button>
        
        <button
          onClick={toggleMenu}
          className="bg-transparent border-none cursor-pointer flex items-center justify-center"
        >
          {isMenuOpen ? (
            <X size={24} className={isDarkMode ? 'text-white' : 'text-slate-700'} />
          ) : (
            <Menu size={24} className={isDarkMode ? 'text-white' : 'text-slate-700'} />
          )}
        </button>
      </div>
      
      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className={`
           
            flex flex-col p-2 animate-fadeIn
            backdrop-gray-md
            ${isDarkMode ? 'bg-gray-900/95' : 'bg-slate-50/95'}
          `}
        >
          {links && links.map((link, index) => (
            <ScrollLink
              key={index}
              to={link.path}
              smooth={true}
              duration={500}
              onClick={() => setIsMenuOpen(false)}
              className={`
                py-2 px-3 rounded-md text-center text-xl cursor-pointer
                transition-all duration-300 hover:bg-opacity-10
                ${isDarkMode ? 'text-white hover:bg-white' : 'text-slate-700 hover:bg-black'}
              `}
            >
              {link.text}
            </ScrollLink>
          ))}
          <RouterLink
            to="/resume"
            onClick={() => setIsMenuOpen(false)}
            className={`
              py-2 px-3 rounded-md text-center text-xl cursor-pointer
              transition-all duration-300 hover:bg-opacity-10
              ${isDarkMode ? 'text-white hover:bg-white' : 'text-slate-700 hover:bg-black'}
            `}
          >
            Resume
          </RouterLink>
        </div>
      )}
    </nav>
  );
}