import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomePage from "../screens/HomePage";
// import ProfilePage from "../screens/ProfilePage";

const UserNavigation = createNativeStackNavigator({
  screenOptions: { headerShown: false },
  initialRouteName: "Home",
  screens: {
    Home: { screen: HomePage },
    // Profile: { screen: ProfilePage },
  },
});

export default createStaticNavigation(UserNavigation);
