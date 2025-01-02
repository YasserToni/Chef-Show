import rectangle from "../../../assets/im/headerImage/Rectangle 3.png";

function Header({ specialClass, icon, iconName, header, decription }) {
  return (
    <div className="flex justify-center ">
      <div className={`mt-[120px] mb-[80px] ${specialClass}`}>
        <img
          className="w-[48px] h-[48px] mx-auto"
          src={icon}
          alt="Fork-knife"
        />
        <div className="flex items-center justify-center  mt-[20px]">
          <img className="w-[6px] h-[6px]" src={rectangle} alt="rectangle" />
          <span className="text-sm font-Restora font-medium text-primary mx-[8px] uppercase">
            {iconName}
          </span>
          <img className="w-[6px] h-[6px]" src={rectangle} alt="rectangle" />
        </div>
        <div className="text-secondary font-normal text-[56px] leading-[70px] font-Restora mt-[32px] mb-[24px] text-center uppercase">
          {header}
        </div>
        <div className="text-secondary font-Restora font-normal text-base  text-center capitalize">
          {decription}
        </div>
      </div>
    </div>
  );
}

export default Header;
