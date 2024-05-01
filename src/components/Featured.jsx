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
        <div className="cards w-full flex gap-5 mt-20">
          <div className="relative cardcontainer w-[55vw] h-[70vh]">
            <div className="flex">
            <div className="rounded-full bg-zinc-900 w-2 h-2 mt-2 ml-2"></div>
            <h5 className="ml-2 mb-3">FYDE</h5>
            </div>
            <h1 className=" absolute text-[#CDEA67] font-semibold left-full top-1/2 -translate-x-1/2 -translate-y-3/2  text-8xl tracking-tighter">
            {"FYDE".split('').map((item,index)=><span key={index}>{item}</span>)}
            </h1>
            
            <div className="w-full h-full rounded-xl overflow-hidden">
              <img className="w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png"/>
            </div>    
          </div>
          <div className="relative cardcontainer w-[55vw] h-[70vh]">
          <div className="flex">
            <div className="rounded-full bg-zinc-900 w-2 h-2 mt-2 ml-2"></div>
            <h5 className="ml-2 mb-3">VISE</h5>
            </div>
          <h1 className=" absolute text-[#CDEA67] font-semibold right-full top-1/2 translate-x-1/2 -translate-y-3/2  text-8xl tracking-tighter" >
          {"VISE".split('').map((item,index)=><span key={index}>{item}</span>)}
          </h1>
            <div className="w-full h-full rounded-xl overflow-hidden">
            <img className="w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg"/>  
            </div>    
          </div>
        </div>
      </div>
      <div className="buttons flex mt-12 ml-16">
      {["AUDIT" , "COPYWRITING" , "SALES DECK" , "SLIDES DESIGN" , "AGENCY" , "COMPANY PRESENTATION"].map((item,index)=><button key={index} className={`border border-zinc-950 px-3 py-2 rounded-full text-sm ${index == 0 ? "ml-0" : "ml-3" } ${index==4 && "ml-[15%]"}`}>{item}</button>)}
      </div>
    </div>
  );
}

export default Featured;
