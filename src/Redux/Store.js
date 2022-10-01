import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import Reducer from './Reducer'


const persistConfig = {
    key: "root",
    version: 1,
    storage,
};

const rootReducer = combineReducers({ Reducer });

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const Store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: false,
    }),
});

export let persistor = persistStore(Store);