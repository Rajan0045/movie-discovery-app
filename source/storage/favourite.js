import AsyncStorage from "@react-native-async-storage/async-storage";

const FAVORITES_KEY = "FAVORITES_KEY";

// Add favorites
export const saveFavorites = async (data) => {
  try {
    await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(data));
  } catch (error) {
    console.log("Save error:", error);
  }
};

// Get favorites
export const getFavorites = async () => {
  try {
    const data = await AsyncStorage.getItem(FAVORITES_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.log("Get error:", error);
    return [];
  }
};

// Remove all favorites (optional)
export const clearFavorites = async () => {
  try {
    await AsyncStorage.removeItem(FAVORITES_KEY);
  } catch (error) {
    console.log("Clear error:", error);
  }
};