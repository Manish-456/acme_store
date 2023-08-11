import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./store";

const selectCartItem = (state : RootState) => state.cart.product;

export const selectCartItemsCount = createSelector(
    selectCartItem,
    cartItems => ({
       cartLength : cartItems.length,
       cartItems
    }),
   
)