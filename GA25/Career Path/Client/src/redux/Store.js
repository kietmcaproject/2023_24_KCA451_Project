import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from './AuthSlice';
import DataSlice from './DataSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';


const persistConfig = {
    key: 'root',
    storage,
    // // Specify the reducers you want to persist
    // whitelist: ['Auth'] // Assuming 'user' is the slice to persist
};

const persistedAuthReducer = persistReducer(persistConfig, AuthSlice);
const persisteddataReducer = persistReducer(persistConfig, DataSlice);

export const store = configureStore({
    reducer: {
        Auth: persistedAuthReducer,// Correctly setting the persisted reducer under its slice name
        Data: persisteddataReducer
    }

});

export const persistor = persistStore(store);
