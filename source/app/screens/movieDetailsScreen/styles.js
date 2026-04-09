import { colors } from "../../../assets/styles/Colors";
import { dpBorderWidth, dpFont, dpHeight, dpImageHeight, dpImageWidth, dpSpacing, dpWidth } from "../../../assets/styles/Sizes";

const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: colors.white
    },
    viewImage: {
        width: dpImageWidth(200),
        height: dpImageHeight(200),
    },
    image: {
        height: dpImageHeight(450),
        width: '100%',
    },
    ratRow: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "rgba(0,0,0,0.5)",
        position: 'absolute',
        right: dpWidth(4),
        bottom: dpWidth(4),
        borderRadius: dpHeight(2),
        paddingHorizontal: dpWidth(1.8),
        paddingVertical: dpHeight(0.4),
        gap: dpWidth(0.2)
    },
    backbtn: {
        position: 'absolute',
        left: dpWidth(4),
        top: dpHeight(5),
        padding: dpHeight(1),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "rgba(0,0,0,0.35)",
        borderRadius: dpHeight(2),
        zIndex: 9999
    },
    ratingTxt: {
        fontSize: dpFont(14),
        color: colors.white,
        fontWeight: "600"
    },
    infoContainer: {
        paddingHorizontal: dpSpacing(4),
        paddingTop: dpHeight(1)
    },
    title: {
        fontSize: dpFont(18),
        color: colors.black,
        fontWeight: "600"
    },
    releasedDate: {
        fontSize: dpFont(18),
        color: colors.black,
        fontWeight: "500"
    },
    desc: {
        fontSize: dpFont(15),
        color: colors.black,
        fontWeight: "400"
    },
    overview: {
        fontSize: dpFont(14),
        color: colors.darkgrey,
        fontWeight: "400",
        lineHeight: dpHeight(2.4),
        paddingTop: dpFont(10)
    },
    uiBox: {
        borderWidth: dpBorderWidth(0.4),
        borderColor: colors.grey,
        paddingHorizontal: dpHeight(0.5),
        borderRadius: dpHeight(0.5),
        marginRight: dpHeight(1)
    },
    uaTxt: {
        fontSize: dpFont(13),
        color: colors.grey,
        fontWeight: "400"
    },
    releaseDate: {
        fontSize: dpFont(15),
        color: colors.grey,
        fontWeight: "400"
    },
    cast: {
        fontSize: dpFont(15),
        color: colors.darkgrey,
        fontWeight: "500",
        paddingTop: dpHeight(2),
        paddingBottom: dpHeight(0.5)
    },
    actor: {
        fontSize: dpFont(14),
        color: colors.black,
        fontWeight: "400",
        paddingVertical: dpHeight(0.2)
    },
    favBtn: {
        position: 'absolute',
        right: dpWidth(4),
        top: dpHeight(5),
        padding: dpHeight(0.6),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        borderRadius: dpHeight(1.5),
        zIndex: 9999
    },
})
export default styles;