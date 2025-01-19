import productImag from "../../../assets/im/menu/image 1.png";
function MenuSection() {
  return (
    <div className="flex justify-center mx-auto">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-0 md:gap-4 lg:gap-8  ">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="w-[296px] h-[480px] mt-8 lg:mt-16 shrink-0"
          >
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

// import productImag from "../../../assets/im/menu/image 1.png";

// function MenuSection() {
//   return (
//     <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-8 lg:px-16">
//       {Array.from({ length: 8 }).map((_, index) => (
//         <div
//           key={index}
//           className="w-full max-w-[280px] md:max-w-[300px] mx-auto mt-8"
//         >
//           <div className="w-full h-auto">
//             <img
//               src={productImag}
//               alt="menu_image"
//               className="w-full h-[250px] md:h-[300px] object-cover rounded-lg"
//             />
//           </div>
//           <div className="text-xl md:text-2xl leading-8 font-Restora text-secondary font-normal text-center mt-4">
//             Spaghetti Pasta
//           </div>
//           <div className="font-plus font-normal text-gray-600 text-sm md:text-base text-center mt-3">
//             Ground beef, onion, chopped, garlic, minced, green...
//           </div>
//         </div>
//       ))}
//     </section>
//   );
// }

// export default MenuSection;
