import * as S from "./styles";

import GasolineSvg from "../../assets/gasoline.svg";

type CarType = {
  brand: string;
  name: string;
  rent: {
    period: string;
    price: number;
  };
  thumbnail: string;
};

type CarProps = {
  data: CarType;
};

export const Car = ({ data }: CarProps) => {
  const { brand, name, rent, thumbnail } = data;

  return (
    <S.Container>
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
