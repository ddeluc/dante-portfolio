import React from "react";
import danteAligheriEyes from "./assets/images/hero/danteAligheriEyes.png";



const Hero = ({  }) => {

  return (
    <section className={`h-screen relative flex items-center justify-center z-0`}>
      <div className={`flex flex-col items-center md:text-4xl text-2xl whitespace-nowrap`}>
        <div className={`md:text-8xl text-4xl font-extrabold`}>DANTE DELUCA</div>
        <div>SOFTWARE ENGINEERING</div>
        <div>FULL STACK DEVELOPMENT</div>
        <div>AI OPTIMIZATION</div>
        <div>MONTREAL</div>
      </div>
      
    </section>
  )
}

export default Hero;