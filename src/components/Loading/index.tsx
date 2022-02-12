import { ActivityIndicator, ActivityIndicatorProps } from "react-native";
import { useTheme } from "styled-components";

type LoadingProps = {
  color?: string;
} & ActivityIndicatorProps;

export const Loading = ({ color }: LoadingProps) => {
  const theme = useTheme();

  return (
    <ActivityIndicator
      color={color || theme.colors.main}
      size="large"
      style={{ flex: 1 }}
    />
  );
};
