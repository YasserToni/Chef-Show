function Input({ label, placeholder }) {
  return (
    <div className="flex flex-col  font-[300px] font-plus tracking-[.02em] mt-5">
      <label className="text-base  text-secondary leading-[16px]">
        {label}
      </label>
      <input
        className="w-full h-12 bg-[#131313] px-4 py-[17px] text-sm leading-[14px] mt-[10px] border border-primary text-[#6F6F6F] focus:outline-primary capitalize"
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
