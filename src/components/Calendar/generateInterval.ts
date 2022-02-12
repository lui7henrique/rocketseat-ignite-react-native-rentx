import { eachDayOfInterval, format } from "date-fns";
import { getPlatformDate } from "../../utils/getPlatformDate";
import { DateData } from "react-native-calendars";

import theme from "../../styles/theme";
import { MarkingProps } from "react-native-calendars/src/calendar/day/marking";

type MarkedDatesType = {
  [key: string]: MarkingProps;
};

export const generateInterval = (start: DateData, end: DateData) => {
  let interval: MarkedDatesType = {};

  eachDayOfInterval({
    start: new Date(start.timestamp),
    end: new Date(end.timestamp),
  }).forEach((item) => {
    const date = format(getPlatformDate(item), "yyyy-MM-dd");

    interval = {
      ...interval,
      [date]: {
        color:
          start.dateString === date || end.dateString === date
            ? theme.colors.main
            : theme.colors.main_light,
        textColor:
          start.dateString === date || end.dateString === date
            ? theme.colors.main_light
            : theme.colors.main,
      },
    };
  });

  return interval;
};
