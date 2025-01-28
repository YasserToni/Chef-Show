import Input from "../components/ui/reservreation components/Input";
import BackIcon from "../assets/im/headerImage/backIcon.png";
import ChefIcon from "../assets/im/headerImage/Group 36702.png";
import { Link } from "react-router-dom";

function ForgetPasswordPage() {
  return (
    <div className="min-h-screen bg flex items-center justify-center mx-4">
      <div className=" border border-primary px-6 md:px-10 lg:px-16 py-8 lg:py-10 mb-4 max-w-[664px] w-full">
        <div className="w-full flex justify-center">
          <img src={ChefIcon} alt="chef logo" />
        </div>
        <h1 className="text-center text-secondary text-[28px] lg:text-[40px] lg:leading-[60px] tracking-[2%] font-bold font-Restora mt-6 mb-8">
          Forgot password?
        </h1>
        <form>
          <div className="mb-4">
            <Input label="Email" placeholder="Enter your email" />
          </div>
          <button className="flex justify-center w-full h-fit text-[#000000] text-base lg:text-xl  lg:leading-5 tracking-[.04m] text-center font-plus font-medium py-4 bg-primary mt-7 lg:mt-12 ">
            Reset Password
          </button>
          <button className="flex justify-center items-center w-full h-fit text-secondary lg:text-base text-sm leading-4  text-center font-plus font-medium mt-5 lg:mt-7">
            <img src={BackIcon} alt="back to home" className="mr-3" />
            <Link to="/login">Back to login</Link>
          </button>
        </form>
      </div>
    </div>
  );
}

export default ForgetPasswordPage;
