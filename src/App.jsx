import React, { useEffect, useRef } from "react";
// import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Hero from "./components/Hero";
import Navbar from "./components/common/Navbar";
import WhatWeDo from "./components/WhatWeDo";
import WeOffer from "./components/WeOffer";
// import Marquee from "./components/Marquee";
import Visible from "./components/Visible";
import OurVision from "./components/OurVision";
import "./i18n";
import Potential from "./components/Potential";
import Footer from "./components/common/Footer";
import ContactUs from "./components/ContactUs";

const App = () => {
  // const { t } = useTranslation();
  // const scrollRef = useRef(null);

  // useEffect(() => {
  //   const scroll = new LocomotiveScroll({
  //     el: scrollRef.current,
  //     smooth: true,
  //     lerp: 0.08,
  //     multiplier: 1,
  //     class: "is-reveal",
  //   });

  //   return () => {
  //     if (scroll) scroll.destroy();
  //   };
  // }, []);

  return (
    <div className="max-w-[1536px] mx-auto">
      <Navbar />
      <Hero />
      <WhatWeDo />
      <WeOffer />
      {/* <Marquee /> */}
      <Visible />
      <OurVision />
      <Potential />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default App;
