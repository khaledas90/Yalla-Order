import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./SliceUser";

const store = configureStore({
    reducer: {
        User: userReducer,
    },
});

export default store;