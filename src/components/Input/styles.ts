import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  margin-bottom: 8px;
  position: relative;
`;

export const Icon = styled.View`
  padding: 20px;
  margin-right: 4px;

  background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const InputText = styled.TextInput`
  flex: 1;
  padding: 0 48px 0 24px;

  background-color: ${({ theme }) => theme.colors.background_secondary};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(15)}px;
`;

export const ChangePasswordVisibility = styled.TouchableOpacity`
  position: absolute;
  right: 0;
  padding: 20px;
`;
