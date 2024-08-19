"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import { cn } from "../util/util";

const Page = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);

  const [start, setStart] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();

  const items = [
    {
      quote:
        "In twilight's hush, a secret shared, A moment stilled, with hearts laid bare. Whispers of the soul entwined, In silence deep, where love is signed.",
      name: "Poem 1",
      title: "",
    },
    {
      quote:
        "Beneath the stars, where worlds collide, A gentle touch, where dreams reside. Soft as the breeze, yet strong as fire, A fleeting spark, of deep desire.",
      name: "Poem 2",
      title: "",
    },
    {
      quote:
        "When shadows dance and lights grow dim, Two souls connect in evening's hymn. A bond unseen, yet felt so near, In quiet moments, crystal clear.",
      name: "Poem 3",
      title: "",
    },
    {
      quote:
        "A breath of warmth in winter's chill, A silent promise, hearts stand still. In closeness, time forgets to flow, A tender pause, where feelings grow.",
      name: "Poem 4",
      title: "",
    },
  ];

  const direction: "left" | "right" = "left";
  const speed: "fast" | "normal" | "slow" = "fast";
  const pauseOnHover = true;
  const className = "";

  const getDirection = useCallback(() => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  }, [direction]);

  const getSpeed = useCallback(() => {
    if (containerRef.current) {
      const duration =
        speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  }, [speed]);

  const addAnimation = useCallback(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current.appendChild(duplicatedItem);
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }, [getDirection, getSpeed]);

  useEffect(() => {
    addAnimation();
  }, [addAnimation]);

  const handleSubmit = () => {
    if (!inputValue) {
      alert("Please enter a date.");
      return;
    }

    const correctAnswer = "16/12";
    if (inputValue.trim() === correctAnswer) {
      router.push("/Final/");
    } else {
      alert("Wrong answer, please try again.");
    }
  };

  return (
    <div className="h-[40rem] w-full dark:bg-black bg-white flex-col dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      <div className="w-[600px] bg-slate-300 rounded-lg p-5">
        <h2 className="text-xl">
          &quot;Ten years of love, strong and true, We celebrate on the 21st of a
          month with a clue. But think back, my dear, to when we shared A
          special moment, tender and rare. A cold month it was, the end of the
          year, The date holds our memory so dear. Subtract seven from the magic
          square, And add it to the month where joy was in the air. Find this
          number, it&apos;s your task, Tell me the date when we first unmasked.&quot;
        </h2>
      </div>
      <div>
        <input
          type="text"
          placeholder="DD/MM"
          className="w-[250px] bg-black p-5 text-center text-white rounded-lg shadow-xl m-4"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="text-black bg-red-300 p-3 rounded-lg"
          onClick={handleSubmit}
        >
          Continue with your answer
        </button>
      </div>
      <div
        ref={containerRef}
        className={cn(
          "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
          className
        )}
      >
        <ul
          ref={scrollerRef}
          className={cn(
            "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
            start && "animate-scroll",
            pauseOnHover && "hover:[animation-play-state:paused]"
          )}
        >
          {items.map((item, index) => (
            <li
              key={`${item.name}-${index}`}
              className="w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6 md:w-[450px]"
              style={{
                background:
                  "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
              }}
            >
              <blockquote>
                <div
                  aria-hidden="true"
                  className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                ></div>
                <span className="relative z-20 text-sm leading-[1.6] text-gray-100 font-normal">
                  {item.quote}
                </span>
                <div className="relative z-20 mt-6 flex flex-row items-center">
                  <span className="flex flex-col gap-1">
                    <span className="text-sm leading-[1.6] text-gray-400 font-normal">
                      {item.name}
                    </span>
                    {item.title && (
                      <span className="text-sm leading-[1.6] text-gray-400 font-normal">
                        {item.title}
                      </span>
                    )}
                  </span>
                </div>
              </blockquote>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Page;
