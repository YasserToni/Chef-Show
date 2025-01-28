// import Input from "../components/ui/reservreation components/Input";
// import Support from "../assets/im/perfect_place/Rectangle 6.png";
import contactUsImage from "../assets/im/headerImage/contactUsImage.png";
import ChefIcon from "../assets/im/headerImage/Group 36702.png";
import { Link } from "react-router-dom";
function LoginPage() {
  return (
    <section className="bg min-h-screen flex box-border justify-center items-center mx-2">
      <div className=" rounded-2xl flex max-w-7xl p-5 items-center border border-primary">
        <div className="md:w-1/2 lg:pr-8">
          <img src={ChefIcon} alt="icon" />
          <h2 className="font-bold text-[40px] text-secondary font-Restora">
            LOGIN
          </h2>
          <p className="text-sm mt-[6px] text-secondary font-plus mb-6 lg:mb-8">
            Your Gateway to Exclusive Deals and Offers!
          </p>

          <form action="" className="flex flex-col gap-4">
            <div>
              <label className="text-base  text-secondary leading-[16px]">
                Email or phone number
              </label>
              <input
                className="w-full h-12 bg-[#131313] px-4 py-[17px] text-sm leading-[14px] mt-[10px] border border-primary text-[#6F6F6F] focus:outline-primary capitalize"
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email or phone number"
                required
              />
            </div>
            <div>
              <label className="text-base  text-secondary leading-[16px]">
                Password
              </label>
              <div className="relative">
                <input
                  className="w-full h-12 bg-[#131313] px-4 py-[17px] text-sm leading-[14px] mt-[10px] border border-primary text-[#6F6F6F] focus:outline-primary capitalize"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  required
                />
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="gray"
                  id="togglePassword"
                  className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer z-20 opacity-100 text-secondary"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"></path>
                  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="text-secondary bi bi-eye-slash-fill absolute top-1/2 right-3 -z-1 -translate-y-1/2 cursor-pointer hidden"
                  id="mama"
                  viewBox="0 0 16 16"
                >
                  <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"></path>
                  <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"></path>
                </svg> */}
              </div>
            </div>
            <div className="w-full flex justify-between ">
              <div className="flex gap-2 items-center">
                <label className="flex gap-2 items-center font-plus text-sm leading-[14px] text-secondary">
                  <input type="checkbox" className="hidden peer" />
                  <div className="w-5 h-5 border border-white bg-black peer-checked:bg-white peer-checked:border-black cursor-pointer"></div>
                  <span className="text-white">Remember me</span>
                </label>
              </div>
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
              <div className="w-full text-center lg:mt-3 mt-2 font-medium text-sm leading-[16px] font-plus">
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
        <div className="md:block hidden w-1/2">
          <img
            className="rounded-2xl  h-[550px] w-full"
            src={contactUsImage}
            alt="login form image"
          />
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
