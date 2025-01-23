import { useEffect } from "react";
import CalendarComponent from "../CalendarComponent";
import HeroSection from "../components/ui/reservreation components/HeroSection";
import Input from "../components/ui/reservreation components/Input";

function ResrevationPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HeroSection subSection="reservation" />
      <div className=" flex flex-wrap justify-center gap-8 my-20 mx-4">
        <div>
          <div className="p-4 lg:p-8 border border-primary lg:w-[733px] mb-[48px]  lg:mb-8">
            <CalendarComponent />
          </div>
          <div className="hidden text-secondary xl:block p-4 lg:p-8 border border-primary lg:w-[733px] h-32 ">
            <h5 className="mb-1 tracking-tight font-plus font-semibold text-[18px] leading-5">
              ⚠️ Food Allergies :
            </h5>
            <div className=" font-plus text-[16px] leading-6 mt-3">
              Please inform us about any food allergies or dietary requirements
              after making your reservation via
              <a className="text-primary" href="/contact">
                Contact Us
              </a>
              form or text us directly on WhatsApp via:
              <a
                href="https://wa.me/971558233285"
                target="_blank"
                className="text-primary"
              >
                +971558233285
              </a>
            </div>
          </div>
        </div>

        <div className="p-4 lg:p-8 border border-primary lg:w-[514px] lg:h-[590px] sticky top-[97px]">
          <div className="font-Restora font-normal text-[40px] leading-[40px] text-secondary capitalize tracking-[.02em]">
            enter your data
          </div>
          <div className="mt-[14px] font-plus font-[300px] text-sm leading-[14px] tracking-[.02em] text-secondary">
            enter your information to complete the details
          </div>
          <div className="mt-6">
            <Input label="Full Name" placeholder="Enter your Full Name" />
            <Input label="Email" placeholder="Enter your Email" />
            <Input label="Phone number" placeholder="Enter your phone number" />
            <Input label=" Quantity for seats" placeholder="0" />
            <button className="flex justify-center w-full h-fit text-secondary text-sm leading-[14px] tracking-[.04m] text-center font-plus font-medium uppercase  py-[19px] bg-primary mt-6 ">
              complete reservation
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResrevationPage;
