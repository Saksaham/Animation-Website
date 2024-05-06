import React from 'react'
import {motion} from 'framer-motion';
function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".095" className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43] text-white'>
        <div className='text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap overflow-hidden  '>
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:"linear", duration:8 , repeat:Infinity}} className='text-[26vw] leading-none font-["Founders_Grotesk_X-Condensed"] font-semibold uppercase -mb-[7vw] pt-14 pr-10'>We are ochi</motion.h1>
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:"linear", duration:8 , repeat:Infinity}} className='text-[26vw] leading-none font-["Founders_Grotesk_X-Condensed"] font-semibold uppercase -mb-[7vw] pt-14 pr-10'>We are ochi</motion.h1>
        </div>
    </div>
  )
} 

export default Marquee