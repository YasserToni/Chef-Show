import React, { useRef } from "react";

const OTPInput = () => {
  const inputsRef = useRef([]);

  const handleInputChange = (e, index) => {
    const value = e.target.value;

    // Allow only numeric input
    if (!/^\d*$/.test(value)) {
      e.target.value = "";
      return;
    }

    // Move to the next input
    if (value && index < inputsRef.current.length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      // Move to the previous input on backspace if current input is empty
      inputsRef.current[index - 1]?.focus();
    }
  };

  return (
    <div className="w-full flex justify-between">
      {[0, 1, 2, 3].map((_, index) => (
        <input
          key={index}
          ref={(el) => (inputsRef.current[index] = el)}
          type="text"
          maxLength={1}
          className="w-[65px] h-[65px]  md:w-[115px] md:h-[88px] lg:w-[125px] lg:h-[88px] text-center text-[32px] lg:text-[48px] lg:leading-[48px] font-medium bg-black text-secondary border border-primary  focus:outline-none focus:ring-2 focus:ring-[#C19F74]"
          onChange={(e) => handleInputChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          required
        />
      ))}
    </div>
  );
};

export default OTPInput;
