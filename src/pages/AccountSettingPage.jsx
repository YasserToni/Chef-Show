import Footer from "../components/ui/landing components/Footer";
import Navbar from "../components/ui/landing components/Navbar";
import SideBar from "../components/ui/SideBar";
import { Outlet } from "react-router-dom";
function AccountSettingPage() {
  return (
    <>
      <div className=" absolute top-0 z-30 w-full">
        <Navbar />
      </div>
      <div className="flex flex-col gap-[14px] font-Restora text-secondary tracking-[2%] font-normal mt-[168px] mb-[64px] ml-[120px]">
        <div className="text-[40px] leading-[40px]">ACCOUNT SETTING</div>
        <div className="text-[16px] leading-[16px]">
          Ensure your information is accurate for a seamless experience.
        </div>
      </div>
      <div className="flex gap-[64px] mb-[244px] ml-[120px]">
        {/* Sidebar */}
        <SideBar />

        {/* Page Content */}
        <div>
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AccountSettingPage;
