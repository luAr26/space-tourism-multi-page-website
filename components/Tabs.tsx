"use client";

import data from "@/data/data.json";
import { destinationsData, setActiveTab } from "@/types";

import Image from "next/image";
import { useState } from "react";

import { clsx } from "clsx";
import { AnimatePresence, motion } from "framer-motion";

const destData = data.destinations.map((destination) => {
  return {
    name: destination.name,
    description: destination.description,
    imgUrl: destination.images.webp,
  };
});

const contentVariants = {
  initial: { y: "100%", opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: "100%", opacity: 0 },
};

const imgVariants = {
  initial: { scale: 0.1 },
  animate: { scale: 1 },
  exit: { scale: 0.1 },
};

const TabButtons = ({
  data,
  activeTab,
  setActiveTab,
}: {
  data: destinationsData;
  activeTab: number;
  setActiveTab: setActiveTab;
}) => {
  return (
    <div className="mb-500 flex gap-400 p-500">
      {data.map(({ name }, index) => (
        <button
          key={index}
          className={clsx(
            "tabs-btn",
            index === activeTab && "tabs-btn--active",
          )}
          onClick={() => setActiveTab(index)}
        >
          {name}
        </button>
      ))}
    </div>
  );
};

const TabContent = ({
  data,
  activeTab,
}: {
  data: destinationsData;
  activeTab: number;
}) => {
  return (
    <div className="flex w-full flex-col gap-[20px] rounded-[20px] p-500">
      <div className="min-h-[250px] border p-[20px]">
        <motion.div
          className="relative h-[445px] w-[445px]"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={imgVariants}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={data[activeTab].imgUrl}
            alt={data[activeTab].name}
            fill
            priority
            sizes="100%"
          />
        </motion.div>
        <motion.p
          variants={contentVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.5 }}
        >
          {data[activeTab].description}
        </motion.p>
      </div>
    </div>
  );
};

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <AnimatePresence mode="wait">
      <motion.div className="tabs__container" key={activeTab}>
        <TabButtons
          data={destData}
          setActiveTab={setActiveTab}
          activeTab={activeTab}
        />
        <TabContent data={destData} activeTab={activeTab} />
      </motion.div>
    </AnimatePresence>
  );
};

export default Tabs;
