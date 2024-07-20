import { createAsyncThunk } from "@reduxjs/toolkit";
import apiAuthenticate from "../../services/authentication/apiAuthenticate";
import toast from "react-hot-toast";
import { bake_cookie } from "sfcookies";

export const loginUser = createAsyncThunk(
    'user/login',
    async({ userData, navigate }, thunkAPI) => {
        const { Email, Password } = userData;
        try {
            const response = await apiAuthenticate.post('/login', {
                email: Email,
                password: Password,
            });
            if (response.status === 200) {
                toast.success(response.data.message);
                const token = response.data.data;
                console.log(response.data.data, 'token');
                bake_cookie('token', token);
                localStorage.getItem('token', token);
                console.log(localStorage.getItem('token'));
                setTimeout(() => {
                    navigate('/HomeRestaurants');
                }, 1000);
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