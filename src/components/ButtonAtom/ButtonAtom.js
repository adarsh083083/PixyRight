import { Text, TouchableHighlight, TouchableOpacity } from "react-native";
import styles from "./styles";

const ButtonAtom = ({
  btnText,
  btnStyle = {},
  onPress = () => {},
  disabled,
  btnTextStyle = {},
}) => {
  return (
    <TouchableHighlight style={{ marginHorizontal: 16 }}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onPress}
        disabled={disabled}
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
