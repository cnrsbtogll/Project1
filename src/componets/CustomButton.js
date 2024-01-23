import { StyleSheet, Text, Pressable } from "react-native";
import React from "react";

const CustomButton = ({
  buttonTitle,
  customOnpress,
  customWidth,
  buttonColor,
  pressedButtonColor,
}) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        {
          backgroundColor: pressed ?  pressedButtonColor  :  buttonColor ,
          width: customWidth,
        },
      ]}
      onPress={customOnpress}
    >
      <Text style={{ color: "white" }}>{buttonTitle}</Text>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    height: 50,
    backgroundColor: "blue",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 8,
  },
});
