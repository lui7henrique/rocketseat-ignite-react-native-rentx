import { Alert } from "react-native";
import { useMemo } from "react";

import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";
import { Accessory } from "../../components/Accessory";

import AccelerationSvg from "../../assets/acceleration.svg";
import SpeedSvg from "../../assets/speed.svg";
import ForceSvg from "../../assets/force.svg";
import GasolineSvg from "../../assets/gasoline.svg";
import ExchangeSvg from "../../assets/exchange.svg";
import PeopleSvg from "../../assets/people.svg";

import * as S from "./styles";
import { SvgProps } from "react-native-svg";

type Acessory = {
  name: string;
  icon: React.FC<SvgProps>;
};

export const CarDetails = () => {
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

        <S.About>
          Este é automóvel desportivo. Surgiu do lendário touro de lide
          indultado na praça Real Maestranza de Sevilla. É um belíssimo carro
          para quem gosta de acelerar.
        </S.About>
      </S.Content>
    </S.Container>
  );
};
