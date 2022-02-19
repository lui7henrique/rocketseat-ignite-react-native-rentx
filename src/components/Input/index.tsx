import { useState } from "react";
import * as S from "./styles";
import { useTheme } from "styled-components";
import { Feather } from "@expo/vector-icons";
import { TextInputProps } from "react-native";

type InputProps = {
  iconName: React.ComponentProps<typeof Feather>["name"];
  isPassword?: boolean;
  value?: string;
} & TextInputProps;

export const Input = (props: InputProps) => {
  const { iconName, isPassword, value, ...rest } = props;

  const theme = useTheme();
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [passwordVisibility, setPasswordVisibility] = useState(isPassword);

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);

    setIsFilled(!!value);
  };

  return (
    <S.Container>
      <S.Icon isFocused={isFocused}>
        <Feather
          name={iconName}
          size={24}
          color={
            isFocused || isFilled ? theme.colors.main : theme.colors.text_detail
          }
        />
      </S.Icon>

      <S.InputText
        secureTextEntry={passwordVisibility}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        isFocused={isFocused}
        {...rest}
      />

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
