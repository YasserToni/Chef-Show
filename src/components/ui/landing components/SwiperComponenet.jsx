// Import Swiper core and required modules
import { Navigation, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import rightIcon from "../../../assets/im/headerImage/left.svg";
import leftIcon from "../../../assets/im/headerImage/right.svg";
// import bg from "./ero.png";
import swiperIcon from "./../../../assets/im/headerImage/swipreIcon.png";
import rectangle from "../../../assets/im/headerImage/Rectangle 3.png";
import Navbar from "./Navbar";

const SwiperComponent = () => {
  return (
    <div className="relative w-screen h-[699px] lg:h-[774px] border-b border-primary rounded-b-[48px] lg:rounded-b-[120px] overflow-hidden">
      <button
        className="absolute  smallBtn md:top-2/3 lg:top-1/2 left-0 transform -translate-y-1/2 z-40  text-white p-2 md:p-5 rounded-full shadow-md border border-secondary ml-[20px] md:ml-[60px]"
        id="prevButton"
      >
        <div className="w-[40px] h-[40px] flex items-center justify-center">
          <img src={leftIcon} alt="left-swap-button" />
        </div>
      </button>

      <button
        className="absolute smallBtn md:top-2/3 lg:top-1/2 right-0 transform -translate-y-1/2 z-40 text-white p-2 md:p-5 rounded-full shadow-md border border-secondary mr-[20px] md:mr-[60px]"
        id="nextButton"
      >
        <div className="w-[40px] h-[40px] flex items-center justify-center">
          <img src={rightIcon} alt="right-swap-button" />
        </div>
      </button>

      {/* <div className="absolute top-[22%] left-[25%] z-30 ">
        <div className="flex flex-col justify-center items-center">
          <div>
            <img src={swiperIcon} alt="swiper icon" />
          </div>
          <div className="flex items-center justify-center  mt-[20px]">
            <img className="w-[6px] h-[6px]" src={rectangle} alt="rectangle" />
            <span className="text-sm font-Restora font-medium text-primary mx-[8px] uppercase">
              welcome to THE CHEF SHOW
            </span>
            <img className="w-[6px] h-[6px]" src={rectangle} alt="rectangle" />
          </div>
          <div className="font-Restora font-normal text-[72px] leading-[92px] text-secondary w-[711px] text-center mt-10 tracking-[.02em] uppercase">
            delicious food eating experience
          </div>
          <div className="font-plus font-normal text-secondary text-[20px] leading-[20px] text-center tracking-[.04em] mt-[14px]">
            we serve food, Harmony, & Laughter Since 1991
          </div>
          <button className="text-sm leading-[14px] font-plus font-medium tracking-[.04em] text-secondary py-[19px] px-6 border border-primary mt-10 shadow-[4px_4px_10px_0px_#00000014]">
            RESERVATION
          </button>
        </div>
      </div> */}
      {/* <div className="absolute w-full h-full bg-[#000000BF] z-20 rounded-b-[48px] lg:rounded-b-[120px] border-b border-primary"></div> */}
      <div className=" absolute top-0 z-30 w-full">
        <Navbar />
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          prevEl: "#prevButton", // Bind custom buttons
          nextEl: "#nextButton",
        }}
        className="w-full h-full" // Make Swiper take full width and height
      >
        {/* Swiper Slide 1 */}
        {Array.from({ length: 4 }).map((_, index) => (
          <SwiperSlide
            key={index}
            className="relative h-[774px] w-full  flex flex-col justify-center items-center text-white text-3xl rounded-b-[120px] font-Restora bg-[url('/ero.png')] bg-cover bg-center"
          >
            {/* Overlay */}
            <div className="absolute w-full h-full bg-[#000000BF] z-20 rounded-b-[48px] lg:rounded-b-[120px] border-b border-primary"></div>

            {/* <img src={bg} alt="background" className="w-full h-[774px] z-30" />  */}
            <div className="relative z-40 ">
              <div className="flex flex-col justify-center items-center mt-[170px]">
                <div>
                  <img src={swiperIcon} alt="swiper icon" />
                </div>
                <div className="flex items-center justify-center  mt-[20px]">
                  <img
                    className="w-[6px] h-[6px]"
                    src={rectangle}
                    alt="rectangle"
                  />
                  <span className="text-sm font-Restora font-medium text-primary mx-[8px] uppercase">
                    welcome to THE CHEF SHOW
                  </span>
                  <img
                    className="w-[6px] h-[6px]"
                    src={rectangle}
                    alt="rectangle"
                  />
                </div>
                <div className="font-Restora font-normal px-5 lg:px-0 text-[34px] lg:text-[72px] leading-[3.6rem] lg:leading-[92px] text-secondary lg:w-[711px] text-center mt-10 tracking-[.02em] uppercase">
                  delicious food eating experience
                </div>
                <div className="font-plus font-normal text-secondary px-5 text-xl leading-[20px] text-center tracking-[.04em] mt-[14px]">
                  we serve food, Harmony, & Laughter Since 1991
                </div>
                <button className="text-sm leading-[14px] font-plus font-medium tracking-[.04em] text-secondary py-[19px] px-6 border border-primary mt-10 shadow-[4px_4px_10px_0px_#00000014]">
                  RESERVATION
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
