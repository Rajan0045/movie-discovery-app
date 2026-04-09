const Constant = {
    debug: true,
    BASE_URL: "https://api.themoviedb.org/3",
    API_KEY: "ecc925a916a4267c1b439fffe48e1848",

    IMAGE_BASE_URL: "https://image.tmdb.org/t/p/w500",

    ENDPOINTS: {
        POPULAR: "/movie/popular",
        SEARCH: "/search/movie",
        DETAILS: (id) => `/movie/${id}`,
    },

    DEBOUNCE_TIME: 300,

    STORAGE_KEYS: {
        FAVORITES: "favorites_movies",
        CACHE_MOVIES: "cache_movies",
    },
};

export default Constant;