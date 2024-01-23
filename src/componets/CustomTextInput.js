import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const CustomTextInput = ({customText, customPlaceholder,customSecurtyTextEntry, customKeyboardType, customOnChangeText, customValue}) => {
  return (
    <View style={styles.textInputContainer}>
        <Text>{customText}</Text>
        <TextInput
          style={styles.textInputStyle}
          placeholder={customPlaceholder}
          secureTextEntry={customSecurtyTextEntry}
          onChangeText={customOnChangeText}
          value={customValue}
          keyboardType={customKeyboardType}
        />
        </View>
  )
}

export default CustomTextInput

const styles = StyleSheet.create({
    textInputContainer: {
        width: "80%",
        marginVertical: 10,
      },
      textInputStyle: {
        height: 50,
        borderBottomWidth:0.5,
        borderRadius: 10,
        textAlign: "center",
        marginVertical: 10,
      },
})