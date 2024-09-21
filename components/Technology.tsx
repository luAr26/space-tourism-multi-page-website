"use client";
import data from "@/data/data.json";
import { clsx } from "clsx";
import Image from "next/image";
import { useState } from "react";
const technologyData = data.technology;

const Technology = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const technology = technologyData[activeSlide];
  const { name, images, description } = technology;
  return (
    <div className="py-300 desktop:container tablet:py-500 desktop:py-600">
      <h1 className="text-center font-barlowCondensed text-preset-8 uppercase tracking-[2.3px] tablet:pl-500 tablet:text-left tablet:text-[1.25rem] desktop:pl-[0] desktop:text-preset-5">
        <span className="mr-300 font-bold text-[rgba(255,255,255,0.25)]">
          03
        </span>{" "}
        Space launch 101
      </h1>
      <div className="mt-400 flex flex-col space-y-400 tablet:mt-[92px] desktop:mt-[95px] desktop:flex-row-reverse desktop:items-center desktop:gap-400 desktop:space-y-[0]">
        <div className="relative h-[125px] w-full tablet:h-[357px] desktop:hidden">
          <Image
            src={images.landscape}
            alt={name}
            fill
            className="object-cover"
            sizes="100%"
          />
        </div>
        <div className="relative hidden desktop:block desktop:h-[600px] desktop:w-[608px]">
          <Image
            src={images.portrait}
            alt={name}
            fill
            className="object-cover"
            sizes="100%"
          />
        </div>
        <div className="flex flex-col space-y-300 tablet:space-y-500 desktop:flex-1 desktop:flex-row desktop:items-center desktop:space-x-800 desktop:space-y-[0]">
          <div className="flex justify-center space-x-200 desktop:flex-col desktop:justify-start desktop:space-x-[0] desktop:space-y-400">
            {technologyData.map((tech, index) => {
              return (
                <button
                  className={clsx(
                    "large-pagination-btn",
                    activeSlide === index && "large-pagination-btn--active",
                  )}
                  key={index}
                  onClick={() => setActiveSlide(index)}
                >
                  <span className="sr-only">Page {index + 1}</span>
                  <span>{index + 1}</span>
                </button>
              );
            })}
          </div>
          <div className="text-center desktop:text-left">
            <h3 className="font-bellefair text-[1.125rem] uppercase text-[rgba(255,255,255,0.5)] tablet:text-[1.5rem] desktop:text-preset-4">
              The terminology...
            </h3>
            <h2 className="font-bellefair text-[1.5rem] uppercase tablet:text-[40px] desktop:mt-200 desktop:text-preset-3">
              {name}
            </h2>
            <p className="mx-auto mt-200 max-w-[327px] text-[0.9375rem] leading-[1.8] text-blue-300 tablet:max-w-[480px] desktop:min-h-[135px] desktop:max-w-[72ch]">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
