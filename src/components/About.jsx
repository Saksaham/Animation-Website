import React from "react";
import { motion } from "framer-motion";
function About() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.2" className="w-full p-20  bg-[#CDEA67] text-black ">
      <h1 className='font-["Neue_Montreal"] text-[4vw] leading-[4.5vw] tracking-tight'>
        Ochi is a strategic partner for fast-grow­ing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>
      <div className="flex gap-5 w-full border-t-[1px] mt-20 pt-4 border-[#a1b562]">
        <div className="w-1/2">
          <h1 className="text-6xl ">Our approach:</h1>
          <button className="px-6 py-4 mt-6 bg-zinc-900 rounded-full text-white flex items-center gap-10 uppercase font-['Neue_Montreal']">Read More
          <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-2/3 h-[60vh]"><img style={{borderRadius:20}} src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg"/></div>
      </div>
    </div>
  );
  
}

export default About;
