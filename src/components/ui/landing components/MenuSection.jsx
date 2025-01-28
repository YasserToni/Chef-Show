import productImag from "../../../assets/im/menu/image 1.png";
function MenuSection() {
  return (
    <div className="flex justify-center mx-auto">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-6 md:gap-4 lg:gap-8  ">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="w-[296px]  shrink-0">
            <div className="w-[300px] h-[356px]">
              <img src={productImag} alt="menu_image" />
            </div>
            <div className="text-[32px] leading-8 font-Restora text-secondary font-normal text-center mt-6">
              Spaghetti Pasta
            </div>
            <div className="font-plus font-normal text-[#8B8B8B] text-base text-center mt-5">
              Ground beef, onion, chopped, garlic, minced, green...
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default MenuSection;
