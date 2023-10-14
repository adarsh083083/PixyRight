// styles.js
import { StyleSheet } from "react-native";
import { CHANGE_BY_MOBILE_DPI } from "../../constants/Constant";

export const styles = StyleSheet.create({
  sectionContainer: {
    paddingBottom: CHANGE_BY_MOBILE_DPI(20),
  },
  sectionTitle: {
    color: "white",
    textAlign: "center",
    fontSize: CHANGE_BY_MOBILE_DPI(20),
    fontWeight: "bold",
    marginTop: CHANGE_BY_MOBILE_DPI(10),
  },
});
