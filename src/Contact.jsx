import React, { useState } from "react";
import emailjs from "emailjs-com";

import { FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
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
    <section id="contact" className={`min-h-screen flex flex-col gap-24 items-center justify-center relative z-10 py-36`}>
      
      <div className={`md:text-4xl text-2xl`}>
        CONTACT
      </div>
      
      {/* <div className={`flex items-center justify-center space-x-4`}>
        <FaLinkedin className={`h-16 w-auto`} onClick={() => window.open("https://www.linkedin.com/in/danterdeluca/", "_blank", "noopener,noreferrer")}/>
        <a className={`cursor-default`} href="mailto:dante.deluca.dev@gmail.com">
          <AiOutlineMail className={`h-16 w-auto`} />
        </a>        
        <IoLogoGithub className={`h-16 w-auto`} onClick={() => window.open("https://github.com/ddeluc", "_blank", "noopener,noreferrer")}/>
      </div> */}
    
      <form
        onSubmit={handleSubmit}
        className={`space-y-4 max-w-sm w-full px-8`}
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
            className={`w-full border p-2 mt-1 rounded-sm`}
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
            className={`w-full border resize-none p-2 mt-1 h-36 rounded-sm`}
          />
        </div>

        <button
          type="submit"
          className={`w-full`}
        >
          Send
        </button>        

        {status && <p className="text-sm text-center mt-2">{status}</p>}
      </form>
        
    </section>
  )
}

export default Contact;