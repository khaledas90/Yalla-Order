import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiAuthenticate from '../../services/authentication/apiAuthenticate';
import toast from 'react-hot-toast';

export const confirmReservation = createAsyncThunk(
    'confirmation/confirmReservation',
    async(idReservation, { rejectWithValue }) => {
        try {
            const response = await apiAuthenticate.get(`/places/clinic/doctor/confirm/reservation/${idReservation}`);
            if (response.data.status === 200) {
                toast.success(response.data.message);
                return response.data.data;
            }
        } catch (error) {
            toast.error(error.response.data.message || 'An error occurred');
            return rejectWithValue(error.response.data.message || 'An error occurred');
        }
    }
);

const confirmationSlice = createSlice({
    name: 'confirmation',
    initialState: {
        url: '',
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(confirmReservation.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(confirmReservation.fulfilled, (state, action) => {
                state.url = action.payload;
                state.loading = false;
            })
            .addCase(confirmReservation.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default confirmationSlice.reducer;