import { useState } from 'react'

import Hero from './Hero'
import Projects from './Projects'
import Navbar from './Navbar'
import Experience from './Experience'

function App() {

  return (
    <>
      <div className={`min-h-screen relative`}>
        <Navbar />
        <Hero />
        <Projects />
        <Experience />
      </div>
    </>
  )
}

export default App
