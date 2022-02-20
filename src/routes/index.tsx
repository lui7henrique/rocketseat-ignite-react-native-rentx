import { AppTabRoutes } from "./app.tab.routes";
import { AuthRoutes } from "./auth.routes";

import { useAuth } from "../hooks/auth";

export const Routes = () => {
  const { user } = useAuth();

  return user ? <AppTabRoutes /> : <AuthRoutes />;
};
