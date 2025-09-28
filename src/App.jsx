import { useState } from 'react'

import Hero from './Hero'
import Projects from './Projects'
import Navbar from './Navbar'
import Experience from './Experience'
import Contact from './Contact'
import Footer from './Footer'

function App() {

  return (
    <>
      <div className={`min-h-screen relative`}>
        <Navbar />
        <Hero />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
