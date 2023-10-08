import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

const CustomHeader = ({
  title,
  onBackPress,
  backImage,
  onRightPress,
  rightImage,
}) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
        <Image
          tintColor={"white"}
          source={backImage}
          style={{ height: 30, width: 30 }}
        />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={onRightPress} style={styles.backButton}>
        <Image
          tintColor={"white"}
          source={rightImage}
          style={{ height: 30, width: 35 }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
    backgroundColor: "#000000",
    elevation: 20,
  },
  backButton: {
    padding: 8,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
  },
  rightButton: {
    padding: 8,
  },
  rightButtonText: {
    fontSize: 16,
    color: "blue", 
  },
};

export default CustomHeader;
