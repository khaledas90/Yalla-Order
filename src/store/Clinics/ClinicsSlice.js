import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  error: null,
  loading: "pending",
  clinics: [],
};

const actClinics = createAsyncThunk(
  "category/clinic/list",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.get(
        "https://insta-order-site.web-allsafeeg.com/api/category/clinic/list",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            lang: localStorage.getItem("i18nextLng"),
          },
        }
      ); // Replace with your actual API endpoint
      return res.data.data; // Assuming the API response has a 'data' field that contains the clinics data
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

const clinicsSlice = createSlice({
  name: "Clinics",
  initialState,
  reducers: {
    categoriesRecordsCleanUp: (state) => {
      state.clinics = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actClinics.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actClinics.fulfilled, (state, action) => {
      state.loading = "success";

      state.clinics = action.payload;
    });
    builder.addCase(actClinics.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload || action.error.message;
    });
  },
});

export default clinicsSlice.reducer;
export { actClinics };
export const { categoriesRecordsCleanUp } = clinicsSlice.actions;
