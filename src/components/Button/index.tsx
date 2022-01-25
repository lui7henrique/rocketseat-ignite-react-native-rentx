import { TouchableOpacityProps } from "react-native";
import * as S from "./styles";

type ButtonProps = {
  title: string;
  color?: string;
  onPress?: () => void;
} & TouchableOpacityProps;

export const Button = (props: ButtonProps) => {
  const { title, onPress, color, ...rest } = props;

  return (
    <S.Container {...rest} color={color} activeOpacity={0.7}>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};
