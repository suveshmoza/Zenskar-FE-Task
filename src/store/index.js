import { configureStore } from "@reduxjs/toolkit";
import elementsReducer from "./slice/elementSlice";

const store = configureStore({
    reducer: {
        elements: elementsReducer
    },
});

export default store;