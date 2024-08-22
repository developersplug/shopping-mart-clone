import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [], // Array to hold the ids of items in the cart
    cartCount: '0',
    favourite:[],
    selectedItem:null,
}
export const CartSlice = createSlice(
    {
        name: 'cart',
        initialState,
        reducers: {
            addItemToCart: (state, action) => {
                state.items.push(action.payload); // Add item id to the cart
                state.cartCount=Number(state.cartCount)+1; // Increment cart count
            },
            removeItemFromCart:(state,action)=>{
                state.items=state.items.filter(item => item.id !== action.payload);
                state.cartCount=Number(state.cartCount)-1;
            },
            addItemToFav:(state,action)=>{
                state.favourite.push(action.payload);
            },
            setSelectedItem: (state, action) => {
                state.selectedItem = action.payload;
            }           
        },
    }
)
export const { addItemToCart,addItemToFav,setSelectedItem,removeItemFromCart } = CartSlice.actions;
export default CartSlice.reducer;
