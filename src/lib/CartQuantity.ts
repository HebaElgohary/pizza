import { cartItem } from './../redux/features/cart/cartSlice';

export const getCartQuantity=(cart:cartItem[])=>{
return cart.reduce((quantity, item) =>
  quantity + (item.quantity ?? 0), 0
)

}

export const getItemQuantity=(id:string,cart:cartItem[])=>{

return cart.find((item)=>item.id===id)?.quantity ||0
}