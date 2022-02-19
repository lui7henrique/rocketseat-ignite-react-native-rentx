import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

export const Container = styled.View<{ isFocused?: boolean }>`
  flex-direction: row;
  margin-bottom: 8px;
`;

export const Icon = styled.View<{ isFocused?: boolean }>`
  padding: 20px;
  margin-right: 4px;

  background-color: ${({ theme }) => theme.colors.background_secondary};

  ${({ isFocused, theme }) =>
    isFocused &&
    css`
      border-bottom-width: 2px;
      border-bottom-color: ${theme.colors.main};
    `};
`;

export const InputText = styled.TextInput<{ isFocused?: boolean }>`
  flex: 1;
  padding: 0 48px 0 24px;

  background-color: ${({ theme }) => theme.colors.background_secondary};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(15)}px;

  ${({ isFocused, theme }) =>
    isFocused &&
    css`
      border-bottom-width: 2px;
      border-bottom-color: ${theme.colors.main};
    `};
`;

export const ChangePasswordVisibility = styled.TouchableOpacity`
  position: absolute;
  right: 0;
  padding: 20px;
`;
