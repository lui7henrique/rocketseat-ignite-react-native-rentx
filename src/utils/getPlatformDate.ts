import { addDays } from "date-fns";

export const getPlatformDate = (date: Date) => {
  return addDays(date, 1);
};
