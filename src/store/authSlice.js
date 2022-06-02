import { createSlice } from '@reduxjs/toolkit';


const authSlice = createSlice({
    name: 'auth',
    initialState: { login: false},
    reducers: {
        logIn(store) {
            store.login = true;
        },
        logOut(store) {
            store.login = false;
        }
    }
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
