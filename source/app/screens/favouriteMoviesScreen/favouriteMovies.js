import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";
import {
    ActivityIndicator,
    FlatList,
    RefreshControl,
    StatusBar,
    View,
} from "react-native";
import { colors } from "../../../assets/styles/Colors";
import { Images } from "../../../assets/styles/Images";
import EmptyState from "../../components/emptyState";
import MovieCard from "../../components/MovieCard";
import { useTheme } from "../../hooks/useTheme";
import getStyles from "./styles";
import { getFavorites } from "../../../storage/favourite";
import Loader from "../../../helpers/loader";

const FavouritMovieScreen = ({ navigation }) => {
    const theme = useTheme();
    const styles = getStyles(theme);
    const isFocus = useIsFocused();

    //-------------------- local states --------------------------->
    const [favorites, setFavorites] = useState([]);
    const [loading, setLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);

    // ---------------- load favorites ---------------->>
    const loadFavorites = async () => {
        setLoading(true);
        const data = await getFavorites();
        setFavorites(data);
        setLoading(false);
    };

    // ---------------- on screen focus ---------------->>
    useEffect(() => {
        if (isFocus) {
            loadFavorites();
        }
    }, [isFocus]);

    // ---------------- handle refresh ---------------->>
    const onRefresh = async () => {
        setRefreshing(true);
        await loadFavorites();
        setRefreshing(false);
    };

    //------------------remove fav----------------------->>
    const removeFromList = (id) => {
        setFavorites((prev) => prev.filter((item) => item.id !== id));
    };

    //-------------- handle status bar color ----------------------------->
    const isDark = theme.background === "#121212" || theme.mode === "dark";

    return (
        <>
            <StatusBar
                backgroundColor={theme.background}
                barStyle={isDark ? "light-content" : "dark-content"}
            />

            <View style={styles.container}>
                {loading ? (
                    <Loader loader={loading} />
                ) : (
                    <FlatList
                        contentContainerStyle={styles.containerStyle}
                        columnWrapperStyle={styles.row}
                        numColumns={2}
                        data={favorites}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <MovieCard
                                movie={item}
                                title={item?.title}
                                description={item?.overview}
                                rating={
                                    item?.vote_average
                                        ? item.vote_average.toFixed(1)
                                        : null
                                }
                                image={item?.poster_path}
                                date={item?.release_date}
                                onPress={() =>
                                    navigation.navigate("movie_details", {
                                        movieId: item.id,
                                    })
                                }
                                onRemove={removeFromList}
                                isFocus={isFocus}
                                cardStyle={styles.cardStyle}
                            />
                        )}
                        refreshControl={
                            <RefreshControl
                                refreshing={refreshing}
                                onRefresh={onRefresh}
                                colors={[colors.primary]}
                            />
                        }
                        ListEmptyComponent={
                            !loading &&
                            <EmptyState
                                image={Images.emptyImg}
                                title="Nothing in your favorites yet 🎬"
                                subtitle="Explore movies and tap ❤️ to save them here"
                            />
                        }
                        showsVerticalScrollIndicator={false}
                    />
                )}
            </View>
        </>
    );
};

export default FavouritMovieScreen;