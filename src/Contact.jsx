import React, { useState } from "react";
import emailjs from "emailjs-com";

import { FaLinkedin } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io";

const Contact = ({}) => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");
    

    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,   // replace with EmailJS service ID
        import.meta.env.VITE_TEMPLATE_ID,  // replace with EmailJS template ID
        {
          from_email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_PUBLIC_KEY    // replace with EmailJS public key
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setFormData({ email: "", message: "" });
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setStatus("Failed to send message. Try again later.");
        }
      );
  };

  return (
    <section id="contact" className={`min-h-screen flex flex-col items-center justify-center`}>
      <div className={`flex`}>
        <FaLinkedin className={`w-16 h-auto`} onClick={() => window.open("https://www.linkedin.com/in/danterdeluca/", "_blank", "noopener,noreferrer")}/>
        <a className={`cursor-default`} href="mailto:you@example.com">
          <MdMailOutline className={`w-16 h-auto`} />
        </a>
        
        <IoLogoGithub className={`w-16 h-auto`} onClick={() => window.open("https://github.com/ddeluc", "_blank", "noopener,noreferrer")}/>
      </div>
    
      <form
        onSubmit={handleSubmit}
        className={``}
      >
        <div>
          <label className={``} htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={`w-full border`}
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className={``} htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
            className={`w-full border`}
            placeholder="Your message..."
          />
        </div>

        <button
          type="submit"
          className={``}
        >
          Send
        </button>

        {status && <p className="text-sm text-center mt-2">{status}</p>}
      </form>
        
    </section>
  )
}

export default Contact;