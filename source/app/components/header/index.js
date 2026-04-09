import { Image, Text, TouchableOpacity, View } from "react-native";
import { Images } from "../../../assets/styles/Images";
import styles from "./style";
import Icon from "react-native-vector-icons/Ionicons";
import globalStyles from "../../../assets/styles/GlobleStyles";

const Header = ({ title, left, onlogo, onLeftPress, navigation }) => {


  return (
    <View style={[styles.container, globalStyles.shadow]}>
      {/* Left Section */}
      <View style={styles.flexcontaineleft}>
        {left === 'back' ? (
          <TouchableOpacity style={{ width: '100%' }} onPress={() => onLeftPress ? onLeftPress() : navigation.goBack()}>
            <Icon name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>
        ) : (
          <View />
        )}
        {onlogo ? (
          <TouchableOpacity onPress={onlogo} >
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
      </View>
    </View>
  );
};



export default Header;
