import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import UserStack from "./UserStack";
import { useSelector } from "react-redux";
import app from '../../firebaseConfig'


export default function RootNavigator() {
  const isAuth = useSelector((state) => state.user.isAuth);

  return (
    <NavigationContainer>
      {true ? <UserStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
