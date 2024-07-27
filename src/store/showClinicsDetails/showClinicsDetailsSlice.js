import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  clinicsDetails: [],
  error: null,
  loading: "idle",
};

export const actShowClinicsDetails = createAsyncThunk(
  "places/clinic/show/details",
  async (id, thunkAPI) => {
    const { rejectWithValue, signal } = thunkAPI;
    try {
      const res = await axios.get(
        `https://insta-order-site.web-allsafeeg.com/api/places/clinic/show/details/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            lang: localStorage.getItem("i18nextLng"),
          },
          signal,
        }
      );

      return res.data.data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

const showClinicsDetailsSlice = createSlice({
  name: "clinicsDetails",
  initialState: initialState,
  reducers: {
    categoriesRecordsCleanUp: (state) => {
      state.ClinicsCategoryById = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(actShowClinicsDetails.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(actShowClinicsDetails.fulfilled, (state, action) => {
        state.loading = "success";
        state.clinicsDetails = action.payload;
      })
      .addCase(actShowClinicsDetails.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload || action.error.message;
      });
  },
});

export default showClinicsDetailsSlice.reducer;
export const { categoriesRecordsCleanUp } = showClinicsDetailsSlice.actions;
