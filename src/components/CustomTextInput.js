import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const CustomTextInput = ({
  title,
  isSecureText,
  handleOnChangeText,
  handleValue,
  handlePlaceholder,
}) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputBoxText}>{title}</Text>
      <TextInput
        // inputMode='email'
        secureTextEntry={isSecureText}
        placeholder={handlePlaceholder}
        style={styles.textInputStyle}
        onChangeText={handleOnChangeText}
        value={handleValue}
      />
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  inputContainer: {
    width: "80%",
    marginBottom: 15,
  },
  inputBoxText: {
    fontWeight: "bold",
    alignSelf: "flex-start",
    color: "white",
    marginBottom: 4,
  },
  textInputStyle: {
    borderBottomWidth: 1,
    borderBottomColor: "white",
    width: "100%",
    color: "white",
    paddingVertical: 6,
  },
});
