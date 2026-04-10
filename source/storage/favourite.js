import AsyncStorage from "@react-native-async-storage/async-storage";

const FAVORITES_KEY = "FAVORITES_KEY";

//---------------------add to favorites----------------------->>
export const saveFavorites = async (data) => {
  try {
    await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(data));
  } catch (error) {
    console.log("Save error:", error);
  }
};

// -----------------get  fav list -------------------------------->>
export const getFavorites = async () => {
  try {
    const data = await AsyncStorage.getItem(FAVORITES_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.log("Get error:", error);
    return [];
  }
};