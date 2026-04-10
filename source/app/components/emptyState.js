import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Images } from "../../assets/styles/Images";
import { dpFont, dpHeight, dpImageHeight, dpImageWidth } from "../../assets/styles/Sizes";
import { useTheme } from "../hooks/useTheme";

const EmptyState = ({
    title = "No Movies Found",
    subtitle = "Try searching something else",
    image,
    back,
    navigation
}) => {
    const theme = useTheme();
    const styles = getStyles(theme);

    return (
        <View style={styles.container}>
            <Image
                source={image || Images.emptyImg}
                style={styles.image}
                resizeMode="contain"
            />

            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>

            {back && (
                <TouchableOpacity style={styles.okBtn} onPress={() => navigation.goBack()} >
                    <Text style={styles.okText}>Go to home</Text>
                </TouchableOpacity>
            )}
        </View>
    );
};

export default EmptyState;

const getStyles = (theme) =>
    StyleSheet.create({
        container: {
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            paddingHorizontal: dpHeight(1),
            backgroundColor: theme.background
        },
        image: {
            width: dpImageWidth(200),
            height: dpImageHeight(150),
            marginBottom: dpHeight(1),
        },
        title: {
            fontSize: dpFont(18),
            fontWeight: "600",
            color: theme.black1,
            textAlign: "center",
        },
        subtitle: {
            fontSize: dpFont(14),
            marginTop: dpHeight(0.5),
            color: theme.grey,
            textAlign: "center",
        },
        okBtn: {
            position: 'absolute',
            bottom: dpHeight(2),
            width: '100%',
            height: dpHeight(6),
            backgroundColor: theme.primary,
            borderRadius: dpHeight(1.4),
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
        },
        okText: {
            color: theme.white,
            fontSize: dpFont(16),
            fontWeight: '500',
        },
    });