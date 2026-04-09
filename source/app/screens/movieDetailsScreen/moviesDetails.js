import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Image, ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { formatDate, formatReleaseDate, getCertification, getYearFD } from "../../../helpers/General";
import { MovieRepository } from "../../../redux/slices/movieRepository";
import Constant from "../../apis/constant";
import styles from "./styles";
import Icon from "react-native-vector-icons/MaterialIcons";
import { colors } from "../../../assets/styles/Colors";
import { dpFont, dpHeight } from "../../../assets/styles/Sizes";
import Loader from '../../../helpers/loader'
import globalStyles from "../../../assets/styles/GlobleStyles";

const MoviesDetailsScreen = (props) => {
    const route = useRoute();
    const { movieId } = route.params;

    //--------------------- states------------------------------------>>
    const [movieDetails, setMovieDetails] = useState(null);
    const [loader, setLoader] = useState(false);
    const [cast, setCast] = useState([]);

    //------------------ fetching movie details------------------------>>
    useEffect(() => {
        setLoader(true);
        fetchDetails();
    }, []);

    const fetchDetails = async () => {
        try {
            const response = await MovieRepository.getMovieDetails(movieId);
            if (response?.data) {
                setMovieDetails(response?.data);
                setCast(response?.data?.credits?.cast?.slice(0, 5) || []);
            } else {
                setMovieDetails(null);
            }
        } catch (error) {
            console.log("Details Error:", error);
        } finally {
            setLoader(false);
        }
    };


    return (
        <>
            {/* <StatusBar barStyle="light-content" translucent backgroundColor="transparent" /> */}
            {
                !loader && movieDetails &&
                <ScrollView style={styles.main}>
                    <View style={styles.card}>
                        <Image
                            source={{ uri: `${Constant.IMAGE_BASE_URL}${movieDetails.poster_path}` }}
                            style={styles.image}
                            resizeMode="cover"
                        />
                        <TouchableOpacity style={styles.backbtn} onPress={() => props.navigation.goBack()}>
                            <Icon name="arrow-back" size={dpFont(28)} color={colors.white} />
                        </TouchableOpacity>
                        <View style={styles.ratRow}>
                            <Icon name="star" size={dpFont(15)} color={colors.starYellow} />
                            <Text style={styles.ratingTxt}>
                                {movieDetails.vote_average?.toFixed(1) || "0.0"}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={styles.title}>{movieDetails.title}{' '}
                            {
                                movieDetails.release_date &&
                                <Text style={styles.releasedDate}>
                                    ({getYearFD(movieDetails.release_date)})
                                </Text>
                            }
                        </Text>

                        <Text style={styles.desc}>
                            🎭 {movieDetails.genres?.map((g) => g.name).join(", ") || "N/A"}
                        </Text>
                        <View style={[globalStyles.RowCeter,{marginTop:dpHeight(0.5)}]}>
                            <View style={styles.uiBox}>
                                <Text style={styles.uaTxt}>
                                    {getCertification(movieDetails?.adult)}
                                </Text>
                            </View>
                            <Text style={styles.releaseDate}>
                                {formatReleaseDate(movieDetails.release_date)} (IN)
                            </Text>

                        </View>

                        <Text style={[styles.overview]}>
                            {movieDetails.overview || "No description available"}
                        </Text>
                        <Text style={[styles.cast]}>
                            Cast
                        </Text>
                        {cast.length > 0 ? (
                            cast.map((actor) => (
                                <Text key={actor.id} style={styles.actor}>
                                    • {actor.name}
                                </Text>
                            ))
                        ) : (
                            <Text style={styles.desc}>No cast available</Text>
                        )}
                    </View>
                </ScrollView>
            }
            {
                loader &&
                <Loader loader={loader} />
            }
        </>
    );
};

export default MoviesDetailsScreen;