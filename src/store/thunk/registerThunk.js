import { createAsyncThunk } from "@reduxjs/toolkit";
import apiAuthenticate from "../../services/authentication/apiAuthenticate";
import toast from "react-hot-toast";
import { bake_cookie } from "sfcookies";

export const registerUser = createAsyncThunk(
    'user/register',
    async({ values, navigate }, { rejectWithValue }) => {
        const { Email, Name, Phone, Password } = values;

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
                localStorage.setItem('token', token);
                setTimeout(() => {
                    navigate('/login');
                }, 1000);
                return {...response.data, userData: values };
            } else {
                console.log(response);
                toast.error(response.data.message);
                return rejectWithValue(response.data.message);
            }

        } catch (error) {
            const errorMessage = error.response.data.message || 'Registration failed';
            toast.error(errorMessage);
            return rejectWithValue(errorMessage);
        }
    }
);