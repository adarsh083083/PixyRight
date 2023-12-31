import React, { useState } from "react";
import {
  View,
  Image,
  TouchableHighlight,
  StyleSheet,
  Alert,
} from "react-native";
import InputAtom from "../../components/InputAtom/inputAtom";

const InputItemData = ({ item }) => {
  const [inputValue, setInputValue] = useState(""); // State variable to store input values

  const handleButtonPress = () => {
    // Log the input value when the button is pressed
    console.log("Input Value:", inputValue);

    // Optionally, you can display an alert with the input value
    Alert.alert("Input Value", inputValue);
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Image source={item.logo} style={styles.icon} />
      </View>
      <View style={styles.inputContainer}>
        <InputAtom
          placeholder={item?.title}
          onChangeText={(text) => setInputValue(text)} // Update the inputValue state
        />
      </View>
      <TouchableHighlight
        style={styles.buttonContainer}
        onPress={handleButtonPress} // Call the event handler on button press
      >
        <Image source={item.btn} style={styles.icon} />
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  iconContainer: {
    justifyContent: "center",
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    height: 40,
    width: 40,
  },
  inputContainer: {
    width: "70%",
  },
  buttonContainer: {
    justifyContent: "center",
    backgroundColor: "white",
    height: 35,
    width: 35,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
});

export default InputItemData;
