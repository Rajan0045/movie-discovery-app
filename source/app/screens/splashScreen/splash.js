import { useEffect } from 'react';
import { Animated, Easing, Image, StatusBar, View } from 'react-native';
import styles from './styles';
import { Images } from '../../../assets/styles/Images';
import { colors } from '../../../assets/styles/Colors';

const SplashScreen = ({ navigation }) => {
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


  return (
      <View style={styles.main}>
        <Animated.View style={[styles.viewImage, imageStyle]}>
          <Image
            style={styles.image}
            source={Images.logo}
            resizeMode="contain"
          />
        </Animated.View>
      </View>
  );
};

export default SplashScreen;
