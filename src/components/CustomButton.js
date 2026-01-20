import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";

const CustomButton = ({
  buttonText,
  setWidth,
  handleOnPressed,
  buttonColor,
  pressedButtonColor,
}) => {
  return (
    <Pressable
      onPress={() => handleOnPressed()}
      style={({ pressed }) => [
        styles.button,
        {
          backgroundColor: pressed ? pressedButtonColor : buttonColor,
          width: setWidth, // "80%" gibi stringse böyle olmalı
        },
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
