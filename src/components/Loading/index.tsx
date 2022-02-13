import { ActivityIndicator, ActivityIndicatorProps } from "react-native";
import { useTheme } from "styled-components";

type LoadingProps = {
  color?: string;
  size?: ActivityIndicatorProps["size"];
} & ActivityIndicatorProps;

export const Loading = ({ color, size }: LoadingProps) => {
  const theme = useTheme();

  return (
    <ActivityIndicator
      color={color || theme.colors.main}
      size={size || "large"}
      style={{ flex: 1 }}
    />
  );
};
