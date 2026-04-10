import { Platform, StyleSheet } from "react-native";
import { dpFont, dpHeight, dpWidth } from "../../../assets/styles/Sizes";

const getStyles = (theme) =>
    StyleSheet.create({
        container: {
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: theme.background,
            paddingTop: Platform.OS === "ios" ? dpHeight(6.5) : dpHeight(5),
            paddingBottom: dpHeight(1),
            paddingHorizontal: dpWidth(4),
            borderBottomWidth: theme.isDark ? 0.5 : 0,
            borderBottomColor: theme.isDark ? "rgba(255,255,255,0.2)" : "transparent",
        },
        flexcontaineleft: {
            flex: 0.275,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "flex-start",
        },
        logoImage: {
            height: dpHeight(5),
            width: dpWidth(15),
            resizeMode: "contain",
        },
        flexcontainerCenter: {
            flex: 0.45,
            alignItems: "center",
        },
        flexcontaineRight: {
            flex: 0.275,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "flex-end",
        },
        title: {
            fontSize: dpFont(16),
            color: theme.black,
            fontWeight: "600",
        },
        dotRight: {
            backgroundColor: theme.card,
            height: dpHeight(3.3),
            width: dpWidth(10),
            alignItems: "center",
            justifyContent: "center",
            borderRadius: dpWidth(5),
            borderWidth: theme.isDark ? 1 : 0,
            borderColor: theme.isDark ? "rgba(255,255,255,0.2)" : "transparent",
        },
    });

export default getStyles;