import { StyleSheet } from "react-native";
import { CHANGE_BY_MOBILE_DPI } from "../../constants/Constant";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  headerStyle: {
    marginTop: CHANGE_BY_MOBILE_DPI(40),
  },
});
export default styles;
