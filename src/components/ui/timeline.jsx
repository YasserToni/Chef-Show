"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full  bg-[#131313] font-plus md:px-10" ref={containerRef}>
      <div className="max-w-7xl mx-auto pt-20 lg:pb-20 px-4 md:px-8 lg:px-10 lg:mt-[88px] mt-20">
        <h2 className="text-lg md:text-5xl mb-4 text-white max-w-4xl">
          Our Culinary Story
        </h2>
        <p className="font-Restora text-white text-sm md:text-base w-full md:max-w-sm lg:max-w-md">
          Welcome to The Chef Show, where culinary meets creativity, connection,
          and unforgettable experiences
        </p>
      </div>
      <div ref={ref} className="relative w-full  pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="hidden  md:block text-xl md:pl-20 md:text-4xl font-Restora font-bold text-secondary">
                <div>
                  <h3 className=" hidden md:block text-xl  md:text-4xl font-Restora font-bold text-secondary">
                    The BBQ Show
                  </h3>
                </div>
                <div>
                  <p className=" text-primary text-[14px] uppercase leading-5 font-Restora">
                    Season 2
                  </p>
                </div>
                <div>
                  <span className=" text-secondary inline-block  text-[14px] md:text-[16px] leading-5 md:leading-7 text-start  font-plus">
                    In collaboration with
                  </span>
                  <a className=" font-plus text-secondary font-semibold inline-block underline  text-[14px] md:text-[16px] leading-5 md:leading-7 text-start">
                    <span>⭐️ Meat House Gourmet</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-secondary font-Restora">
                {item.title}
                <p className=" text-primary text-[14px] uppercase leading-5 font-Restora">
                  Season 2
                </p>
                <span className=" text-secondary inline-block  text-[14px] md:text-[16px] leading-5 md:leading-7 text-start  font-plus">
                  In collaboration with
                </span>
                <a className=" font-plus text-secondary font-semibold inline-block underline  text-[14px] md:text-[16px] leading-5 md:leading-7 text-start">
                  <span>⭐️ Meat House Gourmet</span>
                </a>
              </h3>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-[#ead3b4] via-[#C19F74] to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
