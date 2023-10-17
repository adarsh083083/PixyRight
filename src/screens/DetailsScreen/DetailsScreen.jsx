import {
  View,
  Text,
  Image,
  StatusBar,
  TouchableHighlight,
  Alert,
} from "react-native";
import React, { useState, useRef, createRef } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import BackgroundImage from "../../components/BackgroundImage/ScreenBackground";
import CustomHeader from "../../components/HeaderAtom/HeaderAtom";
import { IMAGE } from "../../constants/Images";
import styles from "./DetailsStyles";
import WaterMarkScreen from "../WaterMarkScreen/WaterMarkScreen";
import {
  PanGestureHandler,
  PinchGestureHandler,
  State,
} from "react-native-gesture-handler";

import { Animated } from "react-native";
const DetailsScreen = () => {
  const [panEnabled, setPanEnabled] = useState(false);

  const navigation = useNavigation();
  const route = useRoute();
  const selectedImage = route?.params?.selectedImage;
  const scale = useRef(new Animated.Value(1)).current;
  const translateX = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(0)).current;

  const pinchRef = createRef();
  const panRef = createRef();
  console.log(selectedImage, ".........selectedImageee");
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);
  const toggleBottomSheet = () => {
    setIsBottomSheetVisible(!isBottomSheetVisible);
  };

  const onPinchEvent = Animated.event(
    [
      {
        nativeEvent: { scale },
      },
    ],
    { useNativeDriver: true }
  );

  const onPanEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationX: translateX,
          translationY: translateY,
        },
      },
    ],
    { useNativeDriver: true }
  );

  const handlePinchStateChange = ({ nativeEvent }) => {
    // enabled pan only after pinch-zoom
    if (nativeEvent.state === State.ACTIVE) {
      setPanEnabled(true);
    }

    // when scale < 1, reset scale back to original (1)
    const nScale = nativeEvent.scale;
    if (nativeEvent.state === State.END) {
      if (nScale < 1) {
        Animated.spring(scale, {
          toValue: 1,
          useNativeDriver: true,
        }).start();
        Animated.spring(translateX, {
          toValue: 0,
          useNativeDriver: true,
        }).start();
        Animated.spring(translateY, {
          toValue: 0,
          useNativeDriver: true,
        }).start();

        setPanEnabled(false);
      }
    }
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
        <PanGestureHandler
          onGestureEvent={onPanEvent}
          ref={panRef}
          simultaneousHandlers={[pinchRef]}
          enabled={panEnabled}
          failOffsetX={[-1000, 1000]}
          shouldCancelWhenOutside={true}
        >
          <Animated.View>
            <PinchGestureHandler
              ref={pinchRef}
              onGestureEvent={onPinchEvent}
              simultaneousHandlers={[panRef]}
              onHandlerStateChange={handlePinchStateChange}
            >
              <Animated.Image
                source={{
                  uri: selectedImage,
                }}
                style={{
                  width: "100%",
                  height: "100%",
                  transform: [{ scale }, { translateX }, { translateY }],
                }}
                resizeMode="contain"
              />
            </PinchGestureHandler>
          </Animated.View>
        </PanGestureHandler>
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
