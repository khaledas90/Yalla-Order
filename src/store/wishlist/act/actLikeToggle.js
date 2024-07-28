import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiAuthenticate from "../../../services/authentication/apiAuthenticate";

const actLikeToggle = createAsyncThunk(
  "wishlist/actLikeToggle",
  async ({ id }, thunkAPI) => {
    console.log("llllll");
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await apiAuthenticate.get(
        `/places/listfavproduct?type=clinic`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            lang: localStorage.getItem("i18nextLng"),
          },
        }
      );

      if (res.data.length > 0) {
        await apiAuthenticate.delete(
          `(/places/clinic/doctor/remove/fav/doctor`
        );

        return { type: "remove", id };
      } else {
        await apiAuthenticate.post(`/places/clinic/doctor/add/fav/doctor`);
        return { type: "add", id };
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(
          error.response ? error.response.data.message : error.message
        );
      } else {
        return rejectWithValue("An unexpected error occurred");
      }
    }
  }
);

export default actLikeToggle;
