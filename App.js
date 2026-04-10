import NetInfo from '@react-native-community/netinfo';
import { NavigationContainer } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Provider } from "react-redux";
import NoInternetModal from './source/app/components/noInternetModal';
import { colors } from "./source/assets/styles/Colors";
import StackScreens from "./source/navigation/StackNavigator";
import { store } from "./source/redux/store";


const App = () => {

  const [isOffline, setIsOffline] = useState(false);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsOffline(!state.isConnected);
    });
    return unsubscribe;
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <NavigationContainer>
          <StatusBar backgroundColor={colors.white} barStyle={"dark-content"} />
          {/* //-------------------Stack Screens--------------------// */}
          <StackScreens />
        </NavigationContainer>
        <NoInternetModal
          visible={isOffline}
          onClose={() => setIsOffline(false)}
        />
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;