import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
} from "react-native";
import Loading from "./src/componets/Loading";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/images/login-icon.png")}
        style={styles.login_icon}
      />
      <Text>Email</Text>
      <TextInput
        style={styles.textInputStyle}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Text>Password</Text>
      <TextInput
        style={styles.textInputStyle}
        onChangeText={setPassword}
        secureTextEntry
        keyboardType="number-pad"
      />
      <Pressable
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: pressed ? "lightgray" : "blue" },
        ]}
        onPress={() => setLoading(true)}
      >
        <Text style={{ color: "white" }}>Save</Text>
      </Pressable>
      <Loading visible={loading} onClose={() => setLoading(false)} />
    </View>
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

  textInputStyle: {
    height: 50,
    width: "80%",
    borderWidth: 1,
    borderRadius: 10,
    textAlign: "center",
    marginVertical: 10,
  },
  button: {
    height: 50,
    width: "80%",
    backgroundColor: "blue",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
