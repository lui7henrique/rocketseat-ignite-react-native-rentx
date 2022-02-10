import { Alert } from "react-native";
import { useMemo } from "react";
import { Feather } from "@expo/vector-icons";

import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";
import { Accessory } from "../../components/Accessory";
import { Button } from "../../components/Button";

import AccelerationSvg from "../../assets/acceleration.svg";
import SpeedSvg from "../../assets/speed.svg";
import ForceSvg from "../../assets/force.svg";
import GasolineSvg from "../../assets/gasoline.svg";
import ExchangeSvg from "../../assets/exchange.svg";
import PeopleSvg from "../../assets/people.svg";

import * as S from "./styles";
import { SvgProps } from "react-native-svg";
import theme from "../../styles/theme";
import { RFValue } from "react-native-responsive-fontsize";

type Acessory = {
  name: string;
  icon: React.FC<SvgProps>;
};

export const SchedulingDetails = () => {
  const accessories: Acessory[] = useMemo(
    () => [
      {
        name: "380km/h",
        icon: SpeedSvg,
      },
      {
        name: "3.2s",
        icon: AccelerationSvg,
      },
      {
        name: "800 HP",
        icon: ForceSvg,
      },
      {
        name: "Gasolina",
        icon: GasolineSvg,
      },
      {
        name: "Auto",
        icon: ExchangeSvg,
      },
      {
        name: "2 pessoas",
        icon: PeopleSvg,
      },
    ],
    []
  );

  return (
    <S.Container>
      <S.Header>
        <BackButton onPress={() => console.log("hello modafocka")} />
      </S.Header>

      <S.CarImages>
        <ImageSlider
          images={[
            "https://i.imgur.com/Ic2N3Ik.png",
            "https://i.imgur.com/Ic2N3Ik.png",
            "https://i.imgur.com/Ic2N3Ik.png",
            "https://i.imgur.com/Ic2N3Ik.png",
            "https://i.imgur.com/Ic2N3Ik.png",
            "https://i.imgur.com/Ic2N3Ik.png",
          ]}
        />
      </S.CarImages>

      <S.Content>
        <S.Details>
          <S.Description>
            <S.Brand>Lamborghini</S.Brand>
            <S.Name>Huracan</S.Name>
          </S.Description>
          <S.Rent>
            <S.Period>Ao dia</S.Period>
            <S.Price>R$ 50,00</S.Price>
          </S.Rent>
        </S.Details>

        <S.Accessories>
          {accessories.map((accessory) => (
            <Accessory icon={accessory.icon} name={accessory.name} />
          ))}
        </S.Accessories>

        <S.RentalPeriod>
          <S.CalendarIcon>
            <Feather
              name="calendar"
              color={theme.colors.background_primary}
              size={30}
            />
          </S.CalendarIcon>

          <S.DateInfo>
            <S.DateTitle>De</S.DateTitle>
            <S.DateValue>18/06/2021</S.DateValue>
          </S.DateInfo>

          <Feather
            name="chevron-right"
            size={RFValue(10)}
            color={theme.colors.text}
          />

          <S.DateInfo>
            <S.DateTitle>De</S.DateTitle>
            <S.DateValue>18/06/2021</S.DateValue>
          </S.DateInfo>
        </S.RentalPeriod>

        <S.RentalPrice>
          <S.RentalPriceLabel>Total</S.RentalPriceLabel>
          <S.RentalPriceDetails>
            <S.RentalPriceQuota>R$ 50,00 x3 diárias</S.RentalPriceQuota>
            <S.RentalPriceTotal>R$ 150,00</S.RentalPriceTotal>
          </S.RentalPriceDetails>
        </S.RentalPrice>
      </S.Content>

      <S.Footer>
        <Button title="Confirmar" />
      </S.Footer>
    </S.Container>
  );
};
