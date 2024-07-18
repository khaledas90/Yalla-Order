import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
import ClinicsCatgorySlice from "./ClinicsCatgory/ClinicsCatgorySlice";
import ClinicsCategoryByIdSlice from "./ClinicsCategoryById/ClinicsCategoryByIdSlice";

const store = configureStore({
  reducer: {
    User: UserSlice,
    clinicsCatgoty: ClinicsCatgorySlice,
    ClinicsCategoryById: ClinicsCategoryByIdSlice,
  },
});

export default store;
