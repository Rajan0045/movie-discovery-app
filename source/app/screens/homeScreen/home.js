import { useEffect } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { colors } from "../../../assets/styles/Colors";
import globalStyles from "../../../assets/styles/GlobleStyles";
import { fetchMovies } from "../../../redux/slices/movieSlice";
import MovieCard from "../../components/MovieCard";
import styles from "./styles";

const HomeScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const { movies, page, loading, error } = useSelector((state) => state.movies);

    console.log(movies, "<<------movies-----------");
    console.log(page, "----page");

    useEffect(() => {
        dispatch(fetchMovies(1));
    }, []);


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

