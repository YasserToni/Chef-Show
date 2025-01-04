import { NavLink } from "react-router-dom";
import navbarIcon from "../../../assets/im/headerImage/FooterIcon.png";
function Navbar() {
  return (
    <nav className="font-plus font-normal text-lg leading-[18px] px-[60px] backdrop-blur-40 bg-opacity-50 flex justify-between border-b-[.5px] border-primary ">
      <div>
        <img
          className="mt-[17px] mb-[18px]"
          src={navbarIcon}
          alt="navbar icon"
        />
      </div>
      <div>
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
      <div className="my-[18px]">
        <button className="font-plus font-medium text-sm leading-[14px] tracking-[.04em] text-secondary bg-primary py-[19px] px-[24px]">
          RESERVATION
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
