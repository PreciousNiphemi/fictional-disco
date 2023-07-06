type ConvertedData = {
  name: string;
  uv: number;
  pv: number;
  amt: number;
};

type OriginalLocationData = {
  country: string;
  count: number;
  percent: number;
};

type OriginalReferData = {
  source: string;
  count: number;
  percent: number;
};

type OriginalData = Record<string, number>;

// Can put all into one function and use one switch statement to handle the function to call

export const restructureData = (originalData: OriginalData) => {
  if (!originalData) {
    return [];
  }
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

export const restructureLocationData = (
  locationData: OriginalLocationData[]
) => {
  if (!locationData) {
    return [];
  }
  return locationData.map((item) => ({
    name: item.country,
    value: item.percent,
  }));
};

export const restructureReferData = (referData: OriginalReferData[]) => {
  if (!referData) {
    return [];
  }
  return referData.map((item) => ({
    name: item.source,
    value: item.percent,
  }));
};

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

export const colors = ["#599EEA", "#844FF6", "#0FB77A", "#FAB70A", "#F09468"];

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
