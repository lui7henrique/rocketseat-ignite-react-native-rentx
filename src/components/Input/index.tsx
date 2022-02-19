import * as S from "./styles";
import { useTheme } from "styled-components";
import { Feather } from "@expo/vector-icons";
import { TextInputProps } from "react-native";

type InputProps = {
  iconName: React.ComponentProps<typeof Feather>["name"];
  placeholder: string;
} & TextInputProps;

export const Input = (props: InputProps) => {
  const { iconName } = props;

  const theme = useTheme();

  return (
    <S.Container>
      <Feather name={iconName} size={24} color={theme.colors.text_detail} />
    </S.Container>
  );
};
