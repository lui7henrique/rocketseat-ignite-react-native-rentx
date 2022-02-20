import { NavigationContainer } from "@react-navigation/native";
import { AppProvider } from "../hooks";
import { StackRoutes } from "./stack.routes";

export const Routes = () => {
  return (
    <NavigationContainer>
      <AppProvider>
        <StackRoutes />
      </AppProvider>
    </NavigationContainer>
  );
};
