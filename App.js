import { NavigationContainer } from "@react-navigation/native";
import { Platform, StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

import StackScreens from "./source/navigation/StackNavigator";

const App = () => {


  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#FBFBFB" }} edges={Platform.OS === "android" ? ["top", "bottom"] : ["top"]}>
        <NavigationContainer>
          <StatusBar barStyle={"dark-content"} />
          {/* //-------------------Stack Screens--------------------// */}
          <StackScreens />
        </NavigationContainer>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default App;