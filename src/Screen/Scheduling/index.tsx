import { useState } from "react";
import { StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MarkingProps } from "react-native-calendars/src/calendar/day/marking";
import { DateData } from "react-native-calendars";
import { format } from "date-fns";
import Toast from "react-native-toast-message";

import { BackButton } from "../../components/BackButton";
import { Calendar } from "../../components/Calendar";
import { generateInterval } from "../../components/Calendar/generateInterval";
import { Button } from "../../components/Button";

import theme from "../../styles/theme";
import * as S from "./styles";

import ArrowSvg from "../../assets/arrow.svg";
import { getPlatformDate } from "../../utils/getPlatformDate";

type MarkedDatesType = {
  [key: string]: MarkingProps;
};

type RentalPeriod = {
  start: number;
  startFormatted: string;
  end: number;
  endFormatted: string;
};

export const Scheduling = () => {
  const [lastSelectedDate, setLastSelectedDate] = useState<DateData | null>(
    {} as DateData
  );
  const [markedDates, setMarkedDates] = useState<MarkedDatesType>(
    {} as MarkedDatesType
  );
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>();
  const navigation = useNavigation();

  const handleChangeDate = (date: DateData) => {
    let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
    let end = date;

    if (start.timestamp > end.timestamp) {
      start = end;
      end = start;
    }

    setLastSelectedDate(end);

    const interval = generateInterval(start, end);
    setMarkedDates(interval);

    const firstDate = Object.keys(interval)[0];
    const endDate = Object.keys(interval)[Object.keys(interval).length - 1];

    setRentalPeriod({
      start: start.timestamp,
      end: end.timestamp,
      startFormatted: format(
        getPlatformDate(new Date(firstDate)),
        "dd/MM/yyyy"
      ),
      endFormatted: format(getPlatformDate(new Date(endDate)), "dd/MM/yyyy"),
    });
  };

  const handleConfirmRental = () => {
    if (!rentalPeriod) {
      Toast.show({
        type: "error",
        text1: "Faltam algumas informações!",
        text2: `Insira a data de início e fim do aluguel 😉`,
      });

      return;
    }

    navigation.navigate("SchedulingDetails");
  };

  return (
    <S.Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor={theme.colors.header}
      />
      <S.Header>
        <BackButton color={theme.colors.background_secondary} />
        <S.Title>
          Escolha uma {"\n"}data de início e {"\n"}fim do aluguel
        </S.Title>

        <S.RentalPeriod>
          <S.DateInfo>
            <S.DateTitle>De</S.DateTitle>
            <S.DateValue selected={!!rentalPeriod?.startFormatted}>
              {rentalPeriod?.startFormatted}
            </S.DateValue>
          </S.DateInfo>
          <ArrowSvg />
          <S.DateInfo>
            <S.DateTitle>Até</S.DateTitle>
            <S.DateValue selected={!!rentalPeriod?.endFormatted}>
              {rentalPeriod?.endFormatted}
            </S.DateValue>
          </S.DateInfo>
        </S.RentalPeriod>
      </S.Header>
      <S.Content>
        <Calendar
          onDayPress={(date) => handleChangeDate(date)}
          markedDates={markedDates}
        />
      </S.Content>
      <S.Footer>
        <Button title="Confirmar" onPress={handleConfirmRental} />
      </S.Footer>
    </S.Container>
  );
};
