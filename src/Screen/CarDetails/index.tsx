import { Alert } from "react-native";

import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";
import * as S from "./styles";

export const CarDetails = () => {
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

        <S.About>
          Este é automóvel desportivo. Surgiu do lendário touro de lide
          indultado na praça Real Maestranza de Sevilla. É um belíssimo carro
          para quem gosta de acelerar.
        </S.About>
      </S.Content>
    </S.Container>
  );
};
