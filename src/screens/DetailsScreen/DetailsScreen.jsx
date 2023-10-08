import { View, Text, Image, StatusBar } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import BackgroundImage from "../../components/BackgroundImage/ScreenBackground";
import CustomHeader from "../../components/HeaderAtom/HeaderAtom";
import { IMAGE } from "../../constants/Images";
import { styles } from "./DetailsStyles";

const DetailsScreen = () => {
  const route = useRoute();
  const selectedImage = route?.params?.selectedImage;
  console.log(selectedImage, ".........selectedImageee");
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
    </BackgroundImage>
  );
};

export default DetailsScreen;
