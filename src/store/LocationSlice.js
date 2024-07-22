import { createSlice } from "@reduxjs/toolkit";
import { bake_cookie, read_cookie } from "sfcookies";

const initialState = {
    locations: read_cookie('locations') || [],
};

const locationSlice = createSlice({
    name: "location",
    initialState,
    reducers: {
        saveLocation: (state, action) => {
            state.locations.push(action.payload);
            state.locations = Array.from(new Set(state.locations.map(loc => loc.id)))
                .map(id => {
                    return state.locations.find(loc => loc.id === id);
                });
            bake_cookie('locations', state.locations);
            localStorage.setItem('locations', JSON.stringify(state.locations));
        },
        updateAddress: (state, action) => {
            state.locations = state.locations.map((item) => {
                if (item.id === action.payload.id) {
                    return {
                        ...item,
                        placeName: action.payload.placeName
                    };
                }
                return item;
            });
            bake_cookie('locations', state.locations);
            localStorage.setItem('locations', JSON.stringify(state.locations));
        },
        deleteAddress: (state, action) => {
            state.locations = state.locations.filter((item) => item.id !== action.payload);
            bake_cookie('locations', state.locations);
            localStorage.setItem('locations', JSON.stringify(state.locations));
        }
    },
});

export const { saveLocation, deleteAddress, updateAddress } = locationSlice.actions;

export default locationSlice.reducer;