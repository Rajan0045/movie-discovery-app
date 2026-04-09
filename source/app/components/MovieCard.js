import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { colors } from "../../assets/styles/Colors";
import { Images } from "../../assets/styles/Images";
import { dpFont, dpHeight, dpImageHeight, dpSpacing, dpWidth } from "../../assets/styles/Sizes";
import { formatDate } from "../../helpers/General";
import Constant from "../apis/constant";

const MovieCard = ({ onPress, title, rating, image, date, description }) => {


  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image
        source={image ? { uri: `${Constant.IMAGE_BASE_URL}${image}` } : Images.logo}
        style={styles.image}
        resizeMode="cover"
      />
      {
        rating &&
        <View style={styles.ratRow}>
          <Icon name="star" size={dpFont(15)} color={colors.starYellow} />
          <Text style={styles.ratingTxt}>{rating}</Text>
        </View>
      }
      <View style={styles.infoContainer}>
        <View style={styles.headerRow}>
          <View style={styles.col1}>
            <Text style={styles.title} numberOfLines={1}>
              {title ? title : ""}
            </Text>
          </View>
          <View style={styles.col2}>
            <Text style={styles.releasedDate}>{formatDate(date)}</Text>
          </View>
        </View>
        <Text style={styles.desc} numberOfLines={2}>
          {description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default MovieCard;

const styles = StyleSheet.create({
  card: {
    borderRadius: dpHeight(2),
    padding: dpSpacing(2),
    shadowColor: colors.darkgrey,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    marginBottom: dpHeight(2),
    elevation: 4,
    backgroundColor: colors.white,
  },
  image: {
    width: "100%",
    height: dpImageHeight(240),
    borderRadius: dpHeight(1.5)
  },
  title: {
    fontSize: dpFont(16),
    color: colors.black,
    fontWeight: "bold",
  },
  desc: {
    fontSize: dpFont(14),
    color: colors.darkgrey,
    paddingTop: dpHeight(0.2)
  },
  ratRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "rgba(0,0,0,0.35)",
    position: 'absolute',
    right: dpWidth(4),
    top: dpWidth(4),
    borderRadius: dpHeight(2),
    paddingHorizontal: dpWidth(0.8),
    gap: dpWidth(0.2)
  },
  ratingTxt: {
    fontSize: dpFont(14),
    color: colors.white,
    fontWeight: "600"
  },
  infoContainer: {
    padding: dpHeight(1)
  },
  headerRow: {
    flexDirection: 'row'
  },
  col1: {
    flex: 0.76
  },
  col2: {
    flex: 0.24,
    alignItems: 'center'
  },
  releasedDate: {
    fontSize: dpFont(15),
    color: colors.grey
  }
});