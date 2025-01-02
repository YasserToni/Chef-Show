import supportUsImage from "../../../assets/im/headerImage/suppotUs.png";
import supportIcon from "../../../assets/im/headerImage/supportIcon.png";
import Header from "../landing components/Header";
function Support() {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 my-[180px]">
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
        <div className="flex gap-4 justify-center mt-10">
          <button className="w-[146px] h-[52px] text-sm leading-[14px] font-Restora font-medium bg-primary text-secondary ">
            HELP CENTER
          </button>
          <button className="w-[146px] h-[52px] text-sm leading-[14px] font-Restora font-medium  text-primary border border-primary">
            CONTACT US
          </button>
        </div>
      </div>
      <div className="w-[624pz] h-[448px]">
        <img src={supportUsImage} alt="support us image" />
      </div>
    </div>
  );
}

export default Support;
