"use client";

import data from "@/data/data.json";
import Image from "next/image";
import { clsx } from "clsx";
import { useState } from "react";
const destinationsData = data.destinations;

const Destinations = () => {
  const [activeTab, setActiveTab] = useState(0);
  const destination = destinationsData[activeTab];
  const { name, images, description, distance, travel } = destination;

  return (
    <div className="container tablet:py-500 desktop:h-full desktop:py-600">
      <h1 className="text-center font-barlowCondensed text-preset-8 uppercase tracking-[2.3px] tablet:text-left tablet:text-[1.25rem] desktop:text-preset-5">
        <span className="mr-300 font-bold text-[rgba(255,255,255,0.25)]">
          01
        </span>{" "}
        Pick your destination
      </h1>
      <div className="flex flex-col items-center desktop:mt-1600 desktop:flex-row desktop:space-x-[109px]">
        <div className="relative my-200 h-[125px] w-[125px] tablet:my-800 tablet:h-[250px] tablet:w-[250px] desktop:h-[480px] desktop:w-[480px]">
          <Image
            src={images.webp}
            alt={name}
            fill
            priority
            sizes="125px, (min-width: 768px) 250px, (min-width: 1440px) 480px"
          />
        </div>
        <div className="text-center desktop:text-left">
          <div className="flex justify-center space-x-[34px] desktop:justify-start">
            {destinationsData.map((destination, index) => {
              const { name } = destination;
              return (
                <button
                  className={clsx(
                    "tabs-btn",
                    activeTab === index && "tabs-btn--active",
                  )}
                  key={index}
                  onClick={() => setActiveTab(index)}
                >
                  {name}
                </button>
              );
            })}
          </div>
          <h2 className="mt-300 font-bellefair text-preset-3 uppercase tablet:text-[80px] desktop:mt-500 desktop:text-[96px]">
            {name}
          </h2>
          <p className="mt-100 max-w-[327px] text-[0.9375rem] leading-[1.8] text-blue-300 tablet:max-w-[514px] tablet:text-[1rem] desktop:min-h-[116px] desktop:max-w-[445px]">
            {description}
          </p>
          <div className="mt-200 flex justify-center space-x-300 border-t border-t-[rgba(255,255,255,0.25)] pt-200 tablet:mt-300 tablet:space-x-1000 tablet:pt-300 desktop:mt-500 desktop:justify-start desktop:pt-500">
            <div>
              <h3 className="font-barlowCondensed text-preset-7 uppercase text-blue-300">
                Avg. distance
              </h3>
              <p className="mt-150 font-bellefair text-preset-6 uppercase">
                {distance}
              </p>
            </div>
            <div>
              <h3 className="font-barlowCondensed text-preset-7 uppercase text-blue-300">
                Est. travel time
              </h3>
              <p className="mt-150 font-bellefair text-preset-6 uppercase">
                {travel}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
