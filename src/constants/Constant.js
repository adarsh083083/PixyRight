import { Dimensions } from "react-native";
// Device Screen Height
export const SCREEN_HEIGHT = Dimensions.get("window").height;

// Device Screen Width
export const SCREEN_WIDTH = Dimensions.get("window").width;

// Bases of that  manage the screen alignment and font size
export const MOCKUP_WIDTH = 375;
export const CHANGE_BY_MOBILE_DPI = (temp) =>
  SCREEN_WIDTH / (MOCKUP_WIDTH / temp);
