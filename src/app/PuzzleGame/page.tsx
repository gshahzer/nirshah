"use client"
import React from 'react'
import Puzzle from '../Components/Puzzle'
import { useRouter } from 'next/navigation'


const Page = () => {
 const router = useRouter();

  const handlebtn = () =>{
  router.push("/Song/") 
 }
  return (
    <div>
      <div className="h-[40rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
      </div>
      <div className="text-2xl text-black  font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-black " >
      <h1>Picture Puzzle Game</h1>
      <Puzzle image="/us1.jpg" rows={4} cols={4} />
      <button onClick={handlebtn} className='text-sm bg-black text-white mt-3 p-5 rounded-xl shadow-2xl'>Continue when you complete</button>
    </div>
    </div>
    </div>
  )
}

export default Page