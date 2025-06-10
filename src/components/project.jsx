import React, { useContext } from 'react';
import ThemeContext from '../contexts/ThemeContext';

export default function Project() {
  const { isDarkMode } = useContext(ThemeContext);

  // Dynamic styling based on theme
  const textColor = isDarkMode ? 'white' : '#334155';
  const descriptionColor = isDarkMode ? 'white' : '#334155';
  const cardBg = isDarkMode 
    ? 'rgba(17, 24, 39, 0.5)' // Similar to about section's bg-gray-900/50
    : 'rgba(255, 255, 255, 0.8)'; // Similar to about section's bg-white/80
  const cardShadow = isDarkMode 
    ? '0 10px 15px rgba(255, 255, 255, 0.1)' 
    : '0 10px 15px rgba(0, 0, 0, 0.1)';
  
  const styles = {
    section: {
      padding: '80px 24px',
      backgroundColor: isDarkMode ? 'rgb(21, 3, 62)' : '#f8fafc',
      color: textColor,
      transition: 'background-color 0.3s, color 0.3s',
    },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '20px',
      justifyContent: 'center',
      padding: '20px',
    },
    
    card: {
      flex: '1 1 calc(100% - 40px)', // Full width on small screens
      maxWidth: '350px', // Limit width on larger screens
      backgroundColor: cardBg,
      borderRadius: '10px',
      padding: '20px',
      boxShadow: cardShadow,
      transition: 'transform 0.3s',
      backdropFilter: 'blur(8px)',
    },
    
    cardTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '8px',
      color: textColor,
      textAlign:'center'
    },
    cardDescription: {
      color: descriptionColor,
      padding: 10,
      marginBottom: '16px',
    },
    tagsContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px',
      marginBottom: '16px',
    },
    tag: {
      fontSize: '0.75rem',
      padding: '4px 12px',
      borderRadius: '9999px',
      backgroundColor: '#f3e8ff',
      color: '#9333ea',
    },
    button: {
      alignItems: 'center',
      backgroundColor: 'blueviolet',
      padding: '10px',
      margin: '1',
      borderRadius: '20px',
      color: 'white',
      textDecoration: 'none',
      display: 'inline-block',
      textAlign: 'center',
      cursor: 'pointer',
      transition: 'all 0.3s',
    },
    buttonHover: {
      opacity: '0.2',
      backgroundColor: 'blue',
    },
    buttonsContainer: {
      display: 'flex',
      gap: '16px',
      flexWrap: 'wrap', // Allow buttons to wrap on small screens
      justifyContent: 'center', // Center buttons when wrapped
    },
  };

  // Add hover effect
  const handleCardMouseEnter = (e) => {
    e.currentTarget.style.transform = 'translateY(-10px)';
    e.currentTarget.style.boxShadow = isDarkMode 
      ? '0 15px 25px rgba(255, 255, 255, 0.15)' 
      : '0 15px 25px rgba(0, 0, 0, 0.15)';
  };

  const handleCardMouseLeave = (e) => {
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = cardShadow;
  };

  const projects = [
    {
      title: "IoT-Based Hydroponic System",
      description: "Developed an automated hydroponic farming system using IoT technologies, focusing on data pipeline setup and sensor integration.",
      tags: ["IoT", "Python", "Hardware"],
      codeLink: "https://github.com/Ruth960/IoT-based-Hydroponic-System",
      demoLink: null
    },
    {
      title: "Home Automation System",
      description: "The project aims to enhance convenience and efficiency by integrating technology into our daily lives. By automating tasks creating a seamless and personalized living experience.",
      tags: ["IoT", "Arduino", "Hardware"],
      codeLink: "https://github.com/Ruth960/Home-Automation-",
      demoLink: null
    },
    {
      title: "Automatic Number Plate Recognition",
      description: "Programmed a system for automatic detection and recognition of vehicle license plates using image processing techniques.",
      tags: ["Python", "OpenCV", "Teslaflow"],
      codeLink: "https://github.com/Ruth960",
      demoLink: null
    },
    {
      title: "Personal Portfolio",
      description: "Developed a personal portfolio website to showcase my projects and skills using React and Tailwind CSS.",
      tags: ["React", "Tailwind", "Web"],
      codeLink: "https://github.com/Ruth960/Profolio",
      demoLink: "https://profolio-gules.vercel.app/"
    },
    {
      title: "Farm Connect",
      description: "FarmConnect is a digital platform that connects small-scale farmers with buyers, ensuring fair prices and reducing middlemen. It features SMS verification, a farmer dashboard, and plans for a mobile app to enhance market access and agricultural sustainability.",
      tags: ["React", "Web"],
      codeLink: "https://github.com/Ruth960/farm-connect",
      demoLink: "https://farm-connect-sigma.vercel.app/"
    },
    {
      title: "Scientific Calculator",
      description: "Developed a scientific calculator that performs various mathematical operations, including trigonometric functions, logarithms.",
      tags: ["JavaScript", "CSS", "HTML"],
      codeLink: "https://github.com/Ruth960/Scientific-Calculator",
      demoLink: "https://scientific-calculator-delta-ten.vercel.app/"
    },
  ];

  return (
    <section style={styles.section} id="projects">
      <h2 style={{
        fontSize: '2rem',
        fontWeight: 'bold',
        marginBottom: '2rem',
        textAlign: 'center',
        backgroundImage: 'linear-gradient(to right, #4f46e5, #ec4899)',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
      }}>
        My Projects
      </h2>
      
      <div style={styles.container}>
        {projects.map((project, index) => (
          <div 
            key={index} 
            style={styles.card}
            onMouseEnter={handleCardMouseEnter}
            onMouseLeave={handleCardMouseLeave}
          >
            <h2 style={styles.cardTitle}>{project.title}</h2>
            <p style={styles.cardDescription}>{project.description}</p>
            <div style={styles.tagsContainer}>
              {project.tags.map((tag, tagIndex) => (
                <span key={tagIndex} style={styles.tag}>{tag}</span>
              ))}
            </div>
            <div style={styles.buttonsContainer}>
              {project.demoLink && (
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.button}
                >
                  Live Demo
                </a>
              )}
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.button}
              >
                View Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}