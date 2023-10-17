import { StyleSheet } from "react-native";
import { CHANGE_BY_MOBILE_DPI } from "../../constants/Constant";

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "transparent",
  },
  sectionContainer: {
    marginTop: 30,
  },
  sectionHeader: {
    color: "white",
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: CHANGE_BY_MOBILE_DPI(18),
  },
  itemContainer: {
    justifyContent: "space-even",
  },
  item: {
    width: 40,
    height: 40,
    margin: CHANGE_BY_MOBILE_DPI(20),
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  image: {
    width: 40,
    height: 40,
  },
  header: {
    // Header styles if needed
  },
});
export default styles;
