import { StyleSheet } from "react-native";
import { CHANGE_BY_MOBILE_DPI } from "../../constants/Constant";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  firstContainer: {
    flexDirection: "row",
    marginTop: CHANGE_BY_MOBILE_DPI(110),
    justifyContent: "space-around",
  },
  headerStyle: {
    marginTop: 30,
  },
  setupStyle: {
    height: CHANGE_BY_MOBILE_DPI(250),
    width: CHANGE_BY_MOBILE_DPI(185),
  },
  paymetStyle: {
    height: CHANGE_BY_MOBILE_DPI(250),
    width: CHANGE_BY_MOBILE_DPI(185),
  },
  secondContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: CHANGE_BY_MOBILE_DPI(10),
  },
  inviteStyle: {
    height: CHANGE_BY_MOBILE_DPI(250),
    width: CHANGE_BY_MOBILE_DPI(185),
  },
  ideasStyle: {
    height: CHANGE_BY_MOBILE_DPI(250),
    width: CHANGE_BY_MOBILE_DPI(185),
  },
  cameraContainer: {
    position: "absolute",
    top: CHANGE_BY_MOBILE_DPI(344),
    alignSelf: "center",
  },
  cameraStyle: {
    height: CHANGE_BY_MOBILE_DPI(210),
    width: CHANGE_BY_MOBILE_DPI(210),
  },
  imageBackground: {
    backgroundColor: "transparent",
  },
});
