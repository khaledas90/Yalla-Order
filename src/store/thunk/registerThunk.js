import { createAsyncThunk } from "@reduxjs/toolkit";
import apiAuthenticate from "../../services/authentication/apiAuthenticate";
import toast from "react-hot-toast";

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


            if (response.status === 200) {
                toast.success(response.data.message);
                // const token = response.data.data
                // localStorage.setItem('token', token)

                setTimeout(() => {
                    navigate('/login');
                }, 1000);
                return {...response.data, userData: values };
            }

        } catch (error) {
            const errorData = error.response.data.errors || {};
            const errorMessage = error.response.data.message || 'Registration failed';

            if (errorData.phone.toString() === "validation.unique" && errorData.email.toString() === "validation.unique") {
                toast.error("Phone and Email already exist");
            } else if (errorData.phone.toString() === "validation.unique" || errorData.email.toString() === "validation.unique") {
                toast.error("Phone or Email already exists");
            } else {
                toast.error(errorMessage);

            }
            console.error("Error during registration:", errorMessage);
            return rejectWithValue(errorMessage);
        }
    }
);