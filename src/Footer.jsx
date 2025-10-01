import React from "react";

const Footer = () => {

  return (
    <div className={`w-full fixed bottom-0 flex justify-between gap-4`}>
      <div>
        Portfolio V1.0
      </div>
      <div>
        <a href="https://www.linkedin.com/in/danterdeluca/" target="_blank" rel="noopener noreferrer">{`[LINKEDIN]`}</a>
        <a href="mailto:dante.deluca.dev@gmail.com" >{`[EMAIL]`}</a>
        <a href="https://github.com/ddeluc" target="_blank" rel="noopener noreferrer">{`[GITHUB]`}</a>
      </div>
      
    </div>
  )
}

export default Footer;