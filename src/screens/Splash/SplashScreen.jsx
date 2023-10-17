import { View, Text, Image,  StatusBar } from "react-native";
import React, { useEffect } from "react";
import { IMAGE } from "../../constants/Images";
import BackgroundImage from "../../components/BackgroundImage/ScreenBackground";
import { Routes } from "../../constants/routes";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate(Routes.MAIN_SCREEN);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <BackgroundImage source={IMAGE.BLACK_IMAGE}>
        <StatusBar
          animated={false}
          backgroundColor="transparent"
          barStyle="light-content"
          translucent={true}
          backgroundImage={IMAGE.STATUS_BAR_BACKGROUND}
        />
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Image source={IMAGE.LOGO} />
        </View>
      </BackgroundImage>
    </View>
  );
};

export default SplashScreen;
