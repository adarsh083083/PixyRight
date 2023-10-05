import {
  View,
  TouchableHighlight,
  Alert,
  Image,
  StatusBar,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { IMAGE } from "../../constants/Images";
import CustomHeader from "../../components/HeaderAtom/HeaderAtom";
import BackgroundImage from "../../components/BackgroundImage/ScreenBackground";
import { Routes } from "../../constants/routes";
import { styles } from "./HomeScreenStyle";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <BackgroundImage source={IMAGE.BLACK_IMAGE}>
      <StatusBar
        animated={false}
        backgroundColor="transparent"
        barStyle="light-content"
        translucent={true}
        backgroundImage={IMAGE.STATUS_BAR_BACKGROUND}
      />
      <View style={styles.headerStyle}>
        <CustomHeader title={"PIXY RIGHT"} />
      </View>
      <View style={styles.firstContainer}>
        <TouchableHighlight
          underlayColor="transparent"
          style={styles.imageBackground}
          onPress={() => navigation.navigate(Routes.SETUP_SCREEN)}
        >
          <Image
            resizeMode="cover"
            style={styles.setupStyle}
            source={IMAGE.SETUP}
          />
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor="transparent"
          style={styles.imageBackground}
          onPress={() => navigation.navigate(Routes.PAYMENT_SCREEN)}
        >
          <Image
            resizeMode="cover"
            style={styles.paymetStyle}
            source={IMAGE.PAYMENT}
          />
        </TouchableHighlight>
      </View>

      <View style={styles.secondContainer}>
        <TouchableHighlight
          underlayColor="transparent"
          style={styles.imageBackground}
          onPress={() => navigation.navigate(Routes.INVITE_SCREEN)}
        >
          <Image
            resizeMode="cover"
            style={styles.inviteStyle}
            source={IMAGE.INVITE}
          />
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor="transparent"
          style={styles.imageBackground}
          onPress={() => navigation.navigate(Routes.IDEAS_SCREEN)}
        >
          <Image
            resizeMode="cover"
            style={styles.ideasStyle}
            source={IMAGE.IDEAS}
          />
        </TouchableHighlight>
      </View>
      <View style={styles.cameraContainer}>
        <TouchableHighlight
          underlayColor="transparent"
          style={styles.imageBackground}
          onPress={() => Alert.alert("camera will open sooon")}
        >
          <Image style={styles.cameraStyle} source={IMAGE.CAMERA} />
        </TouchableHighlight>
      </View>
    </BackgroundImage>
  );
};

export default HomeScreen;
