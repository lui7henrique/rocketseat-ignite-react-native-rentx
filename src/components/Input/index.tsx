import * as S from "./styles";
import { useTheme } from "styled-components";
import { Feather } from "@expo/vector-icons";
import { TextInputProps } from "react-native";

type InputProps = {
  iconName: React.ComponentProps<typeof Feather>["name"];
} & TextInputProps;

export const Input = (props: InputProps) => {
  const { iconName, ...rest } = props;

  const theme = useTheme();

  return (
    <S.Container>
      <S.Icon>
        <Feather name={iconName} size={24} color={theme.colors.text_detail} />
      </S.Icon>
      <S.InputText {...rest} />
    </S.Container>
  );
};
