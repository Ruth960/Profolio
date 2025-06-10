import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  // EmailJS configuration
  const SERVICE_ID = "service_davzojn";
  const TEMPLATE_ID = "template_3epqods";
  const USER_ID = "Ptj78U2OtMiJmV2By";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
  
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      setSubmitError(null);
      
      // Prepare template parameters with all possible variables
      const templateParams = {
        // Standard EmailJS parameters with all possible variables
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        reply_to: formData.email,
        
        // Your template specific parameters
        name: formData.name,
        email: formData.email,
        title: formData.message
      };
      
      // Log what we're sending for debugging
      console.log("Sending email with parameters:", {
        serviceId: SERVICE_ID,
        templateId: TEMPLATE_ID,
        params: templateParams,
        userId: USER_ID
      });
      
      // Send email using EmailJS directly
      emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
        .then((response) => {
          console.log("Email sent successfully!", response.status, response.text);
          setIsSubmitted(true);
          setIsSubmitting(false);
          // Reset form after successful submission
          setFormData({ name: "", email: "", message: "" });
        })
        .catch((error) => {
          console.error("Failed to send email:", error);
          console.error("Error details:", error.text);
          setSubmitError("Failed to send your message. Please try again later.");
          setIsSubmitting(false);
        });
    }
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", message: "" });
    setErrors({});
    setIsSubmitted(false);
    setSubmitError(null);
  };
  
  // Test function to help debug EmailJS
  const handleTestEmail = (e) => {
    e.preventDefault();
    setSubmitError(null);
    console.log("Sending test email...");
    
    sendTestEmail()
      .then(response => {
        console.log("Test email sent successfully!", response);
        alert("Test email sent successfully!");
      })
      .catch(error => {
        console.error("Test email failed:", error);
        setSubmitError("Test email failed: " + (error.text || error.message || "Unknown error"));
      });
  };

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
      {isSubmitted ? (
        <div
          style={{
            width: '100%',
            maxWidth: '600px',
            padding: '20px',
            backgroundColor: isDarkMode ? '#1B2230' : '#edf2f7',
            borderRadius: '10px',
            boxShadow: isDarkMode
              ? '0 4px 12px rgba(255, 255, 255, 0.1)'
              : '0 4px 12px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
          }}
        >
          <h3 style={{ color: '#10B981', marginBottom: '15px' }}>Thank you for your message!</h3>
          <p style={{ marginBottom: '20px' }}>
            Your message has been sent successfully. I'll get back to you as soon as possible.
          </p>
          <button
            onClick={handleReset}
            style={{
              padding: '10px 20px',
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
            Send Another Message
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
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
          {submitError && (
            <div style={{ color: '#EF4444', marginBottom: '10px', textAlign: 'center' }}>
              {submitError}
            </div>
          )}
          
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              style={{
                padding: '10px',
                borderRadius: '5px',
                border: `1px solid ${errors.name ? '#EF4444' : isDarkMode ? '#4A5568' : '#cbd5e0'}`,
                backgroundColor: isDarkMode ? '#1B2230' : '#fff',
                color: isDarkMode ? '#CBD5E0' : '#2d3748',
              }}
            />
            {errors.name && (
              <span style={{ color: '#EF4444', fontSize: '0.8rem', marginTop: '5px' }}>
                {errors.name}
              </span>
            )}
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              style={{
                padding: '10px',
                borderRadius: '5px',
                border: `1px solid ${errors.email ? '#EF4444' : isDarkMode ? '#4A5568' : '#cbd5e0'}`,
                backgroundColor: isDarkMode ? '#1B2230' : '#fff',
                color: isDarkMode ? '#CBD5E0' : '#2d3748',
              }}
            />
            {errors.email && (
              <span style={{ color: '#EF4444', fontSize: '0.8rem', marginTop: '5px' }}>
                {errors.email}
              </span>
            )}
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              style={{
                padding: '10px',
                borderRadius: '5px',
                border: `1px solid ${errors.message ? '#EF4444' : isDarkMode ? '#4A5568' : '#cbd5e0'}`,
                backgroundColor: isDarkMode ? '#1B2230' : '#fff',
                color: isDarkMode ? '#CBD5E0' : '#2d3748',
                resize: 'none',
                height: '100px',
              }}
            />
            {errors.message && (
              <span style={{ color: '#EF4444', fontSize: '0.8rem', marginTop: '5px' }}>
                {errors.message}
              </span>
            )}
          </div>
          
          <div style={{ display: 'flex', gap: '10px', width: '100%' }}>
            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                flex: '1',
                padding: '10px',
                borderRadius: '5px',
                backgroundColor: isSubmitting ? '#93C5FD' : '#3B82F6',
                color: 'white',
                border: 'none',
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                transition: 'background-color 0.3s',
              }}
              onMouseEnter={(e) => !isSubmitting && (e.target.style.backgroundColor = '#2563EB')}
              onMouseLeave={(e) => !isSubmitting && (e.target.style.backgroundColor = '#3B82F6')}
            >
              {isSubmitting ? 'Sending...' : 'Submit'}
            </button>
            
            
            
          </div>
        </form>
      )}
    </div>
  );
}