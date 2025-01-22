export const data = [
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
