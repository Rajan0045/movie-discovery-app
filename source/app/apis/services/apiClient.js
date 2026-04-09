import axios from "axios";
import Constant from "../constant";

export const apiClient = axios.create({
    baseURL: Constant.BASE_URL,
    timeout: 10000,
});

apiClient.interceptors.request.use((config) => {

  // ✅ Add API key FIRST
  config.params = {
    ...config.params,
    api_key: Constant.API_KEY,
  };

  // ✅ Then log
  console.log("🚀 API REQUEST:");
  console.log("URL:", config.baseURL + config.url);
  console.log("Params:", config.params);

  return config;
});

apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        console.log("API Error:", error?.response?.data);
        return Promise.reject(error);
    }
);