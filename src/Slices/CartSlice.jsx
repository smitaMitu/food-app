import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: "cart",
    initialState : {
        cart: []
    },
    reducers: {
        addToCart: (state,action) => {
            const itemExist = state.cart.find(item => item.id === action.payload.id);
            if(itemExist){
                state.cart = state.cart.map(item => item.id === action.payload.id ? {...item, qty : item.qty + 1}: item)
            }else{
            state.cart =[...state.cart, action.payload]
            }           
            
        },
        removeCartItem: (state,action) => {
            state.cart = state.cart.filter(item => item.id !== action.payload.id)
        },
        qtyIncrement : (state,action) => {
            state.cart = state.cart.map(item => item.id === action.payload.id ? {...item, qty: item.qty+1}: item  )
        },
        qtyDecrement: (state,action) =>{
            state.cart = state.cart.map(item => item.id === action.payload.id ? {...item, qty: item.qty - 1}: item)
        }
    }
});

//export actions
export const {addToCart, removeCartItem,qtyIncrement, qtyDecrement} = CartSlice.actions;
export default CartSlice.reducer