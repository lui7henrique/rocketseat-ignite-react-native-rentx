import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { StatusBar, FlatList } from "react-native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
  width: 100%;
  height: 113px;

  background-color: ${({ theme }) => theme.colors.header};
  padding: ${`${StatusBar.currentHeight + 32}px`} 24px 32px 24px;
`;

export const HeaderContent = styled.View`
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CarsList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 24,
  },
  showsVerticalScrollIndicator: false,
})``;

export const TotalCars = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text};
`;
