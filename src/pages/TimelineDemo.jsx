// import Image from "next/image";
import { Img } from "react-image";
import React from "react";
import { Timeline } from "../components/ui/timeline";
import img1 from "../assets/im/headerImage/img1.jpg";
import HeroSection from "../components/ui/reservreation components/HeroSection";

export function TimelineDemo() {
  const data = [
    {
      title: "The BBQ Show",
      content: (
        <div>
          <p className="text-white text-xs md:text-lg font-normal mb-8 font-Restora">
            The outdoor culinary adventure is back celebrating the art of
            grilling over firewood. Hearty dishes, smoky flavors, and cozy
            evenings under the stars make this season unforgettable - uplifted
            this year with a fire pit to bring warmth to the cold winter nights
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="opacity-100 filter blur-0 transform-none">
              <img
                src={img1}
                alt="startup template"
                width="600"
                height="600"
                className="rounded-lg scale-100 md:scale-90 hover:scale-100 transition-all duration-200 cursor-pointer object-cover h-32 md:h-44 lg:h-72 w-full "
              />
            </div>
            <div className="opacity-100 filter blur-0 transform-none">
              <img
                src={img1}
                alt="startup template"
                width="600"
                height="600"
                className="rounded-lg scale-100 md:scale-90 hover:scale-100 transition-all duration-200 cursor-pointer object-cover h-32 md:h-44 lg:h-72 w-full "
              />
            </div>
            <div className="opacity-100 filter blur-0 transform-none">
              <img
                src={img1}
                alt="startup template"
                width="600"
                height="600"
                className="rounded-lg scale-100 md:scale-90 hover:scale-100 transition-all duration-200 cursor-pointer object-cover h-32 md:h-44 lg:h-72 w-full "
              />
            </div>
            <div className="opacity-100 filter blur-0 transform-none">
              <img
                src={img1}
                alt="startup template"
                width="600"
                height="600"
                className=" rounded-lg scale-100 md:scale-90 hover:scale-100 transition-all duration-200 cursor-pointer object-cover h-32 md:h-44 lg:h-72 w-full "
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "The BBQ Show",
      content: (
        <div>
          <p className="text-white text-xs md:text-lg font-normal mb-8 font-Restora">
            The outdoor culinary adventure is back celebrating the art of
            grilling over firewood. Hearty dishes, smoky flavors, and cozy
            evenings under the stars make this season unforgettable - uplifted
            this year with a fire pit to bring warmth to the cold winter nights
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="opacity-100 filter blur-0 transform-none">
              <img
                src={img1}
                alt="startup template"
                width="600"
                height="600"
                className="rounded-lg scale-100 md:scale-90 hover:scale-100 transition-all duration-200 cursor-pointer object-cover h-32 md:h-44 lg:h-72 w-full "
              />
            </div>
            <div className="opacity-100 filter blur-0 transform-none">
              <img
                src={img1}
                alt="startup template"
                width="600"
                height="600"
                className="rounded-lg scale-100 md:scale-90 hover:scale-100 transition-all duration-200 cursor-pointer object-cover h-32 md:h-44 lg:h-72 w-full "
              />
            </div>
            <div className="opacity-100 filter blur-0 transform-none">
              <img
                src={img1}
                alt="startup template"
                width="600"
                height="600"
                className="rounded-lg scale-100 md:scale-90 hover:scale-100 transition-all duration-200 cursor-pointer object-cover h-32 md:h-44 lg:h-72 w-full "
              />
            </div>
            <div className="opacity-100 filter blur-0 transform-none">
              <img
                src={img1}
                alt="startup template"
                width="600"
                height="600"
                className=" rounded-lg scale-100 md:scale-90 hover:scale-100 transition-all duration-200 cursor-pointer object-cover h-32 md:h-44 lg:h-72 w-full "
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "The BBQ Show",
      content: (
        <div>
          <p className="text-white text-xs md:text-lg font-normal mb-8 font-Restora">
            The outdoor culinary adventure is back celebrating the art of
            grilling over firewood. Hearty dishes, smoky flavors, and cozy
            evenings under the stars make this season unforgettable - uplifted
            this year with a fire pit to bring warmth to the cold winter nights
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="opacity-100 filter blur-0 transform-none">
              <img
                src={img1}
                alt="startup template"
                width="600"
                height="600"
                className="rounded-lg scale-100 md:scale-90 hover:scale-100 transition-all duration-200 cursor-pointer object-cover h-32 md:h-44 lg:h-72 w-full "
              />
            </div>
            <div className="opacity-100 filter blur-0 transform-none">
              <img
                src={img1}
                alt="startup template"
                width="600"
                height="600"
                className="rounded-lg scale-100 md:scale-90 hover:scale-100 transition-all duration-200 cursor-pointer object-cover h-32 md:h-44 lg:h-72 w-full "
              />
            </div>
            <div className="opacity-100 filter blur-0 transform-none">
              <img
                src={img1}
                alt="startup template"
                width="600"
                height="600"
                className="rounded-lg scale-100 md:scale-90 hover:scale-100 transition-all duration-200 cursor-pointer object-cover h-32 md:h-44 lg:h-72 w-full "
              />
            </div>
            <div className="opacity-100 filter blur-0 transform-none">
              <img
                src={img1}
                alt="startup template"
                width="600"
                height="600"
                className=" rounded-lg scale-100 md:scale-90 hover:scale-100 transition-all duration-200 cursor-pointer object-cover h-32 md:h-44 lg:h-72 w-full "
              />
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="overflow-hidden">
      <HeroSection subSection="PAST SHOWS" />
      <Timeline data={data} />
    </div>
  );
}
