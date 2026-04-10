import { StyleSheet } from "react-native";
import { dpBorderWidth, dpHeight, dpSpacing, dpWidth } from "../../../assets/styles/Sizes";

const getStyles = (theme) =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.background,
        },
        center: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: theme.background,
        },
        containerStyle: {
            flexGrow: 1,
            paddingTop: dpHeight(1),
            paddingHorizontal: dpSpacing(3),
        },
        row: {
            justifyContent: "space-between",
            gap: dpWidth(1.8),
        },
        searchView: {
            paddingHorizontal: dpSpacing(3),
            paddingTop: dpHeight(1),
            paddingBottom: dpHeight(0.5),
        },
        imputStyle: {
            borderWidth: dpBorderWidth(0.4),
            borderColor: theme.grey2,
            backgroundColor: theme.white,
            paddingVertical: dpHeight(1.7),
            paddingHorizontal: dpHeight(4.4),
            borderRadius: dpHeight(1.5),
            color: theme.black1,
        },
        viewSearchIcon: {
            position: "absolute",
            zIndex: 9999,
            top: dpHeight(2.8),
            left: dpHeight(2.6),
        },
        viewSearchIndi: {
            position: "absolute",
            zIndex: 9999,
            top: dpHeight(2.8),
            right: dpHeight(2.6),
        },
    });

export default getStyles;