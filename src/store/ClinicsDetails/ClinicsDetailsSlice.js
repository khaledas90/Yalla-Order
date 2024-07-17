import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  error: null,
  loading: "pending",
  clinicDetails: [],
};

const actClinicsDetails = createAsyncThunk(
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
      console.log(res.data, "gggg");
      return res.data.data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

const clinicDetailsSlice = createSlice({
  name: "clinicDetails",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actClinicsDetails.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actClinicsDetails.fulfilled, (state, action) => {
      state.loading = "success";
      state.clinicDetails = action.payload;
    });
    builder.addCase(actClinicsDetails.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload || action.error.message;
    });
  },
});

export default clinicDetailsSlice.reducer;
export { actClinicsDetails };
