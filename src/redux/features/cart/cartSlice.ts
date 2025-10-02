import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store";
import { Size, Extra } from "@prisma/client";

export type cartItem = {
  name: string;
  id: string;
  image: string;
  basePrice: number;
  quantity?: number;
  size: Size;
  extras?: Extra[];
};

const initialState: { items: cartItem[] } = {
  items: [],
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
   addCartItem: (currentState, action: PayloadAction<cartItem>) => {


  const existingItem = currentState.items.find((item) => {
    const sameId = item.id === action.payload.id;
    const sameSize = item.size.id === action.payload.size.id;

    const sameExtras =
      JSON.stringify(item.extras ?? []) ==
      JSON.stringify(action.payload.extras ?? []);

    return sameId && sameSize && sameExtras;
  });

  if (existingItem) {
    existingItem.quantity = (existingItem.quantity ?? 0) + 1;
  } else {
    currentState.items.push({ ...action.payload, quantity: 1 });
  }
}
,
    removeCartItem:(currentState,action:PayloadAction<{id:string}>)=>{
        const existinItem=currentState.items.find((item)=>item.id===action.payload.id)
        if(existinItem?.quantity===1){
        currentState.items=   currentState.items.filter((item)=>
            item.id!==action.payload.id
           )

        }
        else{
            if (existinItem) {
                existinItem.quantity = (existinItem.quantity ?? 1) - 1;
            }
        }
    }
,
    removeItemFromCart:(currentState,action:PayloadAction<{id:string}>)=>{
        currentState.items=currentState.items.filter((item)=>item.id!==action.payload.id)
        
    },
    clearCart:(currentState)=>{
        currentState.items=[]
    }
  },

});
export const { addCartItem,removeCartItem,removeItemFromCart,clearCart } = cartSlice.actions;
export default cartSlice.reducer;
export const selectCartItems = (state: RootState) => state.cart.items;
