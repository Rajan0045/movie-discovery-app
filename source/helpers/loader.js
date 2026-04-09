import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { colors } from '../assets/styles/Colors';

const Loader = ({ loader = false , svg}) => {
    if (!loader) return null;

    return (
        <View style={styles.overlay}>
          <ActivityIndicator size="large" color={colors.primary} />;
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
