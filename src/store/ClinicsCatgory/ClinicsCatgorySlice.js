import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  error: null,
  loading: "pending",
  ClinicsCategory: [],
};

const actClinicsCatgoty = createAsyncThunk(
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

      return res.data.data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);
const actSearchClinicsCatgoty = createAsyncThunk(
  "category/clinic/search",
  async ({ type, name }, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.post(
        "https://insta-order-site.web-allsafeeg.com/api/places/search/name",
        { type, name },
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

const ClinicsCategorySlice = createSlice({
  name: "ClinicsCategory",
  initialState,
  reducers: {
    categoriesRecordsCleanUp: (state) => {
      state.ClinicsCategory = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actClinicsCatgoty.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actClinicsCatgoty.fulfilled, (state, action) => {
      state.loading = "success";

      state.ClinicsCategory = action.payload;
    });
    builder.addCase(actClinicsCatgoty.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload || action.error.message;
    });
    builder.addCase(actSearchClinicsCatgoty.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actSearchClinicsCatgoty.fulfilled, (state, action) => {
      state.loading = "success";

      state.ClinicsCategory = action.payload;
    });
    builder.addCase(actSearchClinicsCatgoty.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload || action.error.message;
    });
  },
});

export default ClinicsCategorySlice.reducer;
export { actClinicsCatgoty, actSearchClinicsCatgoty };
export const { categoriesRecordsCleanUp } = ClinicsCategorySlice.actions;
