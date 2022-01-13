import * as S from "./styles";
import { StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Car } from "../../components/Car";

import Logo from "../../assets/logo.svg";

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

      <Car
        brand="Audi"
        name="RS 5 Coupé"
        rent={{
          period: "Ao dia",
          price: "R$ 1.500,00",
        }}
        thumbnail="https://production.autoforce.com/uploads/version/profile_image/3188/model_main_comprar-tiptronic_87272c1ff1.png"
      />
      <Car
        brand="Porsche"
        name="Panamera"
        rent={{
          period: "Ao dia",
          price: "R$ 340",
        }}
        thumbnail="https://freepikpsd.com/file/2019/10/porsche-panamera-png-5-Transparent-Images.png"
      />
    </S.Container>
  );
};
