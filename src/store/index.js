import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import countReducer from './authSlice';



const store = configureStore({
    reducer: { counter: countReducer, auth: authReducer},
});


export default store;