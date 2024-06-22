import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigatorScreenParams } from "@react-navigation/native";

import Home from "../pages/Home";
import Detailed from "../pages/Detailed";

export type RootStackParamList = {
  Onboarding: NavigatorScreenParams<OnboardingStackParamList>
}
export type OnboardingStackParamList = {
  Home: undefined,
  Detailed: undefined
}

const RootStack = createNativeStackNavigator<RootStackParamList>();
const OnboardingStack = createNativeStackNavigator<OnboardingStackParamList>()


const OnboardingNavigator = () => {
  return (
    <OnboardingStack.Navigator
      screenOptions={{ headerShown: false }}
      
    >
      <OnboardingStack.Screen name="Home" component={Home} />
      <OnboardingStack.Screen name="Detailed" component={Detailed} />
    </OnboardingStack.Navigator>
  )
}

export const RootNavigator = () => {
  return (
    <RootStack.Navigator
      screenOptions={{ headerShown: false }}
    >
      <RootStack.Screen name="Onboarding" component={OnboardingNavigator} />
    </RootStack.Navigator>
  )
}