export const cls = (...classnames: string[]) => {
  return classnames.join(" ");
};

export const monthDayYear = (dateString: string) => {
  const currentDate = new Date(dateString);
  const monthNames = [
    "January",
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
  return `
  ${
    monthNames[currentDate.getMonth()]
  } ${currentDate.getDay()}, ${currentDate.getFullYear()}
  `;
};
