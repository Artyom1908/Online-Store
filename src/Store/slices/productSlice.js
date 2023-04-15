import { createSlice } from '@reduxjs/toolkit';


const productSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
    },
    reducers: {
        addItem(state, action) {
            const itemIndex = state.products.findIndex(el => el.id === action.payload.id);
            if (itemIndex >= 0) state.products[itemIndex].quantity += 1
            else state.products.push({ ...action.payload, quantity: 1 })
        },
        removeItem(state, action) {
            const productId = action.payload;
            state.products = state.products.filter(product => product.id !== productId);
        }

    },

});

export const { addItem, removeItem } = productSlice.actions;

export default productSlice.reducer;