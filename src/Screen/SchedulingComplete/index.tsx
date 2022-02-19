import * as S from "./styles";
import { StatusBar, useWindowDimensions } from "react-native";

import LogoSvg from "../../assets/logo_background_gray.svg";
import DoneSvg from "../../assets/done.svg";
import theme from "../../styles/theme";
import { ConfirmButton } from "../../components/ConfirmButton";
import { useNavigation } from "@react-navigation/native";

export const SchedulingComplete = () => {
  const { width } = useWindowDimensions();
  const navigation = useNavigation();

  const handleBackToHome = () => {
    navigation.navigate("Home");
  };

  return (
    <S.Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor={theme.colors.header}
      />
      <LogoSvg width={width} />
      <S.Content>
        <DoneSvg />
        <S.Title>Carro alugado!</S.Title>
        <S.Message>
          Agora você só precisa ir {"\n"} até a concessionária da RENTX {"\n"}{" "}
          pegar o seu automóvel.
        </S.Message>
      </S.Content>
      <S.Footer>
        <ConfirmButton title="Ok" onPress={handleBackToHome} />
      </S.Footer>
    </S.Container>
  );
};
