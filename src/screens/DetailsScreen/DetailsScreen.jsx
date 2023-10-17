import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StatusBar,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import BackgroundImage from "../../components/BackgroundImage/ScreenBackground";
import CustomHeader from "../../components/HeaderAtom/HeaderAtom";
import WaterMarkScreen from "../WaterMarkScreen/WaterMarkScreen";
import { allColors } from "../../constants/staticData";
import { Slider } from "@react-native-assets/slider";
import styles from "./DetailsStyles";
import { IMAGE } from "../../constants/Images";

const DetailsScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const selectedImage = route?.params?.selectedImage;

  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);
  const toggleBottomSheet = () => {
    setIsBottomSheetVisible(!isBottomSheetVisible);
  };

  // State for text styling
  const [Model, setModel] = useState(false);
  const [selectedTextIndex, setSelectedTextIndex] = useState(-1);
  const [data, setdata] = useState([
    { name: "Shyaam", color: "black" },
    { name: "Deepak", color: "black" },
    { name: "Sanju", color: "black" },
    { name: "Adarsh", color: "black" },
  ]);

  const setColorsHandler = (color) => {
    if (selectedTextIndex === -1) {
      Alert.alert("Please select the line first");
    } else {
      const newData = [...data];
      newData[selectedTextIndex].color = color;
      setdata(newData);
    }
  };

  // State for opacity and indicator
  const [opacity, setOpacity] = useState(1.0);
  const [showIndicator, setShowIndicator] = useState(false);

  const handleOpacityChange = (value) => {
    setOpacity(value);
  };

  // State for shadow
  const [shadowOffset, setShadowOffset] = useState({ width: 2, height: 2 });
  const [shadowRadius, setShadowRadius] = useState(0);
  const [showOpcIndicator, setShowOpcIndicator] = useState(false);

  const handleShadowChange = (value) => {
    setShadowOffset({ width: value, height: value });
    setShadowRadius(value * 2);
  };

  // State for font family
  const fontFamilies = [
    { fontFamily: "Arial", fontWeight: "normal", fontStyle: "normal" },
    { fontFamily: "Courier New", fontWeight: "normal", fontStyle: "normal" },
    { fontFamily: "Georgia", fontWeight: "bold", fontStyle: "italic" },
    { fontFamily: "Times New Roman", fontWeight: "bold", fontStyle: "normal" },
  ];

  const [currentFontIndex, setCurrentFontIndex] = useState(0);
  const [showFont, setShowFont] = useState(false);

  const toggleFontStyle = () => {
    setCurrentFontIndex((currentFontIndex + 1) % fontFamilies.length);
  };

  const setFontFamily = (index) => {
    setCurrentFontIndex(index);
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
      <View style={{ position: "absolute", top: 200, alignSelf: "center" }}>
        {data.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              setSelectedTextIndex(index);
            }}
          >
            <Text
              style={{
                opacity,
                color: item.color,
                textShadowColor: "rgba(0, 0, 0, 0.75)",
                textShadowOffset: shadowOffset,
                textShadowRadius: shadowRadius,
                ...fontFamilies[currentFontIndex],
                fontSize: 24,
              }}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.textContainer}>
        <View style={styles.zoomHintContainer}>
          {Model ? (
            <ScrollView horizontal style={{ flexDirection: "row" }}>
              {allColors.map((color, index) => (
                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  key={index}
                  onPress={() => setColorsHandler(color)}
                >
                  <View
                    style={{
                      height: 20,
                      width: 20,
                      borderWidth: 1,
                      borderRadius: 50,
                      backgroundColor: color,
                      margin: 4,
                    }}
                  ></View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          ) : showIndicator ? (
            <Slider
              style={{ width: "100%" }}
              minimumValue={0}
              maximumValue={1}
              minimumTrackTintColor={"white"}
              step={0.01}
              value={opacity}
              onValueChange={handleOpacityChange}
              thumbTintColor={"white"}
              trackHeight={5}
              enabled={true}
            />
          ) : showFont ? (
            <ScrollView horizontal style={{ flexDirection: "row" }}>
              {fontFamilies.map((font, index) => (
                <TouchableHighlight
                  key={index}
                  onPress={() => setFontFamily(index)}
                  style={{
                    margin: 5,
                    padding: 5,
                    justifyContent: "center",
                  }}
                >
                  <Text style={{ color: "white" }}>{font.fontFamily}</Text>
                </TouchableHighlight>
              ))}
            </ScrollView>
          ) : showOpcIndicator ? (
            <Slider
              style={{ width: "100%" }}
              minimumValue={0}
              maximumValue={10}
              minimumTrackTintColor={"white"}
              step={0.01}
              value={shadowOffset.width}
              onValueChange={handleShadowChange}
              thumbTintColor={"white"}
              trackHeight={5}
              enabled={true}
            />
          ) : (
            <View>
              <Text style={styles.zoomHintText}>
                PINCH WITH TWO FINGERS TO ZOOM IN-OUT
              </Text>
            </View>
          )}
        </View>
      </View>
      <View style={styles.iconContainer}>
        <TouchableHighlight
          onPress={toggleBottomSheet}
          style={styles.imageInnerContainer}
        >
          <Image source={IMAGE.MORE} tintColor={"gray"} style={styles.more} />
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.imageIconStyle}
          onPress={() => setShowFont(!showFont)}
        >
          <Image
            source={IMAGE.FONTS_T}
            tintColor={"gray"}
            style={styles.touchImage}
          />
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.imageIconStyle}
          onPress={() => {
            setModel(!Model);
          }}
        >
          <Image
            tintColor={"gray"}
            source={IMAGE.COLOR_PICKER}
            style={styles.touchImage}
          />
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.imageIconStyle}
          onPress={() => setShowOpcIndicator(!showOpcIndicator)}
        >
          <Image
            source={IMAGE.SHADOW}
            tintColor={"gray"}
            style={styles.touchImage}
          />
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.imageIconStyle}
          onPress={() => setShowIndicator(!showIndicator)}
        >
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
