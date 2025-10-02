import React, { useEffect, useState } from "react";
import { isMobile } from 'react-device-detect';
import { motion } from 'framer-motion';

import { FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { IoLogoGithub } from "react-icons/io";

const Footer = () => {
  useEffect(() => {
    console.log("isMobile: " + isMobile);
  })

  return (
    <div className={`w-full fixed bottom-0 flex justify-between p-2 gap-4 z-30`}>
      <div>
        {isMobile ? "v1.0" : "Portfolio v1.0"}
      </div>
      <div className={`flex gap-6`}>

        <motion.div className={`relative flex justify-center`} initial="initial" whileHover="hovered">
          <motion.div className={`absolute`}
            variants={{initial: {opacity: 0, y: 0}, hovered: {opacity: 1, y: -40}}}
            transition={{type: "tween", ease: "easeOut", duration: 0.1}}
          >
            <FaLinkedin className={`h-10 w-auto`} onClick={() => window.open("https://www.linkedin.com/in/danterdeluca/", "_blank", "noopener,noreferrer")} />
          </motion.div>          
          <a href="https://www.linkedin.com/in/danterdeluca/" target="_blank" rel="noopener noreferrer">{`[LINKEDIN]`}</a>
        </motion.div>

        
        <motion.div className={`relative flex justify-center`} initial="initial" whileHover="hovered">
          <motion.div className={`absolute`}
            variants={{initial: {opacity: 0, y: 0}, hovered: {opacity: 1, y: -40}}}
            transition={{type: "tween", ease: "easeOut", duration: 0.1}}
          >
            <AiOutlineMail className={`h-10 w-auto`} onClick={() => window.open("mailto:dante.deluca.dev@gmail.com", "_blank", "noopener,noreferrer")} />
          </motion.div>          
          <a href="mailto:dante.deluca.dev@gmail.com" >{`[EMAIL]`}</a>
        </motion.div>

        <motion.div className={`relative flex justify-center`} initial="initial" whileHover="hovered">
          <motion.div className={`absolute`}
            variants={{initial: {opacity: 0, y: 0}, hovered: {opacity: 1, y: -40}}}
            transition={{type: "tween", ease: "easeOut", duration: 0.1}}
          >
            <IoLogoGithub className={`h-10 w-auto`} onClick={() => window.open("https://github.com/ddeluc", "_blank", "noopener,noreferrer")} />
          </motion.div>          
          <a href="https://github.com/ddeluc" target="_blank" rel="noopener noreferrer">{`[GITHUB]`}</a>
        </motion.div>
        
      </div>
      
    </div>
  )
}

export default Footer;