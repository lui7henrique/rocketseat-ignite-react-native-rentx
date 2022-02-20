import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screen/Home";
import { Scheduling } from "../screen/Scheduling";
import { Success } from "../screen/Success";
import { SchedulingDetails } from "../screen/SchedulingDetails";
import { CarDetails } from "../screen/CarDetails";
import { MyCars } from "../screen/MyCars";
import { Splash } from "../screen/Splash";
const { Navigator, Screen } = createNativeStackNavigator();

export const AppStackRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
      <Screen name="Home" component={Home} />
      <Screen name="Scheduling" component={Scheduling} />
      <Screen name="SchedulingDetails" component={SchedulingDetails} />
      <Screen name="CarDetails" component={CarDetails} />
      <Screen name="Success" component={Success} />
      <Screen name="MyCars" component={MyCars} />
    </Navigator>
  );
};
