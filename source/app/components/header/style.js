import { Platform, StyleSheet } from "react-native";
import { colors } from "../../../assets/styles/Colors";
import { dpFont, dpHeight, dpWidth } from "../../../assets/styles/Sizes";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: colors.white,
        paddingTop: Platform.OS === "ios" ? dpHeight(6.5) : dpHeight(1.8),
        paddingBottom: dpHeight(1.8),
        paddingHorizontal: dpWidth(4)
    },
    flexcontaineleft: {
        flex: 0.275,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "flex-start"
    },
    logoImage: {
        height: dpHeight(5),
        width: dpWidth(18),
        resizeMode: "contain"
    },
    flexcontainerCenter: {
        flex: 0.45,
        alignItems: "center"
    },
    flexcontaineRight: {
        flex: 0.275,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "flex-end"
    },
    title: {
        fontSize: dpFont(16),
        color: colors.black,
        fontWeight: "600"
    },
    dotRight: {
        backgroundColor: colors.white,
        height: dpHeight(3.3),
        width: dpWidth(10),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: dpWidth(5)
    }
});
export default styles