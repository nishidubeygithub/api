import React from "react";
import { View, Text } from "react-native";
import{ Provider } from"react-redux";
import HomeScreen from "./src/Screens/HomeScreen";
import store from "./src/Redux/store/store";

export default App = () => {
  return (
    <Provider store ={store}>
      <HomeScreen/>
      </Provider>
  )
}