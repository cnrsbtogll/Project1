import { useState } from "react";
import {
  StyleSheet,
  Image,
  ImageBackground,
} from "react-native";
import { Loading, CustomTextInput, CustomButton } from "../componets";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <ImageBackground style={styles.container} source={require("../../assets/images/background.jpeg")}>
      <Image
        source={require("../../assets/images/login-icon.png")}
        style={styles.login_icon}
      />
      <CustomTextInput
        customText="Email"
        customPlaceholder="Enter your email"
        customKeyboardType="email-address"
        customSecureTextEntry={false}
        customOnChangeText={setEmail}
        customValue={email}
      />
      <CustomTextInput
        customText="Password"
        customPlaceholder="Enter your password"
        customKeyboardType="number-pad"
        customSecureTextEntry={true}
        customOnChangeText={setPassword}
        customValue={password}
      />
      <CustomButton
        buttonTitle="Login"
        customOnpress={() => setLoading(true)}
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
      <Loading visible={loading} onClose={() => setLoading(false)} />
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
