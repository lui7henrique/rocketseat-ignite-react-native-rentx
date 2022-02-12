import ToastMessage, {
  BaseToast,
  ErrorToast,
  ToastProps,
} from "react-native-toast-message";
import React from "react";
import theme from "../../styles/theme";

const baseStyles = {
  text1Style: {
    fontSize: 16,
    fontWeight: "400",
  },
  text2Style: {
    fontSize: 14,
  },
  contentContainerStyle: {
    paddingHorizontal: 15,
  },
};

const toastConfig = {
  success: (props: any) => (
    <BaseToast
      style={{ borderLeftColor: theme.colors.success }}
      {...baseStyles}
      {...props}
    />
  ),

  error: (props: any) => (
    <ErrorToast
      style={{ borderLeftColor: theme.colors.main }}
      {...baseStyles}
      {...props}
    />
  ),
};

export const Toast = (props: ToastProps) => {
  return (
    <ToastMessage
      position="top"
      topOffset={50}
      config={toastConfig}
      {...props}
    />
  );
};
