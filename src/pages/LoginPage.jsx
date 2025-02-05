import loginImage from "../assets/im/headerImage/loginImage.png";
import ChefIcon from "../assets/im/headerImage/Group 36702.png";
import { Link } from "react-router-dom";
import Input from "../components/ui/reservreation components/Input";
import eyeIcon from "../assets/im/headerImage/eyeIcon.png";
function LoginPage() {
  return (
    <section className=" flex items-center justify-center w-screen h-screen">
      <div className="grid lg:grid-cols-2 lg:w-[1440px] gap-[72px]">
        <div className="flex items-center justify-center ">
          <div className=" lg:ml-[120px] md:w-[549px] mx-4 lg:mx-0">
            <h2 className="font-bold lg:text-[36px] text-[24px]  leading-[56px] text-secondary font-Restora">
              Welcome to The Chef Show!
            </h2>
            <p className="lg:text-[16px] text-xs lg:leading-[16px] mt-1 lg:mt-[6px] text-secondary font-plus mb-6 pb-8 border-b border-[#525252]">
              Enjoy exclusive services when you sign in.
            </p>

            <form action="" className="flex flex-col gap-4">
              <Input
                label="Email or phone number"
                placeholder="Enter your email or phone number"
              />
              <div>
                <label className="text-base  text-secondary leading-[16px]">
                  Password
                </label>
                <div className="relative">
                  <img
                    src={eyeIcon}
                    alt="eyeIcon"
                    className="absolute top-[25px] right-[10px] cursor-pointer"
                  />
                  <input
                    className="w-full h-12 bg-[#131313] px-4 py-[17px] text-sm leading-[14px] mt-[10px] border border-primary text-[#6F6F6F] focus:outline-primary capitalize"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    required
                  />
                </div>
              </div>
              <div className="w-full flex justify-end ">
                <div>
                  <a className="text-sm font-normal leading-[16px] text-primary font-plus cursor-pointer">
                    <Link to="/forgetpassword">Forgot Password?</Link>
                  </a>
                </div>
              </div>
              <div>
                <button className="flex justify-center w-full h-fit text-[#000000] text-xl leading-5 tracking-[.04m] text-center font-plus font-medium  py-4 bg-primary mt-1 lg:mt-6 ">
                  Login
                </button>
                <div className="w-full text-center lg:mt-7 mt-5 font-medium text-sm leading-[16px] font-plus">
                  <span className="text-secondary mr-1">
                    Don’t have an account?
                  </span>
                  <span className="text-primary cursor-pointer">
                    <Link to="/register">Create an account</Link>
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="lg:block hidden relative">
          <div className="absolute w-full h-full bg-[#00000099] z-10 top-0 left-0"></div>
          <div className="absolute top-[48px] left-[48px] z-40 text-secondary text-[40px] leading-[58px] xl:text-[56px] xl:leading-[78px]  tracking-[2%] uppercase font-normal font-Restora">
            Taste <br /> the Experience
            <br />
            <span className="text-primary">log in</span> now!
          </div>
          <img
            className="absolute z-40 bottom-[50px] right-[50px]"
            src={ChefIcon}
            alt="icon"
          />
          <img
            className="w-[680px] h-screen py-8 pr-8"
            src={loginImage}
            alt="login form image"
          />
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
