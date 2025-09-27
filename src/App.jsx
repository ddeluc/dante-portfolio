import { useState } from 'react'

import Hero from './Hero'
import Projects from './Projects'
import Navbar from './Navbar'

function App() {

  return (
    <>
      <div className={`min-h-screen relative`}>
        <Navbar />
        <Hero />
        <Projects />
      </div>
    </>
  )
}

export default App
