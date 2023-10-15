// In App.js in a new project

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  DetailsScreen,
  HomeScreen,
  MainScreen,
  PaymentScreen,
  SetUpScreen,
  SplashScreen,
  TermsOfServiceScreen,
} from "../screens";
import { Routes } from "../constants/routes";
import IdeaScreen from "../screens/IdeasScreen/IdeaScreen";
import PrivacyPolicy from "../screens/PrivacyPolicy/PrivacyPolicy";

const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={Routes.SPLASH_SCREEN} component={SplashScreen} />
        <Stack.Screen name={Routes.HOME_SCREEN} component={HomeScreen} />
        <Stack.Screen name={Routes.SETUP_SCREEN} component={SetUpScreen} />
        <Stack.Screen name={Routes.PAYMENT_SCREEN} component={PaymentScreen} />
        <Stack.Screen name={Routes.IDEAS_SCREEN} component={IdeaScreen} />
        <Stack.Screen name={Routes.DETAILS_SCREEN} component={DetailsScreen} />
        <Stack.Screen
          name={Routes.TERMS_OF_SERVICES_SCREEN}
          component={TermsOfServiceScreen}
        />
        <Stack.Screen
          name={Routes.PRIVACY_POLICY_SCREEN}
          component={PrivacyPolicy}
        />
        <Stack.Screen name={Routes.MAIN_SCREEN} component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
