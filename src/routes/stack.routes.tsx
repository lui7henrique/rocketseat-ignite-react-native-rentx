import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../Screen/Home";
import { Scheduling } from "../Screen/Scheduling";
import { SchedulingComplete } from "../Screen/SchedulingComplete";
import { SchedulingDetails } from "../Screen/SchedulingDetails";
import { CarDetails } from "../Screen/CarDetails";
import { MyCars } from "../Screen/MyCars";
import { Splash } from "../Screen/Splash";
import { SignIn } from "../Screen/SignIn";

const { Navigator, Screen } = createNativeStackNavigator();

export const StackRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="SignIn">
      <Screen name="Splash" component={Splash} />
      <Screen name="SignIn" component={SignIn} />
      <Screen
        name="Home"
        component={Home}
        options={{
          gestureEnabled: false,
        }}
      />
      <Screen name="Scheduling" component={Scheduling} />
      <Screen name="SchedulingComplete" component={SchedulingComplete} />
      <Screen name="SchedulingDetails" component={SchedulingDetails} />
      <Screen name="CarDetails" component={CarDetails} />
      <Screen name="MyCars" component={MyCars} />
    </Navigator>
  );
};
