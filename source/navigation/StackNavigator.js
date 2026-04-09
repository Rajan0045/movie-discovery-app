import { CardStyleInterpolators, createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import { Platform } from "react-native";
import HomeScreen from "../app/screens/homeScreen/home";
import SplashScreen from "../app/screens/splashScreen/splash";

const Stack = createStackNavigator();

const StackScreens = () => (
  <Stack.Navigator
    initialRouteName="splash"
    screenOptions={{
      ...TransitionPresets.SlideFromRightIOS,
      gestureEnabled: true,
      presentation: Platform.OS === "android" ? "modal" : "card",
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}
  >
    <Stack.Screen
      name="splash"
      component={SplashScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="home"
      component={HomeScreen}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

export default StackScreens;