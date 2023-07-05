type ConvertedData = {
  name: string;
  uv: number;
  pv: number;
  amt: number;
};
type OriginalData = Record<string, number>;

export const restructureData = (originalData: OriginalData) => {
  const convertedData: ConvertedData[] = Object?.entries(originalData).map(
    ([key, value]): ConvertedData => ({
      name: new Date(key).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      }),
      uv: value * 150,
      pv: value * 50,
      amt: value * 10,
    })
  );

  return convertedData;
};

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

// const data = [
//     { name: 'Group A', value: 400 },
//     { name: 'Group B', value: 300 },
//     { name: 'Group C', value: 300 },
//     { name: 'Group D', value: 200 },
//   ];
//   const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
