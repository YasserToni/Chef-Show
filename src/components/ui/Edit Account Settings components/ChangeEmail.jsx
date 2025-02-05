import { useState } from "react";
import InputDialog from "../Edit Account Settings components/InputDialog";
function ChangeEmail() {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);
  return (
    <>
      <buton
        onClick={openDialog}
        className="absolute right-[6px] bottom-[6px] w-[102px] h-[42px] bg-primary text-secondary flex items-center justify-center font-Restora font-normal text-[20px] leading-[20px] tracking-[2%] cursor-pointer"
      >
        Edit
      </buton>

      {/* Alert Dialog */}
      {isOpen && (
        <div
          className="z-10 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity"
          onClick={closeDialog}
        >
          <div
            className="bg-[#000000] w-[604px] p-20 flex flex-col gap-[40px] animate-fadeIn"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            <div className="font-Restora text-secondary tracking-[2%] font-normal text-center">
              <h2 className="text-[40px] leading-[40px]">Change Email</h2>
              <p className="mt-3 text-[14px] leading-[16px]">
                Change your email to keep your account up to date.
              </p>
            </div>
            <div>
              <InputDialog label="Emali" placeholder="Write Your Email" />
              <div className="mt-6">
                <InputDialog
                  label="Password"
                  placeholder="Write Your Password"
                />
              </div>
            </div>
            <div>
              <button className="w-full flex justify-center items-center py-[19px]  text-secondary font-plus font-normal text-[20px] leading-[20px] bg-primary">
                Save Changes
              </button>
              <button
                onClick={closeDialog}
                className="w-full flex justify-center items-center text-secondary font-plus font-medium text-[16px] leading-[16px] mt-[28px]"
              >
                cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ChangeEmail;
