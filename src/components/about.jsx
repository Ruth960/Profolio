import React, { useContext, useEffect, useRef } from 'react';
import ThemeContext from '../contexts/ThemeContext';

export default function About() {
  const { isDarkMode } = useContext(ThemeContext);
  const aboutRef = useRef(null);
  
  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
        }
      },
      { threshold: 0.1 }
    );
    
    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }
    
    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={aboutRef}
      className={`
        flex flex-col md:flex-row items-center justify-evenly
        px-4 py-32 max-w-6xl mx-auto
        opacity-0 translate-y-12 transition-all duration-800
      `}
    >
      <div
        className={`
          flex-1 mb-12 md:mb-0 md:mr-12 p-8
          rounded-2xl backdrop-blur-md transition-all duration-300
          ${isDarkMode 
            ? 'bg-gray-900/50 text-white shadow-lg shadow-white/10' 
            : 'bg-white/80 text-slate-700 shadow-lg shadow-black/10'
          }
        `}
      >
        <h1 className="text-4xl text-center my-8 bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent">
          About Me
        </h1>
        <div className="text-justify">
          <p className="py-2.5 leading-relaxed">
            I am a tech-driven problem solver passionate about emerging technologies and data-driven solutions.
            I have worked on projects that integrate AI, IoT, and automation to tackle real-world challenges. My experience includes
            developing smart systems for agriculture, home automation, and intelligent assistants.
          </p>
          <p className="py-2.5 leading-relaxed">
            Beyond technology, I am committed to driving impact through innovation,
            particularly in areas like sustainability and accessibility. I believe in creating solutions that not only solve problems
            but also empower communities and promote inclusivity.
          </p>
         
          <p className="py-2.5 leading-relaxed">
            I am seeking opportunities to collaborate on projects that leverage technology to drive positive
            change and create value for society. Feel free to reach out if you share similar interests or have
            exciting projects in mind!
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
          <img
            src="myimage.jpg"
            alt="my profile"
            className={`
              w-full h-full rounded-full object-cover transition-all duration-300
              ${isDarkMode 
                ? 'shadow-lg shadow-white/20 border-8 border-white/10' 
                : 'shadow-lg shadow-black/20 border-8 border-black/5'
              }
            `}
            style={{ zIndex: 1 }}
          />
          {/* Decorative ring */}
          <div 
            className={`
              absolute -inset-4 rounded-full
              border-2 ${isDarkMode ? 'border-purple-600' : 'border-indigo-600'}
            `}
            style={{ 
              animation: 'spin 15s linear infinite',
              zIndex: 0 
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}