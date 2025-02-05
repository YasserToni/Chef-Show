import ChangeName from "../components/ui/Edit Account Settings components/ChangeName";
import ChangeEmail from "../components/ui/Edit Account Settings components/ChangeEmail";
import ChangePhoneNumber from "../components/ui/Edit Account Settings components/ChangePhoneNumber";
import ChangePassword from "../components/ui/Edit Account Settings components/ChangePassword";
const Account = () => {
  return (
    <div>
      <div className="font-Restora text-secondary text-[32px] leading-[32px] font-[200] tracking-[2%] pb-[14px] mb-8 border-b  border-primary">
        Personal information
      </div>
      <div>
        {/* ///////////////////////// */}
        <div className="flex flex-col  font-[300px] font-plus tracking-[.02em] mt-5 relative">
          <ChangeName />
          <label
            htmlFor="name"
            className="text-base  text-secondary leading-[16px]"
          >
            Your Name
          </label>
          <input
            className="w-[730px] h-[54px] bg-[#131313] px-4 py-[17px] text-sm leading-[14px] mt-[10px] border border-primary text-[#6F6F6F] focus:outline-primary capitalize"
            type="text"
            id="name"
            name="name"
            placeholder="Mohamed Ihab"
            required
          />
        </div>
        {/* ///////////////////////// */}
        {/* ///////////////////////// */}
        <div className="flex flex-col  font-[300px] font-plus tracking-[.02em] mt-5 relative">
          <ChangeEmail />
          <label
            htmlFor="name"
            className="text-base  text-secondary leading-[16px]"
          >
            Email
          </label>
          <input
            className="w-[730px] h-[54px] bg-[#131313] px-4 py-[17px] text-sm leading-[14px] mt-[10px] border border-primary text-[#6F6F6F] focus:outline-primary capitalize"
            type="text"
            id="name"
            name="name"
            placeholder="altonyyasser@gmail.com"
            required
          />
        </div>
        {/* ///////////////////////// */}
        {/* ///////////////////////// */}
        <div className="flex flex-col  font-[300px] font-plus tracking-[.02em] mt-5 relative">
          <ChangePhoneNumber />
          <label
            htmlFor="name"
            className="text-base  text-secondary leading-[16px]"
          >
            Phone Number
          </label>
          <input
            className="w-[730px] h-[54px] bg-[#131313] px-4 py-[17px] text-sm leading-[14px] mt-[10px] border border-primary text-[#6F6F6F] focus:outline-primary capitalize"
            type="text"
            id="name"
            name="name"
            placeholder="+201029692906"
            required
          />
        </div>
        {/* ///////////////////////// */}
        {/* ///////////////////////// */}
        <div className="flex flex-col  font-[300px] font-plus tracking-[.02em] mt-5 relative">
          <ChangePassword />
          <label
            htmlFor="name"
            className="text-base  text-secondary leading-[16px]"
          >
            Password
          </label>
          <input
            className="w-[730px] h-[54px] bg-[#131313] px-4 py-[17px] text-sm leading-[14px] mt-[10px] border border-primary text-[#6F6F6F] focus:outline-primary capitalize"
            type="password"
            id="name"
            name="name"
            placeholder=""
            required
          />
        </div>
        {/* ///////////////////////// */}
      </div>
    </div>
  );
};

export default Account;
