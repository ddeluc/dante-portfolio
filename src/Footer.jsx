import React, { useEffect } from "react";
import { isMobile } from 'react-device-detect';

const Footer = () => {
  useEffect(() => {
    console.log("isMobile: " + isMobile);
  })

  return (
    <div className={`w-full fixed bottom-0 flex justify-between p-2 gap-4 z-30`}>
      <div>
        {isMobile ? "v1.0" : "Portfolio v1.0"}
      </div>
      <div className={`space-x-6`}>
        <a href="https://www.linkedin.com/in/danterdeluca/" target="_blank" rel="noopener noreferrer">{`[LINKEDIN]`}</a>
        <a href="mailto:dante.deluca.dev@gmail.com" >{`[EMAIL]`}</a>
        <a href="https://github.com/ddeluc" target="_blank" rel="noopener noreferrer">{`[GITHUB]`}</a>
      </div>
      
    </div>
  )
}

export default Footer;