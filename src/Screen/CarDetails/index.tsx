import { useNavigation, useRoute } from "@react-navigation/native";
import { StatusBar } from "react-native";
import uuid from "react-native-uuid";

import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";
import { Accessory } from "../../components/Accessory";
import { Button } from "../../components/Button";

import AccelerationSvg from "../../assets/acceleration.svg";
import SpeedSvg from "../../assets/speed.svg";
import ForceSvg from "../../assets/force.svg";
import ExchangeSvg from "../../assets/exchange.svg";
import PeopleSvg from "../../assets/people.svg";
import GasolineSvg from "../../assets/gasoline.svg";
import EnergySvg from "../../assets/energy.svg";
import HybridSvg from "../../assets/hybrid.svg";
import CarSvg from "../../assets/car.svg";

import * as S from "./styles";
import { SvgProps } from "react-native-svg";
import { CarType } from "../../types/car";

export const CarDetails = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { car } = route.params as { car: CarType };

  const iconByType: { [key: string]: React.FC<SvgProps> } = {
    acceleration: AccelerationSvg,
    speed: SpeedSvg,
    force: ForceSvg,
    turning_diameter: ExchangeSvg,
    electric_motor: EnergySvg,
    gasoline_motor: GasolineSvg,
    hybrid_motor: HybridSvg,
    gasoline: GasolineSvg,
    exchange: ExchangeSvg,
    seats: PeopleSvg,
  };

  const handleGoToScheduling = () => {
    navigation.navigate("Scheduling", { car });
  };

  return (
    <S.Container>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <S.Header>
        <BackButton />
      </S.Header>

      <S.CarImages>
        <ImageSlider images={car.photos} />
      </S.CarImages>

      <S.Content>
        <S.Details>
          <S.Description>
            <S.Brand>{car.brand}</S.Brand>
            <S.Name>{car.name}</S.Name>
          </S.Description>
          <S.Rent>
            <S.Period>{car.period}</S.Period>
            <S.Price>R$ {car.price}</S.Price>
          </S.Rent>
        </S.Details>

        <S.Accessories>
          {car.accessories.map((accessory) => (
            <Accessory
              icon={iconByType[accessory.type] || CarSvg}
              name={accessory.name}
              key={String(uuid.v4())}
            />
          ))}
        </S.Accessories>

        <S.About>{car.about}</S.About>
      </S.Content>

      <S.Footer>
        <Button title="Confirmar" onPress={handleGoToScheduling} />
      </S.Footer>
    </S.Container>
  );
};
