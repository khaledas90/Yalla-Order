import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  error: null,
  loading: "pending",
  clinicsCatgoty: [],
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

const clinicsCatgotySclice = createSlice({
  name: "clinicsCatgoty",
  initialState,
  reducers: {
    categoriesRecordsCleanUp: (state) => {
      state.clinicsCatgoty = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actClinicsCatgoty.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actClinicsCatgoty.fulfilled, (state, action) => {
      state.loading = "success";

      state.clinicsCatgoty = action.payload;
    });
    builder.addCase(actClinicsCatgoty.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload || action.error.message;
    });
  },
});

export default clinicsCatgotySclice.reducer;
export { actClinicsCatgoty };
export const { categoriesRecordsCleanUp } = clinicsCatgotySclice.actions;
