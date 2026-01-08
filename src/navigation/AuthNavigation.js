import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginPage from "../screens/LoginPage";
import SignUpPage from "../screens/SignUpPage";

const AuthStack = createNativeStackNavigator({
  screenOptions: { headerShown: false },
  initialRouteName: "Login",
  screens: {
    Login: { screen: LoginPage },
    Signup: { screen: SignUpPage },
  },
});

export default createStaticNavigation(AuthStack);
