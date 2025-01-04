import CalendarComponent from "../CalendarComponent";
import Navbar from "../components/ui/landing components/Navbar";
import Input from "../components/ui/reservreation components/Input";

function ResrevationPage() {
  return (
    <>
      <Navbar />
      <div className=" flex flex-wrap justify-center gap-8 my-20">
        <div className="p-8 border border-primary w-[733px] h-[514px]">
          <CalendarComponent />
        </div>
        <div className="p-8 border border-primary w-[514px] h-[525px]">
          <div className="font-Restora font-normal text-[40px] leading-[40px] text-secondary capitalize tracking-[.02em]">
            enter your data
          </div>
          <div className="mt-[14px] font-plus font-[300px] text-sm leading-[14px] tracking-[.02em] text-secondary">
            enter your information to complete the details
          </div>
          <Input label="Full Name" placeholder="Enter your Full Name" />
          <Input label="Email" placeholder="Enter your Email" />
          <Input label="phone number" placeholder="Enter your phone number" />
          <Input label=" quantity for seats" placeholder="0" />
        </div>
      </div>
    </>
  );
}

export default ResrevationPage;
