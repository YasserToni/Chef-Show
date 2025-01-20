import img1 from "../../../assets/im/headerImage/img1.jpg";
function MainSection() {
  return (
    <div className="flex justify-start pt-10 md:pt-40 md:gap-10">
      {/* Left Section */}
      <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
        <div className="hidden md:flex flex-col items-start justify-start gap-2">
          <div>
            <h3 className="hidden md:block text-xl md:pl-20 md:text-4xl font-Restora font-bold text-secondary">
              The BBQ Show
            </h3>
          </div>
          <div>
            <p className="md:pl-20 text-primary text-[14px] uppercase leading-5 font-Restora">
              Season 2
            </p>
          </div>
          <div>
            <span className="text-secondary inline-block md:pl-20 text-[14px] md:text-[16px] leading-5 md:leading-7 text-start mt-1 font-">
              In collaboration with
            </span>
            <a className="font-plus-jakarta text-secondary font-semibold inline-block underline md:pl-20 text-[14px] md:text-[16px] leading-5 md:leading-7 text-start mt-1">
              <span>⭐️ Meat House Gourmet</span>
            </a>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="relative pl-20 pr-4 md:pl-4 w-full">
        <div className="md:hidden flex flex-col items-start justify-start gap-2">
          <div>
            <h3 className="md:hidden bg-transparent block text-2xl mb-4 text-left font-bold text-white">
              The BBQ Show
            </h3>
          </div>
          <div>
            <p className="md:pl-20 text-primary text-sm uppercase leading-5">
              Season 2
            </p>
          </div>
          <div className="flex flex-col items-start justify-start gap-1 ">
            <span className="text-secondary inline-block md:pl-20 text-[14px] md:text-[16px] leading-5 md:leading-7 text-start mt-1">
              In collaboration with
            </span>
            <a className="font-plus-jakarta text-secondary font-semibold inline-block underline md:pl-20 text-[14px] md:text-[16px] leading-5 md:leading-7 text-start mt-1">
              <span>⭐️ Meat House Gourmet</span>
            </a>
          </div>
        </div>

        <div style={{ opacity: 1, filter: "blur(0px)", transform: "none" }}>
          <div className="mt-4 md:mt-2">
            <p className="text-white text-xs md:text-lg font-normal font-Restora mb-8">
              The outdoor culinary adventure is back celebrating the art of
              grilling over firewood. Hearty dishes, smoky flavors, and cozy
              evenings under the stars make this season unforgettable - uplifted
              this year with a fire pit to bring warmth to the cold winter
              nights.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {Array.from({ length: 4 }).map((img, index) => (
                <div
                  key={index}
                  className="opacity-100 filter blur-0 transform-none"
                >
                  <img
                    src={img1}
                    alt="grid img"
                    className="rounded-lg scale-100 md:scale-90 hover:scale-100 transition-all duration-200 cursor-pointer object-cover h-32 md:h-44 lg:h-72 w-full "
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainSection;
