import { colors } from "../../../assets/styles/Colors";
import { dpImageHeight, dpImageWidth } from "../../../assets/styles/Sizes";

const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white
    },
    viewImage: {
        width: dpImageWidth(200),
        height: dpImageHeight(200),
    },
    image: {
        height: "100%",
        width: '100%',
    }
})
export default styles;