import { StyleSheet } from "react-native";
import { colors } from "../../../assets/styles/Colors";
import { dpHeight, dpSpacing, dpWidth } from "../../../assets/styles/Sizes";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.background
    },
    containerStyle: {
        flexGrow: 1,
        paddingTop: dpHeight(2),
        paddingHorizontal: dpSpacing(3)
    },
    row: {
        justifyContent: "space-between",
        gap: dpWidth(1.5)
    }
});

export default styles