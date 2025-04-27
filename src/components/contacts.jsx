import React, {useState} from   'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ username: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => { /* ... */ };
  const validateForm = () => { /* ... */ };
  const handleSubmit = (e) => { /* ... */ };
  const handleReset = () => { /* ... */ };

  const isDarkMode = document.documentElement.classList.contains('dark');

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        backgroundColor: isDarkMode ? '#1B2230' : '#f7fafc',
        color: isDarkMode ? 'white' : '#1a202c',
      }}
    >
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
          width: '100%',
          maxWidth: '600px',
          padding: '20px',
          backgroundColor: isDarkMode ? '#1B2230' : '#edf2f7',
          borderRadius: '10px',
          boxShadow: isDarkMode
            ? '0 4px 12px rgba(255, 255, 255, 0.1)'
            : '0 4px 12px rgba(0, 0, 0, 0.1)',
        }}
      >
        <input
          type="text"
          placeholder="Your Name"
          style={{
            padding: '10px',
            borderRadius: '5px',
            border: `1px solid ${isDarkMode ? '#4A5568' : '#cbd5e0'}`,
            backgroundColor: isDarkMode ? '#1B2230' : '#fff',
            color: isDarkMode ? '#CBD5E0' : '#2d3748',
          }}
        />
        <input
          type="email"
          placeholder="Your Email"
          style={{
            padding: '10px',
            borderRadius: '5px',
            border: `1px solid ${isDarkMode ? '#4A5568' : '#cbd5e0'}`,
            backgroundColor: isDarkMode ? '#1B2230' : '#fff',
            color: isDarkMode ? '#CBD5E0' : '#2d3748',
          }}
        />
        <textarea
          placeholder="Your Message"
          style={{
            padding: '10px',
            borderRadius: '5px',
            border: `1px solid ${isDarkMode ? '#4A5568' : '#cbd5e0'}`,
            backgroundColor: isDarkMode ? '#1B2230' : '#fff',
            color: isDarkMode ? '#CBD5E0' : '#2d3748',
            resize: 'none',
            height: '100px',
          }}
        />
        <button
          type="submit"
          style={{
            padding: '10px',
            borderRadius: '5px',
            backgroundColor: '#3B82F6',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#2563EB')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = '#3B82F6')}
        >
          Submit
        </button>
      </form>
    </div>
  );
}