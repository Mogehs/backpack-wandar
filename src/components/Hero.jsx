import React from "react";
import { SparklesCore } from "./ui/Sparkel";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  const MotionComponent = motion.div;

  return (
    <div className="relative top-15 md:top-25 font-rubik">
      <img
        src="/images/background.png"
        alt="Hero"
        className="w-full max-sm:h-[120vh] md:h-auto  object-cover"
      />
      <div className="h-[35rem] w-full flex flex-col items-center justify-center overflow-hidden rounded-md absolute top-0 px-4 md:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center z-20 relative gap-2 px-3 sm:px-0">
          <div className="h-fit overflow-hidden mt-20 flex items-center justify-center gap-2">
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1.8,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="text-4xl xs:text-4xl sm:md:text-7xl lg:text-8xl font-bold text-center text-white relative z-20"
            >
              {t("hero.title").split(" ")[0]}
            </motion.h1>
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1.8,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="text-4xl xs:text-4xl sm:md:text-7xl lg:text-8xl font-bold text-center text-green relative z-20"
            >
              {t("hero.title").split(" ")[1]}
            </motion.h1>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-base xs:text-lg sm:text-xl capitalize"
          >
            {t("hero.subtitle")}
          </motion.p>

          {/* Service buttons with divider lines */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mt-2"
          >
            <motion.button
              onClick={() => window.open("http://setfreeway.com", "_blank")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green text-white px-3 py-1.5 text-sm rounded-md hover:bg-opacity-90 transition-all"
            >
              {t("hero.buttons.coaching")}
            </motion.button>

            <div className="h-6 w-[1px] bg-white/50 mx-1"></div>

            <motion.button
              onClick={() => window.open("http://bwdigit.de", "_blank")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green text-white px-3 py-1.5 text-sm rounded-md hover:bg-opacity-90 transition-all"
            >
              {t("hero.buttons.webDesign")}
            </motion.button>

            <div className="h-6 w-[1px] bg-white/50 mx-1"></div>

            <motion.button
              onClick={() => window.open("http://bwdigit.de", "_blank")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green text-white px-3 py-1.5 text-sm rounded-md hover:bg-opacity-90 transition-all"
            >
              {t("hero.buttons.digitalStrategy")}
            </motion.button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-sm xs:text-base sm:text-lg mt-2 text-center w-full sm:w-[80%]"
          >
            {t("hero.description")}
          </motion.p>
          <div className="w-full max-w-[25rem] sm:max-w-[55rem] h-36 sm:h-48 relative max-sm:mb-8">
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
            <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(550px_230px_at_top,transparent_50%,white)]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
