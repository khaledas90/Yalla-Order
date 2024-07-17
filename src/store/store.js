import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./SliceUser";
const store = configureStore({
    reducer: {
        User: UserSlice,
    },
});

export default store;