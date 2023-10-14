import { StyleSheet } from "react-native";
import { CHANGE_BY_MOBILE_DPI } from "../../constants/Constant";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  firstContainer: {
    flexDirection: "row",
    marginTop: CHANGE_BY_MOBILE_DPI(120),
    justifyContent: "space-around",
  },
  headerStyle: {
    marginTop: CHANGE_BY_MOBILE_DPI(30),
  },
  setupStyle: {
    height: CHANGE_BY_MOBILE_DPI(270),
    width: 180,
  },
  paymetStyle: {
    height: CHANGE_BY_MOBILE_DPI(270),
    width: CHANGE_BY_MOBILE_DPI(180),
  },
  secondContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  inviteStyle: {
    height: CHANGE_BY_MOBILE_DPI(270),
    width: CHANGE_BY_MOBILE_DPI(180),
  },
  ideasStyle: {
    height: CHANGE_BY_MOBILE_DPI(270),
    width: CHANGE_BY_MOBILE_DPI(180),
  },
  cameraContainer: {
    position: "absolute",
    top: CHANGE_BY_MOBILE_DPI(365),
    right: CHANGE_BY_MOBILE_DPI(82),
  },
  cameraStyle: {
    height: CHANGE_BY_MOBILE_DPI(220),
    width: CHANGE_BY_MOBILE_DPI(220),
  },
  imageBackground: {
    backgroundColor: "transparent",
  },
});
