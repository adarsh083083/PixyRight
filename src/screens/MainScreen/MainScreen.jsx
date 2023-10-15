import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Routes } from "../../constants/routes";
import TermsOfServiceScreen from "../TermsOfService/TermsOfServiceScreen";
import PrivacyPolicy from "../PrivacyPolicy/PrivacyPolicy";
import { StatusBar, View } from "react-native";
import BackgroundImage from "../../components/BackgroundImage/ScreenBackground";
import { IMAGE } from "../../constants/Images";
import { CHANGE_BY_MOBILE_DPI } from "../../constants/Constant";
import styles from "../Splash/styles";
import CustomHeader from "../../components/HeaderAtom/HeaderAtom";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ButtonAtom from "../../components/ButtonAtom/ButtonAtom";
import HomeScreen from "../HomeScreen/HomeScreen";

const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

function MainScreen() {
  const [hasAcceptedTerms, setHasAcceptedTerms] = React.useState(false);
  const [hasAcceptedPrivacyPolicy, setHasAcceptedPrivacyPolicy] =
    React.useState(false);
  const navigation = useNavigation();

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

  const handleAccept = async () => {
    await AsyncStorage.setItem("termsAccepted", "true");
    await AsyncStorage.setItem("privacyPolicyAccepted", "true");

    navigation.navigate("HomeScreen");
  };

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

          <View style={{ marginBottom: CHANGE_BY_MOBILE_DPI(18) }}>
            <ButtonAtom
              onPress={handleAccept}
              btnText={"I ACCEPT AND CONTINUE"}
            />
          </View>
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
