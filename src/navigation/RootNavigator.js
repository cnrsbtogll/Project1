import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import UserStack from "./UserStack";
import { useSelector } from "react-redux";



export default function RootNavigator() {
  const isAuth  = useSelector((state) => state.user.isAuth);

  console.log("isAuth", isAuth);
  
  return (
    <NavigationContainer>
      {isAuth ? <UserStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
