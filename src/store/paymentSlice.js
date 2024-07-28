// src/store/confirmation/confirmationSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    url: null,
    paymentData: null,
};

const confirmationSlice = createSlice({
    name: 'confirmation',
    initialState,
    reducers: {
        updatePaymentStatus: (state, action) => {
            state.paymentData = action.payload;
            state.url = null;
        },
        setPaymentUrl: (state, action) => {
            state.url = action.payload;
        },
    },
});

export const { updatePaymentStatus, setPaymentUrl } = confirmationSlice.actions;
export default confirmationSlice.reducer;