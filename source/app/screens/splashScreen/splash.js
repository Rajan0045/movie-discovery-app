import { useEffect } from 'react';
import { Animated, Easing, Image, StatusBar, View } from 'react-native';
import { Images } from '../../../assets/styles/Images';
import { useTheme } from '../../hooks/useTheme';
import getStyles from './styles';

const SplashScreen = ({ navigation }) => {
  //---------------------- theme handle ----------------------------->>
  const theme = useTheme();
  const styles = getStyles(theme);

  const animatedValue = new Animated.Value(0);

  //---------------------------- fade animation ----------------------------->>
  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 2000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }, []);

  const imageStyle = {
    opacity: animatedValue,
  };

  //------------------- navigate to home after 2 seconds------------------------>>
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("home")
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  //-------------- handle status bar color ----------------------------->>
  const isDark = theme.background === "#121212" || theme.mode === "dark";

  return (
    <>
      <StatusBar
        backgroundColor={theme.background}
        barStyle={isDark ? "light-content" : "dark-content"}
      />
      <View style={styles.main}>
        <Animated.View style={[styles.viewImage, imageStyle]}>
          <Image
            style={styles.image}
            source={Images.logo}
            resizeMode="contain"
          />
        </Animated.View>
      </View>
    </>
  );
};

export default SplashScreen;
