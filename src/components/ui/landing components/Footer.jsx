import footerIcon from "../../../assets/im/headerImage/FooterIcon.png";
import facebookIcon from "../../../assets/im/headerImage/facebook.png";
import insgramIcon from "../../../assets/im/headerImage/instgram.png";
import mailIcon from "../../../assets/im/headerImage/mail.png";
function Footer() {
  return (
    <footer className="grid grid-cols-1 lg:grid-cols-[380px_auto] gap-[80px]  px-20 pt-20 pb-[147px] border-t border-primary rounded-t-[140px]">
      <div className="w-[380px]">
        <div>
          <img src={footerIcon} alt="footer icon" />
        </div>
        <div className="text-[#8B8B8B] text-xs leading-[20px] mt-6 font-plus font-normal">
          the chef show® is a female-driven, Egypt-based fashion brand, creating
          luxurious, empowering apparel for the modern woman. Experience
          elegance, confidence, and the celebration of every woman&rsquo;s
          unique beauty with Gumus® - where luxury meets femininity.
        </div>
        <div className="flex gap-4">
          <div className="mt-8 flex justify-center items-center w-16 h-16 border rounded-full border-[#8B8B8B] cursor-pointer">
            <img src={facebookIcon} alt="facebook icon" />
          </div>
          <div className="mt-8 flex justify-center items-center w-16 h-16 border rounded-full border-[#8B8B8B] cursor-pointer">
            <img src={insgramIcon} alt="insgram icon" />
          </div>
          <div className="mt-8 flex justify-center items-center w-16 h-16 border rounded-full border-[#8B8B8B] cursor-pointer">
            <img src={mailIcon} alt="mail icon" />
          </div>
        </div>
      </div>

      <div className="text-[32px] leading-[48px] text-secondary font-Restora font-normal">
        Introducing our New Fashion Collection, where contemporary style meets
        timeless elegance.
      </div>
    </footer>
  );
}

export default Footer;
