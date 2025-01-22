import heroBg from "../../../assets/im/headerImage/heroBg.png";
import arrow from "../../../assets/im/headerImage/arrow.png";
import { Link, NavLink } from "react-router-dom";

function HeroSection({ subSection }) {
  return (
    <div className="relative w-full h-[416px] border-b border-primary rounded-[48px] lg:rounded-b-[120px] flex justify-center items-center flex-col uppercase overflow-hidden">
      <img
        className=" w-full absolute top-0 left-0 h-2/3 mt-[88px] lg:mx-16"
        src={heroBg}
        alt=""
      />
      <div className=" z-10 uppercase text-center text-secondary font-Restora font-normal text-[48px] lg:text-[56px] leading-[5rem] lg:leading-[56px] tracking-[.02me]">
        {subSection}
      </div>
      <div className="mt-5 flex gap-2 lg:gap-[18px] font-plus font-normal text-xs lg:text-base leading-4">
        <Link to="/" className="text-secondary z-40">
          HOME
        </Link>

        <span className="flex items-center justify-center">
          <img src={arrow} alt="arrow icon" />
        </span>
        <span className="text-primary">{subSection}</span>
      </div>
    </div>
  );
}

export default HeroSection;
