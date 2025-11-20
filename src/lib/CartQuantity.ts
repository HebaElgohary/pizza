import { cartItem } from './../redux/features/cart/cartSlice';
import { Extra } from '@prisma/client';

export const delivery=5

export const getCartQuantity=(cart:cartItem[])=>{
return cart.reduce((quantity, item) =>
  quantity + (item.quantity ?? 0), 0
)

}

export const getItemQuantity=(
  cart: cartItem[],
  id: string,
  sizeId: string,
  extras?: Extra[]
)=> {
  const item = cart.find((cartItem) => {
    const sameId = cartItem.id === id;
    const sameSize = cartItem.size.id === sizeId;
    const sameExtras =
      JSON.stringify(cartItem.extras ?? []) === JSON.stringify(extras ?? []);
    return sameId && sameSize && sameExtras;
  });

  return item?.quantity ?? 0;
}

export const getSubtotal=(cart:cartItem[])=>{
  return cart.reduce((subtotal,item)=>{

    const totalExtra=item.extras?.reduce(
      (sum,extra)=> sum+ (extra.price||0),0 )

      const itemTotal=(totalExtra||0)+item.basePrice+item.size.price
return subtotal+ itemTotal *item.quantity!
  },0)
}

export const getTotal=(cart:cartItem[])=>{
  return getSubtotal(cart)+delivery

}