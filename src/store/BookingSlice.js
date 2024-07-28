import { createAsyncThunk } from "@reduxjs/toolkit";
import apiAuthenticate from "../services/authentication/apiAuthenticate";
import toast from "react-hot-toast";
export const ReservationClinic = createAsyncThunk(
    '/ReservationClinic',
    async({ formData, navigate }, thunkAPI) => {
        const { name, phone, gender, age, detection_type, detection_location, day_booking, time_booking, doctore_id, place_id } = formData;
        try {
            const response = await apiAuthenticate.post('/places/clinic/doctor/reservation', {
                name: name,
                phone: phone,
                gender: gender,
                age: age,
                detection_type: detection_type,
                detection_location: detection_location,
                day_booking: day_booking,
                time_booking: time_booking,
                doctore_id: doctore_id,
                place_id: place_id
            });


            console.log(response);
            if (response.data.status === 200) {
                toast.success(response.data.message);
                setTimeout(() => {
                    navigate('/confirmBooking', { state: { idReservation: response.data.data.id } });
                    document.location.reload();
                }, 1000);

                return response.data.data;
            } else {
                toast.error(response.data.message);
                return thunkAPI.rejectWithValue(response.data.message);
            }
        } catch (error) {
            toast.error(error.response.message);
            return thunkAPI.rejectWithValue(error.response.data.message);
        }
    }
);