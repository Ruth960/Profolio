import React, { useContext } from 'react';
import ThemeContext from '../contexts/ThemeContext';
import { motion } from 'framer-motion';

export default function Project() {
  const { isDarkMode } = useContext(ThemeContext);

  const textColor = isDarkMode ? 'white' : '#334155';
  const descriptionColor = isDarkMode ? 'white' : '#334155';
  const cardBg = isDarkMode 
    ? 'rgba(17, 24, 39, 0.5)' : 'rgba(255, 255, 255, 0.8)'; 
  const cardShadow = isDarkMode 
    ? '0 10px 15px rgba(255, 255, 255, 0.1)' 
    : '0 10px 15px rgba(0, 0, 0, 0.1)';
  
  const styles = {
    section: {
      padding: '60px 12px',
      backgroundColor: isDarkMode ? 'rgb(21, 3, 62)' : '#f8fafc',
      color: textColor,
      transition: 'background-color 0.3s, color 0.3s',
    },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '40px',
      justifyContent: 'center',
      padding: '20px',
    },
    card: {
      flex: '1 1 300px',
      maxWidth: '350px',
      backgroundColor: cardBg,
      borderRadius: '10px',
      padding: '20px',
      boxShadow: cardShadow,
      backdropFilter: 'blur(8px)',
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
    },
    cardTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: textColor,
      textAlign: 'center',
    },
    cardDescription: {
      color: descriptionColor,
      flexGrow: 1,
    },
    tagsContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px',
    },
    tag: {
      fontSize: '0.75rem',
      padding: '4px 12px',
      borderRadius: '9999px',
      backgroundColor: '#f3e8ff',
      color: '#9333ea',
    },
    button: {
      backgroundColor: 'blueviolet',
      padding: '10px 20px',
      borderRadius: '20px',
      color: 'white',
      textDecoration: 'none',
      textAlign: 'center',
      cursor: 'pointer',
    },
    buttonsContainer: {
      display: 'flex',
      gap: '16px',
      justifyContent: 'center',
      marginTop: '15px',
    },
    projectImage: {
      width: '100%',
      height: '200px',
      objectFit: 'cover',
      borderRadius: '10px',
    },
  };

  const projects = [
        {
      title: "IoT-Based Hydroponic System",
      description: "Developed an automated hydroponic farming system using IoT technologies, focusing on data pipeline setup and sensor integration.",
      tags: ["IoT", "Python", "Hardware"],
      codeLink: "https://github.com/Ruth960/IoT-based-Hydroponic-System",
      demoLink: null,
      image: 'hydroponic.png',
    },
    {
      title: "Home Automation System",
      description: "The project aims to enhance convenience and efficiency by integrating technology into our daily lives. By automating tasks creating a seamless and personalized living experience.",
      tags: ["IoT", "Arduino", "Hardware"],
      codeLink: "https://github.com/Ruth960/Home-Automation-",
      demoLink: null,
      image: 'home-automation.png',
    },
    {
      title: "Automatic Number Plate Recognition",
      description: "Programmed a system for automatic detection and recognition of vehicle license plates using image processing techniques.",
      tags: ["Python", "OpenCV", "Teslaflow"],
      codeLink: "https://github.com/Ruth960",
      demoLink: null,
      image: 'ANPR.png',
    },
    {
      title: "Drum Kit",
      description: "Developed an interactive drum kit web application that allows users to play different drum sounds by clicking on buttons or pressing keyboard keys. The project showcases the use of HTML, CSS, and JavaScript to create a responsive and engaging user interface.",
      tags: ["HTML", "CSS", "Javascript"],
      codeLink: "https://github.com/Ruth960/drum-kit",
      demoLink: "https://drum-kit-azure-tau.vercel.app/",
      image: 'dram-kit.png',
    },
    {
      title: "Farm Connect",
      description: "FarmConnect is a digital platform that connects small-scale farmers with buyers, ensuring fair prices and reducing middlemen. It features SMS verification, a farmer dashboard, and plans for a mobile app to enhance market access and agricultural sustainability.",
      tags: ["React", "Web"],
      codeLink: "https://github.com/Ruth960/farm-connect",
      demoLink: "https://farm-connect-sigma.vercel.app/",
      image: 'farm-connect.png',
    },
    {
      title: "Scientific Calculator",
      description: "Developed a scientific calculator that performs various mathematical operations, including trigonometric functions, logarithms.",
      tags: ["JavaScript", "CSS", "HTML"],
      codeLink: "https://github.com/Ruth960/Scientific-Calculator",
      demoLink: "https://scientific-calculator-delta-ten.vercel.app/",
      image: 'calculator.png',
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
          <motion.div
            key={index}
            style={styles.card}
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <img src={`/projectsImages/${project.image}`} alt={project.title} style={styles.projectImage} />
            <h2 style={styles.cardTitle}>{project.title}</h2>
            <p style={styles.cardDescription}>{project.description}</p>
            <div style={styles.tagsContainer}>
              {project.tags.map((tag, tagIndex) => (
                <span key={tagIndex} style={styles.tag}>{tag}</span>
              ))}
            </div>
            <div style={styles.buttonsContainer}>
              {project.demoLink && (
                <motion.a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.button}
                  whileHover={{ backgroundColor: '#6a0dad' }}
                >
                  Live Demo
                </motion.a>
              )}
              <motion.a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.button}
                whileHover={{ backgroundColor: '#6a0dad' }}
              >
                View Code
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}