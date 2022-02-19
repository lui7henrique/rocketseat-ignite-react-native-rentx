import { TouchableOpacityProps } from "react-native";
import { Loading } from "../Loading";
import theme from "../../styles/theme";
import * as S from "./styles";

type ButtonProps = {
  title: string;
  color?: string;
  textColor?: string;
  isLoading?: boolean;
  loadingColor?: string;
} & TouchableOpacityProps;

export const Button = (props: ButtonProps) => {
  const {
    title,
    color,
    textColor,
    isLoading,
    loadingColor = theme.colors.background_primary,
    ...rest
  } = props;

  return (
    <S.Container
      color={color}
      activeOpacity={0.7}
      isLoading={isLoading}
      {...rest}
    >
      {isLoading ? (
        <Loading color={loadingColor} size="small" />
      ) : (
        <S.Title textColor={textColor}>{title}</S.Title>
      )}
    </S.Container>
  );
};
