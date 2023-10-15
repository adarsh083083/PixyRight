import { View, Text } from "react-native";
import React from "react";
import AppNavigation from "./src/navigations/AppNavigation";
import { store } from "./src/redux/store";
import { Provider } from "react-redux";

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
