import * as S from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import theme from "../../styles/theme";

import { TouchableOpacityProps } from "react-native";

type BackButtonProps = {
  color?: string;
} & TouchableOpacityProps;

export const BackButton = ({
  color = theme.colors.text,
  ...rest
}: BackButtonProps) => {
  return (
    <S.Container {...rest}>
      <MaterialIcons name="chevron-left" size={24} color={color} />
    </S.Container>
  );
};
