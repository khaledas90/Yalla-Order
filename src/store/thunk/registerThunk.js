import { createAsyncThunk } from "@reduxjs/toolkit";
import apiAuthenticate from "../../services/authentication/apiAuthenticate";
import toast from "react-hot-toast";
import { bake_cookie } from "sfcookies";

export const registerUser = createAsyncThunk(
    'user/register',
    async({ userData, navigate }, thunkAPI) => {
        const { Email, Name, Phone, Password } = userData;
        try {
            const response = await apiAuthenticate.post('/register', {
                name: Name,
                email: Email,
                password: Password,
                phone: Phone,
            });

            const token = response.data.token;
            if (response.status === 200) {
                toast.success(response.data.message);
                bake_cookie('token', token);
                bake_cookie('phoneUser', Phone);
                bake_cookie('PasswordUser', Password);
                setTimeout(() => {
                    navigate('/login');
                }, 1000);
                return {...response.data, userData };
            } else {
                toast.error(response.data.message);
                return thunkAPI.rejectWithValue(response.data.message);
            }

        } catch (error) {
            if (error.response.data.errors.email.join() === 'validation.unique') {
                toast.error('Email already exists');
            } else if (error.response.data.errors.phone.join() === 'validation.unique') {
                toast.error('Phone already exists');
            } else if (error.response.data.errors.email.join() === 'validation.email' && error.response.data.errors.phone.join() === 'validation.phone') {
                toast.error('Email and Phone already exists');
            } else {
                toast.error(error.response.data.message);
            }
            return thunkAPI.rejectWithValue(error.response.data.message);
        }
    }
);