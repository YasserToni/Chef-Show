import about_image1 from "../../../assets/im/about_image.png";
import about_image2 from "../../../assets/im/about_image2.png";
import about_image3 from "../../../assets/im/about_image3.png";

function AboutSection() {
  return (
    <div className="flex justify-center mx-auto">
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 md:gap-8  xl:grid-cols-3 lg:gap-12 ">
        <div className="  lg:w-[438px] lg:h-[714px]">
          <div className="w-full lg:h-[518px] ">
            <img src={about_image1} alt="about_image1" />
          </div>
          <div className="text-primary text-[48px] font-normal font-Restora mt-4 lg:mt-8">
            490+
          </div>
          <div className="text-secondary text-[40px] leading-[40px] font-Restora mt-3">
            visitor Daily
          </div>
          <div className="text-secondary font-normal font-Restora text-base leading-[24px] mt-4">
            Our restaurant offers a stylish and fun European cafe-restaurant
            experience.
          </div>
        </div>
        <div className=" lg:w-[438px] lg:h-[714px] flex flex-col justify-center">
          <div className="w-full">
            <img src={about_image2} alt="about_image1" />
          </div>
          <div className="text-primary text-[48px] font-normal font-Restora mt-4 lg:mt-8">
            490+
          </div>
          <div className="text-secondary text-[40px] leading-[40px] font-Restora mt-3">
            visitor Daily
          </div>
          <div className="text-secondary font-normal font-Restora text-base leading-[24px] mt-4">
            Our restaurant offers a stylish and fun European cafe-restaurant
            experience.
          </div>
        </div>
        <div className="w-[328px] lg:w-[438px] lg:h-[714px]">
          <div className="w-full lg:h-[518px]">
            <img src={about_image3} alt="about_image1" />
          </div>
          <div className="text-primary text-[48px] font-normal font-Restora mt-4 lg:mt-8">
            490+
          </div>
          <div className="text-secondary text-[40px] leading-[40px] font-Restora mt-3">
            visitor Daily
          </div>
          <div className="text-secondary font-normal font-Restora text-base leading-[24px] mt-4">
            Our restaurant offers a stylish and fun European cafe-restaurant
            experience.
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
