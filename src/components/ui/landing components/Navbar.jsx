import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import navbarIcon from "../../../assets/im/headerImage/FooterIcon.png";
import MobileSheet from "./MobileSheet";
function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
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
      className={`" w-full fixed top-0 h-[90px] font-plus font-normal text-[18px] leading-[18px] px-[20px] lg:px-[60px] bg-opacity-50 flex justify-between border-b-[0.2px] border-[#ffffff1f] " ${
        isScrolled ? "bg-black/40 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div>
        <img
          className="mt-[17px] mb-[18px]"
          src={navbarIcon}
          alt="navbar icon"
        />
      </div>
      <div className="hidden lg:block">
        <ul className="flex gap-2  text-secondary h-full items-center ">
          <li className="  border-primary py-[32px] transition-all duration-300 text-sm leading-5">
            <NavLink to="/" className="p-2 rounded-md hover:bg-primary ">
              HOME
            </NavLink>
          </li>
          <li className="  border-primary py-[32px] transition-all duration-300 text-sm leading-5">
            <NavLink className="p-2 rounded-md hover:bg-primary " to="/contact">
              CONTACT
            </NavLink>
          </li>
          <li className="   border-primary py-[32px] transition-all duration-300 text-sm leading-5">
            <NavLink
              to="/pastshow"
              className="p-2 rounded-md hover:bg-primary "
            >
              PAST SHOWS
            </NavLink>
          </li>
          <li className=" border-primary py-[32px] transition-all duration-300 text-sm leading-5">
            <NavLink
              to="/reservation"
              className="p-2 rounded-md hover:bg-primary "
            >
              RESERVATION
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="my-[18px] hidden lg:block">
        <button className="font-plus font-medium text-sm leading-[14px] tracking-[.04em] text-secondary bg-primary py-[19px] px-[24px]">
          <Link to="/reservation">RESERVATION</Link>
        </button>
      </div>
      <div className=" sm:block lg:hidden border-b border-primary ">
        <MobileSheet />
      </div>
    </nav>
  );
}

export default Navbar;
