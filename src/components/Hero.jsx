import React from 'react'
import {ComputersCanvas} from './canvas';
import {styles} from '../styles';
import { motion } from "framer-motion";

const Hero = () => {

  const styles = {
    paddingX: 'sm:px-16 px-6',
    paddingY: 'sm:py-16 py-6',
    padding: 'sm:px-16 px-6 sm:py-16 py-10',

    heroHeadText:
      'font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2',
    heroSubText:
      'text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]',

    sectionHeadText:
      'text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]',
    sectionSubText:
      'sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider',
  }

  return (
    <section className='relative w-full h-screen mx-auto '>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>  
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}> Hi, I am <span className='text-[#915eff]'>Hamza Khan</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop full stack web applications <br className='sm:block hidden'/> from both GIS & non-GIS domains
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center mt-100'>
        <a href="#about">
          <div className='w-[35px] h-[64px] rounded-full bg-white xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.dev animate={{y :[0,24,0]}} transition ={{ 
              duration: 1.5, repeat: Infinity, repeatType: 'loop'
            }}
            className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
            
          </div>
        </a>
         
      </div>

    </section> 
  )
}

export default Hero