import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { CustomTextInput } from "../components";

const SignUpPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.signup}>SignUpPage</Text>
      <CustomTextInput
        title="Email"
        isSecureText={false}
        handleOnChangeText={(text) => dispatch(setEmail(text))}
        handleValue={email}
        handlePlaceholder="Enter your email"
      />
       <CustomTextInput
        title="Email"
        isSecureText={false}
        handleOnChangeText={(text) => dispatch(setEmail(text))}
        handleValue={email}
        handlePlaceholder="Enter your email"
      />
    </View>
  );
};

export default SignUpPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "tomato",
    alignItems: "center",
    justifyContent: "center",
  },
  signup: {
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 30,
    color: "white",
  },
});
