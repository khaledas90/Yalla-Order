import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiAuthenticate from '../../services/authentication/apiAuthenticate';


export const fetchProfileData = createAsyncThunk(
    'profile/fetchProfileData',
    async(_, { rejectWithValue }) => {
        try {
            const response = await apiAuthenticate.get('/user/show/profile');
            return response.data.data;
        } catch (error) {
            return rejectWithValue('Failed to fetch profile data');
        }
    }
);


export const updateProfileData = createAsyncThunk(
    'profile/updateProfileData',
    async(profileData, { rejectWithValue }) => {
        try {
            const response = await apiAuthenticate.post('/user/edit/profile', {
                name: profileData.Name,
                email: profileData.email,
                phone: profileData.phone,
            });
            return response.data.data;
        } catch (error) {
            return rejectWithValue('Failed to update profile');
        }
    }
);

const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        data: {},
        loading: false,
        error: null,
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProfileData.fulfilled, (state, action) => {
                state.data = action.payload;
                state.loading = false;
            })
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(updateProfileData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateProfileData.fulfilled, (state, action) => {
                state.data = action.payload;
                state.loading = false;
            })
            .addCase(updateProfileData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default profileSlice.reducer;