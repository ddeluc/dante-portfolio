import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { projects } from "./constants";

const Card = ({ i, expanded, setExpanded }) => {
  const isOpen = i === expanded;

  return (
    <motion.div className={`relative max-w-11/12 w-full my-4`}
      onClick={() => setExpanded(isOpen ? false : i)}
    >
      <motion.div className={`relative z-10 grid md:grid-cols-3 grid-cols-2 w-full items-center border-b pb-4 md:text-xl text-lg`}>
        
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
          <motion.div className={`relative space-y-6 overflow-hidden pt-6`}
            style={{overflowAnchor: "none"}}
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { height: "auto" },
              collapsed: { height: 0 }
            }}
            transition={{ duration: 0.8, ease: [.25,.1,.25,1] }}
          >
            <div className={`md:text-2xl text-lg max-w-3xl`}>
              {projects[i].description}
            </div>
            <div className={`gap-2 flex flex-wrap mb-8`}>
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
    <section id="projects" className={`min-h-screen flex flex-col items-center justify-center gap-24 relative z-10 py-36`}>
      <div className={`md:text-4xl text-2xl`}>
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