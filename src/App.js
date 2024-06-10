import React from "react";
import "react-native-gesture-handler";
import { Provider } from "@ant-design/react-native";
import { NavigationContainer } from "@react-navigation/native";
import Router from "./routers";

const App = () => {
  return (
    <Provider>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
