import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import UserStack from "./UserStack";


export default function RootNavigator() {
  const isAuth = false;
  return (
    <NavigationContainer>
      {isAuth ? <UserStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
