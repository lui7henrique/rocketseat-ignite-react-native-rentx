import { TouchableOpacityProps } from "react-native";

import GasolineSvg from "../../assets/gasoline.svg";

import * as S from "./styles";

type CarType = {
  brand: string;
  name: string;
  rent: {
    period: string;
    price: string;
  };
  thumbnail: string;
};

type CarProps = {
  data: CarType;
} & TouchableOpacityProps;

export const Car = ({ data, ...rest }: CarProps) => {
  const { brand, name, rent, thumbnail } = data;

  return (
    <S.Container {...rest} activeOpacity={0.7}>
      <S.Details>
        <S.Brand>{brand}</S.Brand>
        <S.Name>{name}</S.Name>
        <S.About>
          <S.Rent>
            <S.Period>{rent.period}</S.Period>
            <S.Price>{rent.price}</S.Price>
          </S.Rent>
          <S.Type>
            <GasolineSvg />
          </S.Type>
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
