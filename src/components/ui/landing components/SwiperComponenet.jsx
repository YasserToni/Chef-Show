// Import Swiper core and required modules
import { Navigation, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SwiperComponent = () => {
  return (
    <div className="relative w-full h-[774px]">
      <button
        className="absolute  top-1/2 left-0 transform -translate-y-1/2 z-10  text-white p-2 md:p-5 rounded-full shadow-md border border-secondary ml-[20px] md:ml-[60px]"
        id="prevButton"
      >
        <div className="w-[40px] h-[40px] flex items-center justify-center">
          <img src="../src/assets/im/right.svg" alt="left-swap-button" />
        </div>
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 text-white p-2 md:p-5 rounded-full shadow-md border border-secondary mr-[20px] md:mr-[60px]"
        id="nextButton"
      >
        <div className="w-[40px] h-[40px] flex items-center justify-center">
          <img src="../src/assets/im/left.svg" alt="right-swap-button" />
        </div>
      </button>
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
        <SwiperSlide className="bg-[url('./ero.png')] bg-cover w-full h-full flex items-center justify-cente text-white text-3xl rounded-br-[120px] rounded-bl-[120px] font-Restora font-extrabold">
          <div></div>
        </SwiperSlide>

        {/* Swiper Slide 2 */}
        <SwiperSlide className="bg-[url('./ero.png')] bg-cover w-full h-full flex items-center justify-cente text-white text-3xl rounded-br-[120px] rounded-bl-[120px]"></SwiperSlide>
        <SwiperSlide className="bg-[url('./ero.png')] bg-cover w-full h-full flex items-center justify-cente text-white text-3xl rounded-br-[120px] rounded-bl-[120px]"></SwiperSlide>

        {/* Swiper Slide 4 */}
        <SwiperSlide className="bg-[url('./ero.png')] bg-cover w-full h-full flex items-center justify-cente text-white text-3xl rounded-br-[120px] rounded-bl-[120px]"></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
