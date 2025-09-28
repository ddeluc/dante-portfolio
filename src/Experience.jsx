import React from "react";

import { amplixExp } from "./constants";

const Experience = () => {

  return (
    <section className={`min-h-screen flex flex-col items-center justify-center`}>
      
      <div>AMPLIX</div>
      <div>CHATBOT ENGINEER</div>
      <div className={`space-y-4 border-l pl-4`}>
        {amplixExp.map((exp) => (
          <div>
            <div>{exp.title}</div>
            <ul className="list-none">
              {exp.tasks.map((task) => (
                <li>{task}</li>
              ))}
            </ul>
            <div className={`flex`}>
              {exp.skills.map((skill) => (
                <span className={`p-2 pt-1 border rounded-xl`}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      
        
    </section>
  )
}

export default Experience;