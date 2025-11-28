import React from 'react'
import './Hero.css';
import { motion } from "framer-motion";
// import dark_arrow from '../../assets/dark_arrow.png'
const fadeUp = {
hidden: { opacity: 0, y:60 },
show: { opacity: 1, y: 0 }
};
const fadeUp2 = {
hidden: { opacity: 0, y: -60 },
show: { opacity: 1, y: 0 }
};
const Hero = () => {
  return (
    <motion.div  initial="hidden"
      animate="show"
      className='hero container'>
      <div className="hero-text">
        <motion.h1 variants={fadeUp2}  transition={{ duration: 0.8 }}>We Ensure better education for a better world</motion.h1>
        <p>We focus on building knowledge, values, and skills that create responsible global citizens for a better tomorrow.</p>
        <motion.button variants={fadeUp}  transition={{ duration: 0.8 }} className='btn'>Explore More </motion.button>
      </div>
    </motion.div>
  )
}
export default Hero
