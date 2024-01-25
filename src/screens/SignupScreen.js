import {
  StyleSheet,
  Image,
  SafeAreaView,
  ImageBackground,
  View,
  Text,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { CustomTextInput, CustomButton } from "../componets";

const SignupScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <ImageBackground
      style={styles.container}
      source={require("../../assets/images/background.jpeg")}
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.sectionOne}>
          <Image
            source={require("../../assets/images/signup-icon.png")}
            style={styles.signup}
          />
          <Text style={{ fontSize: 30, fontWeight: "bold" }}>Welcome</Text>
        </View>
        <View style={styles.sectionTwo}>
          <CustomTextInput
            customText={"Name"}
            customPlaceholder={"Enter your name"}
            customKeyboardType={"default"}
            customSecureTextEntry={false}
            customOnChangeText={setName}
            customValue={name}
          />
          <CustomTextInput
            customText={"Email"}
            customPlaceholder={"Enter your email"}
            customKeyboardType={"email-address"}
            customSecureTextEntry={false}
            customOnChangeText={setEmail}
            customValue={email}
          />
          <CustomTextInput
            customText={"Password"}
            customPlaceholder={"Enter your password"}
            customKeyboardType={"number-pad"}
            customSecureTextEntry={true}
            customOnChangeText={setPassword}
            customValue={password}
          />
        </View>
        <View style={styles.sectionThree}>
          <CustomButton
            buttonTitle="Sign Up"
            customOnpress={() => console.log("Sign Up")}
            customWidth="80%"
            buttonColor="blue"
            pressedButtonColor="lightgray"
          />
          <Pressable onPress={() => navigation.navigate("Login")}>
            <Text style={styles.option}>Already have an account? Login!</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: { flex: 1 },
  sectionOne: {
    flex: 2,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  sectionTwo: {
    flex: 3,
    alignItems: "center",
  },

  sectionThree: {
    flex: 2,
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  signup: {
    width: 100,
    height: 100,
  },
  option: {
    fontSize: 14,
    fontWeight: "bold",
  },
});
