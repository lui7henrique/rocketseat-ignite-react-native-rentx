import { addDays } from "date-fns";
import { Platform } from "react-native";

export const getPlatformDate = (date: Date) => {
  return addDays(date, 1);
};
