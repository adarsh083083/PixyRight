import { Dimensions, StyleSheet } from "react-native";
import { CHANGE_BY_MOBILE_DPI } from "../../constants/Constant";
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    alignSelf: "center",
    fontWeight: "bold",
    color: "#000",
  },
  tcP: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 12,
    paddingHorizontal: 10,
  },
  tcL: {
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 12,
  },
  tcContainer: {
    marginTop: 15,
    height: height * 0.77,
    backgroundColor: "transparent",
  },

  buttonDisabled: {
    backgroundColor: "#999",
    borderRadius: 5,
    padding: 10,
  },
  buttonLabel: {
    fontSize: 14,
    color: "#FFF",
    alignSelf: "center",
  },
});
export default styles;
