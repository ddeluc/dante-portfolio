import { useState, useRef } from 'react'
import { motion, useScroll } from 'framer-motion';

import Hero from './Hero'
import Projects from './Projects'
import Navbar from './Navbar'
import Experience from './Experience'
import Contact from './Contact'
import Footer from './Footer'

function App() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  })

  return (
    <>
      <div ref={container} className={`min-h-screen relative font-manrope`}>
        <Navbar />
        <Hero scrollYProgress={scrollYProgress} />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
