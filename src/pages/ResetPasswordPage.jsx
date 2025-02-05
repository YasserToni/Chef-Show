import BackIcon from "../assets/im/headerImage/backIcon.png";
import OTPInput from "../components/ui/OTPInput";
import forgetPasswordImage from "../assets/im/headerImage/ForgetPasswordImag.png";
import ChefIcon from "../assets/im/headerImage/Group 36702.png";
import { Link } from "react-router-dom";
import Input from "../components/ui/reservreation components/Input";

function ResetPasswordPage() {
  return (
    <section className=" flex items-center justify-center w-screen h-screen ">
      <div className="grid lg:grid-cols-2 lg:w-[1440px] gap-[72px]">
        <div className="flex items-center justify-center ">
          <div className=" lg:ml-[120px] md:w-[549px] mx-4 lg:mx-0">
            <h2 className="font-bold lg:text-[36px] text-[26px]  leading-[56px] text-secondary font-Restora">
              Reset Your Password
            </h2>
            <p className="lg:text-[16px] text-xs lg:leading-[16px] mt-1 lg:mt-[6px] text-secondary font-plus mb-6 pb-8 border-b border-[#525252]">
              For security reasons, this code expires in 2 minutes.
            </p>
            <form action="" className="flex flex-col gap-4">
              <div className="mt-6">
                <Input label="Password" placeholder="Enter your password" />

                <Input
                  label="Password Confirm"
                  placeholder="Confirm your password"
                />
              </div>
              <div>
                <button className="flex justify-center w-full h-fit text-[#000000] text-base lg:text-xl  lg:leading-5 tracking-[.04m] text-center font-plus font-medium py-4 bg-primary mt-3">
                  Reset Password
                </button>
                <button className="flex justify-center items-center w-full h-fit text-secondary lg:text-base text-sm leading-4  text-center font-plus font-medium mt-5 lg:mt-7">
                  <img src={BackIcon} alt="back to home" className="mr-3" />
                  <Link to="/login">Back to login</Link>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="lg:block hidden relative">
          <div className="absolute w-full h-full bg-[#00000099]  z-10 top-0 left-0"></div>
          <div className="absolute top-[48px] left-[48px] z-40 text-secondary text-[40px] leading-[58px] xl:text-[56px] xl:leading-[78px]  tracking-[2%] uppercase font-normal font-Restora">
            <span className="text-primary"> CREATE</span> <br />a new password
          </div>
          <img
            className="absolute z-40 bottom-[50px] right-[50px]"
            src={ChefIcon}
            alt="icon"
          />
          <img
            className="w-[680px] h-screen py-8 pr-8"
            src={forgetPasswordImage}
            alt="login form image"
          />
        </div>
      </div>
    </section>
  );
}

export default ResetPasswordPage;
