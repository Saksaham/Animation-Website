import React from 'react'

function Cards() {
  return (
    <div className='w-full h-[70vh] px-10 flex gap-5 '>
      <div className='cardcontainer w-1/2 h-[48vh]'>
        <div className='card w-full h-full bg-[#004D43] rounded-xl flex items-center justify-center relative'>
          <img className='w-36' src='https://ochi.design/wp-content/uploads/2022/04/logo001.svg'></img>
          <span className='absolute bottom-6 left-6 text-[#CDEA67] font-thin text-sm border border-[#C6E466] py-1 px-2 rounded-full'>&copy;2019-2022</span>
        </div>
      </div>
      <div className='cardcontainer w-1/2 flex gap-5 h-[48vh]'>
        <div className='card rounded-xl h-full w-full bg-[#212121] flex items-center justify-center relative'>
          <img className='w-36' src='https://ochi.design/wp-content/uploads/2022/04/logo002.svg'/>
          <button className='uppercase text-white text-sm font-extralight absolute bottom-6 left-6 border border-zinc-100 rounded-full py-1 px-3'>Rating 5.0 on clutch</button>
        </div>
        <div className='card rounded-xl h-full w-full bg-[#212121] flex items-center justify-center relative'>
          <img className='w-36' src='https://ochi.design/wp-content/uploads/2022/04/logo003.png'/>
          <button className='uppercase text-white text-sm font-thin absolute bottom-6 left-6 border border-zinc-100 rounded-full py-1 px-3'>business bootcamp allumni</button>
        </div>
      </div>
    </div>
  )
}

export default Cards