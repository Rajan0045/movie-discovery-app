import { StyleSheet } from "react-native";
import { dpImageHeight, dpImageWidth } from "../../../assets/styles/Sizes";

const getStyles = (theme) => StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.background,
    },
    viewImage: {
        width: dpImageWidth(200),
        height: dpImageHeight(200),
    },
    image: {
        height: "100%",
        width: '100%',
    }
});

export default getStyles;