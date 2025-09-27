import React from "react";

const Navbar = ({}) => {

  return (
    <div className={`fixed w-full`}>
      <div className={`flex justify-between`}>
        <div className={``}>
          DANTE DELUCA
        </div>
        <div className={`flex gap-2`}>
          <span>PROJECTS</span>
          <span>EXPERIENCE</span>
          <span>ART</span>
          <span>CONTACT</span>
        </div>
      </div>
      
    </div>
  )
}

export default Navbar;