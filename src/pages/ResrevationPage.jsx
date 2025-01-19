import CalendarComponent from "../CalendarComponent";
import Navbar from "../components/ui/landing components/Navbar";
import HeroSection from "../components/ui/reservreation components/HeroSection";
import Input from "../components/ui/reservreation components/Input";

function ResrevationPage() {
  return (
    <>
      <div className=" absolute top-0 z-30 w-full">
        <Navbar />
      </div>
      <HeroSection subSection="reservation" />
      <div className=" flex flex-wrap justify-center gap-8 my-20">
        <div className="p-8 border border-primary w-[733px] mb-[48px]  lg:mb-[180px]">
          <CalendarComponent />
          <div className="flex justify-center">
            <button className="text-secondary text-sm leading-[14px] tracking-[.04m] text-center font-plus font-medium uppercase px-16 py-[19px] bg-primary mt-6">
              complete reservation
            </button>
          </div>
        </div>

        <div className="p-8 border border-primary w-[514px] h-[514px]">
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
          </div>
        </div>
      </div>
    </>
  );
}

export default ResrevationPage;
