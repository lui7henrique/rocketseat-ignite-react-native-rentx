import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_secondary};
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 30px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
`;
