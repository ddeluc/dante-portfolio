import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { projects } from "./constants";

const Card = ({ i, expanded, setExpanded }) => {
  const isOpen = i === expanded;

  return (
    <motion.div className={`relative max-w-11/12 w-full my-4`}
      onClick={() => setExpanded(isOpen ? false : i)}
    >
      <motion.div className={`relative z-10 grid md:grid-cols-3 grid-cols-2 gap-4 w-full items-center border-b pb-4`}>
        
        <div className={``}>{projects[i].title}</div>
        <div className={`hidden md:block text-center`}>{projects[i].type}</div>       
        <div className={`text-right cursor-default`}
          onClick={(e) => {
            e.stopPropagation();
            window.open(projects[i].link, "_blank", "noopener,noreferrer")
          }}
        >
          VIEW
        </div>
        
      </motion.div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div className={`relative space-y-4`}
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div>
              {projects[i].description}
            </div>
            <div className={`space-x-2 flex flex-wrap`}>
              {projects[i].tags.map((tag) => (
                <span className={`p-2 pt-1 border rounded-xl`}>
                  {tag}
                </span>
              ))}
            </div>
            <div className={`grid grid-cols-1 md:grid-cols-3 w-full gap-2`}>
              {projects[i].pictures.map((pic) => (
                <img src={pic} className={`object-cover aspect-[4/3] w-full`}/>
              ))}
            </div>
            
          </motion.div>
        )}
      </AnimatePresence>
      

    </motion.div>    
  )
}

const Projects = () => {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <section id="projects" className={`min-h-screen flex flex-col items-center justify-center gap-16`}>
      <div>
        PROJECTS
      </div>
      <div className={`flex flex-col w-full items-center justify-center gap-4`}>
        {[0, 1, 2, 3].map((i) => (
          <Card i={i} expanded={expanded} setExpanded={setExpanded} />
        ))}  
      </div>
      
    
    </section>
  )
}

export default Projects;