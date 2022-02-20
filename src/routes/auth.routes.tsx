import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screen/Home";
import { Scheduling } from "../screen/Scheduling";
import { Success } from "../screen/Success";
import { SchedulingDetails } from "../screen/SchedulingDetails";
import { CarDetails } from "../screen/CarDetails";
import { MyCars } from "../screen/MyCars";
import { Splash } from "../screen/Splash";
import { SignIn } from "../screen/SignIn";
import { SignUpFirstStep } from "../screen/SignUp/SignUpFirstStep";
import { SignUpSecondStep } from "../screen/SignUp/SignUpSecondStep";

const { Navigator, Screen } = createNativeStackNavigator();

export const AuthRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="Splash">
      <Screen name="Splash" component={Splash} />
      <Screen name="SignIn" component={SignIn} />
      <Screen name="SignUpFirstStep" component={SignUpFirstStep} />
      <Screen name="SignUpSecondStep" component={SignUpSecondStep} />
      <Screen name="Success" component={Success} />
    </Navigator>
  );
};
