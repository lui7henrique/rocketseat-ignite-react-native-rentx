import * as S from "./styles";
import { StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import Logo from "../../assets/logo.svg";

import theme from "../../styles/theme";

export const Home = () => {
  return (
    <S.Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />

      <S.Header>
        <S.HeaderContent>
          <Logo width={RFValue(118)} height={RFValue(12)} />
          <S.TotalCars>Total de 12 Carros</S.TotalCars>
        </S.HeaderContent>
      </S.Header>
    </S.Container>
  );
};
