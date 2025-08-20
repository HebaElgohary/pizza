import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store";
import { Size , Extra } from "@prisma/client";

export type  cartItem={
    name:string,
    id:string,
    image:string,
    basePrice:number,
    quantity?:number,
    size:Size,
    extras?:Extra[]
}


const initialState:{items:cartItem[]}={
    items:[]
 }
export const cartSlice= createSlice({
    name:'cart',
    initialState,
    reducers:{

    }
})
export const{}=cartSlice.actions;
export default cartSlice.reducer
export const selectCartItems=(state:RootState)=>state.cart.items