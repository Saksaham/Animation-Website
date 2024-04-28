import React from "react";

function About() {
  return (
    <div className="w-full p-20  bg-[#CDEA67] rounded-tl-3xl rounded-tr-3xl text-black">
      <h1 className='font-["Neue_Montreal"] text-[4vw] leading-[4.5vw] tracking-tight'>
        Ochi is a strategic partner for fast-grow­ing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>
      <div className="flex gap-5 w-full border-t-[1px] mt-20 pt-4 border-[#a1b562]">
        <div className="w-1/2">
          <h1 className="text-6xl ">Our approach:</h1>
          <button className="px-8 py-4 mt-4 bg-zinc-900 rounded-full text-white flex items-center gap-10 uppercase">Read More
          <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 h-[60vh] bg-[#b0c859] rounded-3xl"></div>
      </div>
    </div>
  );
  
}

export default About;
