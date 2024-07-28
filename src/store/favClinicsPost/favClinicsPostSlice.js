import { createAsyncThunk } from "@reduxjs/toolkit";
import apiAuthenticate from "../services/authentication/apiAuthenticate";
import toast from "react-hot-toast";
export const WhislistClinics = createAsyncThunk(
  "/WhislistClinics",
  async ({ formData, navigate, id }, thunkAPI) => {
    // Extracting the 'name' field from the formData object
    const { isfav } = formData;
    try {
      // Sending a POST request to the API to add a clinic to the whitelist
      const response = await apiAuthenticate.post(
        `/places/clinic/doctor/add/fav/doctor/${id}`,
        {
          isfav: isfav,
        }
      );

      // Logging the response for debugging purposes
      console.log(response);
      // Checking if the request was successful
      if (response.data.status === 200) {
        // Displaying a success toast notification
        toast.success(response.data.message);
        // After a delay of 1 second, navigating to the whitelist clinics page and reloading the document
        setTimeout(() => {
          navigate("/whislistClinics", {
            state: { idWhislistClinics: response.data.data.id },
          });
          document.location.reload();
        }, 1000);

        // Returning the data from the response
        return response.data.data;
      } else {
        // Displaying an error toast notification if the request was not successful
        toast.error(response.data.message);
        // Rejecting the thunk with the error message
        return thunkAPI.rejectWithValue(response.data.message);
      }
    } catch (error) {
      // Displaying an error toast notification if an error occurs during the request
      toast.error(error.response.message);
      // Rejecting the thunk with the error message
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
