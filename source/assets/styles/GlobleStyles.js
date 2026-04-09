import { StyleSheet } from 'react-native';
import { colors } from './Colors';
import {
  dpFont,
  dpHeight,
  dpImageHeight,
  dpImageWidth,
  dpWidth,
} from './Sizes';

const globalStyles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.background,
  },
  Container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
    paddingHorizontal: dpWidth(5),
  },
  paddingHorizontal: {
    paddingHorizontal: dpWidth(5)
  },
  image: {
    height: '100%',
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  flexGrow: {
    flexGrow: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Row: {
    flexDirection: 'row',
  },
  RowCeter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Row2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  LogoView: {
    height: dpImageHeight(65),
    width: dpImageWidth(106),
  },
  LogoImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
    tintColor: colors.primary,
  },
  HeadText: {
    fontSize: dpFont(28),
    color: colors.black,
    marginBottom: dpHeight(1),
  },
  line: {
    width: '100%',
    backgroundColor: colors.border,
    height: dpHeight(0.12),
    marginTop: dpHeight(2.8),
  },
  shadow: {
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 6,
  },
  errorMsg: {
    fontSize: dpFont(12),
    color: colors.red,
  }
});

export default globalStyles;


