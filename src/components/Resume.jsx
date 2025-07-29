import React, { useContext, useRef } from 'react';
import ThemeContext from '../contexts/ThemeContext';
import resumeData from '../data/resume.json';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

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
      backgroundColor: isDarkMode ? '#111827' : '#f8fafc',
      color: isDarkMode ? 'white' : '#334155',
      padding: '40px 20px',
      fontFamily: 'sans-serif',
    },
    header: {
      textAlign: 'center',
      marginBottom: '40px',
    },
    name: {
      fontSize: '3rem',
      fontWeight: 'bold',
      color: isDarkMode ? '#4f46e5' : '#6a0dad',
    },
    contact: {
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
      flexWrap: 'wrap',
      marginBottom: '20px',
    },
    section: {
      marginBottom: '30px',
    },
    sectionTitle: {
      fontSize: '1.8rem',
      fontWeight: 'bold',
      borderBottom: `2px solid ${isDarkMode ? '#4f46e5' : '#6a0dad'}`,
      paddingBottom: '5px',
      marginBottom: '20px',
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
      color: isDarkMode ? '#a5b4fc' : '#8b5cf6',
    },
    skillList: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '10px',
    },
    skill: {
      backgroundColor: isDarkMode ? '#374151' : '#e5e7eb',
      padding: '5px 15px',
      borderRadius: '15px',
    },
    downloadButton: {
        display: 'block',
        width: '200px',
        margin: '40px auto',
        padding: '15px 20px',
        backgroundColor: isDarkMode ? '#4f46e5' : '#6a0dad',
        color: 'white',
        textAlign: 'center',
        borderRadius: '10px',
        cursor: 'pointer',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        border: 'none',
    },
  };

  return (
    <div style={styles.container}>
        <button onClick={handleDownload} style={styles.downloadButton}>Download PDF</button>
        <div ref={resumeRef} style={{ padding: '20px' }}>
            <header style={styles.header}>
                <h1 style={styles.name}>{resumeData.name}</h1>
                <div style={styles.contact}>
                    <span>{resumeData.contact.email}</span>
                    <span>{resumeData.contact.phone}</span>
                    <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href={resumeData.contact.website} target="_blank" rel="noopener noreferrer">Website</a>
                </div>
            </header>

            <section style={styles.section}>
                <h2 style={styles.sectionTitle}>Summary</h2>
                <p>{resumeData.summary}</p>
            </section>

            <section style={styles.section}>
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
            </section>

            <section style={styles.section}>
                <h2 style={styles.sectionTitle}>Education</h2>
                {resumeData.education.map((edu, index) => (
                    <div key={index} style={styles.listItem}>
                        <h3 style={styles.itemTitle}>{edu.degree}</h3>
                        <p style={styles.itemSubtitle}>{edu.institution} ({edu.dates})</p>
                        {edu.grade && <p>Final Grade: {edu.grade}</p>}
                    </div>
                ))}
            </section>

            <section style={styles.section}>
                <h2 style={styles.sectionTitle}>Skills</h2>
                <div style={styles.skillList}>
                    {resumeData.skills.map((skill, index) => (
                        <span key={index} style={styles.skill}>{skill}</span>
                    ))}
                </div>
            </section>

            <section style={styles.section}>
                <h2 style={styles.sectionTitle}>Projects</h2>
                {resumeData.projects.map((proj, index) => (
                    <div key={index} style={styles.listItem}>
                        <h3 style={styles.itemTitle}>{proj.title}</h3>
                        <p>{proj.description}</p>
                    </div>
                ))}
            </section>

            <section style={styles.section}>
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
            </section>
        </div>
    </div>
  );
}