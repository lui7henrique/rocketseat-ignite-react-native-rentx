import { TouchableOpacityProps } from "react-native";
import { CarType } from "../../types/car";

import GasolineSvg from "../../assets/gasoline.svg";
import EnergySvg from "../../assets/energy.svg";
import HybridSvg from "../../assets/hybrid.svg";

import * as S from "./styles";

type CarProps = {
  data: CarType;
} & TouchableOpacityProps;

export const Car = ({ data, ...rest }: CarProps) => {
  const { brand, name, rent, thumbnail } = data;

  const typeIcon = {
    gasoline_motor: <GasolineSvg />,
    electric_motor: <EnergySvg />,
    hybrid_motor: <HybridSvg />,
    electric: <EnergySvg />,
  };

  return (
    <S.Container {...rest} activeOpacity={0.7}>
      <S.Details>
        <S.Brand>{brand}</S.Brand>
        <S.Name>{name}</S.Name>
        <S.About>
          <S.Rent>
            <S.Period>{rent.period}</S.Period>
            <S.Price>R$ {rent.price}</S.Price>
          </S.Rent>
          <S.Type>{typeIcon[data.fuel_type]}</S.Type>
        </S.About>
      </S.Details>

      <S.CarImage
        source={{
          uri: thumbnail,
        }}
        resizeMode="contain"
      />
    </S.Container>
  );
};
