import { useState, useRef } from 'react'
import { motion, useScroll } from 'framer-motion';
import { createBrowserRouter, RouterProvider, BrowserRouter } from "react-router-dom";

import Hero from './Hero'
import Projects from './Projects'
import Navbar from './Navbar'
import Experience from './Experience'
import Contact from './Contact'
import Footer from './Footer'
import Art from './Art';

const DeveloperPortfolio = () => {

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
        <Footer portfolio={"pro"} />
      </div>
    </>
  )
}

const ArtPortfolio = () => {

  return (
    <div className={`min-h-screen relative`}>
      <Art />
      <Footer portfolio={"art"}/>
    </div>
    
  )
}

const router = createBrowserRouter([
  {path: "/", element: <DeveloperPortfolio />},
  {path: "/art", element: <ArtPortfolio />}
])

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
