import { useState } from "react";
import * as S from "./styles";
import { useTheme } from "styled-components";
import { Feather } from "@expo/vector-icons";
import { TextInputProps } from "react-native";

type InputProps = {
  iconName: React.ComponentProps<typeof Feather>["name"];
  isPassword?: boolean;
} & TextInputProps;

export const Input = (props: InputProps) => {
  const { iconName, isPassword, ...rest } = props;

  const theme = useTheme();
  const [passwordVisibility, setPasswordVisibility] = useState(isPassword);

  return (
    <S.Container>
      <S.Icon>
        <Feather name={iconName} size={24} color={theme.colors.text_detail} />
      </S.Icon>
      <S.InputText secureTextEntry={passwordVisibility} {...rest} />
      {isPassword && (
        <S.ChangePasswordVisibility
          onPress={() => setPasswordVisibility(!passwordVisibility)}
        >
          <Feather
            name={passwordVisibility ? "eye" : "eye-off"}
            size={24}
            color={theme.colors.text_detail}
          />
        </S.ChangePasswordVisibility>
      )}
    </S.Container>
  );
};
