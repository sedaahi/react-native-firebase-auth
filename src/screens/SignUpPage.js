import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { CustomButton, CustomTextInput, Loading } from "../components";
import { useNavigation } from "@react-navigation/native";
import { UseDispatch, useDispatch, useSelector } from "react-redux";
import { register } from "../redux/userSlice";

const SignUpPage = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();

  const { isLoading } = useSelector((state) => state.user);

  const handleRegister = () => {
    dispatch(register({ email, password }));
  };

  if (isLoading) {
    return <Loading />;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.signup}>SignUpPage</Text>
      <CustomTextInput
        title="Name"
        isSecureText={false}
        handleOnChangeText={setName}
        handleValue={name}
        handlePlaceholder="Enter your name"
      />
      <CustomTextInput
        title="Email"
        isSecureText={false}
        handleOnChangeText={setEmail}
        handleValue={email}
        handlePlaceholder="Enter your email"
      />
      <CustomTextInput
        title="Password"
        isSecureText={false}
        handleOnChangeText={setPassword}
        handleValue={password}
        handlePlaceholder="Enter your password"
      />

      <CustomButton
        buttonText="Sign Up"
        setWidth="80%"
        buttonColor="blue"
        pressedButtonColor="gray"
        handleOnPressed={handleRegister}
      />

      <Pressable onPress={() => navigation.navigate("Login")}>
        <Text style={{ fontWeight: "bold" }}>
          Already have an account? Login
        </Text>
      </Pressable>
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
