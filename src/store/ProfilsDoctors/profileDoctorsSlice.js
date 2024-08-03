import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    profileDoctors: [],

    error: null,
    loading: "idle",
};

export const actProfileDoctors = createAsyncThunk(
    "places/clinic/doctor/list",
    async(id, thunkAPI) => {
        const { rejectWithValue, signal } = thunkAPI;
        try {
            // console.log(id);
            const res = await axios.get(
                `https://insta-order-site.web-allsafeeg.com/api/places/clinic/doctor/list/${id}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                        lang: localStorage.getItem("i18nextLng"),
                    },
                    signal,
                }
            );
            //   console.log(res.data.data);
            return res.data.data;
        } catch (error) {
            console.error(error, "API call error");
            return rejectWithValue(
                error.response ? error.response.data.message : error.message
            );
        }
    }
);

const profileDoctorsSlice = createSlice({
    name: "profileDoctors",
    initialState,
    reducers: {
        categoriesRecordsCleanUp: (state) => {
            state.profileDoctors = [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(actProfileDoctors.pending, (state) => {
                state.loading = "pending";
                state.error = null;
            })
            .addCase(actProfileDoctors.fulfilled, (state, action) => {
                state.loading = "success";
                state.profileDoctors = action.payload;
            })
            .addCase(actProfileDoctors.rejected, (state, action) => {
                state.loading = "failed";
                state.error = action.payload || action.error.message;
            });
    },
});

export default profileDoctorsSlice.reducer;
export const { categoriesRecordsCleanUp } = profileDoctorsSlice.actions;