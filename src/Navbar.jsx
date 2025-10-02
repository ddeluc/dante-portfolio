import React, { useEffect } from "react";
import { isMobile } from "react-device-detect";
import { motion } from "framer-motion";

const Navbar = ({}) => {

  return (
    <div className={`fixed w-full z-30 p-4`}>
      <div className={`flex ${!isMobile ? "justify-between" : "justify-center"}`}>
        {!isMobile && 
          <a className={``} href="#">
            DANTE DELUCA
          </a>
        }
        
        <div className={`flex gap-6`}>
          <motion.a href="#projects" whileHover={{ y: 4 }} transition={{ duration: 0.1, type: "tween" }}>PROJECTS</motion.a>
          <motion.a href="#experience" whileHover={{ y: 4 }} transition={{ duration: 0.1, type: "tween" }}>EXPERIENCE</motion.a>
          <motion.a href="#contact" whileHover={{ y: 4 }} transition={{ duration: 0.1, type: "tween" }}>CONTACT</motion.a>
        </div>
      </div>      
    </div>
  )
}

export default Navbar;