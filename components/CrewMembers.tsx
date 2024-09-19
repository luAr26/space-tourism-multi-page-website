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
    <div className="container tablet:h-full tablet:max-w-full tablet:py-500 desktop:h-auto desktop:max-w-[1440px] desktop:py-600">
      <h1 className="text-center font-barlowCondensed text-preset-8 uppercase tracking-[2.3px] tablet:text-left tablet:text-[1.25rem] desktop:text-preset-5">
        <span className="mr-300 font-bold text-[rgba(255,255,255,0.25)]">
          02
        </span>{" "}
        Meet your crew
      </h1>
      <div className="flex flex-col items-center tablet:h-full tablet:justify-between desktop:mt-1600 desktop:flex-row desktop:space-x-[109px]">
        <div className="text-center desktop:text-left">
          <h3 className="mt-800 font-bellefair text-[1.125rem] uppercase text-[rgba(255,255,255,0.5)] tablet:text-[1.5rem] desktop:text-preset-4">
            {role}
          </h3>
          <h2 className="font-bellefair text-[1.5rem] uppercase tablet:mt-[10px] tablet:text-[40px] desktop:mt-200 desktop:text-preset-3">
            {name}
          </h2>
          <p className="mt-300 max-w-[327px] text-[0.9375rem] leading-[1.8] text-blue-300 tablet:min-h-[130px] tablet:max-w-[572px] tablet:text-[1.125rem] desktop:min-h-[130px] desktop:max-w-[540px]">
            {bio}
          </p>
          <div className="mt-[43px] flex justify-center space-x-200 desktop:mt-1600 desktop:justify-start">
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
            name === "Douglas Hurley" &&
              "h-[175px] w-[128.5px] tablet:h-[700px] tablet:w-[514px]",
            name === "Mark Shuttleworth" &&
              "h-[175px] w-[128.5px] tablet:h-[640px] tablet:w-[433px]",
            name === "Victor Glover" &&
              "h-[153.57px] w-[130.71px] tablet:h-[645px] tablet:w-[549px]",
            name === "Anousheh Ansari" &&
              "h-[143.75px] w-[150.50px] tablet:h-[602px] tablet:w-[575px]",
          )}
        >
          <Image
            src={images.webp}
            alt={name}
            fill
            priority
            sizes="151px, (min-width: 768px) 514px"
          />
        </div>
      </div>
    </div>
  );
};

export default CrewMembers;
