import emailjs from 'emailjs-com';

// Initialize EmailJS with your user ID (public key)
export const initEmailJS = (userId) => {
  emailjs.init(userId);
};

// Function to send email using EmailJS
export const sendEmail = (serviceId, templateId, templateParams, userId) => {
  return emailjs.send(serviceId, templateId, templateParams, userId);
};