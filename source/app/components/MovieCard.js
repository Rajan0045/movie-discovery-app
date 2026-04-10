import React, { useEffect, useState, useCallback } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Images } from "../../assets/styles/Images";
import {
  dpBorderWidth,
  dpFont,
  dpHeight,
  dpImageHeight,
  dpSpacing,
  dpWidth,
} from "../../assets/styles/Sizes";
import { formatDate } from "../../helpers/General";
import Constant from "../apis/constant";
import { getFavorites, saveFavorites } from "../../storage/favourite";
import { useTheme } from "../hooks/useTheme";
import { colors } from "../../assets/styles/Colors";

const MovieCard = ({
  movie,
  onPress,
  title,
  rating,
  image,
  date,
  description,
  isFocus,
  onRemove,
  cardStyle
}) => {
  const theme = useTheme();
  const styles = getStyles(theme);

  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    checkFavorite();
  }, [isFocus]);

  const checkFavorite = async () => {
    const favs = await getFavorites();
    const exists = favs.some((item) => item.id === movie?.id);
    setIsFav(exists);
  };

  const handleFav = useCallback(async () => {
    const favs = await getFavorites();

    let updatedFavs;
    if (isFav) {
      updatedFavs = favs.filter((item) => item.id !== movie.id);
      onRemove && onRemove(movie.id);
    } else {
      updatedFavs = [...favs, movie];
    }

    await saveFavorites(updatedFavs);
    setIsFav(!isFav);
  }, [isFav, movie]);

  return (
    <TouchableOpacity style={cardStyle ? cardStyle : styles.card} onPress={onPress}>
      <Image
        source={
          image
            ? { uri: `${Constant.IMAGE_BASE_URL}${image}` }
            : Images.logo
        }
        style={styles.image}
        resizeMode="cover"
      />

      {/* ⭐ Rating */}
      {rating && (
        <View style={styles.ratRow}>
          <Icon name="star" size={dpFont(15)} color={theme.starYellow} />
          <Text style={styles.ratingTxt}>{rating}</Text>
        </View>
      )}

      {/* ❤️ Favorite */}
      <TouchableOpacity style={styles.favBtn} onPress={handleFav}>
        <Icon
          name={isFav ? "favorite" : "favorite-border"}
          size={dpFont(18)}
          color={isFav ? theme.red : theme.lightgrey}
        />
      </TouchableOpacity>

      {/* 📄 Info */}
      <View style={styles.infoContainer}>
        <Text style={styles.title} numberOfLines={1}>
          {title || ""}
        </Text>

        <Text style={styles.releasedDate}>
          {date ? formatDate(date) : ""}
        </Text>

        <Text style={styles.desc} numberOfLines={2}>
          {description || ""}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(MovieCard);

const getStyles = (theme) =>
  StyleSheet.create({
    card: {
      flex: 1,
      borderRadius: dpHeight(2),
      padding: dpSpacing(2),
      marginBottom: dpHeight(1),
      elevation: 4,
      backgroundColor: theme.background,
      shadowColor: colors.black,
      shadowOffset: { width: 1, height: 1 },
      shadowOpacity: 0.25,
      shadowRadius: 3,
      borderWidth: theme.background === "#121212" ? dpBorderWidth(0.3) : 0,
      borderColor: theme.background === "#121212" ? colors.white : "transparent",
    },
    image: {
      width: "100%",
      height: dpImageHeight(220),
      borderRadius: dpHeight(1.5),
    },
    title: {
      fontSize: dpFont(16),
      color: theme.black,
      fontWeight: "bold",
    },
    desc: {
      fontSize: dpFont(14),
      color: theme.grey,
      paddingTop: dpHeight(0.2),
    },
    ratRow: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "rgba(0,0,0,0.4)",
      position: "absolute",
      left: dpWidth(4),
      top: dpWidth(4),
      borderRadius: dpHeight(2),
      paddingHorizontal: dpWidth(1),
      paddingVertical: dpHeight(0.4),
      gap: dpWidth(0.5),
    },
    ratingTxt: {
      fontSize: dpFont(14),
      color: theme.white,
      fontWeight: "600",
    },
    infoContainer: {
      padding: dpHeight(0.3),
    },
    releasedDate: {
      fontSize: dpFont(14),
      color: theme.grey,
    },
    favBtn: {
      position: "absolute",
      right: dpWidth(4),
      top: dpWidth(4),
      padding: dpHeight(0.5),
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "rgba(255,255,255,0.6)",
      borderRadius: dpHeight(1.2),
      zIndex: 9999,
    },
  });