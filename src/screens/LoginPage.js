import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEmail, setPassword, setIsLoading } from "../redux/userSlice";
import { Loading, CustomTextInput, CustomButton } from "../components";
import { useNavigation } from "@react-navigation/native";

const LoginPage = ({}) => {
  const { email, password, isLoading } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome</Text>
      {/* <Image  source={require('../')} style={styles.image}/> */}
      <CustomTextInput
        title="Email"
        isSecureText={false}
        handleOnChangeText={(text) => dispatch(setEmail(text))}
        handleValue={email}
        handlePlaceholder="Enter your email"
      />
      <CustomTextInput
        title="Password"
        isSecureText={true}
        handleOnChangeText={(text) => dispatch(setPassword(text))}
        handleValue={password}
        handlePlaceholder="Enter your password"
      />

      <CustomButton
        buttonText="Login"
        setWidth="80%"
        handleOnPressed={() => dispatch(setIsLoading(true))}
        buttonColor="blue"
        pressedButtonColor="grey"
      />
      <CustomButton
        buttonText="SignUp"
        setWidth="30%"
        handleOnPressed={() => navigation.navigate("Signup")}
        buttonColor="blue"
        pressedButtonColor="grey"
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
