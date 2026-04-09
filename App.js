import { NavigationContainer } from "@react-navigation/native";
import { Platform, StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import StackScreens from "./source/navigation/StackNavigator";
import { colors } from "./source/assets/styles/Colors";
import { Provider } from "react-redux";
import { store } from "./source/redux/store";

const App = () => {


  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <NavigationContainer>
          <StatusBar backgroundColor={colors.white} barStyle={"dark-content"} />
          {/* //-------------------Stack Screens--------------------// */}
          <StackScreens />
        </NavigationContainer>
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;