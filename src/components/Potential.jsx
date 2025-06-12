import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Potential = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

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
    <section id="potential">
      <div className="w-full py-20 bg-black/5 dark:bg-black/40">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold font-rubik text-center mb-12 text-red">
            {t("potential.title")}
          </h2>

          <div
            className="relative overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Main carousel */}
            <div
              className="flex transition-all duration-500 ease-in-out h-fit md:h-[35rem] lg:h-[30rem]"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {" "}
              {cardData.map((item) => {
                // Access each property individually with nested keys instead of the whole card object
                const cardId = item.id;

                return (
                  <div key={item.id} className="min-w-full px-4">
                    <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl overflow-hidden h-full flex flex-col md:flex-row">
                      <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-between">
                        <div>
                          <h3 className="text-sm uppercase tracking-wider text-green font-medium mb-2">
                            {t(`potential.cards.${cardId}.category`) || item.id}
                          </h3>
                          <h4 className="text-2xl font-bold mb-6">
                            {t(`potential.cards.${cardId}.title`) ||
                              "Title not found"}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-300 mb-8">
                            {t(`potential.cards.${cardId}.description`) ||
                              "Description not found"}
                          </p>
                        </div>{" "}
                        <motion.a
                          href={item.externalLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-green hover:bg-green/90 text-white text-center py-3 px-6 rounded-lg inline-block transition-all transform hover:scale-105"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {t(`potential.cards.${cardId}.button`) ||
                            "Learn More"}
                        </motion.a>
                      </div>
                      <div className="md:w-1/2 relative max-sm:hidden rounded-xl">
                        {" "}
                        <img
                          src={item.imageUrl}
                          alt={
                            t(`potential.cards.${item.id}.category`) ||
                            "Service image"
                          }
                          className="w-full h-full object-cover md:object-cover p-4 md:p-8 rounded-xl"
                        />
                        <div className="absolute inset-0 bg-black/40 md:bg-transparent opacity-20 pointer-events-none"></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Navigation arrows */}
            <button
              onClick={handlePrev}
              className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 dark:bg-black/50 p-2 rounded-full shadow-lg hover:bg-white dark:hover:bg-black/80 transition-all z-10"
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
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 dark:bg-black/50 p-2 rounded-full shadow-lg hover:bg-white dark:hover:bg-black/80 transition-all z-10"
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
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Indicator dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {cardData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === activeIndex ? "bg-green w-6" : "bg-gray-400"
                  }`}
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
