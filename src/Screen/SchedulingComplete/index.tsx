import * as S from "./styles";
import { StatusBar, useWindowDimensions } from "react-native";

import LogoSvg from "../../assets/logo_background_gray.svg";
import DoneSvg from "../../assets/done.svg";
import theme from "../../styles/theme";
import { ConfirmButton } from "../../components/ConfirmButton";

export const SchedulingComplete = () => {
  const { width } = useWindowDimensions();

  return (
    <S.Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor={theme.colors.header}
      />
      <LogoSvg width={width}></LogoSvg>
      <S.Content>
        <DoneSvg />
        <S.Title>Carro alugado!</S.Title>
        <S.Message>
          Agora você só precisa ir {"\n"} até a concessionária da RENTX {"\n"}{" "}
          pegar o seu automóvel.
        </S.Message>
      </S.Content>
      <S.Footer>
        <ConfirmButton title="Ok" />
      </S.Footer>
    </S.Container>
  );
};
