import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, RefreshControl, StatusBar, TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { useDispatch, useSelector } from "react-redux";
import { colors } from "../../../assets/styles/Colors";
import { Images } from "../../../assets/styles/Images";
import { dpFont } from "../../../assets/styles/Sizes";
import { clearSearch, fetchMovies, searchMovies } from "../../../redux/slices/movieSlice";
import EmptyState from "../../components/emptyState";
import MovieCard from "../../components/MovieCard";
import { useDebounce } from "../../hooks/useDebounce";
import { useTheme } from "../../hooks/useTheme";
import getStyles from "./styles";


const HomeScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const theme = useTheme();
    const styles = getStyles(theme);

    //-----------------redux states---------------------------->>
    const {
        movies,
        searchResults,
        page,
        searchPage,
        loading,
        searchLoading,
        error,
        isSearching,
    } = useSelector((state) => state.movies);

    //-------------------- local states--------------------------->>
    const [query, setQuery] = useState("");
    const [refreshing, setRefreshing] = useState(false);
    const isFocus = useIsFocused();

    const debouncedQuery = useDebounce(query, 300);

    // ---------------- fetch movies ---------------->>
    useEffect(() => {
        dispatch(fetchMovies(1));
    }, []);

    // ---------------- handle search ------------------->>
    useEffect(() => {
        if (debouncedQuery.trim().length > 0) {
            dispatch(searchMovies({ query: debouncedQuery, page: 1 }));
        } else {
            dispatch(clearSearch());
        }
    }, [debouncedQuery]);

    // ----------------handlee on refresh ---------------->>
    const onRefresh = () => {
        setQuery("")
        setRefreshing(true);
        if (isSearching) {
            dispatch(searchMovies({ query, page: 1 }));
        } else {
            dispatch(fetchMovies(1));
        }
        setRefreshing(false);
    };

    // ----------------handle pagination ---------------->>
    const loadMore = () => {
        if (loading || searchLoading) return;
        if (isSearching) {
            dispatch(searchMovies({ query, page: searchPage }));
        } else {
            dispatch(fetchMovies(page));
        }
    };

    const renderFooter = () => {
        if (!loading) return null;
        return <ActivityIndicator size="large" color={colors.primary} />;
    };

    const dataToRender = isSearching ? searchResults : movies;

    return (
        <>
            <StatusBar backgroundColor={colors.white} barStyle={"dark-content"} />
            <View style={styles.container}>
                {/* ---------------- search bar ---------------- */}
                <View style={styles.searchView}>
                    <TextInput
                        placeholder="Search movies..."
                        value={query}
                        onChangeText={setQuery}
                        placeholderTextColor={colors.placeholder}
                        style={styles.imputStyle}
                        selectionColor={colors.primary}
                    />
                    <View style={styles.viewSearchIcon}>
                        <Icon name="search" size={dpFont(22)} color={colors.placeholder} />
                    </View>
                    {searchLoading && (
                        <View style={styles.viewSearchIndi}>
                            <ActivityIndicator size="small" color={colors.primary} />
                        </View>
                    )}
                </View>

                {/* ---------------- movie Listing ---------------- */}
                <FlatList
                    contentContainerStyle={styles.containerStyle}
                    columnWrapperStyle={styles.row}
                    numColumns={2}
                    data={dataToRender}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <MovieCard
                            movie={item}
                            title={item?.title}
                            description={item?.overview}
                            rating={item?.vote_average ? item.vote_average.toFixed(1) : null}
                            image={item?.poster_path}
                            date={item?.release_date}
                            onPress={() => navigation.navigate("movie_details", { movieId: item.id })}
                            isFocus={isFocus}
                        />
                    )}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                            colors={[colors.primary]}
                        />
                    }
                    ListEmptyComponent={!loading && <EmptyState image={Images.emptyImg} />}
                    onEndReachedThreshold={0.5}
                    onEndReached={loadMore}
                    ListFooterComponent={renderFooter}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </>
    );
};

export default HomeScreen;