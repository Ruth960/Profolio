import React, { useContext } from 'react';
import ThemeContext from '../contexts/ThemeContext';
import { motion } from 'framer-motion';
export default function Certificates() {
    const { isDarkMode } = useContext(ThemeContext);

    const textColor = isDarkMode ? 'white' : '#334155';
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
            padding: '20px 10px',
            perspective: '1000px',
        },
        card: {
            flex: '1 1 300px',
            maxWidth: '450px',
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
            textAlign: 'start',
        },
        cardDescription: {
            color: textColor,
        },
        certificateImage: {
            width: '100%',
            height: '200px',
            objectFit: 'cover',
            borderRadius: '10px',
        },
    };
    
    // Certificates
    const certificates = [
        {
            id: 1,
            title: 'Software Engineering',
            issuer: 'Kiep Skies TUM',
            date: '2025',
            image: '/SE-TUM.jpg'
        },
        {
            id: 2,
            title: 'Data Science',
            issuer: 'IBM',
            date: '2025',
            image: '/Data-Science.jpg',
        },
        {
            id: 3,
            title: 'ICP Hackathon',
            issuer: 'ICP Kenya',
            date: '2025',
            image: '/ICP.jpg'
        },
        
    
    ];

    return (
        <section style={styles.section} id="certificates">
            <h2 style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                marginBottom: '2rem',
                textAlign: 'center',
                backgroundImage: 'linear-gradient(to right, #4f46e5, #ec4899)',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
            }}>
                My Certificates
            </h2>
            
            {certificates.length === 0 ? (
                <p className="text-lg text-black dark:text-gray-300">No certificates to display yet.</p>
            ) : (
                <div style={styles.container}>
                    {certificates.map((certificate) => (
                        <motion.div 
                            key={certificate.id} 
                            style={styles.card}
                            whileHover={{ scale: 1.05, y: -10 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <img 
                                src={certificate.image} 
                                alt={certificate.title} 
                                style={styles.certificateImage}
                            />
                            <div className="p-4">
                                <h3 style={styles.cardTitle}>{certificate.title}</h3>
                                <p style={styles.cardDescription}>Issued by {certificate.issuer}</p>
                                <p style={styles.cardDescription}>{certificate.date}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}
        </section>
    );
}
   