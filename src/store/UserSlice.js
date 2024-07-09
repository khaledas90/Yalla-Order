// src/store/UserSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiAuthenticate from "../services/authentication/apiAuthenticate";

const initialState = {
    user: null,
    status: 'idle',
    error: null,
    token: localStorage.getItem('token') || '',
    type: 'restaurant',
};

export const registerUser = createAsyncThunk(
    'user/register',
    async(userData, thunkAPI) => {
        const { Email, Name, Phone, Password } = userData;

        try {
            const response = await apiAuthenticate.post('/register', {
                name: Name,
                email: Email,
                password: Password,
                phone: Phone,
            });
            console.log(response.data);
            initialState.token = response.data.data
            console.log(initialState);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setToken(state, action) {
            state.token = action.payload;
            localStorage.setItem('token', action.payload);
        },
        clearToken(state) {
            state.token = '';
            localStorage.removeItem('token');
        },
        changeType(state, action) {
            state.type = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload;
                console.log(action.payload, 'k');
                state.token = action.payload.token;

            })
            .addCase(registerUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload || action.error.message;
            });
    },
});


export const { changeType, clearToken, setToken } = userSlice.actions;


export default userSlice.reducer;