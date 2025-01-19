import SwiperComponenet from "../components/ui/landing components/SwiperComponenet";
import Header from "../components/ui/landing components/Header";
import AboutSection from "../components/ui/landing components/AboutSection";
import PerfectPlaceSection from "../components/ui/landing components/PerfectPlaceSection";
import MenuSection from "../components/ui/landing components/MenuSection";
import Reviews from "../components/ui/landing components/reviews/Reviews";
import Support from "../components/ui/landing components/Support";
import fork_Knife from "../assets/im/headerImage/Fork-Knife.png";
import perfectPlaceIcon from "../assets/im/headerImage/perfectPlaceIcon.png";
import menuIcon from "../assets/im/headerImage/MenuIcon.png";
import reviewIcon from "../assets/im/headerImage/ReviewIcon.png";

function LandingPage() {
  return (
    <>
      <SwiperComponenet />
      <div className="mx-4 lg:mx-20">
        <Header
          specialClass={"w-[668px]"}
          icon={fork_Knife}
          iconName={"All Day Experience"}
          header={"About The chef show"}
          decription={
            "Our restaurant offers a stylish and fun European cafe-restaurant experience, inspired by Executive Cheft Chris Hill, the all day dinning menu is a reflection of the very best of the season."
          }
        />
        <AboutSection />
        <Header
          specialClass={"w-[783px]"}
          icon={perfectPlaceIcon}
          iconName={"Today Specials"}
          header={"The perfect place for anexceptional experience"}
        />
        <PerfectPlaceSection />
        <Header
          specialClass={"w-[668px]"}
          icon={menuIcon}
          iconName={"Special Offers"}
          header={"THE  special menu"}
        />
        <MenuSection />
        <Header
          specialClass={"w-[1016px]"}
          icon={reviewIcon}
          iconName={"testimonials"}
          header={"The reviews of customers when coming to our restaurant!"}
        />
        <Reviews carouselDirection="carousel-track_right" />
        <Reviews carouselDirection="carousel-track_left" />
        <Support />
      </div>
    </>
  );
}

export default LandingPage;
