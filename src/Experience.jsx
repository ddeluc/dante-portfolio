import React from "react";
import LiquidGlass from "liquid-glass-react";

import { amplixExp } from "./constants";

const Experience = () => {

  return (
    <section id="experience" className={`min-h-screen flex flex-col items-center justify-center gap-24 px-4 relative z-10 py-36`}>
      <div className={`md:text-4xl text-2xl`}>
        EXPERIENCE
      </div>
      
      <div className={`space-y-20 border-l pl-4`}>
        <div>
          <div>2018-2023</div>
          <div className={`md:text-xl text-lg font-semibold`}>WESTERN UNIVERSITY</div>
          <div className={`md:text-xl text-lg`}>BACHELOR OF ENGINEERING, CO-OP</div>
          <div>Western AI | UES Creative Director of Merchendise | Western Engineering Build Team</div>
        </div>

        <div>
          <div>2023-TODAY</div>
          <div className={`md:text-xl text-lg font-semibold`}>AMPLIX</div>
          <div className={`md:text-xl text-lg`}>CHATBOT ENGINEER</div>
          <div>Intelligent Virtual Agents | Natural Language Understanding</div>
          <div className={`mt-8 ml-2 space-y-8`}>
            {amplixExp.map((exp) => (
              <div className={`space-y-2`}>
                <div className={`md:text-xl text-lg`}>{exp.title}</div>
                <ul className="list-none">
                  {exp.tasks.map((task) => (
                    <li>{task}</li>
                  ))}
                </ul>
                  <div className={`flex flex-wrap gap-2`}>
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