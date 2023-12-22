export const date = () => {
  let date = new Date();
  let dayWeekDate = date.getDay();
  let dayDate = date.getDate();
  let monthDate = date.getMonth();
  let yearDate = date.getFullYear();
  let hourDate = date.getHours();
  let minutes = date.getMinutes();
  let ampm;

  let arrayWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let arrayMonths = [
    "Saturday",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  if (hourDate >= 12) {
    hourDate = hourDate - 12;
    ampm = "pm";
  } else {
    ampm = "am";
  }

  if (hourDate == 0) {
    hourDate == 12;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  return {
    dayWeekDate,
    dayDate,
    monthDate,
    arrayWeek,
    arrayMonths,
    yearDate,
    hourDate,
    minutes,
    ampm,
  };
};
