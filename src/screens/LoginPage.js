import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setEmail,
  setPassword,
  setIsLoading,
  setLogin,
} from "../redux/userSlice";
import { Loading, CustomTextInput, CustomButton } from "../components";
import { useNavigation } from "@react-navigation/native";
import { login } from "../redux/userSlice";

const LoginPage = ({}) => {
  const { isLoading } = useSelector((state) => state.user);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome</Text>
      <Image
        source={require("../../assets/images/login.png")}
        style={styles.image}
      />
      <CustomTextInput
        title="Email"
        isSecureText={false}
        handleOnChangeText={(email) => setEmail(email)}
        handleValue={email}
        handlePlaceholder="Enter your email"
      />
      <CustomTextInput
        title="Password"
        isSecureText={true}
        handleOnChangeText={(password) => setPassword(password)}
        handleValue={password}
        handlePlaceholder="Enter your password"
      />

      <CustomButton
        buttonText="Login"
        setWidth="80%"
        handleOnPressed={() => dispatch(login({ email, password }))}
        buttonColor="blue"
        pressedButtonColor="grey"
      />
      <CustomButton
        buttonText="SignUp"
        setWidth="30%"
        handleOnPressed={() => navigation.navigate("Signup")}
        buttonColor="gray"
        pressedButtonColor="lightgrey"
      />

      {isLoading ? (
        <Loading changeIsLoading={() => dispatch(setIsLoading(false))} />
      ) : null}
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "tomato",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  welcome: {
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 30,
    color: "white",
  },
});
