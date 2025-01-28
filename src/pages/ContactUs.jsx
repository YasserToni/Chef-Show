import { useLayoutEffect } from "react";
import contactUsImage from "../assets/im/headerImage/contactUsImage.png";
import HeroSection from "../components/ui/reservreation components/HeroSection";
import Input from "../components/ui/reservreation components/Input";
import Navbar from "../components/ui/landing components/Navbar";
import Footer from "../components/ui/landing components/Footer";

const ContactUs = () => {
  useLayoutEffect(() => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className=" absolute top-0 z-30 w-full">
        <Navbar />
      </div>
      <HeroSection subSection="contact us" />
      <div className="flex justify-center mx-auto">
        <div className="grid   grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 xl:flex-wrap-reverse xl:w-[1202px] border border-primary mx-4 lg:mx-[120px] mb-20 lg:mb-[180px] mt-[80px] ">
          <div className="my-4 mx-2 lg:my-16 lg:ml-10  xl:w-[520px] ordere-2">
            <div className="font-Restora font-normal text-[32px] lg:text-[40px] leading-[40px] text-secondary capitalize tracking-[.02em]">
              Contact us
            </div>
            <div className="font-plus text-secondary font-[300px] text-sm leading-6 lg:text-[20px] lg:leading-8 tracking-[.02em] mt-6">
              Hello! Do you have any questions or suggestions about this site,
              or just want to say Hi? Send a message using the below form. I
              will get back to you as soon as possible.
            </div>
            <div className="mt-[40px]">
              <Input label="Email" placeholder="Enter Your Email" />
              <Input label="Subject" placeholder="Enter Your Subject" />
              <div className="mt-5 font-[300px] font-plus tracking-[.02em]">
                <label className="text-base  text-secondary leading-[16px]">
                  Message
                </label>
                <textarea
                  className="w-full h-[128px] bg-[#131313] px-4 py-[17px] text-sm leading-[14px] mt-[10px] border border-primary text-[#6F6F6F] focus:outline-primary resize-none"
                  type="text"
                  placeholder="Enter Your Message"
                />
              </div>
              <div>
                <button className="font-plus font-medium text-sm leading-[14px] tracking-[.02em] text-secondary bg-primary py-[19px] px-16 mt-8 shadow-[4px_4px_10px_0px_#00000014] ">
                  SEND A MESSAGE
                </button>
              </div>
            </div>
          </div>
          <div className="py-2 px-2 lg:px-0 lg:pr-2 flex justify-center items-center order-1  ">
            <img
              className="w-full h-full mx-auto"
              src={contactUsImage}
              alt="Contact us image"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
