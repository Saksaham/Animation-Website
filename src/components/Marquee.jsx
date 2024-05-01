import React from 'react'
import {motion} from 'framer-motion';
function Marquee() {
  return (
    <div className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43] text-white'>
        <div className='text border-t-2 border-b-2 border-zinc-300 gap-10 flex whitespace-nowrap overflow-hidden '>
            <h1 className='text-[26vw] leading-none font-["Founders_Grotesk_X-Condensed"] font-semibold uppercase -mb-[7vw] pt-14 '>We are ochi</h1>
            <h1 className='text-[26vw] leading-none font-["Founders_Grotesk_X-Condensed"] font-semibold uppercase -mb-[7vw] pt-14 '>We are ochi</h1>
            <h1 className='text-[26vw] leading-none font-["Founders_Grotesk_X-Condensed"] font-semibold uppercase -mb-[7vw] pt-14 '>We are ochi</h1>
        </div>
    </div>
  )
} 

export default Marquee