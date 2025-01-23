import supportUsImage from "../../../assets/im/headerImage/suppotUs.png";
import supportIcon from "../../../assets/im/headerImage/supportIcon.png";
import Header from "../landing components/Header";
import { Link } from "react-router-dom";
function Support() {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 my-14 lg:my-[180px]">
      <div>
        <Header
          specialClass="header-container w-[600px]"
          icon={supportIcon}
          iconName={"HELP & SUPPORT"}
          header={"NEED SUPPORT? WE’RE HERE TO HELP"}
          decription={
            "Our restaurant offers a stylish and fun European cafe-restaurant experience, inspired by Executive Cheft Chris Hill, the all day dinning menu is a reflection of the very best of the season."
          }
        />
        <div className="flex gap-4 justify-center text-secondary mt-10 font-plus">
          <button className="w-[146px] h-[52px] text-sm leading-[14px] font-plusfont-medium bg-primary  ">
            HELP CENTER
          </button>
          <button className="w-[146px] h-[52px] text-sm leading-[14px] font-plus font-medium  border-[2px] border-primary">
            <Link to="/contact">CONTACT US</Link>
          </button>
        </div>
      </div>
      <div className=" lg:h-[448px]">
        <img src={supportUsImage} alt="support us image" className="mx-auto" />
      </div>
    </div>
  );
}

export default Support;
