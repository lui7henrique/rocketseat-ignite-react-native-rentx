import { TouchableOpacityProps } from "react-native";
import * as S from "./styles";

type ButtonProps = {
  title: string;
  color?: string;
} & TouchableOpacityProps;

export const Button = (props: ButtonProps) => {
  const { title, color, ...rest } = props;

  return (
    <S.Container color={color} activeOpacity={0.7} {...rest}>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};
