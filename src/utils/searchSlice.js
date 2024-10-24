import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        
    },
    reducers: {
        cacheQuery: (state, action) => {
            state = Object.assign(state, action.payload)
        }
    }
})

export const {cacheQuery} = searchSlice.actions;
export default searchSlice.reducer;