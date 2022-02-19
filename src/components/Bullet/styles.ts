import styled from "styled-components/native";

export const Container = styled.View<{ active?: boolean }>`
  width: 6px;
  height: 6px;

  border-radius: 3px;
  background-color: ${({ theme, active }) =>
    active ? theme.colors.title : theme.colors.shape};
  margin-left: 8px;
`;
