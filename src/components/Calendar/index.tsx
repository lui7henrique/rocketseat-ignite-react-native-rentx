import { Feather } from "@expo/vector-icons";
import { ptBR } from "./localeConfig";
import {
  Calendar as CustomCalendar,
  LocaleConfig,
  CalendarProps as ReactNativeCalendarProps,
} from "react-native-calendars";
import { useTheme } from "styled-components";

import * as S from "./styles";

LocaleConfig.locales["pt-br"] = ptBR;
LocaleConfig.defaultLocale = "pt-br";

type CalendarProps = ReactNativeCalendarProps;

export const Calendar = ({
  markedDates,
  onDayPress,
  ...rest
}: CalendarProps) => {
  const theme = useTheme();

  return (
    <CustomCalendar
      renderArrow={(direction) => (
        <Feather
          size={24}
          color={theme.colors.header}
          name={direction == "left" ? "chevron-left" : "chevron-right"}
        />
      )}
      headerStyle={{
        backgroundColor: theme.colors.background_secondary,
        borderBottomWidth: 0.5,
        borderColor: theme.colors.text_detail,
        paddingBottom: 10,
        marginBottom: 10,
      }}
      theme={{
        textDayFontFamily: theme.fonts.primary_400,
        textDayHeaderFontFamily: theme.fonts.primary_400,
        textDayHeaderFontSize: 10,
        textDayHeaderFontWeight: "bold",
        textMonthFontFamily: theme.fonts.secondary_500,
        textMonthFontSize: 20,
        monthTextColor: theme.colors.title,
        arrowStyle: {
          marginHorizontal: -15,
        },
      }}
      firstDay={1}
      minDate={String(new Date())}
      markingType="period"
      markedDates={markedDates}
      onDayPress={onDayPress}
      {...rest}
    />
  );
};
