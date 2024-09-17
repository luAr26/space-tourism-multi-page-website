"use client";
import data from "@/data/data.json";
import { clsx } from "clsx";
import Image from "next/image";
import { useState } from "react";
const crewData = data.crew;

const CrewMembers = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const { name, images, role, bio } = crewData[activeSlide];
  return (
    <div className="container tablet:py-500 desktop:h-full desktop:py-600">
      <h1 className="text-center font-barlowCondensed text-preset-8 uppercase tracking-[2.3px] tablet:text-left tablet:text-[1.25rem] desktop:text-preset-5">
        <span className="mr-300 font-bold text-[rgba(255,255,255,0.25)]">
          02
        </span>{" "}
        Meet your crew
      </h1>
      <div className="flex flex-col items-center desktop:mt-1600 desktop:flex-row desktop:space-x-[109px]">
        <div className="text-center desktop:text-left">
          <h3 className="mt-800 font-bellefair text-[1.125rem] uppercase text-[rgba(255,255,255,0.5)]">
            {role}
          </h3>
          <h2 className="font-bellefair text-[1.5rem] uppercase tablet:text-[80px] desktop:mt-500 desktop:text-[96px]">
            {name}
          </h2>
          <p className="mt-300 max-w-[327px] text-[0.9375rem] leading-[1.8] text-blue-300 tablet:max-w-[514px] tablet:text-[1rem] desktop:min-h-[116px] desktop:max-w-[445px]">
            {bio}
          </p>
          <div className="mt-[43px] flex justify-center space-x-200 desktop:justify-start">
            {crewData.map((member, index) => {
              const { name } = member;
              return (
                <button
                  className={clsx(
                    "small-pagination-btn",
                    activeSlide === index && "small-pagination-btn--active",
                  )}
                  key={index}
                  onClick={() => setActiveSlide(index)}
                >
                  <span className="sr-only">{name}</span>
                </button>
              );
            })}
          </div>
        </div>
        <div
          className={clsx(
            "relative mt-400",
            name === "Douglas Hurley" && "h-[175px] w-[128.5px]",
            name === "Mark Shuttleworth" && "h-[175px] w-[128.5px]",
            name === "Victor Glover" && "h-[153.57px] w-[130.71px]",
            name === "Anousheh Ansari" && "h-[143.75px] w-[150.50px]",
          )}
        >
          <Image
            src={images.webp}
            alt={name}
            fill
            priority
            sizes="125px, (min-width: 768px) 250px, (min-width: 1440px) 480px"
          />
        </div>
      </div>
    </div>
  );
};

export default CrewMembers;
