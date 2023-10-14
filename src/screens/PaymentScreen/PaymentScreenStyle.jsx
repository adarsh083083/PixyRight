import { StyleSheet } from "react-native";
import { CHANGE_BY_MOBILE_DPI } from "../../constants/Constant";
const styles = StyleSheet.create({
  headerStyle: {
    marginTop: CHANGE_BY_MOBILE_DPI(30),
  },
  textContainer: {
    marginTop: CHANGE_BY_MOBILE_DPI(50),
    justifyContent: "center",
    alignItems: "center",
  },
  titleStyle: {
    color: "white",
    fontSize: CHANGE_BY_MOBILE_DPI(28),
    fontWeight: "bold",
    textAlign: "center",
  },
  textStyle1: {
    color: "white",
    fontSize: CHANGE_BY_MOBILE_DPI(20),
    fontWeight: "400",
    textAlign: "center",
    marginTop: CHANGE_BY_MOBILE_DPI(10),
  },
  textStyle2: {
    color: "white",
    fontSize: CHANGE_BY_MOBILE_DPI(20),
    fontWeight: "bold",
    textAlign: "center",
    // maxWidth: 350,
  },
  btnStyle: {
    marginTop: CHANGE_BY_MOBILE_DPI(60),
  },
  btnStyle2: {
    marginTop: CHANGE_BY_MOBILE_DPI(10),
  },
});
export default styles;
