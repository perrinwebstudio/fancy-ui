const monthList = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const SearchPeriodList = ["month", "year", "total"];

export const SearchPeriodLabelMaps = {
  month: "Month-over-Month",
  year: "Year-over-Year",
  total: "Total year-over-Total year",
};

export const parseBarChartData = (data, valueKey) => {
  return monthList.map((month) => {
    const cell = data?.filter(
      (e) =>
        new Date(e.date.slice(0, e.date.length - 2)).toLocaleString("en-US", {
          month: "short",
        }) === month
    )?.[0];
    return {
      name: month,
      amt: cell?.[valueKey] ?? 0,
    };
  });
};

export const parseLineChartData = (data, valueKey) => {
  return monthList.map((month) => {
    const thisYear = data?.thisYearData?.filter(
      (e) =>
        new Date(e.date.slice(0, e.date.length - 2)).toLocaleString("en-US", {
          month: "short",
        }) === month
    )?.[0];
    const lastYear = data?.lastYearData?.filter(
      (e) =>
        new Date(e.date.slice(0, e.date.length - 2)).toLocaleString("en-US", {
          month: "short",
        }) === month
    )?.[0];
    return {
      name: month,
      "Previous 12 mo": thisYear?.[valueKey] ?? 0,
      "Past 12 mo": lastYear?.[valueKey] ?? 0,
    };
  });
};

export const parse15MonthLineChartData = (
  data,
  valueKeyA,
  valueKeyB,
  valueLabelA,
  valueLabelB
) => {
  return (
    data?.map((e) => {
      return {
        name: new Date(e.date.slice(0, e.date.length - 2)).toLocaleString(
          "en-US",
          { month: "short" }
        ),
        [valueLabelA]: e?.[valueKeyA] ?? 0,
        [valueLabelB]: e?.[valueKeyB] ?? 0,
      };
    }) ?? []
  );
};

export const parseDurationString = (val) => {
  return (
    (val < 60 ? "" : `${parseDigitalDuration(Math.floor(val / 60))}m`) +
    `${parseDigitalDuration(val % 60)}s`
  );
};

const parseDigitalDuration = (val) => (val < 10 ? `0${val}` : val);
