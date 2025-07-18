import React, { useContext } from 'react';
import ThemeContext from '../contexts/ThemeContext';

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
      perspective: '1000px',
    },
    flipCard: {
      flex: '1 1 calc(100% - 40px)',
      maxWidth: '300px',
      height: '350px',
      backgroundColor: 'transparent',
      perspective: '1000px',
    },
    flipCardInner: {
      position: 'relative',
      width: '100%',
      height: '100%',
      textAlign: 'center',
      transition: 'transform 5s',
      transformStyle: 'preserve-3d',
    },
    card: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      backfaceVisibility: 'hidden',
      backgroundColor: cardBg,
      borderRadius: '10px',
      padding: '20px',
      boxShadow: cardShadow,
      backdropFilter: 'blur(8px)',
    },
    cardFront: {},
    cardBack: {
      transform: 'rotateY(180deg)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    cardTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '8px',
      color: textColor,
      textAlign: 'center',
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
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    projectImage: {
      width: '100%',
      height: '250px',
      objectFit: 'cover',
      borderRadius: '10px',
      marginBottom: '15px',
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
          <div
            key={index}
            style={styles.flipCard}
            onMouseEnter={(e) => {
              e.currentTarget.querySelector('.flip-card-inner').style.transform = 'rotateY(180deg)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.querySelector('.flip-card-inner').style.transform = 'rotateY(0deg)';
            }}
          >
            <div className="flip-card-inner" style={styles.flipCardInner}>
              <div style={{ ...styles.card, ...styles.cardFront }}>
                <h2 style={styles.cardTitle}>{project.title}</h2>
                <p style={styles.cardDescription}>{project.description}</p>
                <div style={styles.tagsContainer}>
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} style={styles.tag}>{tag}</span>
                  ))}
                </div>
              </div>
              <div style={{ ...styles.card, ...styles.cardBack }} onClick={(e) => {
                e.currentTarget.parentElement.style.transform = 'rotateY(0deg)';
              }}>
                <img src={`/projectsImages/${project.image}`} alt={project.title} style={styles.projectImage} />
                <h2 style={styles.cardTitle}>{project.title}</h2>
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
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}