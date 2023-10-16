import { StyleSheet } from "react-native";
import { CHANGE_BY_MOBILE_DPI } from "../../constants/Constant";

export const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  header: {
    alignItems: "center",
  },
  imageContainer: {
    borderWidth: 1,
    height: "70%",
    width: "90%",
    borderColor: "white",
    alignSelf: "center",
    borderRadius: 10,
    justifyContent: "center",
  },
  imageStyle: { height: "95%", width: "100%" },
  zoomHintContainer: {
    borderColor: "white",
    width: "90%",
    height: "95%",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  zoomHintText: {
    color: "white",
    fontWeight: "bold",
    fontStyle: "normal",
  },
  textContainer: {
    alignItems: "center",
    marginTop: 10,
  },
  iconContainer: {
    flexDirection: "row",
    marginHorizontal: 1,
    marginTop: 10,
    alignItems: "center",
  },
  imageInnerContainer: {
    justifyContent: "center",
    backgroundColor: "black",
    padding: 16,
    margin: 2,
  },
  more: {
    height: 40,
    width: 50,
  },
  imageIconStyle: {
    justifyContent: "center",
    backgroundColor: "black",
    padding: 16,
    margin: 2,
  },
  touchImage: {
    height: 40,
    width: 40,
  },
  // imageStyle: {
  //   width: CHANGE_BY_MOBILE_DPI(20),
  //   height: CHANGE_BY_MOBILE_DPI(20),
  // },
});

export default styles;