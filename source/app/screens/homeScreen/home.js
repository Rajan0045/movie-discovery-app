import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, RefreshControl, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { colors } from "../../../assets/styles/Colors";
import globalStyles from "../../../assets/styles/GlobleStyles";
import { fetchMovies } from "../../../redux/slices/movieSlice";
import MovieCard from "../../components/MovieCard";
import styles from "./styles";
import { useIsFocused } from "@react-navigation/native";

const HomeScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const { movies, page, loading, error } = useSelector((state) => state.movies);
    const [refreshing, setRefreshing] = useState(false);
    const isFocus = useIsFocused();


    //------------------ fetch movie list ------------------------>>
    useEffect(() => {
        dispatch(fetchMovies(1));
    }, []);


    //--------------- on refresh------------------->>
    const onRefresh = () => {
        setRefreshing(true);
        dispatch(fetchMovies(1));
        setRefreshing(false);
    };

    //------------------- pagination ----------------->>
    const loadMore = () => {
        if (!loading) {
            dispatch(fetchMovies(page));
        }
    };

    const renderFooter = () => {
        if (!loading) return null;
        return <ActivityIndicator size="large" color={colors.primary} />;
    };


    if (error) {
        return (
            <View style={styles.center}>
                <Text style={globalStyles.errorMsg}>{error}</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                contentContainerStyle={styles.containerStyle}
                columnWrapperStyle={styles.row}
                numColumns={2}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                        colors={[colors.primary]}
                    />
                }
                data={movies || []}
                keyExtractor={(item, index) => index?.toString()}
                renderItem={({ item }) => (
                    <MovieCard
                        movie={item}
                        title={item?.title}
                        description={item?.overview}
                        rating={item?.vote_average ? (item?.vote_average).toFixed(1) : null}
                        image={item?.poster_path}
                        date={item?.release_date}
                        onPress={() => navigation.navigate("movie_details", { movieId: item.id })}
                        isFocus={isFocus}
                    />
                )}
                onEndReachedThreshold={0.5}
                initialNumToRender={5}
                maxToRenderPerBatch={10}
                removeClippedSubviews={true}
                onEndReached={loadMore}
                ListFooterComponent={renderFooter}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

export default HomeScreen;

