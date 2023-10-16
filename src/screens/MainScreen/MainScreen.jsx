import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Routes } from "../../constants/routes";
import TermsOfServiceScreen from "../TermsOfService/TermsOfServiceScreen";
import PrivacyPolicy from "../PrivacyPolicy/PrivacyPolicy";
import { StatusBar, View } from "react-native";
import BackgroundImage from "../../components/BackgroundImage/ScreenBackground";
import { IMAGE } from "../../constants/Images";
import styles from "../Splash/styles";
import CustomHeader from "../../components/HeaderAtom/HeaderAtom";
import HomeScreen from "../HomeScreen/HomeScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

function MainScreen() {
  const [accepted, setAccepted] = React.useState(false);
  const [hasAcceptedTerms, setHasAcceptedTerms] = React.useState(false);
  const [hasAcceptedPrivacyPolicy, setHasAcceptedPrivacyPolicy] =
    React.useState(false);

  React.useEffect(() => {
    AsyncStorage.getItem("termsAccepted").then((value) => {
      if (value === "true") {
        setHasAcceptedTerms(true);
      }
    });

    AsyncStorage.getItem("privacyPolicyAccepted").then((value) => {
      if (value === "true") {
        setHasAcceptedPrivacyPolicy(true);
      }
    });
  }, []);

  if (!hasAcceptedTerms || !hasAcceptedPrivacyPolicy) {
    return (
      <BackgroundImage source={IMAGE.BLACK_IMAGE} style={{ flex: 1 }}>
        <StatusBar
          style={{
            flex: 1,
          }}
          animated={false}
          backgroundColor="transparent"
          barStyle="light-content"
          translucent={true}
          backgroundImage={IMAGE.STATUS_BAR_BACKGROUND}
        />
        <View style={styles.headerStyle}>
          <CustomHeader title={"PIXY RIGHT"} />
        </View>
        <View style={{ flex: 1 }}>
          <Tab.Navigator
            screenOptions={{
              tabBarActiveTintColor: "#FFFFFF",
              tabBarInactiveTintColor: "#F8F8F8",
              tabBarStyle: {
                backgroundColor: "#F8F8F8",
              },
              tabBarLabelStyle: {
                textAlign: "center",
                fontSize: 12,
                color: "black",
              },
              tabBarIndicatorStyle: {
                borderBottomColor: "black",
                borderBottomWidth: 2,
              },
            }}
          >
            <Tab.Screen
              name={Routes.TERMS_OF_SERVICES_SCREEN}
              component={TermsOfServiceScreen}
              options={{
                tabBarLabel: "Terms Of Service ",
                textTransform: "uppercase",
              }}
            />
            <Tab.Screen
              name={Routes.PRIVACY_POLICY_SCREEN}
              component={PrivacyPolicy}
              options={{
                tabBarLabel: "Privacy Policy",
              }}
            />
          </Tab.Navigator>
        </View>
      </BackgroundImage>
    );
  }

  return <HomeScreen />;
}

function App() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerTintColor: "white",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Screen name="MainScreen" component={MainScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
}

export default App;
