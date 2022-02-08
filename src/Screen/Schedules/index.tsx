import { StatusBar } from "react-native";

import { BackButton } from "../../components/BackButton";
import { Calendar } from "../../components/Calendar";

import theme from "../../styles/theme";
import * as S from "./styles";

import ArrowSvg from "../../assets/arrow.svg";
import { Button } from "../../components/Button";

export const Schedules = () => {
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
        <Calendar></Calendar>
      </S.Content>
      <S.Footer>
        <Button title="Confirmar"></Button>
      </S.Footer>
    </S.Container>
  );
};
