import { useColorScheme } from 'react-native';
import { DarkColors, LightColors } from '../../assets/styles/Colors';

export const useTheme = () => {
    const scheme = useColorScheme();

    return scheme === 'dark' ? DarkColors : LightColors;
};