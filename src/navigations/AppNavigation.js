// In App.js in a new project

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  DetailsScreen,
  HomeScreen,
  InviteScreen,
  PaymentScreen,
  SetUpScreen,
} from "../screens";
import { Routes } from "../constants/routes";
import IdeaScreen from "../screens/IdeasScreen/IdeaScreen";

const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={Routes.HOME_SCREEN} component={HomeScreen} />
        <Stack.Screen name={Routes.SETUP_SCREEN} component={SetUpScreen} />
        <Stack.Screen name={Routes.PAYMENT_SCREEN} component={PaymentScreen} />
        <Stack.Screen name={Routes.IDEAS_SCREEN} component={IdeaScreen} />
        <Stack.Screen name={Routes.INVITE_SCREEN} component={InviteScreen} />
        <Stack.Screen name={Routes.DETAILS_SCREEN} component={DetailsScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
