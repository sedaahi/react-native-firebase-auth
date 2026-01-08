import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { setIsLoading } from "../redux/userSlice";

const CustomButton = ({buttonText,setWidth,handleOnPressed,buttonColor,pressedButtonColor}) => {
  return (
    <Pressable
      onPress={() => handleOnPressed()}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? {pressedButtonColor}: {buttonColor},
          width: {setWidth},
        },
        styles.button,
      ]}
    >
      <Text style={styles.buttonText}>{buttonText}</Text>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  buttonText: {
    fontWeight: "bold",
    color: "white",
  },
});
