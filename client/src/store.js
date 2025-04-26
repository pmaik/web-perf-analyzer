import { configureStore } from "@reduxjs/toolkit";
import { cruxApi } from "./features/api/cruxApi";

export const store = configureStore({
    reducer: {
        [cruxApi.reducerPath]: cruxApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(cruxApi.middleware),
});
