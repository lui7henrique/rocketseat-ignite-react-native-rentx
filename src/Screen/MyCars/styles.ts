import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  height: 273px;

  display: flex;

  background-color: ${({ theme }) => theme.colors.header};

  padding: 48px 25px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.background_secondary};
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  font-size: ${RFValue(30)}px;

  margin-top: 40px;
`;

export const Subtitle = styled.Text`
  color: ${({ theme }) => theme.colors.background_secondary};
  font-family: ${({ theme }) => theme.fonts.secondary_400};
  font-size: ${RFValue(15)}px;

  margin-top: 24px;
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
  padding: 0 16px;
`;

export const ContentHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 24px 0;
`;

export const ContentHeaderTitle = styled.Text`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.text};
`;

export const ContentHeaderValue = styled.Text`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.title};
  font-weight: bold;
`;
