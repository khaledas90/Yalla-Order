import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiAuthenticate from '../../services/authentication/apiAuthenticate';
import toast from 'react-hot-toast';

export const fetchReservationDetails = createAsyncThunk(
    'reservation/fetchReservationDetails',
    async(idReservation, { rejectWithValue }) => {
        try {
            const response = await apiAuthenticate.get(`places/clinic/doctor/summary/reservation/${idReservation}`);
            if (response.status === 200) {
                toast.success(response.data.message);
                return response.data.data;
            }
        } catch (error) {
            toast.error(error.response.data.message || 'An error occurred');
            return rejectWithValue(error.response.data.message || 'An error occurred');
        }
    }
);

const reservationSlice = createSlice({
    name: 'reservation',
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchReservationDetails.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchReservationDetails.fulfilled, (state, action) => {
                state.data = action.payload;
                state.loading = false;
            })
            .addCase(fetchReservationDetails.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default reservationSlice.reducer;