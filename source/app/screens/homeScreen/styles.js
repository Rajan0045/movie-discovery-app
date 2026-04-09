import { StyleSheet } from "react-native";
import { colors } from "../../../assets/styles/Colors";
import { dpHeight, dpSpacing } from "../../../assets/styles/Sizes";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    containerStyle: {
        flexGrow: 1,
        paddingTop: dpHeight(2),
        paddingHorizontal: dpSpacing(4)
    }
});

export default styles