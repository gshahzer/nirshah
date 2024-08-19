"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import styles from './slide.module.css'

const Page = () => {
  const navigate = useRouter();
  const handlebutton = () => {
    navigate.push("/PuzzleGame/");
  }
  return (
    <div className="h-[40rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
      </div>
      
      <div className="text-2xl text-black  font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-black ">
      <video  className={`${styles.slideIn} shadow-md`} src="/video.mp4" controls style={{ width: '500px', height: '500px' }}></video>
        Look at some of our beautiful moments and then continue to the next game
      <div>
     
      <button className='bg-black text-white rounded-lg w-40 text-lg ' onClick={handlebutton}>
        Continue
      </button>
      </div>
      </div>
       </div>
  )
}

export default Page