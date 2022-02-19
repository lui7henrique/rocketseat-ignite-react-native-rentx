import * as S from "./styles";
import { StatusBar, useWindowDimensions } from "react-native";

import LogoSvg from "../../assets/logo_background_gray.svg";
import DoneSvg from "../../assets/done.svg";
import theme from "../../styles/theme";
import { ConfirmButton } from "../../components/ConfirmButton";
import { useNavigation, useRoute } from "@react-navigation/native";

type Params = {
  data: {
    title: string;
    message?: string;
    confirmButton: {
      title: string;
      action: () => void;
    };
  };
};

export const Success = () => {
  const { width } = useWindowDimensions();
  const navigation = useNavigation();
  const route = useRoute();
  const { data } = route.params as Params;

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
        <S.Title>{data.title}</S.Title>
        <S.Message>{data.message}</S.Message>
      </S.Content>
      <S.Footer>
        <ConfirmButton
          title={data.confirmButton.title}
          onPress={data.confirmButton.action}
        />
      </S.Footer>
    </S.Container>
  );
};
