import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import UserSlice from "./SliceUser";
import ClinicsCategorySlice from "./ClinicsCatgory/ClinicsCatgorySlice";
import ClinicsCategoryByIdSlice from "./ClinicsCategoryById/ClinicsCategoryByIdSlice";
import showClinicsDetailsSlice from "./showClinicsDetails/showClinicsDetailsSlice";
import location from "./LocationSlice";
import profileDoctorsSlice from "./ProfilsDoctors/profileDoctorsSlice";
const persistConfig = {
    key: "root",
    storage,
};

const reducer = combineReducers({
    User: UserSlice,
    ClinicsCategory: ClinicsCategorySlice,
    ClinicsCategoryById: ClinicsCategoryByIdSlice,
    clinicsDetails: showClinicsDetailsSlice,
    doctorData: profileDoctorsSlice,
    location: location,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
    reducer: persistedReducer,
});

export default store;