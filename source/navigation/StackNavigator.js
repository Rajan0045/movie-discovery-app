import { CardStyleInterpolators, createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import { Platform } from "react-native";
import HomeScreen from "../app/screens/homeScreen/home";
import FavouritMovieScreen from "../app/screens/favouriteMoviesScreen/favouriteMovies"
import SplashScreen from "../app/screens/splashScreen/splash";
import Header from "../app/components/header";
import MoviesDetailsScreen from "../app/screens/movieDetailsScreen/moviesDetails";

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
      options={({ navigation }) => ({
        header: () => (
          <Header
            title="Popular Movies"
            navigation={navigation}
            onlogo={true}
            right={true}
            onBack={null}
          />
        ),
      })}
    />
    <Stack.Screen
      name="favourit_movies"
      component={FavouritMovieScreen}
      options={({ navigation }) => ({
        header: () => (
          <Header
            title="My Favourites"
            navigation={navigation}
            left={"back"}
            onBack={null}
          />
        ),
      })}
    />
    <Stack.Screen
      name="movie_details"
      component={MoviesDetailsScreen}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

export default StackScreens;