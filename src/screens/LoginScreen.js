import { useState } from "react";
import { StyleSheet, Image, ImageBackground } from "react-native";
import { Loading, CustomTextInput, CustomButton } from "../componets";
import { useDispatch, useSelector } from "react-redux";
import { setEmail, setPassword, setIsLoading, login} from "../redux/userSlice";

export default function LoginScreen({ navigation }) {

const { email, password, isLoading } = useSelector(state => state.user);

const dispatch = useDispatch();

  return (
    <ImageBackground
      style={styles.container}
      source={require("../../assets/images/background.jpeg")}
    >
      <Image
        source={require("../../assets/images/login-icon.png")}
        style={styles.login_icon}
      />
      <CustomTextInput
        customText="Email"
        customPlaceholder="Enter your email"
        customKeyboardType="email-address"
        customSecureTextEntry={false}
        customOnChangeText={(text)=>{dispatch(setEmail(text.toLowerCase()))}}
        customValue={email}
      />
      <CustomTextInput
        customText="Password"
        customPlaceholder="Enter your password"
        customKeyboardType="number-pad"
        customSecureTextEntry={true}
        customOnChangeText={(text)=>{dispatch(setPassword(text))}}
        customValue={password}
      />
      <CustomButton
        buttonTitle="Login"
        customOnpress={()=>{dispatch(login({email, password}))}}
        customWidth="80%"
        buttonColor="blue"
        pressedButtonColor="lightgray"
      />
      <CustomButton
        buttonTitle="Sign Up"
        customOnpress={() => {
          navigation.navigate("Signup");
        }}
        customWidth="30%"
        buttonColor="gray"
        pressedButtonColor="lightgray"
      />
      <Loading visible={isLoading} onClose={() => dispatch(setIsLoading(false))} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  login_icon: {
    width: 150,
    height: 150,
    marginVertical: 20,
  },
});
