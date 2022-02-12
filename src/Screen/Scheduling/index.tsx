import { useState } from "react";
import { StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MarkingProps } from "react-native-calendars/src/calendar/day/marking";
import { DateData } from "react-native-calendars";

import { BackButton } from "../../components/BackButton";
import { Calendar } from "../../components/Calendar";

import theme from "../../styles/theme";
import * as S from "./styles";

import ArrowSvg from "../../assets/arrow.svg";
import { Button } from "../../components/Button";
import { generateInterval } from "../../components/Calendar/generateInterval";

type MarkedDatesType = {
  [key: string]: MarkingProps;
};

export const Scheduling = () => {
  const [lastSelectedDate, setLastSelectedDate] = useState<DateData | null>(
    {} as DateData
  );
  const [markedDates, setMarkedDates] = useState<MarkedDatesType>(
    {} as MarkedDatesType
  );
  const navigation = useNavigation();

  const handleRentNow = () => {
    navigation.navigate("SchedulingDetails");
  };

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
  };

  return (
    <S.Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor={theme.colors.header}
      />
      <S.Header>
        <BackButton
          color={theme.colors.background_secondary}
          onPress={navigation.goBack}
        />
        <S.Title>
          Escolha uma {"\n"}data de início e {"\n"}fim do aluguel
        </S.Title>

        <S.RentalPeriod>
          <S.DateInfo>
            <S.DateTitle>De</S.DateTitle>
            <S.DateValue selected={false}>18/11/2022</S.DateValue>
          </S.DateInfo>
          <ArrowSvg />
          <S.DateInfo>
            <S.DateTitle>Até</S.DateTitle>
            <S.DateValue selected={false}>18/12/2022</S.DateValue>
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
        <Button title="Confirmar" onPress={handleRentNow} />
      </S.Footer>
    </S.Container>
  );
};
