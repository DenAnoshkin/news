import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "./slices/newsSlice";

const store = configureStore({
    reducer: newsReducer,
});

export default store;
