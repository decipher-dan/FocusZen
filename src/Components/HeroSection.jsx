import React from 'react'
import {motion} from 'framer-motion'
import background from '../assets/image1.png'

const HeroSection = () => {
  return (
    <>
        <div style={{backgroundImage: `url(${background})`}} className='h-80 md:h-100 relative items-center flex justify-center bg-cover bg-center bg-no-repeat'>
            <div className='absolute justify-center w-full flex items-center flex-col'>
               <motion.h1 
                initial={{opacity:0, y:40}}
                animate={{opacity:1, y:0}}
                transition={{duration:0.8}}
                className='text-4xl md:text-6xl md:px-5 font-bold text-center px-2 mb-2 pt-9'>
                 Master your focus, reclaim your time.
               </motion.h1>
               <motion.p 
                initial={{opacity:0, y:20}}
                animate={{opacity:1, y:0}}
                transition={{duration:0.8, delay:0.3}}
                className='text-gray-900 mt-4 max-w-2xl text-center text-lg mb-2 '>
                 FocusZen helps you stay productive with calming, effective focus sessions.
               </motion.p>
               <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                              delay: 0.6,
                              duration: 0.6,
                              type: 'spring',
                              stiffness: 120, // controls bounce
                              damping: 8 }}
                className='bg-[#9191b7b5] p-3 rounded-3xl capitalize hover:bg-[#d7d7d7bb] transition-transfrom duration-500 hover:scale-105 cursor-pointer'>
                join the waitlist
               </motion.a>
            </div>

        </div>
    </>
  )
}

export default HeroSection;