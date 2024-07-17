import { createAsyncThunk } from "@reduxjs/toolkit";
import apiAuthenticate from "../../services/authentication/apiAuthenticate";
import toast from "react-hot-toast";
import { bake_cookie } from "sfcookies";

export const logoutUser = createAsyncThunk(
    'user/logout',
    async(_, thunkAPI) => {
        try {
            const response = await apiAuthenticate.get('/user/logout');
            if (response.status === 200) {
                setTimeout(() => {
                    toast.success(response.data.message);
                }, 1000);
                bake_cookie('token', '');
                bake_cookie('user', '');
                return response.data;
            } else {
                toast.error(response.data.message);
                return thunkAPI.rejectWithValue(response.data.message);
            }
        } catch (error) {
            toast.error(error.response.data.message);
            return thunkAPI.rejectWithValue(error.response.data.message);
        }
    }
);