import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store";
import { Size, Extra } from "@prisma/client";
// Removed incorrect import of 'json'

export type cartItem = {
  name: string;
  id: string;
  image: string;
  basePrice: number;
  quantity?: number;
  size: Size;
  extras?: Extra[];
};

let initialCartItems: cartItem[] = [];

if (typeof window !== "undefined") {
  const stored = localStorage.getItem("cartItems");
  initialCartItems = stored ? (JSON.parse(stored) as cartItem[]) : [];
}

const initialState = {
  items: initialCartItems,
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
increaseItemQuantity:(currentState,action:PayloadAction<{id:string,sizeId:string,extras:Extra[]}>) =>
  {
  const existingItem=currentState.items.find((item)=> {
  const sameId = item.id === action.payload.id;
  const sameSize = item.size.id === action.payload.sizeId;
  const sameExtras = JSON.stringify(item.extras??[]) ===JSON.stringify( action.payload.extras??[]);
  return sameId&& sameSize && sameExtras

  }
)
if (existingItem) {
  existingItem.quantity = (existingItem.quantity ?? 0) + 1;
}


},
decreaseItemQuantity:(currentState,action:PayloadAction<{id:string,sizeId:string,extras:Extra[]}>) =>
  {
  const existingItem=currentState.items.find((item)=> {
  const sameId = item.id === action.payload.id;
  const sameSize = item.size.id === action.payload.sizeId;
  const sameExtras = JSON.stringify(item.extras??[]) ===JSON.stringify( action.payload.extras??[]);
  return sameId&& sameSize && sameExtras

  }
)
if (existingItem) {
  existingItem.quantity = (existingItem.quantity ?? 0) - 1;
}
  },
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
export const { addCartItem,removeCartItem,removeItemFromCart,clearCart,increaseItemQuantity,decreaseItemQuantity } = cartSlice.actions;
export default cartSlice.reducer;
export const selectCartItems = (state: RootState) => state.cart.items;
