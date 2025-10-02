import React, { useEffect } from "react";
import { isMobile } from "react-device-detect";

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
          <a href="#projects">PROJECTS</a>
          <a href="#experience">EXPERIENCE</a>
          <a href="#contact">CONTACT</a>
        </div>
      </div>      
    </div>
  )
}

export default Navbar;