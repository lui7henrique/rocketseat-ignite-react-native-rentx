import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { StatusBar, FlatList } from "react-native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
  width: 100%;
  height: 120px;

  background-color: ${({ theme }) => theme.colors.header};
  padding: ${`${StatusBar.currentHeight + 64}`}px 24px 24px 24px;
`;

export const HeaderContent = styled.View`
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CarList = styled(FlatList).attrs({
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

export const MyCarsButton = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.main};

  border-radius: 30px;
  align-items: center;
  justify-content: center;

  position: absolute;
  bottom: 16px;
  right: 16px;
`;
