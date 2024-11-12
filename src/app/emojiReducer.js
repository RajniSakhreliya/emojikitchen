import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    emojiData: [],
    emojiMixer: {},
};

export const emojiSlice = createSlice({
    name: 'emoji',
    initialState,
    reducers: {
        SET_EMOJI_DATA: (state, action) => {
            if (Object.keys(state.emojiData).length === 0) {
                state.emojiData = action.payload;
            }
        },
        SET_EMOJI_MIXER: (state, action) => {
            if (Object.keys(state.emojiMixer).length === 0) {
                state.emojiMixer = action.payload;
            }
        },
    }
})
export const { SET_EMOJI_DATA, SET_EMOJI_MIXER } = emojiSlice.actions;

export default emojiSlice.reducer;
