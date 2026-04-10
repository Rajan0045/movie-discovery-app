import { Image, Text, TouchableOpacity, View } from "react-native";
import { Images } from "../../../assets/styles/Images";
import Icon from "react-native-vector-icons/Ionicons";
import globalStyles from "../../../assets/styles/GlobleStyles";
import { useTheme } from "../../hooks/useTheme";
import getStyles from "./style";
import { colors } from "../../../assets/styles/Colors";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { dpFont } from "../../../assets/styles/Sizes";
import { useNavigation } from "@react-navigation/native";


const Header = ({ title, left, onlogo, onLeftPress, right }) => {
  const theme = useTheme();
  const styles = getStyles(theme);
  const navigation = useNavigation();

  return (
    <View style={[styles.container, globalStyles.shadow]}>
      {/* Left Section */}
      <View style={styles.flexcontaineleft}>
        {left === 'back' ? (
          <TouchableOpacity style={{ width: '100%' }} onPress={() => onLeftPress ? onLeftPress() : navigation.goBack()}>
            <Icon name="arrow-back" size={24} color={theme.black} />
          </TouchableOpacity>
        ) : (
          <View />
        )}
        {onlogo ? (
          <TouchableOpacity>
            <Image source={Images.logo} style={styles.logoImage} resizeMode="contain" />
          </TouchableOpacity>
        ) : (
          <View />
        )}
      </View>
      {/* Center Section */}
      <View style={styles.flexcontainerCenter}>
        <Text style={styles.title} numberOfLines={1}>{title}</Text>
      </View>
      {/* Right Section */}
      <View style={styles.flexcontaineRight}>
        {
          right &&
          <TouchableOpacity style={{ width: '50%', alignItems: 'flex-end' }} onPress={() => navigation.navigate("favourit_movies")} >
            <MaterialIcons
              name={"favorite"}
              size={dpFont(18)}
              color={colors.primary}
            />
          </TouchableOpacity>
        }
      </View>
    </View>
  );
};

export default Header;
