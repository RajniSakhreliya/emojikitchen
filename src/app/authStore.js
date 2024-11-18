import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import emojiReducer from "./emojiReducer";
import loadingSlice from "./loadingSlice"

const authStore = configureStore({
    reducer: {
        auth: authSlice,
        emoji: emojiReducer,
        loading: loadingSlice,
    }
});


export default authStore;