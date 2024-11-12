import { configureStore } from "@reduxjs/toolkit";
import emojiReducer from "./emojiReducer";

const emojiStore = configureStore({
    reducer: emojiReducer
});

export default emojiStore;
