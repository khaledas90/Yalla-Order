import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiAuthenticate from "../../services/authentication/apiAuthenticate";

const initialState = {
  error: null,
  loading: "pending",
  favClinic: [],
};

const actFav = createAsyncThunk(
  "places/listfavproduct?type=clinic",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await apiAuthenticate.get(
        "/places/listfavproduct?type=clinic",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            lang: localStorage.getItem("i18nextLng"),
          },
        }
      ); // Replace with your actual API endpoint

      return res.data.data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

const favSlice = createSlice({
  name: "favClinic",
  initialState,
  reducers: {
    favCleanUp: (state) => {
      state.favClinic = []; // Corrected to match the state property name
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actFav.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actFav.fulfilled, (state, action) => {
      state.loading = "success";

      state.favClinic = action.payload;
    });
    builder.addCase(actFav.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload || action.error.message;
    });
  },
});

export default favSlice.reducer;
export { actFav };
export const { favCleanUp } = favSlice.actions;
