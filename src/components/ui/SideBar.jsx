import { NavLink } from "react-router-dom";
import settingIcon from "../../assets/im/headerImage/settingsIcon.png";
import bookingIcon from "../../assets/im/headerImage/mybookingIcon.png";
import logoutIcon from "../../assets/im/headerImage/logoutIcon.png";

function SideBar() {
  return (
    <div>
      <div className="w-[406px]  h-fit flex flex-col text-secondary">
        <NavLink
          to="account"
          className={({ isActive }) =>
            `flex items-start gap-4 p-[18px] h-[112px] transition ${
              isActive
                ? "bg-[#2F2C29] text-primary border-r border-primary"
                : ""
            }`
          }
        >
          <div>
            <img src={settingIcon} alt="account setting icon" />
          </div>
          <div className=" font-Restora font-normal flex flex-col gap-3">
            <div className={`text-[28px] leading-[28px`}>Account Details</div>
            <div className="text-[12px] leading-[18px] text-[#939393]">
              Update your personal detail to keep your account up to date.
            </div>
          </div>
        </NavLink>

        <NavLink
          to="booking"
          className={({ isActive }) =>
            `flex items-start gap-4 p-[18px] h-[112px] transition ${
              isActive
                ? "bg-[#2F2C29] text-primary border-r border-primary"
                : ""
            }`
          }
        >
          <div>
            <img src={bookingIcon} alt="booking setting icon" />
          </div>
          <div className=" font-Restora font-normal flex flex-col gap-3">
            <div className={`text-[28px] leading-[28px`}>My Booking</div>
            <div className="text-[12px] leading-[18px] text-[#939393]">
              View, modify, or cancel your upcoming reservations.
            </div>
          </div>
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-start gap-4 p-[18px] h-[112px] transition ${
              isActive
                ? "bg-[#2F2C29] text-primary border-r border-primary"
                : ""
            }`
          }
        >
          <div>
            <img src={logoutIcon} alt="logout setting icon" />
          </div>
          <div className=" font-Restora font-normal flex flex-col gap-3">
            <div className={`text-[28px] leading-[28px`}>Log Out</div>
            <div className="text-[12px] leading-[18px]">
              View, modify, or cancel your upcoming reservations.
            </div>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default SideBar;
