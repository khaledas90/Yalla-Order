import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  error: null,
  loading: "pending",
  ClinicsCategoryById: [],
};

const actClinicsCategoryById = createAsyncThunk(
  "places/clinic/list/ ",
  async (id, thunkAPI) => {
    const { rejectWithValue, signal } = thunkAPI;
    try {
      const res = await axios.get(
        `https://insta-order-site.web-allsafeeg.com/api/places/clinic/list/${id}`,
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

const ClinicsCategoryByIdSlice = createSlice({
  name: "ClinicsCategoryById",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actClinicsCategoryById.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actClinicsCategoryById.fulfilled, (state, action) => {
      state.loading = "success";
      state.ClinicsCategoryById = action.payload;
    });
    builder.addCase(actClinicsCategoryById.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload || action.error.message;
    });
  },
});

export default ClinicsCategoryByIdSlice.reducer;
export { actClinicsCategoryById };
