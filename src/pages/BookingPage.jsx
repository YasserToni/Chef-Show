import succssImage from "../assets/im/headerImage/successImg.png";
import mapImg from "../assets/im/headerImage/map.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";
function BookingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className=" flex justify-center items-center flex-col">
      <div className="mt-[120px]">
        <div className=" h-[64px] flex justify-center items-center">
          <img
            src={succssImage}
            alt="success image"
            className="w-[150px] h-[150px]  lg:w-[200px] lg:h-[200px]"
          />
        </div>
        <div className="lg:w-[765px] text-center  mt-4 font-Restora text-secondary font-normal text-[24px] md:text-[32px] mx-4  lg:text-[48px] lg:leading-[65px] uppercase">
          BOOKING SUCCESSFULLY placed It will be sent to your email
        </div>
      </div>
      <div className="flex flex-col gap-5 justify-center items-center mx-4 mt-8 lg:mt-10  text-sm lg:text-base leading-4 font-plus tracking-[2%] uppercase">
        <div>
          <span className="text-secondary font-semibold mr-4">
            Booking Date
          </span>
          <span className="text-[#C0C0C0] font-light">
            Jan 1, 2025 00:00:00
          </span>
        </div>
        <div>
          <span className="text-secondary font-semibold mr-4">
            Booking Reference
          </span>
          <span className="text-[#C0C0C0] font-light">CHEF-BOOK-67389285</span>
        </div>
        <div>
          <span className="text-secondary font-semibold mr-4">
            Number of Seats
          </span>
          <span className="text-[#C0C0C0] font-light">11</span>
        </div>
      </div>
      <button className="text-center text-secondary tracking-[4%] text-sm leading-[14px] px-[64px] py-[19px] mt-8 bg-primary">
        <Link to="/">BACK TO HOME</Link>
      </button>
      <div className="lg:w-[1200px] lg:h-[356px] mx-4 mt-10 lg:mt-20 mb-[100px] md:mb-[200px] lg:mb-[547px]">
        <img src={mapImg} alt="map" width="100%" height="100%" />
      </div>
    </div>
  );
}

export default BookingPage;
