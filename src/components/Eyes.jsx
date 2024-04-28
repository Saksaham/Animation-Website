import React from "react";

function Eyes() {
  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
        <div className="flex gap-12 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
          <div className="relative w-[15vw] h-[15vw] bg-zinc-100 rounded-full">
            <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-2/3 h-2/3 bg-zinc-900 rounded-full"></div>
          </div>
          <div className="w-[15vw] h-[15vw] bg-zinc-100 rounded-full">
            <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-2/3 h-2/3 bg-zinc-900 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
