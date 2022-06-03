import { createSlice } from '@reduxjs/toolkit'

const itemsList = [
    {
        title: 'Heart',
        price: 100,
        description: 'Beautiful and healty heart for your necessity'
    },
    {
        title: 'Lung left',
        price: 20,
        description: 'As new, from a athlete girl'
    }
]

const productSlice = createSlice({
    name: 'product',
    initialState: { itemsList },
    reducers: { },
});

export default productSlice.reducer;