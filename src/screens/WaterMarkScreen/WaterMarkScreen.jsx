import { View, Text, Modal, TouchableOpacity } from "react-native";
import React from "react";
import BackgroundImage from "../../components/BackgroundImage/ScreenBackground";
import { IMAGE } from "../../constants/Images";

const WaterMarkScreen = ({ isVisible, toggleBottomSheet }) => {
  return (
    <View>
      <Modal
        transparent={true}
        visible={isVisible}
        animationType="slide"
        onRequestClose={toggleBottomSheet}
      >
        <BackgroundImage source={IMAGE.BLACK_IMAGE}>
          <TouchableOpacity onPress={toggleBottomSheet}>
            <Text style={{ color: "blue", fontSize: 16, fontWeight: "bold" }}>
              Cancel
            </Text>
          </TouchableOpacity>
        </BackgroundImage>
      </Modal>
    </View>
  );
};

export default WaterMarkScreen;
