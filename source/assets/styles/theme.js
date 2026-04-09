
import { createTheme } from '@rneui/themed';
import { colors } from './Colors';
import { Font } from './FontsFamily';
import { dpFont, dpHeight, dpSpacing, dpWidth } from './Sizes';


export const Theme = createTheme({
    components: {
        Input: {
            placeholderTextColor: colors.mediumgrey,
            selectionColor: colors.primary,
            containerStyle: {
                width: "100%",
                marginTop: dpHeight(1.8),
                marginBottom: dpHeight(-1.5),
                paddingLeft: 0,
                paddingRight: 0
            },
            inputContainerStyle: {
                paddingVertical: dpSpacing(1),
                paddingLeft: dpSpacing(6),
                paddingRight: dpSpacing(2),
                borderRadius: dpHeight(2),
                borderWidth: dpFont(0.7),
                borderColor: colors.border,
                height: dpHeight(7),
                width: '100%',
            },
            errorStyle: {
                color: colors.errorColor,
                fontFamily: Font.regular,
                fontSize: dpFont(12),
                marginTop: dpHeight(0.2),
                padding: 0,
            },
            inputStyle: {
                fontFamily: Font.regular,
                fontSize: dpFont(14),
                color: colors.black,
                marginLeft: dpSpacing(1),

            },
            leftIconContainerStyle: {

            },
        },
        Button: {
            type: 'solid',
            titleStyle: {
                color: colors.white,
                fontSize: dpFont(14),
                fontFamily: Font.regular,
                textAlign: 'center',
                alignItems: 'center',
                width: '100%',
            },
            buttonStyle: {
                paddingVertical: dpHeight(2.4),
                paddingHorizontal: dpWidth(5),
                backgroundColor: colors.primary
            },
            containerStyle: {
                borderRadius: dpHeight(2.5),
                marginTop: dpHeight(2.8),
                width: "100%"
            }
        }
    },
});
