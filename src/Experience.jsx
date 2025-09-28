import React from "react";

import { amplixExp } from "./constants";

const Experience = () => {

  return (
    <section className={`min-h-screen flex flex-col items-center justify-center gap-16 px-4`}>
      <div>
        EXPERIENCE
      </div>
      
      <div className={`space-y-12 border-l pl-4`}>
        <div>
          <div>WESTERN UNIVERSITY</div>
          <div>BACHELOR OF ENGINEERING</div>
          <div>Western AI | UES Creative Director of Merchendise | Western Engineering Build Team</div>
        </div>


        <div>
          <div>AMPLIX</div>
          <div>CHATBOT ENGINEER</div>
          <div>Intelligent Virtual Agents | Natural Language Understanding</div>
          <div className={``}>
            {amplixExp.map((exp) => (
              <div className={`mt-4 ml-2`}>
                <div>{exp.title}</div>
                <ul className="list-none">
                  {exp.tasks.map((task) => (
                    <li>{task}</li>
                  ))}
                </ul>
                <div className={`flex flex-wrap`}>
                  {exp.skills.map((skill) => (
                    <span className={`p-2 pt-1 border rounded-xl`}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      
        
    </section>
  )
}

export default Experience;