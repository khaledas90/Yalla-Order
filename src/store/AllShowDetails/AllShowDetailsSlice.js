import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  error: null,
  loading: "pending",
  allShowClincis: [],
};

const actAllClinicsDetails = createAsyncThunk(
  "places/clinic/show/list",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(
        `https://insta-order-site.web-allsafeeg.com/api/places/clinic/show/list`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            lang: localStorage.getItem("i18nextLng"),
          },
        }
      );
      console.log(res.data.data, "show");
      return res.data.data;
    } catch (error) {
      console.log(error, "error");
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

const allClinicDetailsSlice = createSlice({
  name: "allShowClincis",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actAllClinicsDetails.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actAllClinicsDetails.fulfilled, (state, action) => {
      state.loading = "success";
      state.allShowClincis = action.payload;
    });
    builder.addCase(actAllClinicsDetails.rejected, (state, action) => {
      console.log(action, "action");
      state.loading = "failed";
      state.error = action.payload || action.error.message;
    });
  },
});

export default allClinicDetailsSlice.reducer;
export { actAllClinicsDetails };
