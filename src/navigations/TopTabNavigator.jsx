// React Native Tab
// https://aboutreact.com/react-native-tab/

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";

const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

function TabStack() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#FFFFFF",
        tabBarInactiveTintColor: "#F8F8F8",
        tabBarStyle: {
          backgroundColor: "#633689",
        },
        tabBarLabelStyle: {
          textAlign: "center",
          fontSize: 12,
        },
        tabBarIndicatorStyle: {
          borderBottomColor: "#87B56A",
          borderBottomWidth: 2,
        },
      }}
    >
      <Tab.Screen
        name="FirstPage"
        component={FirstPage}
        options={{
          tabBarLabel: "Home",
        }}
      />
      <Tab.Screen
        name="SecondPage"
        component={SecondPage}
        options={{
          tabBarLabel: "Setting",
        }}
      />
    </Tab.Navigator>
  );
}

function TopTabNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#633689" },
          headerTintColor: "white",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      >
        <Stack.Screen
          name="TabStack"
          component={TabStack}
          options={{ title: "Top Tab Example" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default TopTabNavigator;
