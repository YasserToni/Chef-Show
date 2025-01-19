import perfectPlaceImage1 from "../../../assets/im/perfect_place/Rectangle 5.png";
import perfectPlaceImage2 from "../../../assets/im/perfect_place/rectangle 6.png";
function PerfectPlaceSection() {
  return (
    <div className="flex justify-center ">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
        <div className=" w-[328px] lg:w-[406px] lg:h-[536px] flex items-center mx-auto">
          <img src={perfectPlaceImage1} alt="pefect place image 1" />
        </div>
        <div className=" w-[328px] lg:w-[406px] lg:h-[536px] mx-auto">
          <img src={perfectPlaceImage2} alt="pefect place image 2" />
        </div>
        <div className="mx-auto">
          <p className="font-plus text-secondary font-normal text-base">
            By day, The chef show provides a hub to meet friends and colleagues
            with a well-crafted wine list, discreet yet professional service and
            sophisticated menus all delivered in a relaxed setting.
          </p>
          <p className="font-plus text-secondary font-normal text-base mt-8">
            By night the scene is set for any and all occasions.From intimate
            tables for two to small groups or larger private events. Our
            unparalleled attention to detail and strong focus on delivering the
            best culinary experiences is designed to exceed expectations
          </p>
          <p className="font-plus text-secondary font-normal text-base  mt-8">
            Booking request
          </p>
          <p className="font-Restora text-primary font-normal text-[32px] leading-8  mt-8">
            +39-055-123456
          </p>
          <button className="font-plus text-secondary font-normal text-sm bg-primary w-[244px] h-[62px] uppercase  mt-8">
            View menu
          </button>
        </div>
      </section>
    </div>
  );
}

export default PerfectPlaceSection;
