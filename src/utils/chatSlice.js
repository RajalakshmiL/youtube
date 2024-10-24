import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./constants";

const chatSlice = createSlice({
    name: 'chat',
    initialState:{
        message : []
    },
    reducers: {
        addChatMessage : (state, action) => {
            state.message.splice(LIVE_CHAT_COUNT,1);
            state.message.unshift(action.payload);
        }
    }
})

export const {addChatMessage} = chatSlice.actions;
export default chatSlice.reducer;