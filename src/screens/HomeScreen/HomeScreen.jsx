import { View, TouchableHighlight, Image, StatusBar } from "react-native";
import React, { useState, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { IMAGE } from "../../constants/Images";
import CustomHeader from "../../components/HeaderAtom/HeaderAtom";
import BackgroundImage from "../../components/BackgroundImage/ScreenBackground";
import { Routes } from "../../constants/routes";
import { styles } from "./HomeScreenStyle";
import * as ImagePicker from "react-native-image-picker";
import ActionSheet from "react-native-actionsheet";
import Share from "react-native-share";
import IdeaScreen from "../IdeasScreen/IdeaScreen";
const HomeScreen = () => {
  const navigation = useNavigation();
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const actionSheetRef = useRef(null);
  const subActionSheetRef = useRef(null);
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);

  const toggleBottomSheet = () => {
    setIsBottomSheetVisible(!isBottomSheetVisible);
  };
  console.log(
    "Navigating to DetailsScreen with selectedImage: ",
    selectedImage
  );
  const showActionSheet = () => {
    actionSheetRef.current.show();
  };

  const handleActionSheetPress = (index) => {
    if (index === 0) {
      showSubActionSheet();
    } else if (index === 1) {
      launchVideoLibrary();
    }
  };
  const handleSubActionSheetPress = (index) => {
    if (index === 0) {
      launchCamera();
    } else if (index === 1) {
      launchImageLibrary();
    }
  };

  const showSubActionSheet = () => {
    subActionSheetRef.current.show();
  };

  const launchCamera = () => {
    const options = {
      title: "Select Image from Camera",
      storageOptions: {
        skipBackup: true,
        path: "images",
      },
    };
    ImagePicker.launchCamera(options, (response) => {
      try {
        if (response.didCancel) {
          console.log("User cancelled image picker (Camera)");
        } else if (response.error) {
          console.log("ImagePicker Error (Camera):", response.error);
        } else {
          setSelectedImage(response.uri);
          console.log("Selected Image (Camera):", response); // Log the selected image
        }
      } catch (error) {
        console.error("Error setting selectedImage (Camera):", error);
      }
    });
  };
  
  const launchImageLibrary = () => {
    const options = {
      title: "Select Image from Gallery",
      storageOptions: {
        skipBackup: true,
        path: "images",
      }
    };
  
    ImagePicker.launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log("User cancelled image picker (Gallery)");
      } else if (response.error) {
        console.log("ImagePicker Error (Gallery):", response.error);
      } else {
        setSelectedImage(response.uri);
        console.log("Selected Image (Gallery):", response); // Log the selected image
        navigation.navigate(Routes.DETAILS_SCREEN, {
          selectedImage: response.uri,
        });
      }
    });
  };
  
  const launchVideoLibrary = () => {
    const options = {
      mediaType: "video",
      title: "Select Video from Gallery",
      storageOptions: {
        skipBackup: true,
        path: "videos",
      }
    };
    ImagePicker.launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log("User cancelled video picker");
      } else if (response.error) {
        console.log("ImagePicker Error (Video):", response.error);
      } else {
        setSelectedVideo(response.uri);
        console.log("Selected Video:", response?.originalPath); // Log the selected video
      }
    });
  };

  const handleShare = () => {
    const options = {
      message:
        "Hi, checkout this app called PixyRight. It's a great watermarking app",
      email: "info.pixyright@gmail.com",
      subject: "I have an idea! PixyRight",
    };
    Share.open(options)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
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
          onPress={() => handleShare()}
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
          onPress={toggleBottomSheet}
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
          onPress={() => showActionSheet()}
        >
          <Image style={styles.cameraStyle} source={IMAGE.CAMERA} />
        </TouchableHighlight>
      </View>
      <ActionSheet
        ref={actionSheetRef}
        title={"Select Media Type"}
        message={"What type of item you want to edit ?"}
        options={["Photo", "Video", "Cancel"]}
        cancelButtonIndex={2}
        onPress={handleActionSheetPress}
      />
      <ActionSheet
        ref={subActionSheetRef}
        options={["Take Photo", "Photo Library", "Cancel"]}
        cancelButtonIndex={2}
        onPress={handleSubActionSheetPress}
      />
      <IdeaScreen
        isVisible={isBottomSheetVisible}
        toggleBottomSheet={toggleBottomSheet}
      />
    </BackgroundImage>
  );
};

export default HomeScreen;
