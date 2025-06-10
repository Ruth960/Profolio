import React, { useContext } from 'react';
import ThemeContext from '../contexts/ThemeContext';

export default function Certificates() {
    const { isDarkMode } = useContext(ThemeContext);
    
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
        <div className="flex flex-col items-center justify-center min-h-screen py-12 px-4" style={{
            backgroundColor: isDarkMode ? 'rgb(21, 3, 62)' : '#f8fafc',
            color: isDarkMode ? 'white' : '#334155',
            transition: 'background-color 0.3s, color 0.3s',
        }}>
            <h1 className="text-4xl font-bold mb-8 text-gray-800 dark:text-white">My Certificates</h1>
            
            {certificates.length === 0 ? (
                <p className="text-lg text-black dark:text-gray-300">No certificates to display yet.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
                    {certificates.map((certificate) => (
                        <div 
                            key={certificate.id} 
                            className="certificate-card bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 transform scale-105 hover:scale-100"
                        >
                            <div className="relative pb-[75%] overflow-hidden">
                                <img 
                                    src={certificate.image} 
                                    alt={certificate.title} 
                                    className="absolute inset-0 w-full h-full object-cover transition-all duration-300"
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{certificate.title}</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300">Issued by {certificate.issuer}</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">{certificate.date}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <style jsx>{`
                .certificate-card:hover {
                    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
                }
            `}</style>
        </div>
    );
}