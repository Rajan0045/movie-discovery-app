import moment from "moment";

export const formatDate = (date) => {
    if (!date) return "";

    return moment(date).format("DD MMM, YY");
};

export const getYearFD = (date) => {
    if (!date) return "";

    return moment(date).format("YYYY");
};

export const formatReleaseDate = (date) => {
    if (!date) return "";
    return new Date(date).toLocaleDateString("en-IN");
};

export const getCertification = (movie) => {
  if (movie?.adult) return "A (18+)";
  return "U/A";
};