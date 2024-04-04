import { configureStore } from "@reduxjs/toolkit";
import counter from "./counterSlicer";

export const store = configureStore({
    reducer: {
        counter: counter
    }
})