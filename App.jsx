import { View} from "react-native";
import React from "react";
import { store } from "./src/redux/store";
import { Provider } from "react-redux";
import AppNavigation from "./src/navigations/AppNavigation";

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    </View>
  );
};

export default App;
