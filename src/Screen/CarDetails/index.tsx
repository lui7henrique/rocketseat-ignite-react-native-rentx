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
          ]}
        />
      </S.CarImages>
    </S.Container>
  );
};
