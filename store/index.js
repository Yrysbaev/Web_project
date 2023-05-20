import {combineReducers, configureStore} from "@reduxjs/toolkit";
import newSlice from "./news/newSlice";
import areasSlice from "./sport-areas/areasSlice";

const combinedReducers = combineReducers({
    news: newSlice,
    areas: areasSlice
});

export const store = configureStore({
    reducer: combinedReducers,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})