import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "./thunk/registerThunk";
import { loginUser } from "./thunk/loginThunk";
import { logoutUser } from "./thunk/logoutThunk";
import { bake_cookie, read_cookie } from "sfcookies";
import apiAuthenticate from "../services/authentication/apiAuthenticate";

const initialState = {
    user: read_cookie('user') || [],
    status: 'idle',
    error: null,
    token: read_cookie('token') || '',
    tokenGoogle: read_cookie('tokenGoogle') || '',
    type: 'restaurant',
    typePage: 'restaurant',
};

const userSlice = createSlice({
    name: 'User',
    initialState,
    reducers: {
        setToken(state, action) {
            state.token = action.payload;
            bake_cookie('token', action.payload);
            localStorage.setItem('token', action.payload);
            apiAuthenticate.defaults.headers['Authorization'] = `Bearer ${action.payload}`;
        },
        clearToken(state) {
            state.token = '';
            bake_cookie('token', '');
            localStorage.removeItem('token');
            apiAuthenticate.defaults.headers['Authorization'] = '';
        },
        changeType(state, action) {
            state.type = action.payload;
        },
        changeTypePage(state, action) {
            state.typePage = action.payload;
        },
        setUser(state, action) {
            state.user = action.payload;
            bake_cookie('user', action.payload);
            localStorage.setItem('user', JSON.stringify(action.payload));
        },
        setTokenGoogle(state, action) {
            state.tokenGoogle = action.payload;
            bake_cookie('tokenGoogle', action.payload);
            localStorage.setItem('tokenGoogle', action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user.push(action.payload.userData);
                state.token = action.payload.token;
                bake_cookie('user', state.user);
                bake_cookie('token', state.token);
                localStorage.setItem('user', JSON.stringify(state.user));
                localStorage.setItem('token', state.token);
                apiAuthenticate.defaults.headers['Authorization'] = `Bearer ${state.token}`;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload || action.error.message;
            })
            .addCase(loginUser.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = [action.payload];
                state.token = action.payload.data;
                bake_cookie('user', state.user);
                bake_cookie('token', state.token);
                localStorage.setItem('user', JSON.stringify(state.user));
                localStorage.setItem('token', state.token);
                apiAuthenticate.defaults.headers['Authorization'] = `Bearer ${state.token}`;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload || action.error.message;
            })
            .addCase(logoutUser.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(logoutUser.fulfilled, (state) => {
                state.status = 'succeeded';
                state.user = [];
                state.token = '';
                state.tokenGoogle = '';
                bake_cookie('user', []);
                bake_cookie('token', '');
                bake_cookie('tokenGoogle', '');
                localStorage.removeItem('user');
                localStorage.removeItem('token');
                localStorage.removeItem('tokenGoogle');
                apiAuthenticate.defaults.headers['Authorization'] = '';
            })
            .addCase(logoutUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload || action.error.message;
            })

    },
});

export const { changeType, clearToken, setToken, changeTypePage, setUser, setTokenGoogle } = userSlice.actions;

export default userSlice.reducer;