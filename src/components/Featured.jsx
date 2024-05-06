import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
function Featured() {
  let cards = [useAnimation(), useAnimation()];
  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };
  const endHover = (index) => {
    cards[index].start({ y: "100%" });
  };
  return (
    <div className="w-full py-28 relative">
      <div className="w-full px-10 border-b-[1px] border-zinc-700 pb-14">
        <h1 className='text-6xl font-["Neue_Montreal"] tracking-tight'>
          Featured projects
        </h1>
      </div>
      <div className="flex  absolute mt-10 ml-12">
        <div className="rounded-full bg-zinc-900 w-2 h-2 mt-2 ml-2"></div>
        <h5 className="ml-2 mb-3">FYDE</h5>
      </div>
      <div className="flex  absolute mt-10 ml-[50vw]">
          <div className="rounded-full bg-zinc-900 w-2 h-2 mt-2 ml-2"></div>
          <h5 className="ml-2 mb-3">VISE</h5>
      </div>
      <div className="px-14">
        <div className="cards w-full flex gap-5 mt-20">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => endHover(0)}
            className="relative cardcontainer w-[55vw] h-[70vh]"
          >
            <h1 className="absolute flex left-full text-[#CDEA67] font-bold -translate-x-1/2 overflow-hidden -translate-y-7 top-1/2 text-8xl z-[999] tracking-tighter">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                  className="inline-block translate-y-full"
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>

            <div className="w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png"
              />
            </div>
          </motion.div>

          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => endHover(1)}
            className="relative cardcontainer w-[55vw] h-[70vh]"
          >
            <h1 className="absolute flex overflow-hidden right-full text-[#CDEA67] font-bold translate-x-1/2 -translate-y-7 top-1/2 text-8xl z-[999] ">
              {"VISE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                  className="inline-block translate-y-full"
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg"
              />
            </div>
          </motion.div>
        </div>
      </div>
      <div className="buttons flex mt-12 ml-16">
        {[
          "AUDIT",
          "COPYWRITING",
          "SALES DECK",
          "SLIDES DESIGN",
          "AGENCY",
          "COMPANY PRESENTATION",
        ].map((item, index) => (
          <button
            key={index}
            className={`border border-zinc-950 px-3 py-2 rounded-full text-sm ${
              index == 0 ? "ml-0" : "ml-3"
            } ${index == 4 && "ml-[15%]"}`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Featured;
