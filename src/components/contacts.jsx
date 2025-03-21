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
    <div
      style={{
        backgroundColor: "none",
        color: "white",
        minHeight: "100vh",
        padding: "1.5rem",
        textAlign: "#CBD5E0",
      }}
    >
      <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "3rem" }}>
          <h1 style={{ fontSize: "2.25rem", fontWeight: "bold", color: "white", marginBottom: "1rem" }}>
            Get In Touch
          </h1>
          <div style={{ width: "4rem", height: "0.25rem", backgroundColor: "#3B82F6", marginBottom: "1.5rem" }}></div>
          <p style={{ color: "#A0AEC0", maxWidth: "40rem", textAlign: "center" }}>
            Feel free to contact me using the form below or through my contact information.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem" }}>
          {/* Contact Information */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: "600", color: "white", marginBottom: "1.5rem" }}>
              Contact Information
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <div
                  style={{
                    width: "2.5rem",
                    height: "2.5rem",
                    borderRadius: "50%",
                    backgroundColor: "#1B2230",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Mail style={{ width: "1.25rem", height: "1.25rem", color: "#3B82F6" }} />
                </div>
                <div>
                  <p style={{ fontSize: "0.875rem", color: "#A0AEC0" }}>Email</p>
                  <p style={{ color: "#CBD5E0" }}>ruthmwaniki202@gmail.com</p>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <div
                  style={{
                    width: "2.5rem",
                    height: "2.5rem",
                    borderRadius: "50%",
                    backgroundColor: "#1B2230",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Phone style={{ width: "1.25rem", height: "1.25rem", color: "#3B82F6" }} />
                </div>
                <div>
                  <p style={{ fontSize: "0.875rem", color: "#A0AEC0" }}>Phone</p>
                  <p style={{ color: "#CBD5E0" }}>+254 745 846180</p>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <div
                  style={{
                    width: "2.5rem",
                    height: "2.5rem",
                    borderRadius: "50%",
                    backgroundColor: "#1B2230",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <MapPin style={{ width: "1.25rem", height: "1.25rem", color: "#3B82F6" }} />
                </div>
                <div>
                  <p style={{ fontSize: "0.875rem", color: "#A0AEC0" }}>Current location</p>
                  <p style={{ color: "#CBD5E0" }}>Mombasa, Kenya</p>
                </div>
              </div>
            </div>

            <div
              style={{
                backgroundColor: "#1B2230",
                padding: "1.5rem",
                borderRadius: "0.5rem",
                marginTop: "2rem",
              }}
            >
              <h3 style={{ fontSize: "1.25rem", fontWeight: "600", color: "white", marginBottom: "0.75rem" }}>
                My Availability
              </h3>
              <p style={{ color: "#A0AEC0" }}>
                I am open for freelance work, part-time or full-time positions. If you're interested in working
                together, please get in touch!
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: "600", color: "white", marginBottom: "1.5rem" }}>
              Send Me a Message
            </h2>
            {isSubmitted ? (
              <div
                style={{
                  textAlign: "center",
                  backgroundColor: "#1B2230",
                  padding: "1.5rem",
                  borderRadius: "0.5rem",
                }}
              >
                <h3 style={{ fontSize: "1.25rem", fontWeight: "600", color: "#22C55E", marginBottom: "0.5rem" }}>
                  Message Sent!
                </h3>
                <p style={{ marginBottom: "1rem" }}>Thank you, {formData.username}!</p>
                <button
                  onClick={handleReset}
                  style={{
                    backgroundColor: "#2563EB",
                    color: "white",
                    padding: "0.5rem 1rem",
                    borderRadius: "0.25rem",
                    transition: "background-color 0.2s",
                  }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <div>
                  <label
                    htmlFor="username"
                    style={{ fontSize: "0.875rem", color: "#A0AEC0", marginBottom: "0.5rem", display: "block" }}
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Type your name here"
                    value={formData.username}
                    onChange={handleChange}
                    style={{
                      width: "100%",
                      padding: "0.75rem",
                      backgroundColor: "#1B2230",
                      border: `1px solid ${errors.username ? "#EF4444" : "#4A5568"}`,
                      borderRadius: "0.25rem",
                      color: "#CBD5E0",
                      outline: "none",
                    }}
                  />
                  {errors.username && (
                    <p style={{ color: "#EF4444", fontSize: "0.875rem", marginTop: "0.25rem" }}>{errors.username}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    style={{ fontSize: "0.875rem", color: "#A0AEC0", marginBottom: "0.5rem", display: "block" }}
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Type your email here"
                    value={formData.email}
                    onChange={handleChange}
                    style={{
                      width: "100%",
                      padding: "0.75rem",
                      backgroundColor: "#1B2230",
                      border: `1px solid ${errors.email ? "#EF4444" : "#4A5568"}`,
                      borderRadius: "0.25rem",
                      color: "#CBD5E0",
                      outline: "none",
                    }}
                  />
                  {errors.email && (
                    <p style={{ color: "#EF4444", fontSize: "0.875rem", marginTop: "0.25rem" }}>{errors.email}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    style={{ fontSize: "0.875rem", color: "#A0AEC0", marginBottom: "0.5rem", display: "block" }}
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Hello, I'd like to talk about..."
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    style={{
                      width: "100%",
                      padding: "0.75rem",
                      backgroundColor: "#1B2230",
                      border: `1px solid ${errors.message ? "#EF4444" : "#4A5568"}`,
                      borderRadius: "0.25rem",
                      color: "#CBD5E0",
                      outline: "none",
                    }}
                  />
                  {errors.message && (
                    <p style={{ color: "#EF4444", fontSize: "0.875rem", marginTop: "0.25rem" }}>{errors.message}</p>
                  )}
                </div>

                <div style={{ display: "flex", gap: "1rem" }}>
                  <button
                    type="submit"
                    style={{
                      backgroundColor: "#2563EB",
                      color: "white",
                      padding: "0.5rem 1rem",
                      borderRadius: "0.25rem",
                      flex: "1",
                      transition: "background-color 0.2s",
                    }}
                  >
                    Send Message
                  </button>
                  <button
                    type="button"
                    onClick={handleReset}
                    style={{
                      backgroundColor: "#1B2230",
                      color: "#CBD5E0",
                      padding: "0.5rem 1rem",
                      borderRadius: "0.25rem",
                      transition: "background-color 0.2s",
                    }}
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