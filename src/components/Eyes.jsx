import React, { useEffect, useState } from "react";
import { BsAndroid } from "react-icons/bs";

function Eyes() {
  const [angle , setAngle] = useState(0);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth/2;
      let deltaY = mouseY - window.innerHeight/2;

      let angle = Math.atan2(deltaY , deltaX) * (180/Math.PI);
      setAngle(angle-180);
    });
  });
  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
        <div className="flex gap-12 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
          <div className="flex items-center justify-center w-[15vw] h-[15vw] bg-zinc-100 rounded-full">
            <div className="relative w-2/3 h-2/3 bg-zinc-900 rounded-full">
              <div style={{transform:`translate(-50% , -50%) rotate(${angle}deg)`}} className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] line  w-36 h-1/4">
                <div className="mt-2.5 ml-0.5 rounded-full bg-zinc-100 w-5 h-5"></div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-white uppercase text-md">
                play
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-[15vw] h-[15vw] bg-zinc-100 rounded-full">
            <div className="relative w-2/3 h-2/3 bg-zinc-900 rounded-full">
              <div style={{transform:`translate(-50% , -50%) rotate(${angle}deg)`}} className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] line  w-36 h-1/4">
                <div className="mt-2.5 ml-0.5 rounded-full bg-zinc-100 w-5 h-5"></div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-white uppercase text-md">
                play
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
