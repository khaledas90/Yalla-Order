import { addReview as apiAddReview } from "../../services/apiRestaurant";
export const addReview = async (clinicId, comment, rate) => {
  try {
    const response = await apiAddReview(clinicId, comment, rate);
    return response.data;
  } catch (error) {
    console.error("Error adding review:", error);
    throw error;
  }
};
