import React, { useState, useEffect, ChangeEvent } from "react";
import Banner from "../Components/Banner";
import { useRouter } from "next/navigation";
import styles from "../Hero/Hero.module.css"; // Import CSS file with animation styles

const Hero = () => {
  const words = [
    { text: "Hey", className: "welcome text" },
    { text: "Nirmal,", className: "welcome text" },
    { text: "Solve", className: "welcome text" },
    { text: "And", className: "welcome text" },
    { text: "Answer", className: "welcome text" },
    { text: "this", className: "welcome text" },
    { text: "Riddle.....", className: "welcome text" },
    { text: "Can", className: "welcome text" },
    { text: "You?", className: "welcome text" },
  ];

  const [password, setPassword] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [showPara, setShowPara] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPara(true);
      setShowInput(true);
      setShowButton(true);
    }, words.length * 600); 
    return () => clearTimeout(timer);
  }, [words.length]); // Adding 'words.length' as a dependency

  const inputPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const router = useRouter();
  const handleButton = () => {
    if (password === "1421") {
      router.push("/Pictures/");
    } else {
      alert("WRONG PASSWORD BABY THINK"); // Consider using a styled error message here
    }
  };

  return (
    <div className="h-[40rem] w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
        <div className="flex flex-col items-center">
          <div> {/* Removed top margin from Banner */}
            <Banner words={words} />
          </div>
          {showPara && (
            <div className={`${styles.slideIn} mt-2`}>
              <p className="text-sm text-black w-72 mt-2">
                In the calendar&apos;s embrace, we softly sigh, Two dates entwined,
                beneath the sky. One, a tender whisper, sweet and serene, The other,
                a melody, love&apos;s serene dream. My day blooms with roses, soft and
                bright, Yours follows, bathed in love&apos;s pure light. Together we
                dance, in a timeless embrace, What enchanting number do we trace?
              </p>
            </div>
          )}
          {showInput && (
            <div className={`${styles.slideIn} mt-5`}>
              <input
                className="bg-black text-white w-62 rounded-3xl text-center"
                type="password"
                value={password}
                onChange={inputPassword}
              />
            </div>
          )}
          {showButton && (
            <div className={`${styles.slideIn}`}>
              <button
                onClick={handleButton}
                className="bg-black text-white rounded-md w-64 text-sm"
              >
                Continue with your Answer
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
