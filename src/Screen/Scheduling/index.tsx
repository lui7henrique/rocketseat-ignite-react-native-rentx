import { useEffect, useState } from "react";
import { Alert, StatusBar } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
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
import { CarType } from "../../types/car";
import { api } from "../../services/api";
import { Loading } from "../../components/Loading";

type MarkedDatesType = {
  [key: string]: MarkingProps;
};

type RentalPeriod = {
  startFormatted: string;
  endFormatted: string;
};

export const Scheduling = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { car } = route.params as { car: CarType };

  const [lastSelectedDate, setLastSelectedDate] = useState<DateData | null>(
    {} as DateData
  );
  const [markedDates, setMarkedDates] = useState<MarkedDatesType>(
    {} as MarkedDatesType
  );
  const [unavailableDates, setUnavailableDates] = useState<MarkedDatesType>(
    {} as MarkedDatesType
  );
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>();
  const [isLoading, setIsLoading] = useState(true);

  const handleChangeDate = (date: DateData) => {
    let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
    let end = date;

    if (start.timestamp > end.timestamp) {
      start = end;
      end = start;
    }

    setLastSelectedDate(end);

    const interval = generateInterval(start, end);
    setMarkedDates({ ...unavailableDates, ...interval });

    const firstDate = Object.keys(interval)[0];
    const endDate = Object.keys(interval)[Object.keys(interval).length - 1];

    setRentalPeriod({
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

    const allDates = Object.keys(markedDates).map((date) => {
      return {
        date: date,
        markedDay: markedDates[date],
      };
    });

    const filteredDates = allDates.filter(
      (date) =>
        !date.markedDay.disabled &&
        !date.markedDay.inactive &&
        !date.markedDay.disableTouchEvent
    );

    const rentalDates = filteredDates.map((date) => date.date);

    navigation.navigate("SchedulingDetails", {
      car,
      dates: rentalDates,
    });
  };

  useEffect(() => {
    const getUnavailableDates = async () => {
      const { data } = await api.get<{ unavailable_dates: Array<string> }>(
        `schedules_by_car/${car.id}/`
      );

      let unavailableDates: MarkedDatesType = {};

      data.unavailable_dates.forEach((item) => {
        const date = format(getPlatformDate(new Date(item)), "yyyy-MM-dd");

        unavailableDates = {
          ...unavailableDates,
          [date]: {
            inactive: true,
            disableTouchEvent: true,
            disabled: true,
          },
        };

        return unavailableDates;
      });

      setMarkedDates(unavailableDates);
      setUnavailableDates(unavailableDates);
      setIsLoading(false);
    };

    getUnavailableDates();
  }, []);

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

      {isLoading ? (
        <S.ContentLoading>
          <Loading />
        </S.ContentLoading>
      ) : (
        <S.Content>
          <Calendar
            onDayPress={(date) => handleChangeDate(date)}
            markedDates={markedDates}
          />
        </S.Content>
      )}

      <S.Footer>
        <Button title="Escolher período" onPress={handleConfirmRental} />
      </S.Footer>
    </S.Container>
  );
};
