import React from 'react'

const page = () => {
  return (
    <div>
    <div className="h-[40rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex flex-col items-center justify-center"></div>
      <div className="flex-col gap-3 ">
        
        <div>
          <video src="video.mp4" width={500} autoPlay></video>
        </div>
    
      </div>
    </div>
  </div>
  )
}

export default page