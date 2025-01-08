import React,{useState} from "react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { CheckCircle, Star, Award, ShieldCheck, Smile } from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    message: "",
    subscribe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Your message has been sent!");
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-black text-white">
      {/* Hero Section */}
      <div className="w-full flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 py-16 lg:py-20">
        {/* Left Content */}
        <motion.div
          className="lg:w-1/2 text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Contact <span className="text-purple-500">Us</span>?
          </h1>
           <p style={styles.contactText}>
        Prefer to email? <a href="mailto:hello@alwaysfresh.io" style={styles.link}>hello@alwaysfresh.io</a>
      </p>
      <p style={styles.contactText}>
        Prefer to call? <a href="tel:+17204326738" style={styles.link}>(720) 432-6738</a>
      </p>
         
        </motion.div>

        {/* Right Visual */}
        <motion.div
          className="lg:w-1/2 flex justify-center mt-12 lg:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
         <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.subHeading}>We aim to respond in a day or two.</h2>
        <label style={styles.label}>
          What's your name?*
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </label>
        <label style={styles.label}>
          What's your email?*
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </label>
        <label style={styles.label}>
          What company are you from?
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            style={styles.input}
          />
        </label>
        <label style={styles.label}>
          What's your website?
          <input
            type="url"
            name="website"
            value={formData.website}
            onChange={handleChange}
            style={styles.input}
          />
        </label>
        <label style={styles.label}>
          How can we help?*
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            style={styles.textarea}
          ></textarea>
        </label>
        <label style={styles.checkboxLabel}>
          <input
            type="checkbox"
            name="subscribe"
            checked={formData.subscribe}
            onChange={handleChange}
            style={styles.checkbox}
          />
          Fancy some tips emailed to you each month? Check this box!
        </label>
        <div style={styles.captchaContainer}>
          <div style={styles.captchaText}>I'm not a robot</div>
          <div style={styles.captchaBox}>reCAPTCHA</div>
        </div>
        <button type="submit" style={styles.button}>Send it!</button>
      </form>
        </motion.div>
      </div>

      {/* Features Section */}
     
      {/* Call to Action */}
      <motion.div
        className="w-full flex flex-col items-center py-16 bg-black bg-opacity-80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold mb-6">
          Ready to <span className="text-purple-500">Transform</span> Your
          Digital Presence?
        </h2>
        <p className="text-lg text-gray-300 mb-8">
          Partner with us to create exceptional digital solutions tailored to
          your business needs.
        </p>
        <motion.button
          className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-8 rounded-lg shadow-lg"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          Get Started
        </motion.button>
      </motion.div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    maxWidth: "600px",
    margin: "0 auto",
  },
  heading: {
    fontSize: "32px",
    marginBottom: "20px",
    textAlign: "center",
  },
  contactText: {
    fontSize: "18px",
    marginBottom: "20px",
    textAlign: "left",
  },
  link: {
    color: "#6200ea",
    textDecoration: "none",
  },
  form: {
    border: "1px solid #ccc",
    padding: "20px",
    borderRadius: "8px",
  },
  subHeading: {
    fontSize: "24px",
    marginBottom: "20px",
  },
  label: {
    fontSize: "16px",
    marginBottom: "10px",
    display: "block",
  },
  input: {
    display: "block",
    width: "100%",
    marginBottom: "10px",
    padding: "8px",
    fontSize: "16px",
    boxSizing: "border-box",
  },
  textarea: {
    display: "block",
    width: "100%",
    marginBottom: "10px",
    padding: "8px",
    fontSize: "16px",
    height: "100px",
    boxSizing: "border-box",
  },
  checkboxLabel: {
    fontSize: "16px",
    display: "block",
    marginBottom: "20px",
  },
  checkbox: {
    marginRight: "5px",
  },
  captchaContainer: {
    marginBottom: "20px",
  },
  captchaText: {
    marginBottom: "10px",
    fontSize: "16px",
  },
  captchaBox: {
    border: "1px solid #ccc",
    padding: "10px",
    display: "inline-block",
    cursor: "not-allowed",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#6200ea",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    width: "100%",
  },
};
export default Contact;
