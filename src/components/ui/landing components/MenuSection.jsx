import productImag from "../../../assets/im/menu/image 1.png";
function MenuSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
      {Array.from({ length: 8 }).map((_, index) => (
        <div key={index} className="w-[296px] h-[480px] mt-16">
          <div className="w-[300px] h-[356px]">
            <img src={productImag} alt="menu_image" />
          </div>
          <div className="text-[32px] leading-8 font-Restora text-secondary font-normal text-center mt-6">
            Spaghetti Pasta
          </div>
          <div className="font-Restora font-normal text-[#8B8B8B] text-base text-center mt-5">
            Ground beef, onion, chopped, garlic, minced, green...
          </div>
        </div>
      ))}
    </section>
  );
}

export default MenuSection;
