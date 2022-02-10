import { useNavigation } from "@react-navigation/native";
import { useMemo } from "react";
import { StatusBar } from "react-native";

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

type Acessory = {
  name: string;
  icon: React.FC<SvgProps>;
};

export const CarDetails = () => {
  const navigation = useNavigation();

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

  const handleBackToHome = () => {
    navigation.navigate("Home");
  };

  const handleGoToScheduling = () => {
    navigation.navigate("Scheduling");
  };

  return (
    <S.Container>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <S.Header>
        <BackButton onPress={handleBackToHome} />
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
            <Accessory
              icon={accessory.icon}
              name={accessory.name}
              key={JSON.stringify(accessory)}
            />
          ))}
        </S.Accessories>

        <S.About>
          Este é automóvel desportivo. Surgiu do lendário touro de lide
          indultado na praça Real Maestranza de Sevilla. É um belíssimo carro
          para quem gosta de acelerar.
        </S.About>
      </S.Content>

      <S.Footer>
        <Button title="Confirmar" onPress={handleGoToScheduling} />
      </S.Footer>
    </S.Container>
  );
};
