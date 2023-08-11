import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CartState {
    id : number;
    title : string;
    price : number;
    description : string;
    category : string;
    image : string;
}

interface InitialState {
    product : CartState[]
}

const initialState: InitialState = {
    product : []
}

const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers : {
        addToCart : (state, action : PayloadAction<CartState>) => {
         const newItem = action.payload;
         const existingItem = state.product.find(item => item.id === newItem.id);
         
         if(!existingItem) state.product.push(action.payload)
        },
         removeFromCart : (state, action : PayloadAction<number>) => {
          state.product =  state.product.filter(item => item.id !== action.payload)
         },

         removeAllItemsFromCart : (state) => {
            state.product = []
         }
    }
})

export const {addToCart, removeFromCart, removeAllItemsFromCart} = cartSlice.actions;
export default cartSlice.reducer
