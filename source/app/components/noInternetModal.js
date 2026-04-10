import React, { useEffect, useRef } from 'react';
import {
    Animated,
    Image,
    Modal,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { Images } from '../../assets/styles/Images';
import { dpBorderWidth, dpFont, dpHeight, dpImageHeight, dpImageWidth } from '../../assets/styles/Sizes';
import { useTheme } from '../hooks/useTheme';
import { colors } from '../../assets/styles/Colors';

const NoInternetModal = ({ visible, onClose }) => {
    const scaleAnim = useRef(new Animated.Value(0)).current;
    const theme = useTheme();
    const styles = getStyles(theme);

    useEffect(() => {
        if (visible) {
            Animated.spring(scaleAnim, {
                toValue: 1,
                friction: 6,
                useNativeDriver: true,
            }).start();
        } else {
            scaleAnim.setValue(0);
        }
    }, [visible]);

    return (
        <Modal transparent visible={visible} animationType="fade">
            <View style={styles.overlay}>
                <Animated.View style={[styles.modalBox, { transform: [{ scale: scaleAnim }] }]}>
                    <Image
                        source={Images.internetLost}
                        style={styles.image}
                        resizeMode="contain"
                    />

                    <Text style={styles.title}>
                        No internet, no popcorn 🍿
                    </Text>

                    <Text style={styles.subtitle}>
                        Reconnect to explore movies again.
                    </Text>

                    <TouchableOpacity style={styles.okBtn} onPress={onClose}>
                        <Text style={styles.okText}>Okay</Text>
                    </TouchableOpacity>
                </Animated.View>
            </View>
        </Modal>
    );
};

const getStyles = (theme) =>
    StyleSheet.create({
        overlay: {
            flex: 1,
            backgroundColor: theme.background === '#121212'   ? 'rgba(0,0,0,0.7)'  : 'rgba(255,255,255,0.8)',
            justifyContent: 'center',
            alignItems: 'center'
        },
        modalBox: {
            width: '85%',
            backgroundColor: theme.white,
            borderRadius: dpHeight(1.6),
            padding: dpHeight(1),
            alignItems: 'center',
            shadowColor: theme.black,
            shadowOffset: { width: 0, height: 6 },
            shadowOpacity: 0.2,
            shadowRadius: 8,
            elevation: 10,
            borderWidth: theme.background === "#121212" ? dpBorderWidth(0.2) : 0,
            borderColor: theme.background === "#121212" ? colors.white : "transparent",
        },
        title: {
            fontSize: dpFont(18),
            fontWeight: '600',
            textAlign: 'center',
            color: theme.black,
        },
        subtitle: {
            fontSize: dpFont(16),
            color: theme.grey,
            textAlign: 'center',
            marginBottom: dpHeight(3),
        },
        okBtn: {
            width: '100%',
            height: dpHeight(6),
            backgroundColor: theme.primary,
            borderRadius: dpHeight(1),
            justifyContent: 'center',
            alignItems: 'center',
        },
        okText: {
            color: theme.white,
            fontSize: dpFont(16),
            fontWeight: '500',
        },
        image: {
            width: dpImageWidth(180),
            height: dpImageHeight(140),
        },
    });

export default NoInternetModal;