import { createSlice } from '@reduxjs/toolkit';


const counterSlice = createSlice({
    name: 'counter',
    initialState: { counter: 0},
    reducers: {
        increase(state, action) {
            state.counter = state.counter + action.payload;
        },
        decrement(state) {
            state.counter --;
        },
        increment(state) {
            state.counter ++;
        },
    }
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;