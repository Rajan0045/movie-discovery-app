import { StyleSheet } from "react-native";
import { dpBorderWidth, dpHeight, dpSpacing, dpWidth } from "../../../assets/styles/Sizes";
import { colors } from "../../../assets/styles/Colors";

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
        cardStyle: {
            width: "49%",
            borderRadius: dpHeight(2),
            padding: dpSpacing(2),
            marginBottom: dpHeight(1),
            elevation: 4,
            backgroundColor: theme.background,
            shadowColor: colors.black,
            shadowOffset: { width: 1, height: 1 },
            shadowOpacity: 0.25,
            shadowRadius: 3,
            borderWidth: theme.background === "#121212" ? dpBorderWidth(0.3) : 0,
            borderColor: theme.background === "#121212" ? colors.white : "transparent",
        }
    });

export default getStyles;