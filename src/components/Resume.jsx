import React, { useContext, useRef } from 'react';
import ThemeContext from '../contexts/ThemeContext';
import resumeData from '../data/resume.json';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { FaEnvelope, FaPhone, FaLinkedin, FaGlobe } from 'react-icons/fa';

export default function Resume() {
  const { isDarkMode } = useContext(ThemeContext);
  const resumeRef = useRef();

  const handleDownload = () => {
    const input = resumeRef.current;
    const backgroundColor = isDarkMode ? '#111827' : '#f8fafc';

    html2canvas(input, { 
        scale: 2,
        backgroundColor: backgroundColor,
     }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      const ratio = canvasWidth / canvasHeight;
      const width = pdfWidth;
      const height = width / ratio;

      let position = 0;
      let heightLeft = height;

      pdf.addImage(imgData, 'PNG', 0, position, width, height);
      heightLeft -= pdfHeight;

      while (heightLeft > 0) {
        position = heightLeft - height;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, width, height);
        heightLeft -= pdfHeight;
      }

      pdf.save(`Resume-${resumeData.name}.pdf`);
    });
  };

  const styles = {
    container: {
      backgroundColor: '#ffffff',
      color: '#333333',
      padding: '40px 20px',
      fontFamily: 'Roboto, sans-serif',
    },
    header: {
      textAlign: 'center',
      marginBottom: '40px',
    },
    name: {
      fontSize: '3.5rem',
      fontWeight: 'bold',
      color: '#6a0dad',
    },
    contact: {
      display: 'flex',
      justifyContent: 'center',
      gap: '25px',
      flexWrap: 'wrap',
      marginBottom: '20px',
      alignItems: 'center',
    },
    contactItem: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        color: '#333333',
    },
    section: {
      marginBottom: '30px',
    },
    sectionTitle: {
      fontSize: '2rem',
      fontWeight: 'bold',
      color: '#8b5cf6',
      borderBottom: `3px solid #8b5cf6`,
      paddingBottom: '10px',
      marginBottom: '25px',
    },
    listItem: {
      marginBottom: '20px',
      position: 'relative',
      paddingLeft: '30px',
      borderLeft: `2px solid #8b5cf6`,
    },
    timelineDot: {
        position: 'absolute',
        left: '-9px',
        top: '5px',
        height: '16px',
        width: '16px',
        borderRadius: '50%',
        backgroundColor: '#8b5cf6',
    },
    itemTitle: {
      fontSize: '1.4rem',
      fontWeight: 'bold',
    },
    itemSubtitle: {
      fontStyle: 'italic',
      color: '#a78bfa',
      marginBottom: '5px',
    },
    paragraph: {
        textAlign: 'justify',
    },
    skillList: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '12px',
    },
    skill: {
      backgroundColor: '#e0e0e0',
      padding: '8px 18px',
      borderRadius: '20px',
      fontSize: '0.9rem',
      color: '#333333',
    },
    downloadButton: {
        display: 'block',
        width: '220px',
        margin: '40px auto',
        padding: '15px 25px',
        backgroundColor: '#6a0dad',
        color: 'white',
        textAlign: 'center',
        borderRadius: '12px',
        cursor: 'pointer',
        fontSize: '1.3rem',
        fontWeight: 'bold',
        border: 'none',
        transition: 'transform 0.2s',
    },

  };

  return (
    <div style={styles.container}>
        <button 
            onClick={handleDownload} 
            style={styles.downloadButton}
            onMouseEnter={(e) => { e.target.style.transform = 'scale(1.05)'; }}
            onMouseLeave={(e) => { e.target.style.transform = 'scale(1)'; }}
        >Download PDF</button>
        <div ref={resumeRef} style={{ padding: '20px' }}>
            <header style={styles.header}>
                <h1 style={styles.name}>{resumeData.name}</h1>
                <div style={styles.contact}>
                    <span style={styles.contactItem}><FaEnvelope /> {resumeData.contact.email}</span>
                    <span style={styles.contactItem}><FaPhone /> {resumeData.contact.phone}</span>
                    <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer" style={styles.contactItem}><FaLinkedin /> LinkedIn</a>
                    <a href={resumeData.contact.website} target="_blank" rel="noopener noreferrer" style={styles.contactItem}><FaGlobe /> Website</a>
                </div>
            </header>

            <section style={styles.section}>
                <h2 style={styles.sectionTitle}>Summary</h2>
                <p style={styles.paragraph}>{resumeData.summary}</p>
            </section>

            <section style={styles.section}>
                <h2 style={styles.sectionTitle}>Work Experience</h2>
                {resumeData.experience.map((job, index) => (
                    <div key={index} style={styles.listItem}>
                        <div style={styles.timelineDot}></div>
                        <h3 style={styles.itemTitle}>{job.title}</h3>
                        <p style={styles.itemSubtitle}>{job.company} | {job.location} ({job.dates})</p>
                        <ul>
                            {job.description.map((item, i) => <li key={i} style={styles.paragraph}>{item}</li>)}
                        </ul>
                    </div>
                ))}
            </section>

            <section style={styles.section}>
                <h2 style={styles.sectionTitle}>Education</h2>
                {resumeData.education.map((edu, index) => (
                    <div key={index} style={styles.listItem}>
                        <div style={styles.timelineDot}></div>
                        <h3 style={styles.itemTitle}>{edu.degree}</h3>
                        <p style={styles.itemSubtitle}>{edu.institution} ({edu.dates})</p>
                        {edu.grade && <p style={styles.paragraph}>Final Grade: {edu.grade}</p>}
                    </div>
                ))}
            </section>

            <section style={styles.section}>
                <h2 style={styles.sectionTitle}>Skills</h2>
                {Object.keys(resumeData.skills).map((category, catIndex) => (
                    <div key={catIndex} style={{ marginBottom: '20px' }}>
                        <h3 style={styles.itemTitle}>{category}</h3>
                        <div style={styles.skillList}>
                            {resumeData.skills[category].map((skill, skillIndex) => (
                                <span key={skillIndex} style={styles.skill}>{skill}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </section>

            <section style={styles.section}>
                <h2 style={styles.sectionTitle}>Projects</h2>
                {resumeData.projects.map((proj, index) => (
                    <div key={index} style={styles.listItem}>
                        <div style={styles.timelineDot}></div>
                        <h3 style={styles.itemTitle}>{proj.title}</h3>
                        <p style={styles.paragraph}>{proj.description}</p>
                    </div>
                ))}
            </section>

            <section style={styles.section}>
                <h2 style={styles.sectionTitle}>Internships</h2>
                {resumeData.internships.map((internship, index) => (
                    <div key={index} style={styles.listItem}>
                        <div style={styles.timelineDot}></div>
                        <h3 style={styles.itemTitle}>{internship.title}</h3>
                        <p style={styles.itemSubtitle}>{internship.company}</p>
                        <ul>
                            {internship.tasks.map((task, i) => <li key={i} style={styles.paragraph}>{task}</li>)}
                        </ul>
                    </div>
                ))}
            </section>
        </div>
    </div>
  );
}