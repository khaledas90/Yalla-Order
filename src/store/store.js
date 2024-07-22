import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./SliceUser";
import ClinicsCategorySlice from "./ClinicsCatgory/ClinicsCatgorySlice";
import ClinicsCategoryByIdSlice from "./ClinicsCategoryById/ClinicsCategoryByIdSlice";
import showClinicsDetailsSlice from "./showClinicsDetails/showClinicsDetailsSlice";
import locationSlice from "./LocationSlice"
const store = configureStore({
    reducer: {
        User: UserSlice,
        ClinicsCategory: ClinicsCategorySlice,
        ClinicsCategoryById: ClinicsCategoryByIdSlice,
        clinicsDetails: showClinicsDetailsSlice,
        location: locationSlice

    },
});

export default store;