import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { colors } from "../../assets/styles/Colors";
import { Images } from "../../assets/styles/Images";
import { dpFont, dpHeight, dpImageHeight, dpSpacing, dpWidth } from "../../assets/styles/Sizes";
import { formatDate } from "../../helpers/General";
import Constant from "../apis/constant";
import { getFavorites, saveFavorites } from "../../storage/favourite";
import { useEffect, useState } from "react";

const MovieCard = ({ movie, onPress, title, rating, image, date, description, isFocus }) => {
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    checkFavorite();
  }, [isFocus]);

  //---------------get favourite and check fav exits in storage----------------->>
  const checkFavorite = async () => {
    const favs = await getFavorites();
    const exists = favs.some((item) => item.id === movie?.id);
    setIsFav(exists);
  };

  //------------------- add/remove to fav---------------------------------------->>
  const handleFav = async () => {
    const favs = await getFavorites();
    let updatedFavs;
    if (isFav) {
      updatedFavs = favs.filter((item) => item.id !== movie.id);
    } else {
      updatedFavs = [...favs, movie];
    }
    await saveFavorites(updatedFavs);
    setIsFav(!isFav);
  };


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

      <TouchableOpacity style={styles.favBtn} onPress={() => handleFav(movie)}>
        <Icon
          name={isFav ? "favorite" : "favorite-border"}
          size={dpFont(18)}
          color={isFav ? colors.red : colors.lightgrey}
        />
      </TouchableOpacity>

      <View style={styles.infoContainer}>
        <Text style={styles.title} numberOfLines={1}>
          {title ? title : ""}
        </Text>
        <Text style={styles.releasedDate}>{formatDate(date)}</Text>
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
    flex: 1,
  },
  image: {
    width: "100%",
    height: dpImageHeight(220),
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
    left: dpWidth(4),
    top: dpWidth(4),
    borderRadius: dpHeight(2),
    paddingHorizontal: dpWidth(1.),
    paddingVertical: dpHeight(0.4),
    gap: dpWidth(0.5)
  },
  ratingTxt: {
    fontSize: dpFont(14),
    color: colors.white,
    fontWeight: "600"
  },
  infoContainer: {
    padding: dpHeight(0.3)
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
    fontSize: dpFont(14),
    color: colors.grey
  },
  favBtn: {
    position: 'absolute',
    right: dpWidth(4),
    top: dpWidth(4),
    padding: dpHeight(0.5),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderRadius: dpHeight(1.2),
    zIndex: 9999
  },
});