import React from "react";
import { SparklesCore } from "./ui/Sparkel";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="relative top-25 font-rubik px-4 md:px-6 lg:px-8">
      <div className="h-[35rem] w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
        <div className="flex flex-col items-center justify-center text-center z-20 relative gap-2 px-3 sm:px-0">
          <div className="h-fit overflow-hidden mt-20">
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1.8,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="text-3xl xs:text-4xl sm:md:text-7xl lg:text-8xl font-bold text-center text-white relative z-20"
            >
              {t("hero.title")}
            </motion.h1>
          </div>
          <p className="text-base xs:text-lg sm:text-xl">
            {t("hero.subtitle")}
          </p>
          <p className="text-base xs:text-lg sm:text-md ">
            {t("hero.services")}
          </p>
          <div className="flex flex-col w-[70%] lg:flex-row gap-3 xs:gap-5 mt-2 xs:w-auto justify-center items-center">
            <button className="bg-green text-white px-4 xs:px-6 py-2 rounded-lg transition-colors hover:bg-red cursor-pointer w-full xs:w-auto">
              {t("hero.buttons.coaching")}
            </button>
            <button className="bg-green text-white px-4 xs:px-6 py-2 rounded-lg transition-colors hover:bg-red cursor-pointer w-full xs:w-auto">
              {t("hero.buttons.webDesign")}
            </button>
            <button className="bg-green text-white px-4 xs:px-6 py-2 rounded-lg transition-colors hover:bg-red cursor-pointer w-full xs:w-auto">
              {t("hero.buttons.digitalStrategy")}
            </button>
          </div>
          <p className="text-sm xs:text-base sm:text-lg mt-2 text-center w-full sm:w-[80%]">
            {t("hero.description")}
          </p>
          <div className="w-full max-w-[22rem] sm:max-w-[40rem] h-32 sm:h-40 relative">
            {/* Core component */}
            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={2}
              particleDensity={1200}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />
            {/* Radial Gradient to prevent sharp edges */}
            <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
