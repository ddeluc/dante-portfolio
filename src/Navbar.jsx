import React from "react";

const Navbar = ({}) => {

  return (
    <div className={`fixed w-full z-30 p-4`}>
      <div className={`flex justify-between`}>
        <a className={``} href="#">
          DANTE DELUCA
        </a>
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