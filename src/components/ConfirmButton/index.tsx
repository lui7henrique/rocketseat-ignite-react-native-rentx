import { TouchableOpacityProps } from "react-native";
import * as S from "./styles";

type ConfirmButtonProps = {
  title: string;
} & TouchableOpacityProps;

export const ConfirmButton = ({ title, ...rest }: ConfirmButtonProps) => {
  return (
    <S.Container {...rest}>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};
