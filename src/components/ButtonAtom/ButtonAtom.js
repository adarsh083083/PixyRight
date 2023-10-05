import { Text, TouchableHighlight, TouchableOpacity } from "react-native";
import styles from "./styles";

const ButtonAtom = ({
  btnText,
  btnStyle = {},
  onPress = () => {},
  img,
  btnTextStyle = {},
}) => {
  return (
    <TouchableHighlight style={{ marginHorizontal: 16 }}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onPress}
        style={{ ...styles.btnStyle, ...btnStyle }}
      >
        <Text style={{ ...styles.btnTextStyle, ...btnTextStyle }}>
          {btnText}
        </Text>
      </TouchableOpacity>
    </TouchableHighlight>
  );
};

export default ButtonAtom;
