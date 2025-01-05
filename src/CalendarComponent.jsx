import { useState } from "react";
import nextButtonIcon from "./assets/im/headerImage/next.png";
// import disableNextButtonIcon from "./assets/im/headerImage/disableNext.png";
import whiteCircle from "./assets/im/headerImage/white circlee.png";
import grayCircle from "./assets/im/headerImage/gray circle.png";
import moveCircle from "./assets/im/headerImage/move circle.png";

// Example Data
const data = [
  // January (29 days)
  ...Array.from({ length: 29 }, (_, i) => ({
    day: new Date(2025, 0, i + 1).toLocaleDateString("en-US", {
      weekday: "short",
    }),
    date: `${String(i + 1).padStart(2, "0")} Jan`,
    full_date: `2025-01-${String(i + 1).padStart(2, "0")}`,
    price: 200,
    booking_status:
      i % 5 === 0
        ? "fully_booked"
        : i % 3 === 0
        ? "low_availability"
        : "available",
    day_status: i % 7 === 0 ? "closed" : "open",
    available_seats_num: i % 5 === 0 ? 0 : Math.floor(Math.random() * 20) + 1,
  })),

  // February (30 days)
  ...Array.from({ length: 30 }, (_, i) => ({
    day: new Date(2025, 1, i + 1).toLocaleDateString("en-US", {
      weekday: "short",
    }),
    date: `${String(i + 1).padStart(2, "0")} Feb`,
    full_date: `2025-02-${String(i + 1).padStart(2, "0")}`,
    price: 200,
    booking_status:
      i % 6 === 0
        ? "fully_booked"
        : i % 4 === 0
        ? "low_availability"
        : "available",
    day_status: i % 8 === 0 ? "closed" : "open",
    available_seats_num: i % 6 === 0 ? 0 : Math.floor(Math.random() * 20) + 1,
  })),
];

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
    // Show next 9 days (replace the first 9 with the next set)
    setVisibleDays((prev) => Math.min(prev + 9, days.length));
  };

  const handleDayClick = (day) => {
    setSelectedDay(day); // Set the selected day in the state
    console.log("Selected Day:", day); // Print it in the console
  };

  const displayedDays = days.slice(visibleDays - 9, visibleDays);

  return (
    <div className="">
      <div className="font-Restora text-secondary text-[40px] leading-[40px] tracking-[.02em] font-normal">
        Pick Your Day
      </div>
      <div className="flex gap-6 mt-6">
        <div className="flex items-center gap-[6px]">
          <span>
            <img src={whiteCircle} alt="fully booked icon" />
          </span>
          <span className="font-plus text-sm leading-[14px] text-secondary uppercase">
            fully booked
          </span>
        </div>
        <div className="flex items-center gap-[6px]">
          <span>
            <img src={grayCircle} alt="Low Availabilityicon" />
          </span>
          <span className="font-plus text-sm leading-[14px] text-secondary uppercase">
            Low Availability
          </span>
        </div>
        <div className="flex items-center gap-[6px]">
          <span>
            <img src={moveCircle} alt="Available icon" />
          </span>
          <span className="font-plus text-sm leading-[14px] text-secondary uppercase">
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
      <div className="grid grid-cols-5 grid-rows-2 gap-5 mb-8">
        {displayedDays.map((day, index) => (
          <div
            key={index}
            className={`w-[118px] h-[116px] flex flex-col items-center justify-center border border-primary px-3 ${
              day.booking_status === "fully_booked"
                ? " text-white cursor-not-allowed"
                : day.booking_status === "low_availability"
            } `}
            onClick={() => handleDayClick(day)} // Add the click handler here
          >
            <span className="font-plus text-sm leading-[14px] tracking-[.04em] text-[#A5A5A5] mt-3">
              {day.day}
            </span>
            <span className="font-Restora text-2xl leading-[24px] tracking-[.02eem] text-secondary pb-4 border-b-[3px] mb-4 mt-3 border-primary">
              {day.date}
            </span>
            <span className="text-[10px] font-plus leading-[10px] font-medium text-[#A5A5A5] mb-3">{`START FROM-$${day.price}`}</span>
          </div>
        ))}
        {/* More Button */}
        {visibleDays < days.length && (
          <button
            className="w-[118px] h-[118px] bg-primary text-secondary font-Restora font-normal text-2xl leading-6 tracking-[.02em]"
            onClick={handleShowMore}
          >
            More
          </button>
        )}
      </div>
    </div>
  );
};

export default CalendarComponent;
