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
        data={{
          brand: "Audi",
          name: "RS 5 Coupé",
          rent: {
            period: "Ao dia",
            price: "R$ 120",
          },
          thumbnail:
            "https://production.autoforce.com/uploads/version/profile_image/3188/model_main_comprar-tiptronic_87272c1ff1.png",
        }}
      />

      <Car
        data={{
          brand: "Porsche",
          name: "Panamera",
          rent: {
            period: "Ao dia",
            price: "R$ 340",
          },
          thumbnail:
            "https://freepikpsd.com/file/2019/10/porsche-panamera-png-5-Transparent-Images.png",
        }}
      />
      <Car
        data={{
          brand: "Chevrolet",
          name: "Corvette Z06",
          rent: {
            period: "Ao dia",
            price: "R$ 620",
          },
          thumbnail: "https://i.imgur.com/rmSWoFR.png",
        }}
      />
      <Car
        data={{
          brand: "Lamborghini",
          name: "Huracan",
          rent: {
            period: "Ao dia",
            price: "R$ 120",
          },
          thumbnail: "https://i.imgur.com/Ic2N3Ik.png",
        }}
      />
      <Car
        data={{
          brand: "volvo",
          name: "XC40",
          rent: {
            period: "Ao dia",
            price: "R$ 120",
          },
          thumbnail:
            "https://production.autoforce.com/uploads/version/profile_image/5654/comprar-r-design_3a5246be30.png",
        }}
      />
    </S.Container>
  );
};
