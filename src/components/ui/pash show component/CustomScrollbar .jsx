import { useState, useEffect } from "react";

const CustomScrollbar = () => {
  const [scrollTop, setScrollTop] = useState(0);

  // Handle scroll event
  useEffect(() => {
    const container = document.querySelector(".relative-container");

    const handleScroll = () => {
      const scrollPercentage =
        container.scrollTop / (container.scrollHeight - container.clientHeight);
      const maxScrollTop =
        container.clientHeight -
        document.querySelector(".scrolling-div").offsetHeight;
      setScrollTop(scrollPercentage * maxScrollTop);
    };

    container.addEventListener("scroll", handleScroll);

    // Cleanup on unmount
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="container w-full h-[500px] overflow-hidden relative">
      {/* Scrollable Content Container */}
      <div className="relative-container w-full h-full overflow-y-scroll scrollbar-hide">
        {/* Custom Scrollbar */}
        <div className="custom-scrollbar absolute w-[2px] h-full top-[800px] left-0 bg-white"></div>

        {/* Scrollable Small Div */}
        <div
          className="scrolling-div absolute w-[2px] h-[50px] left-0 bg-red-500"
          style={{ top: `${scrollTop}px` }}
        ></div>

        {/* Content that will cause scroll */}
        <div className="content p-4">
          <p className="text-white">
            This is a scrollable area. Scroll down to see the effect on the red
            div.
          </p>
          {/* Adding content to overflow the container */}
          <div style={{ height: "2000px" }}></div>
        </div>
      </div>
    </div>
  );
};

export default CustomScrollbar;
