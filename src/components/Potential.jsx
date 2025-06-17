import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

const Potential = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const containerRef = useRef(null);

  const cardData = [
    {
      id: "coaching",
      imageUrl: "/images/coaching.jpg",
      externalLink: "https://setfreeway.com/",
    },
    {
      id: "webDesign",
      imageUrl: "/images/webDesign.jpg",
      externalLink: "https://bwdigit.de/",
    },
    {
      id: "marketing",
      imageUrl: "/images/marketing.jpg",
      externalLink: "https://bwdigit.de/",
    },
    {
      id: "community",
      imageUrl: "/images/community.jpg",
      externalLink: "https://backpackwander.org/",
    },
  ];

  // Auto-scroll carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % cardData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [cardData.length]);

  const handlePrev = () => {
    setActiveIndex(
      (current) => (current - 1 + cardData.length) % cardData.length
    );
  };

  const handleNext = () => {
    setActiveIndex((current) => (current + 1) % cardData.length);
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  // Touch events for mobile swiping
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swiped left
      handleNext();
    }

    if (touchStart - touchEnd < -50) {
      // Swiped right
      handlePrev();
    }
  };

  return (
    <section id="potential" className="relative overflow-hidden">
      {/* Background gradient with animated effect */}
      <div className="absolute inset-0 bg-gradient-to-tl from-black via-black to-green opacity-90 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,128,0,0.15),transparent_40%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(0,128,0,0.2),transparent_50%)]"></div>
        <motion.div
          className="absolute -top-[150%] -left-[10%] w-[60%] h-[100%] rounded-full bg-gradient-to-r from-green/30 to-transparent blur-3xl"
          animate={{
            x: [0, 10, 0],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-gradient-to-l from-green/20 to-transparent blur-3xl"
          animate={{
            x: [0, -10, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 w-full py-24">
        <div className="container mx-auto px-4">
          {/* Title with animated underline */}
          <div className="flex flex-col items-center justify-center mb-16">
            <motion.h2
              className="text-3xl md:text-5xl font-bold font-rubik text-center mb-4 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {t("potential.title")}
            </motion.h2>
            <motion.div
              className="h-1 w-20 bg-gradient-to-r from-green/30 via-green to-green/30 rounded-full"
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: 80, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
          </div>

          <div
            className="relative overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            ref={containerRef}
          >
            {/* Main carousel with AnimatePresence */}
            <div className="relative h-[40rem] md:h-[35rem] lg:h-[32rem]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  className="absolute inset-0 px-4"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.4 }}
                >
                  {(() => {
                    const item = cardData[activeIndex];
                    const cardId = item.id;

                    return (
                      <div className="h-full">
                        <div className="bg-gradient-to-br from-black/80 via-black/70 to-black/80 backdrop-blur-md shadow-xl rounded-2xl overflow-hidden h-full flex flex-col md:flex-row border border-green/20">
                          <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-between">
                            <div>
                              <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1, duration: 0.5 }}
                              >
                                <h3 className="text-sm uppercase tracking-wider text-green font-medium mb-3 inline-block py-1 px-3 bg-green/10 rounded-full">
                                  {t(`potential.cards.${cardId}.category`) ||
                                    item.id}
                                </h3>
                              </motion.div>

                              <motion.h4
                                className="text-2xl md:text-3xl font-bold mb-6 text-white"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                              >
                                {t(`potential.cards.${cardId}.title`) ||
                                  "Title not found"}
                              </motion.h4>

                              <motion.p
                                className="text-gray-300 mb-8 leading-relaxed"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                              >
                                {t(`potential.cards.${cardId}.description`) ||
                                  "Description not found"}
                              </motion.p>
                            </div>

                            <motion.a
                              href={item.externalLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-gradient-to-r from-green to-green/90 hover:from-green/90 hover:to-green text-white text-center py-3 px-8 rounded-full inline-block transition-all shadow-lg shadow-green/25"
                              whileHover={{
                                scale: 1.05,
                                boxShadow:
                                  "0 10px 25px -5px rgba(0, 128, 0, 0.4)",
                              }}
                              whileTap={{ scale: 0.98 }}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.4, duration: 0.5 }}
                            >
                              {t(`potential.cards.${cardId}.button`) ||
                                "Learn More"}
                            </motion.a>
                          </div>

                          <motion.div
                            className="md:w-1/2 relative max-sm:h-60 max-sm:mt-4 rounded-xl overflow-hidden"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3, duration: 0.7 }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-br from-green/30 to-transparent mix-blend-overlay"></div>
                            <img
                              src={item.imageUrl}
                              alt={
                                t(`potential.cards.${item.id}.category`) ||
                                "Service image"
                              }
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 border-8 border-black/20 pointer-events-none"></div>
                          </motion.div>
                        </div>
                      </div>
                    );
                  })()}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Modern navigation arrows */}
            <div className="flex justify-between absolute top-1/2 -translate-y-1/2 left-0 right-0 px-4 md:px-8 pointer-events-none">
              <motion.button
                onClick={handlePrev}
                className="pointer-events-auto w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-black/80 to-black/60 shadow-lg backdrop-blur-sm border border-white/10 text-white"
                whileHover={{ scale: 1.1, backgroundColor: "#000000" }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </motion.button>

              <motion.button
                onClick={handleNext}
                className="pointer-events-auto w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-black/80 to-black/60 shadow-lg backdrop-blur-sm border border-white/10 text-white"
                whileHover={{ scale: 1.1, backgroundColor: "#000000" }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </motion.button>
            </div>

            {/* Modern indicator dots */}
            <div className="flex justify-center mt-10 space-x-2">
              {cardData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all transform duration-300 ${
                    index === activeIndex
                      ? "w-10 h-2 bg-gradient-to-r from-green to-green/80"
                      : "w-2 h-2 bg-white/30 hover:bg-white/50"
                  } rounded-full`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Potential;
