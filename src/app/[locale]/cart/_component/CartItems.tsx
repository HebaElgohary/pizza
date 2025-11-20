"use client";

import { useAppSelector,useAppDispatch } from "@/redux/hooks";
import Image from "next/image";
import { RootState } from "@/redux/store";
import { formatCurrency } from "@/lib/formatters";
import { getSubtotal, getTotal ,delivery } from "@/lib/CartQuantity";
import { TrashIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { removeCartItem } from "@/redux/features/cart/cartSlice";
import { useEffect } from "react";
import { cartItem } from "@/redux/features/cart/cartSlice";



export default function CartItems() {

  const cart = useAppSelector((state: RootState) => state.cart?.items);
  const subtotal=getSubtotal(cart)
  const total= getTotal(cart)
  const dispatch=useAppDispatch()

  useEffect(()=>
    localStorage.setItem('cartItems',JSON.stringify(cart))
 ,[cart] )


  return (
 

    <div className="md:w-1/2 lg:w-1/3 !space-y-6">
  {cart.length > 0 ? (
    <>
      <ul className="!space-y-4">
        {cart.map((item:cartItem) => (
          <li
            key={item.id}
            className="flex items-center gap-4 bg-white shadow-md rounded-xl !p-4 hover:scale-[1.01] transition-all"
          >
            <Image
              src={item.image}
              alt="item image"
              width={90}
              height={90}
              className="rounded-md"
            />

            <div className="flex flex-col flex-grow">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold">{item.name}</h3>
                <span className="text-primary text-sm bg-primary/10 !px-2 py-1 rounded-md">
                  x{item.quantity}
                </span>
              </div>

              <p className="text-gray-500 text-sm">Size: {item.size.name}</p>

              {item.extras && item.extras.length > 0 && (
                <div className="text-sm !mt-2 !space-y-1">
                  {item.extras.map((e) => (
                    <div key={e.id} className="flex justify-between text-gray-500">
                      <span>+ {e.name} <span className="!mx-2 text-primary text-sm bg-primary/10 !px-2 py-1 rounded-md">x{item.quantity}</span></span>
                      <span>{formatCurrency(e.price * (item.quantity ?? 0))}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Button
              variant="destructive"
              size="icon"
              className="rounded-full w-8 h-8 transition-all hover:scale-110"
              onClick={() => dispatch(removeCartItem({ id: item.id }))}
            >
              <TrashIcon className="w-4 h-4" />
            </Button>
          </li>
        ))}
      </ul>

      {/* Totals Section */}
      <div className="bg-gray-50 shadow-inner rounded-xl !p-4 !space-y-2">
        <div className="flex justify-between text-gray-600">
          <span>Subtotal:</span>
          <span className="font-semibold">{formatCurrency(subtotal)}</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Delivery:</span>
          <span className="font-semibold">{formatCurrency(delivery)}</span>
        </div>
        <div className="flex justify-between text-lg font-bold border-t !pt-2">
          <span>Total:</span>
          <span className="text-primary">{formatCurrency(total)}</span>
        </div>
      </div>
    </>
  ) : (
    <p className="text-center text-red-600 font-bold text-2xl">
      Your cart is empty 😢
    </p>
  )}
</div>

  );
}
