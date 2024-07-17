import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  error: null,
  loading: "pending",
  clinicDetails: [],
};

const actDetailsDoctors = createAsyncThunk(
  "places/clinic/doctor/list/ ",
  async (id, thunkAPI) => {
    const { rejectWithValue, signal } = thunkAPI;
    try {
      const res = await axios.get(
        `https://insta-order-site.web-allsafeeg.com/api/places/clinic/doctor/list/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            lang: localStorage.getItem("i18nextLng"),
          },
          signal,
        }
      );
      console.log(res.data, "dddd");
      return res.data.data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

const detailsDoctorSlice = createSlice({
  name: "clinicDetails",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actDetailsDoctors.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actDetailsDoctors.fulfilled, (state, action) => {
      state.loading = "success";
      state.clinicDetails = action.payload;
    });
    builder.addCase(actDetailsDoctors.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload || action.error.message;
    });
  },
});

export default detailsDoctorSlice.reducer;
export { actDetailsDoctors };
