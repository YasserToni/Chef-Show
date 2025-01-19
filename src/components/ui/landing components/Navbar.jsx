import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import navbarIcon from "../../../assets/im/headerImage/FooterIcon.png";
import MobileSheet from "./MobileSheet";
function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 800) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`" w-full fixed font-plus font-normal text-lg leading-[18px] px-[30px] lg:px-[60px] bg-opacity-50 flex justify-between border-b-[.5px] border-primary " ${
        isScrolled ? "bg-black/50 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div>
        <img
          className="mt-[17px] mb-[18px]"
          src={navbarIcon}
          alt="navbar icon"
        />
      </div>
      <div className="hidden md:block">
        <ul className="flex gap-16 text-secondary h-full items-center ">
          <li className=" hover:border-b-[5px]  border-primary py-[32px] transition-all duration-300">
            <NavLink to="/">HOME</NavLink>
          </li>
          <li className=" hover:border-b-[5px]  border-primary py-[32px] transition-all duration-300">
            <NavLink to="/contact">ABOUT</NavLink>
          </li>
          <li className=" hover:border-b-[5px]  border-primary py-[32px] transition-all duration-300">
            <NavLink to="/reservation">EXPERIENCE</NavLink>
          </li>
          <li className=" hover:border-b-[5px]  border-primary py-[32px] transition-all duration-300">
            <NavLink to="">MENU</NavLink>
          </li>
          <li className=" hover:border-b-[5px]  border-primary py-[32px] transition-all duration-300">
            <NavLink to="">RESERVATION</NavLink>
          </li>
        </ul>
      </div>
      <div className="my-[18px] hidden md:block">
        <button className="font-plus font-medium text-sm leading-[14px] tracking-[.04em] text-secondary bg-primary py-[19px] px-[24px]">
          RESERVATION
        </button>
      </div>
      <div className="xl:hidden border-b border-primary ">
        <MobileSheet />
      </div>
    </nav>
  );
}

export default Navbar;
