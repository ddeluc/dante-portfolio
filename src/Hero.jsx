import React from "react";
import { motion, useTransform } from "framer-motion";

const Hero = ({ scrollYProgress }) => {

  const opacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <motion.section className={`h-screen sticky top-0 flex items-center justify-center z-0`} style={{ opacity: opacity }}>
      <div className={`flex flex-col items-center md:text-4xl text-xl whitespace-nowrap`}>
        <div className={`md:text-8xl text-4xl font-extrabold space-x-3`}>
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.05 }}>DANTE</motion.span>
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.05 }}>DELUCA</motion.span>
        </div>
        <motion.div initial={{ opacity: 0, y: "-50%" }} animate={{ opacity: 1, y: "0%" }} transition={{ delay: 1.5, duration: 0.15 }}>SOFTWARE ENGINEERING</motion.div>
        <motion.div initial={{ opacity: 0, y: "-50%" }} animate={{ opacity: 1, y: "0%" }} transition={{ delay: 1.6, duration: 0.15 }}>FULL STACK DEVELOPMENT</motion.div>
        <motion.div initial={{ opacity: 0, y: "-50%" }} animate={{ opacity: 1, y: "0%" }} transition={{ delay: 1.7, duration: 0.15 }}>AI OPTIMIZATION</motion.div>
        <motion.div initial={{ opacity: 0, y: "-50%" }} animate={{ opacity: 1, y: "0%" }} transition={{ delay: 1.8, duration: 0.15 }}>MONTREAL</motion.div>
      </div>
      
    </motion.section>
  )
}

export default Hero;