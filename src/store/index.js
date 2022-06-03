import { configureStore } from "@reduxjs/toolkit";
import product from './productSlice';
import cart from './cartSlice';

const store = configureStore({
    reducer: { product, cart }
});

export default store;