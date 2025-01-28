import { useState } from "react";
import nextButtonIcon from "./assets/im/headerImage/next.png";
import { data } from "./dummy-data/calenderData";

// Group data by "Month Year"
const groupByMonth = (data) => {
  return data.reduce((acc, curr) => {
    const dateParts = curr.full_date.split("-");
    const year = dateParts[0];
    const monthName = new Date(curr.full_date).toLocaleString("default", {
      month: "long",
    });
    const key = `${monthName} ${year}`;
    if (!acc[key]) acc[key] = [];
    acc[key].push(curr);
    return acc;
  }, {});
};

const groupedData = groupByMonth(data);

const CalendarComponent = () => {
  const months = Object.keys(groupedData); // Extract month-year keys
  const [currentMonthIndex, setCurrentMonthIndex] = useState(0);
  const [visibleDays, setVisibleDays] = useState(9); // Initially showing 9 days
  const [selectedDay, setSelectedDay] = useState(null); // State for selected day

  const currentMonth = months[currentMonthIndex];
  const days = groupedData[currentMonth] || [];

  const handlePreviousMonth = () => {
    if (currentMonthIndex > 0) {
      setVisibleDays(9); // Reset visible days to 9
      setCurrentMonthIndex((prev) => prev - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonthIndex < months.length - 1) {
      setVisibleDays(9); // Reset visible days to 9
      setCurrentMonthIndex((prev) => prev + 1);
    }
  };

  const handleShowMore = () => {
    setVisibleDays(days.length); // Show all days for the current month
  };

  const handleShowLess = () => {
    setVisibleDays(9); // Reset to show only the first 9 days
  };

  const handleDayClick = (day) => {
    if (selectedDay === day) {
      setSelectedDay(null);
    } else {
      setSelectedDay(day); // Set the clicked day as selected
    }
    console.log("Selected Day:", day); // Print it in the console
  };

  const displayedDays = days.slice(0, visibleDays);

  return (
    <div className="">
      <div className="font-Restora text-secondary text-[28px] lg:text-[40px] leading-[40px] tracking-[.02em] font-normal">
        Pick Your Day
      </div>
      <div className="flex gap-6 mt-6">
        <div className="flex items-center gap-[6px]">
          <div className="bg-[#EB5757] w-[10px] h-[10px] self-center"></div>
          <span className="font-Restora text-[8.4px] leading-[14px] text-secondary uppercase">
            fully booked
          </span>
        </div>
        <div className="flex items-center gap-[6px]">
          <div className="bg-[#FCA82A] w-[10px] h-[10px] self-center"></div>
          <span className="font-Restora text-[8.4px] leading-[14px] text-secondary uppercase">
            Low Availability
          </span>
        </div>
        <div className="flex items-center gap-[6px]">
          <span>
            <div className="bg-[#27AE60] w-[10px] h-[10px] self-center"></div>
          </span>
          <span className="font-Restora text-[8.4px] leading-[14px] text-secondary uppercase">
            Available
          </span>
        </div>
      </div>
      {/* Month Selector */}
      <div className="flex items-center justify-between my-10">
        <button
          className={`rotate-180 ${
            currentMonthIndex === 0 ? "cursor-not-allowed" : ""
          }`}
          onClick={handlePreviousMonth}
          disabled={currentMonthIndex === 0} // Disable when it's the first month
        >
          <img src={nextButtonIcon} alt="prev Button" />
        </button>
        <h2 className="font-Restora text-secondary font-normal text-2xl leading-[24px] my-2">
          {currentMonth}
        </h2>
        <button
          className={` ${
            currentMonthIndex === months.length - 1 ? "cursor-not-allowed" : ""
          }`}
          onClick={handleNextMonth}
          disabled={currentMonthIndex === months.length - 1} // Disable when it's the last month
        >
          <img src={nextButtonIcon} alt="Next Button" />
        </button>
      </div>

      {/* Days Grid */}
      <div className="flex justify-center ">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 grid-rows-2 gap-5  lg:mx-auto">
          {displayedDays.map((day, index) => (
            <div
              key={index}
              className={`w-[145px] lg:w-[118px] h-[116px] flex flex-col items-center justify-center border border-primary px-3 ${
                day.booking_status === "fully_booked"
                  ? "text-white cursor-not-allowed pointer-events-none"
                  : day.booking_status === "low_availability"
                  ? ""
                  : ""
              } ${selectedDay === day ? "bg-primary text-white" : ""} `}
              onClick={() => handleDayClick(day)}
            >
              <span
                className={`"font-plus text-sm leading-[14px] tracking-[.04em] mt-3"  ${
                  selectedDay === day ? " text-white" : "text-[#A5A5A5]"
                }`}
              >
                {day.day}
              </span>
              <span
                className={`font-Restora text-2xl leading-[24px] tracking-[.02eem] text-secondary pb-4 border-b-[3px]  mb-4 mt-3 ${
                  day.booking_status === "fully_booked"
                    ? " border-[#EB5757]"
                    : day.booking_status === "low_availability"
                    ? "border-[#FCA82A]"
                    : "border-[#27AE60] "
                }`}
              >
                {day.date}
              </span>
              <span
                className={`" text-[10px] lg:text-[9px]  font-plus leading-[10px] font-medium ${
                  selectedDay === day ? " text-white" : "text-[#A5A5A5]"
                }  mb-3"`}
              >{`START FROM-$${day.price}`}</span>
            </div>
          ))}
          {/* Show More or Show Less Button */}
          {visibleDays < days.length ? (
            <button
              className="w-[145px] lg:w-[118px] h-[118px] bg-primary text-secondary font-Restora font-normal text-2xl leading-6 tracking-[.02em]"
              onClick={handleShowMore}
            >
              More
            </button>
          ) : (
            <button
              className="w-[145px] lg:w-[118px] h-[118px] flex justify-center items-center bg-primary text-secondary font-Restora font-normal text-2xl leading-6 tracking-[.02em]"
              onClick={handleShowLess}
            >
              <img
                src={nextButtonIcon}
                alt="Show less Button"
                className="rotate-180"
              />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CalendarComponent;
