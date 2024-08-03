import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiAuthenticate from "../../services/authentication/apiAuthenticate";
import toast from "react-hot-toast";

const initialState = {
    error: null,
    loading: "idle",
    favClinic: [],
};

const AddFavClinic = createAsyncThunk("favClinic/AddFavClinic", async(id, { rejectWithValue }) => {
    try {
        const response = await apiAuthenticate.post(`/places/clinic/doctor/add/favdoctor/${id}`);
        if (response.status === 200) {
            toast.success(response.data.message);
            return response.data.data;
        }
    } catch (error) {
        return rejectWithValue(error.response.data.message || "An error occurred");
    }
});

const DeleteFavClinic = createAsyncThunk("favClinic/DeleteFavClinic", async(id, { rejectWithValue }) => {
    try {
        const response = await apiAuthenticate.post(`/places/clinic/doctor/add/favdoctor/${id}`);
        if (response.status === 200) {
            toast.success(response.data.message);
            return response.data.data;
        }
    } catch (error) {
        return rejectWithValue(error.response.data.message || "An error occurred");
    }
});

const GetFavClinic = createAsyncThunk("favClinic/GetFavClinic", async(_, { rejectWithValue }) => {
    try {
        const response = await apiAuthenticate.get(`/places/listfavproduct?type=clinic`);
        if (response.status === 200) {
            return response.data.data;
        }
    } catch (error) {
        return rejectWithValue(error.response.data.message || "An error occurred");
    }
});

const favClinicSlice = createSlice({
    name: "favClinic",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        // Add Fav Clinic
            .addCase(AddFavClinic.pending, (state) => {
                state.loading = "pending";
                state.error = null;
            })
            .addCase(AddFavClinic.fulfilled, (state, action) => {
                state.loading = "success";
                state.favClinic = action.payload;
            })
            .addCase(AddFavClinic.rejected, (state, action) => {
                state.loading = "failed";
                state.error = action.payload || action.error.message;
            })
            // Delete Fav Clinic
            .addCase(DeleteFavClinic.pending, (state) => {
                state.loading = "pending";
                state.error = null;
            })
            .addCase(DeleteFavClinic.fulfilled, (state, action) => {
                state.loading = "success";
                state.favClinic = state.favClinic.filter(clinic => clinic.id !== action.payload.id);
            })
            .addCase(DeleteFavClinic.rejected, (state, action) => {
                state.loading = "failed";
                state.error = action.payload || action.error.message;
            })
            // Get Fav Clinic
            .addCase(GetFavClinic.pending, (state) => {
                state.loading = true;
            })
            .addCase(GetFavClinic.fulfilled, (state, action) => {
                state.loading = false;
                state.favClinic = action.payload;
                state.error = null;
            })
            .addCase(GetFavClinic.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export { AddFavClinic, DeleteFavClinic, GetFavClinic };
export default favClinicSlice.reducer;