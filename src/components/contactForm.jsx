import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function TailwindForm() {
  const [formData, setFormData] = useState({ username: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null,
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({ username: "", email: "", message: "" });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <div style={{backgroundColor: '#333', color:'white'}}
    className="min-h-screen  text-[#CBD5E0] p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Get In Touch</h1>
          <div className="w-16 h-1 bg-blue-500 mb-6"></div>
          <p className="text-gray-400 max-w-2xl text-center">
            Feel free to contact me using the form below or through my contact
            information.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="flex flex-col gap-8">
            <h2 className="text-2xl font-semibold text-white mb-6">Contact Information</h2>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#1B2230] flex items-center justify-center">
                  <Mail className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-[#CBD5E0]">ruthmwaniki202@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#1B2230] flex items-center justify-center">
                  <Phone className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="text-[#CBD5E0]">+254 745 846180</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#1B2230] flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Current location</p>
                  <p className="text-[#CBD5E0]">Mombasa, Kenya</p>
                </div>
              </div>
            </div>

            <div className="bg-[#1B2230] p-6 rounded-lg mt-8">
              <h3 className="text-xl font-semibold text-white mb-3">My Availability</h3>
              <p className="text-gray-400">
               I am open for freelance work, part-time or full-time positions. If you're interested in working
                together, please get in touch!
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold text-white mb-6">Send Me a Message</h2>
            {isSubmitted ? (
              <div className="text-center bg-[#1B2230] p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-500 mb-2">Message Sent!</h3>
                <p className="mb-4">Thank you, {formData.username}!</p>
                <button
                  onClick={handleReset}
                  className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <label htmlFor="username" className="text-sm text-gray-400 mb-2 block">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Type your name here"
                    value={formData.username}
                    onChange={handleChange}
                    className={`w-full p-3 bg-[#1B2230] border ${
                      errors.username ? "border-red-500" : "border-gray-600"
                    } rounded text-[#CBD5E0] outline-none`}
                  />
                  {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="text-sm text-gray-400 mb-2 block">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Type your email here"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full p-3 bg-[#1B2230] border ${
                      errors.email ? "border-red-500" : "border-gray-600"
                    } rounded text-[#CBD5E0] outline-none`}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="text-sm text-gray-400 mb-2 block">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Hello, I'd like to talk about..."
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full p-3 bg-[#1B2230] border ${
                      errors.message ? "border-red-500" : "border-gray-600"
                    } rounded text-[#CBD5E0] outline-none`}
                    rows="4"
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                <div className="flex gap-4">
                  <button
                    type="submit"
                    className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200 flex-1"
                  >
                    Send Message
                  </button>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="bg-[#1B2230] text-[#CBD5E0] py-2 px-4 rounded hover:bg-[#232d3f] transition duration-200"
                  >
                    Reset
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}