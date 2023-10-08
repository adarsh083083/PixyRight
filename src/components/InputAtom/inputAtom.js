// import React from "react";
// import { View, TextInput, StyleSheet, Image } from "react-native";

// const InputAtom = ({ leftIcon, rightIcon, ...inputProps }) => {
//   return (
//     <View style={styles.inputContainer}>
//       <TextInput style={styles.input} {...inputProps} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   inputContainer: {
//     borderWidth: 1,
//     borderColor: "gray",
//     borderRadius: 12,
//     paddingHorizontal: 12,
//     backgroundColor: "white",
//   },
//   input: {
//     height: 40,
//     color: "black",
//   },
// });

// export default InputAtom;
import React from "react";
import { View, TextInput, StyleSheet, Image } from "react-native";

const InputAtom = ({ leftIcon, rightIcon, ...inputProps }) => {
  return (
    <View style={styles.inputContainer}>
      {leftIcon && <Image source={leftIcon} style={styles.icon} />}
      <TextInput style={styles.input} {...inputProps} />
      {rightIcon && <Image source={rightIcon} style={styles.icon} />}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 12,
    paddingHorizontal: 12,
    backgroundColor: "white",
    flexDirection: "row", // Align children horizontally
    alignItems: "center", // Vertically center children
  },
  input: {
    flex: 1, // Take up remaining horizontal space
    height: 40,
    color: "black",
  },
  icon: {
    width: 24, // Adjust the width and height according to your icon size
    height: 24,
    marginHorizontal: 8, // Adjust the spacing between the icon and input
  },
});

export default InputAtom;
