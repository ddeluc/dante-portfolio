import React from "react";

const Footer = () => {

  return (
    <div className={`w-full fixed bottom-0 flex justify-center gap-4`}>
      <a href="https://www.linkedin.com/in/danterdeluca/" target="_blank" rel="noopener noreferrer">{`[LINKEDIN]`}</a>
      <a href="mailto:dante.deluca.dev@gmail.com" >{`[EMAIL]`}</a>
      <a href="https://github.com/ddeluc" target="_blank" rel="noopener noreferrer">{`[GITHUB]`}</a>
    </div>
  )
}

export default Footer;