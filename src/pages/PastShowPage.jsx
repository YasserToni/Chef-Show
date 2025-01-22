import { useState, useEffect } from "react";

import MainSection from "../components/ui/pash show component/MainSection";
import HeroSection from "../components/ui/reservreation components/HeroSection";

function PastShowPage() {
  const [text, setText] = useState("STORY");
  const [fadeIn, setFadeIn] = useState(true);
  const texts = ["STORY", "PASSION", "JOURNEY", "ADVENTURE", "EXPERIENCE"];
  let currentIndex = 0;
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false); // Trigger fade-out effect
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % texts.length;
        setText(texts[currentIndex]); // Change text after fade-out
        setFadeIn(true); // Trigger fade-in effect
      }, 500); // Wait for fade-out before changing text (half of the animation duration)
    }, 2000); // Change text every 2 seconds (1 second for each text + fade animation)

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <HeroSection subSection="PAST SHOWS" />

      {/* ////////////////////////// */}
      <div className="ml-10 mt-20 lg:mt-56  max-w-[56rem] mb-10 lg:mb-20 text-left">
        <div className="text-[24px] mb-4 lg:text-5xl font-Restora font-bold text-white">
          <h2 className="inline-block">Our Culinary &nbsp;</h2>
          <span
            className={`inline-block  transition-opacity duration-500 ${
              fadeIn ? "opacity-100" : "opacity-0"
            }`}
          >
            {text}
          </span>
        </div>
        <p className=" text-secondary text-sm md:text-base w-full md:max-w-sm lg:max-w-md">
          Welcome to The Chef Show, where culinary meets creativity, connection,
          and unforgettable experiences
        </p>
      </div>
      {/* ////////////////////////// */}

      <div className="relative overflow-hidden">
        <div className="absolute w-[2px] h-[calc(100%-300px)] bg-gray-600 opacity-100 top-0 left-8 rounded-full"></div>
        {/* Scrollbar that moves with scroll */}
        <div
          id="scrollbar"
          className="absolute w-[2px] h-[300px] bg-primary left-8 rounded-full"
          style={{
            top: `calc(-500px + ${scrollPosition}px)`, // Updates top based on scroll position
          }}
        ></div>
        <MainSection />
        <MainSection />
        <MainSection />
        <div className="pb-10 md:pb-40">
          <MainSection />
        </div>
      </div>
    </>
  );
}

export default PastShowPage;
