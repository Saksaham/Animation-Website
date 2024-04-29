import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
function LandingPage() {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-44 px-14">
        {["WE CREATE", "EYE OPENING", "PRESENTATIONS"].map((item, index) => {
          return (
            <div key={index} className="masker">
              <div className="w-fit flex">
                {index === 1 && (
                  <div className="w-[8vw] h-[5.7vw] bg-green-500 relative -top-[1vw] rounded-md mr-[1vw]"></div>
                )}
                <h1 className="uppercase text-[9vw] leading-[7vw] font-['Founders_Grotesk_X-Condensed'] font-semibold">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20">
        {[
          "For public and private companies",
          "From the first pitch to the IPO",
        ].map((item, index) => (
          <p
            key={index}
            className="text-md font-light tracking-tight leading-none"
          >
            {item}
          </p>
        ))}

        <div className="start flex items-center justify-center gap-2">
          <div className="px-5 py-2 rounded-full border-[1px] border-zinc-400 uppercase text-[13px] font-light">
            start the project
          </div>
          <div className="w-9 h-9 rounded-full border-[1px] border-zinc-400 flex items-center justify-center">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
