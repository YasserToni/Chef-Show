import BackIcon from "../assets/im/headerImage/backIcon.png";
import ChefIcon from "../assets/im/headerImage/Group 36702.png";
import { Link } from "react-router-dom";
import OTPInput from "../components/ui/OTPInput";

function VerificationPage() {
  return (
    <div className="min-h-screen bg flex items-center justify-center mx-4">
      <div className=" border border-primary px-6 md:px-10 lg:px-16 py-8 lg:py-10 mb-4 max-w-[664px] w-full">
        <div className="w-full flex justify-center">
          <img src={ChefIcon} alt="chef logo" />
        </div>
        <h1 className="text-center text-secondary text-[28px] lg:text-[40px] lg:leading-[60px] tracking-[2%] font-bold font-Restora mt-6 mb-8">
          Verify Password
        </h1>
        <form>
          <div>
            <OTPInput />
          </div>
          <button className="flex justify-center w-full h-fit text-[#000000] text-base lg:text-xl  lg:leading-5 tracking-[.04m] text-center font-plus font-medium py-4 bg-primary mt-6 lg:mt-8 ">
            Continue
          </button>
          <div className="w-full text-center lg:my-7 my-4 font-medium text-sm leading-[16px] font-plus">
            <span className="text-secondary mr-1">
              (2:10) Didn’t receive the email?
            </span>
            <span className="text-primary cursor-pointer">
              <Link>Click to resend</Link>
            </span>
          </div>
          <button className="flex justify-center items-center w-full h-fit text-secondary lg:text-base text-sm leading-4  text-center font-plus font-medium">
            <img src={BackIcon} alt="back to home" className="mr-3" />
            <Link to="/login">Back to login</Link>
          </button>
        </form>
      </div>
    </div>
  );
}

export default VerificationPage;
