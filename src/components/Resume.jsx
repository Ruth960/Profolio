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

    html2canvas(input, { 
        scale: 2,
        backgroundColor: '#ffffff',
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
      backgroundColor: isDarkMode ? '#111827' : '#f8fafc',
      color: isDarkMode ? '#f8fafc' : '#111827',
      padding: '40px 20px',
      fontFamily: 'Arial, sans-serif',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
    },
    resume: {
      display: 'flex',
      width: '100%',
      maxWidth: '1000px',
      backgroundColor: isDarkMode ? '#1f2937' : '#ffffff',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    leftColumn: {
      backgroundColor: isDarkMode ? '#374151' : '#f3f4f6',
      padding: '20px',
      width: '35%',
    },
    rightColumn: {
      padding: '20px',
      width: '65%',
    },
    name: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: isDarkMode ? '#a78bfa' : '#6a0dad',
      marginBottom: '10px',
    },
    contactItem: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        marginBottom: '10px',
    },
    section: {
      marginBottom: '30px',
    },
    sectionTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: isDarkMode ? '#a78bfa' : '#6a0dad',
      borderBottom: `2px solid ${isDarkMode ? '#a78bfa' : '#6a0dad'}`,
      paddingBottom: '5px',
      marginBottom: '15px',
    },
    listItem: {
      marginBottom: '15px',
    },
    itemTitle: {
      fontSize: '1.2rem',
      fontWeight: 'bold',
    },
    itemSubtitle: {
      fontStyle: 'italic',
      color: isDarkMode ? '#d1d5db' : '#6b7280',
      marginBottom: '5px',
    },
    paragraph: {
        textAlign: 'justify',
    },
    skillList: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '5px',
    },
    skill: {
      backgroundColor: isDarkMode ? '#4b5563' : '#e5e7eb',
      padding: '5px 10px',
      borderRadius: '20px',
      fontSize: '0.9rem',
    },
    downloadButton: {
        display: 'block',
        width: '220px',
        margin: '20px auto',
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
    <div>
        <button 
            onClick={handleDownload} 
            style={styles.downloadButton}
            onMouseEnter={(e) => { e.target.style.transform = 'scale(1.05)'; }}
            onMouseLeave={(e) => { e.target.style.transform = 'scale(1)'; }}
        >Download PDF</button>
        <div style={styles.container} ref={resumeRef}>
            <div style={styles.resume}>
                <div style={styles.leftColumn}>
                    <h1 style={styles.name}>{resumeData.name}</h1>
                    <div style={styles.contactItem}><FaEnvelope /> {resumeData.contact.email}</div>
                    <div style={styles.contactItem}><FaPhone /> {resumeData.contact.phone}</div>
                    <div style={styles.contactItem}><FaLinkedin /> <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></div>
                    <div style={styles.contactItem}><FaGlobe /> <a href={resumeData.contact.website} target="_blank" rel="noopener noreferrer">Website</a></div>

                    <div style={styles.section}>
                        <h2 style={styles.sectionTitle}>Skills</h2>
                        {Object.keys(resumeData.skills).map((category, catIndex) => (
                            <div key={catIndex} style={{ marginBottom: '10px' }}>
                                <h3 style={styles.itemTitle}>{category}</h3>
                                <div style={styles.skillList}>
                                    {resumeData.skills[category].map((skill, skillIndex) => (
                                        <span key={skillIndex} style={styles.skill}>{skill}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div style={styles.section}>
                        <h2 style={styles.sectionTitle}>Education</h2>
                        {resumeData.education.map((edu, index) => (
                            <div key={index} style={styles.listItem}>
                                <h3 style={styles.itemTitle}>{edu.degree}</h3>
                                <p style={styles.itemSubtitle}>{edu.institution} ({edu.dates})</p>
                                {edu.grade && <p>Final Grade: {edu.grade}</p>}
                            </div>
                        ))}
                    </div>
                </div>
                <div style={styles.rightColumn}>
                    <div style={styles.section}>
                        <h2 style={styles.sectionTitle}>Summary</h2>
                        <p style={styles.paragraph}>{resumeData.summary}</p>
                    </div>
                    <div style={styles.section}>
                        <h2 style={styles.sectionTitle}>Work Experience</h2>
                        {resumeData.experience.map((job, index) => (
                            <div key={index} style={styles.listItem}>
                                <h3 style={styles.itemTitle}>{job.title}</h3>
                                <p style={styles.itemSubtitle}>{job.company} | {job.location} ({job.dates})</p>
                                <ul>
                                    {job.description.map((item, i) => <li key={i}>{item}</li>)}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div style={styles.section}>
                        <h2 style={styles.sectionTitle}>Projects</h2>
                        {resumeData.projects.map((proj, index) => (
                            <div key={index} style={styles.listItem}>
                                <h3 style={styles.itemTitle}>{proj.title}</h3>
                                <p>{proj.description}</p>
                            </div>
                        ))}
                    </div>

                    <div style={styles.section}>
                        <h2 style={styles.sectionTitle}>Internships</h2>
                        {resumeData.internships.map((internship, index) => (
                            <div key={index} style={styles.listItem}>
                                <h3 style={styles.itemTitle}>{internship.title}</h3>
                                <p style={styles.itemSubtitle}>{internship.company}</p>
                                <ul>
                                    {internship.tasks.map((task, i) => <li key={i}>{task}</li>)}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}