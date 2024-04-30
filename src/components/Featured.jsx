import React from "react";

function Featured() {
  return (
    <div className="w-full py-28">
      <div className="w-full px-10 border-b-[1px] border-zinc-700 pb-14">
        <h1 className='text-6xl font-["Neue_Montreal"] tracking-tight'>
          Featured projects
        </h1>
      </div>
      <div className="px-14">
        <div className="cards w-full flex gap-10 mt-20">
          <div className="card w-[55vw] h-[70vh] rounded-xl bg-red-500 "></div>
          <div className="card w-[55vw] h-[70vh] rounded-xl bg-red-500 "></div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
