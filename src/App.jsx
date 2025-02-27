import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Lenis from "lenis";
import ScrollTrigger from "gsap/ScrollTrigger";
import Hero from "./pages/Hero";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Page6 from "./pages/Page6";
import Page5 from "./pages/Page5";
import FAQ from "./pages/FAQ";
import SocialLinksSection from "./pages/SocialLinksSection";
import Footer from "./pages/Footer";
// import Loading from "./components/Loading";

const App = () => {
  gsap.registerPlugin(ScrollTrigger);
  const lenisRef = useRef()
  useEffect(()=>{
 
const lenis = new Lenis();

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000); 
});


gsap.ticker.lagSmoothing(0);
  },[])
  return (
    <>
      {/* <Loading /> */}
      <div className="w-full bg-[#fff] main z-[10] overflow-x-hidden relative">
        <Hero />
        <Page2 />
        <Page3/>
        <Page4/>
        <Page5 />
        <Page6 />
        <FAQ />
        <SocialLinksSection />
        <Footer />
      </div>
    </>
  );
};

export default App;
