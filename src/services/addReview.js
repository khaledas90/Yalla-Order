import axios from "axios";

const API_BASE_URL = "https://insta-order-site.web-allsafeeg.com/api";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  (config) => {
    const lang = localStorage.getItem("i18nextLng"); // Get language from local storage
    const token = localStorage.getItem("token"); // Get the token from local storage

    if (lang) {
      config.headers["lang"] = lang;
    }

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`; // Include the token in the authorization header
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const addReview = async (doctoreId, comment, rate) => {
  try {
    const response = await apiClient.post(`/places/clinic/rate/add`, {
      doctore_id: doctoreId,
      comment,
      rate,
    });
    return response.data;
  } catch (error) {
    console.error("Error adding review:", error);
    throw error;
  }
};
