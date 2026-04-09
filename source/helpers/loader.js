import LottieView from 'lottie-react-native';
import { StyleSheet, View } from 'react-native';

const Loader = ({ loader = false , svg}) => {
    if (!loader) return null;

    return (
        <View style={styles.overlay}>
            <LottieView
                style={{ width: 220, height: 220 }}
                source={svg ? svg : require('../assets/SVG/loader.json')}
                autoPlay
                loop
            />
        </View>
    );
};

const styles = StyleSheet.create({
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(255,255,255,0.8)',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999999999,
    },
});

export default Loader;
