import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiAuthenticate from '../../services/authentication/apiAuthenticate';
import toast from 'react-hot-toast';

export const fetchReservationList = createAsyncThunk(
    'reservation/fetchReservationList',
    async(_, { rejectWithValue }) => {
        try {
            const response = await apiAuthenticate.get("/places/restaurantes/order/myorder?type=clinic");
            if (response.status === 200) {

                return response.data.data;
            }
        } catch (error) {
            console.error("Failed to fetch reservations", error);
            return rejectWithValue(error.response.data.message || 'An error occurred');
        }
    });


const ShowReservationSlice = createSlice({
    name: 'ShowReservation',
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchReservationList.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchReservationList.fulfilled, (state, action) => {
                state.data = action.payload;
                state.loading = false;
            })
            .addCase(fetchReservationList.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default ShowReservationSlice.reducer;