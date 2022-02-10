import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../Screen/Home";
import { Scheduling } from "../Screen/Scheduling";
import { SchedulingComplete } from "../Screen/SchedulingComplete";
import { SchedulingDetails } from "../Screen/SchedulingDetails";
import { CarDetails } from "../Screen/CarDetails";

const { Navigator, Screen } = createNativeStackNavigator();

export const StackRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
      <Screen name="Scheduling" component={Scheduling} />
      <Screen name="SchedulingComplete" component={SchedulingComplete} />
      <Screen name="SchedulingDetails" component={SchedulingDetails} />
      <Screen name="CarDetails" component={CarDetails} />
    </Navigator>
  );
};
