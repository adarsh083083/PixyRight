import {
  View,
  Text,
  Image,
  StatusBar,
  TouchableHighlight,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import BackgroundImage from "../../components/BackgroundImage/ScreenBackground";
import CustomHeader from "../../components/HeaderAtom/HeaderAtom";
import { IMAGE } from "../../constants/Images";
import styles from "./DetailsStyles";
import WaterMarkScreen from "../WaterMarkScreen/WaterMarkScreen";

const DetailsScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const selectedImage = route?.params?.selectedImage;
  console.log(selectedImage, ".........selectedImageee");
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);
  const toggleBottomSheet = () => {
    setIsBottomSheetVisible(!isBottomSheetVisible);
  };

  return (
    <BackgroundImage source={IMAGE.BLACK_IMAGE}>
      <StatusBar
        animated={false}
        backgroundColor="transparent"
        barStyle="light-content"
        translucent={true}
        backgroundImage={IMAGE.STATUS_BAR_BACKGROUND}
      />
      <View style={styles.container}>
        <CustomHeader
          title={"PIXY RIGHT"}
          backImage={IMAGE.BACK_ARROW}
          rightImage={IMAGE.RIGHT_CHECK}
          onBackPress={() => navigation.goBack()}
          style={styles.header}
        />
      </View>
      <View style={styles.imageContainer}>
        <Image source={{ uri: selectedImage }} style={styles.imageStyle} />
      </View>
      <View style={styles.textContainer}>
        <View style={styles.zoomHintContainer}>
          <Text style={styles.zoomHintText}>
            PINCH WITH TWO FINGERS TO ZOOM IN-OUT
          </Text>
        </View>
      </View>
      <View style={styles.iconContainer}>
        <TouchableHighlight
          onPress={toggleBottomSheet}
          style={styles.imageInnerContainer}
        >
          <Image source={IMAGE.MORE} tintColor={"gray"} style={styles.more} />
        </TouchableHighlight>
        <TouchableHighlight style={styles.imageIconStyle}>
          <Image
            source={IMAGE.FONTS_T}
            tintColor={"gray"}
            style={styles.touchImage}
          />
        </TouchableHighlight>
        <TouchableHighlight style={styles.imageIconStyle}>
          <Image
            tintColor={"gray"}
            source={IMAGE.COLOR_PICKER}
            style={styles.touchImage}
          />
        </TouchableHighlight>
        <TouchableHighlight style={styles.imageIconStyle}>
          <Image
            source={IMAGE.SHADOW}
            tintColor={"gray"}
            style={styles.touchImage}
          />
        </TouchableHighlight>
        <TouchableHighlight style={styles.imageIconStyle}>
          <Image
            source={IMAGE.OPACITY_SKY}
            tintColor={"gray"}
            style={styles.touchImage}
          />
        </TouchableHighlight>
      </View>
      <WaterMarkScreen
        isVisible={isBottomSheetVisible}
        toggleBottomSheet={toggleBottomSheet}
      />
    </BackgroundImage>
  );
};

export default DetailsScreen;
