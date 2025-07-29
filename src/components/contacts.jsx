
import React, { useState, useContext } from 'react';
import emailjs from 'emailjs-com';
import ThemeContext from '../contexts/ThemeContext';
import { FaGithub, FaLinkedin, FaMedium} from 'react-icons/fa';

export default function ContactForm() {
  const { isDarkMode } = useContext(ThemeContext);
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
      
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        reply_to: formData.email,
        name: formData.name,
        email: formData.email,
        title: formData.message
      };
      
      emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
        .then((response) => {
          console.log("Email sent successfully!", response.status, response.text);
          setIsSubmitted(true);
          setIsSubmitting(false);
          setFormData({ name: "", email: "", message: "" });
        })
        .catch((error) => {
          console.error("Failed to send email:", error);
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

  return (
    <div className={`py-10 px-4 sm:px-6 lg:px-8 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'}`}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Get in Touch
          </h2>
          <p className={`mt-4 text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Contact Information & Socials */}
          <div className={`p-8 rounded-xl shadow-2xl flex flex-col justify-center ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
            <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Feel free to reach out through other platforms as well!
            </p>
            <div className="space-y-4">
              <p className="flex items-center">
                <span className="font-semibold mr-2">Email:</span>
                <a href="mailto:ruthmwaniki202@gmail.com" className="text-purple-400 hover:underline">ruthmwaniki202@gma.com</a>
              </p>
              <p className="flex items-center">
                <span className="font-semibold mr-2">Phone:</span>
                <span>+254745846180</span>
              </p>
            </div>
            <div className="mt-8">
              <h4 className="text-xl font-bold mb-4">Follow Me</h4>
              <div className="flex space-x-6">
                <a href="https://github.com/Ruth960" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <FaGithub size={30} />
                </a>
                <a href="https://www.linkedin.com/in/ruth-wanjiru-mwaniki-485945205" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <FaLinkedin size={30} />
                </a>
                <a href="https://medium.com/@ruthmwaniki960" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <FaMedium size={30} />
                </a>
              </div>
            </div>
          </div>

           {/* Contact Form */}
          <div className={`p-8 rounded-xl shadow-2xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
            {isSubmitted ? (
              <div className="text-center">
                <h3 className="text-2xl font-bold text-green-500 mb-4">Thank you!</h3>
                <p className="mb-6">Your message has been sent successfully. I'll get back to you shortly.</p>
                <button
                  onClick={handleReset}
                  className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {submitError && (
                  <div className="bg-red-500 text-white p-3 rounded-lg text-center">
                    {submitError}
                  </div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className={`w-full p-3 rounded-lg border ${errors.name ? 'border-red-500' : isDarkMode ? 'border-gray-600' : 'border-gray-300'} ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'}`}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      className={`w-full p-3 rounded-lg border ${errors.email ? 'border-red-500' : isDarkMode ? 'border-gray-600' : 'border-gray-300'} ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'}`}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows="5"
                    className={`w-full p-3 rounded-lg border ${errors.message ? 'border-red-500' : isDarkMode ? 'border-gray-600' : 'border-gray-300'} ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'} resize-none`}
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-purple-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-purple-700 transition-transform transform hover:scale-105 disabled:bg-purple-400 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
