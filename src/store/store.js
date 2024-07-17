import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
import ClinicsSlice from "./Clinics/ClinicsSlice";
import ClinicsDetailsSlice from "./ClinicsDetails/ClinicsDetailsSlice";
import AllShowDetailsSlice from "./AllShowDetails/AllShowDetailsSlice";

const store = configureStore({
  reducer: {
    User: UserSlice,
    clinics: ClinicsSlice,
    ClinicsDetails: ClinicsDetailsSlice,
    allShowClincis: AllShowDetailsSlice,
  },
});

export default store;
