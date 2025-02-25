import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Hero from "./pages/Hero";
import Page2 from "./pages/Page2";
import Lenis from "lenis";
import About from "./pages/About";
import Ourteam from "./components/Ourteam";
import HScroll from "./pages/HScroll";
import Page5 from "./pages/Page5";


const App = () => {
  gsap.registerPlugin(ScrollTrigger);
  const lenisRef = useRef()
 
const lenis = new Lenis();

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000); 
});


gsap.ticker.lagSmoothing(0);
  return (
    <>
      {/* <Loading setLoading={setLoading} /> */}
      <div className="w-full bg-[#fff] main z-[10] overflow-x-hidden relative">
        <Hero />
        <Page2 />
        <About />
        <Ourteam />
        <HScroll />
        <Page5 />
      </div>
    </>
  );
};

export default App;
