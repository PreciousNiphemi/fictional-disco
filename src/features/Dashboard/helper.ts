export const daysFilter = [
  {
    name: "1 Day",
  },
  {
    name: "3 Days",
  },
  {
    name: "7 Days",
  },
  {
    name: "30 Days",
  },
  {
    name: "All Time",
  },
  {
    name: "Custom Date",
  },
];

export const getGreeting = (): string => {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();

  if (currentHour >= 5 && currentHour < 12) {
    return "Good morning";
  } else if (currentHour >= 12 && currentHour < 18) {
    return "Good afternoon";
  } else {
    return "Good evening";
  }
};

// export const restructureData = (originalData) => {
//   const convertedData = Object.entries(originalData).map(([key, value]) => ({
//     name: new Date(key).toLocaleDateString("en-US", {
//       month: "short",
//       day: "numeric",
//     }),
//     uv: value,
//     pv: value * 0.6, // Example calculation, adjust as needed
//     amt: value * 0.6, // Example calculation, adjust as needed
//   }));

//   return convertedData;
// };
