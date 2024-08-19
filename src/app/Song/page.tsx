"use client"
import { useRouter } from "next/navigation";
import React from "react";

// Change 'page' to 'Page' to follow React's naming conventions
const Page = () => {
  const router = useRouter(); // 'navigate' renamed to 'router' for clarity
  const handleBtn = () => {
    router.push('/Coursal/');
  };

  return (
    <div>
      <div className="h-[40rem] w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex flex-col items-center justify-center"></div>
        <div className="flex-col gap-3 ">
          <div>
            <h1 className="text-4xl text-black font-bold text-center">I Love you Nirmal</h1>
          </div>
          <div>
            <video src="video1.mp4" controls width={500}></video>
          </div>
          <button className="bg-black w-60 text-white rounded-xl mt-5 shadow-2xl" onClick={handleBtn}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
