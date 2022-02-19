import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

export const Container = styled.TouchableOpacity<{
  color?: string;
  isLoading?: boolean;
}>`
  width: 100%;
  padding: 20px;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme, color }) =>
    color ? color : theme.colors.main};

  margin-bottom: 8px;

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.7;
    `}

  ${({ isLoading }) =>
    isLoading &&
    css`
      opacity: 0.7;
    `}
`;

export const Title = styled.Text<{
  textColor?: string;
}>`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(15)}px;
  color: ${({ textColor, theme }) =>
    textColor || theme.colors.background_secondary};
`;
