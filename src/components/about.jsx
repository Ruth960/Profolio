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
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
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
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding: '150px 20px',

        transform: 'translateY(50px)',
        transition: 'opacity 0.8s ease, transform 0.8s ease',
        maxWidth: '1200px',
        margin: '0 auto',
        '@media (minWidth: 768px)': {
          flexDirection: 'row',
        },
      }}
      className="md:flex-row"
    >
      <div
        style={{
          flex: 1,
          marginRight: '5',
          marginBottom: '50px',
          backgroundColor: isDarkMode ? 'rgba(17, 24, 39, 0.5)' : 'rgba(255, 255, 255, 0.8)',
          color: isDarkMode ? 'white' : '#334155',
          padding: '30px',
          borderRadius: '15px',
          backdropFilter: 'blur(10px)',
          boxShadow: isDarkMode ? '0 4px 12px rgba(255, 255, 255, 0.1)' : '0 4px 12px rgba(0, 0, 0, 0.1)',
          transition: 'all 0.3s ease',
          '@media (minWidth: 768px)': {
            marginRight: '50px',
            marginBottom: '0',
          },
        }}
        className="md:mr-12 md:mb-0"
      >
        <h1 
          style={{ 
            color: isDarkMode ? 'white' : '#334155', 
            textAlign: 'center', 
            margin: '30px 0',
            fontSize: '2.5rem',
            backgroundImage: 'linear-gradient(to right, #4f46e5, #ec4899)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          About Me
        </h1>
        <div style={{ textAlign: 'justify' }}>
          <p style={{ padding: '10px 0', lineHeight: '1.6' }}>
            I am a tech-driven problem solver passionate about emerging technologies and data-driven solutions.
            I have worked on projects that integrate AI, IoT, and automation to tackle real-world challenges. My experience includes
            developing smart systems for agriculture, home automation, and intelligent assistants.
          </p>
          <p style={{ padding: '10px 0', lineHeight: '1.6' }}>
            Beyond technology, I am committed to driving impact through innovation,
            particularly in areas like sustainability and accessibility. I believe in creating solutions that not only solve problems
            but also empower communities and promote inclusivity.
          </p>
         
          <p style={{ padding: '10px 0', lineHeight: '1.6' }}>
            I am seeking opportunities to collaborate on projects that leverage technology to drive positive
            change and create value for society. Feel free to reach out if you share similar interests or have
            exciting projects in mind!
          </p>
        </div>
      </div>

      <div
        style={{
          backgroundColor: 'transparent',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flex: '0 0 auto',
        }}
      >
        <div style={{
          position: 'relative',
          width: '350px',
          height: '350px',
        }}>
          <img
            src="myimage.jpg"
            alt="my profile"
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              objectFit: 'cover',
              boxShadow: isDarkMode ? '0 0 25px rgba(255, 255, 255, 0.2)' : '0 0 25px rgba(0, 0, 0, 0.2)',
              border: isDarkMode ? '8px solid rgba(255, 255, 255, 0.1)' : '8px solid rgba(0, 0, 0, 0.05)',
              transition: 'all 0.3s ease',
              zIndex: 1,
            }}
          />
          {/* Decorative ring */}
          <div style={{
            position: 'absolute',
            top: '-15px',
            left: '-15px',
            right: '-15px',
            bottom: '-15px',
            borderRadius: '50%',
            border: `2px solid ${isDarkMode ? '#9333ea' : '#4f46e5'}`,
            animation: 'spin 15s linear infinite',
            zIndex: 0,
          }}></div>
        </div>
      </div>
    </div>
  );
}