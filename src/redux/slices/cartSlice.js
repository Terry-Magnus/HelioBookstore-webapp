import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        hidden: true,
        items: [] //array of cart items
    },
    reducers: {
        toggleCartHidden: (state) => {
            state.hidden = !state.hidden
        },
        addItem: (state, action) => {
            //add item to cart
            state.items.push(action.payload)
        },
        removeItem: (state, action) => {
            //remove item from cart based on unique id
            state.items = state.items.filter((item) => item.id !== action.payload.id)
        },
        clearCart: (state) => {
            // reset cart to empty array
            state.items = []
        }
    }
})

export const { toggleCartHidden, addItem, removeItem, clearCart } = cartSlice.actions
export default cartSlice.reducer