import React, { useRef } from "react";
import { art } from "./constants";
import signature from "./assets/art/signatureSvg.svg";
import { motion, useScroll, useTransform } from "framer-motion";

const ArtWork = ({ src }) => {

  return (
    <div className={`flex relative`}>
      <img className={`w-xl h-auto`} src={src} onContextMenu={(e) => e.preventDefault()}/>
    </div>
  )
}

const Art = ({ }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"], // when it starts and ends sticking
  });

  const scale = useTransform(scrollYProgress, [0.05, 0.1], [1, 0.6]);

  return (
    <section ref={container} id="contact" className={`min-h-screen flex flex-col gap-24 items-center justify-center relative z-10 py-36 cursor-default`}>
      <motion.div className={`sticky top-4 font-bokor md:text-8xl text-6xl z-20`} 
        style={{ scale: scale }} 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5}}
      >
        Dante Deluca
      </motion.div>
      <div className={`font-noto-mono md:text-sm text-xs`}>
        Free hand digital artist • Online portfolio
      </div>
      <div className={`border-b border w-15`}/>

      <div className={`flex flex-col h-full gap-16 flex-wrap m-4`}>
        <ArtWork src={art[0].src} />
        <ArtWork src={art[1].src} />
        <ArtWork src={art[2].src} />
      </div>
    </section>
  )
}

export default Art;