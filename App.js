import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RootNavigator from "./src/navigation/RootNavigator";

const Stack = createNativeStackNavigator();

const App = () => {
  return <RootNavigator />;
};

export default App;
