"use client";

import { useAppSelector,useAppDispatch } from "@/redux/hooks";
import Image from "next/image";
import { RootState } from "@/redux/store";
import { formatCurrency } from "@/lib/formatters";
import { TrashIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { removeCartItem } from "@/redux/features/cart/cartSlice";


export default function CartItems() {
  const cart = useAppSelector((state: RootState) => state.cart.items);
  const dispatch=useAppDispatch()

  console.log(cart)
  return (
    <div className="md:w-1/2 lg:w-1/3">
      {cart && cart.length > 0 ? (
        <ul className="flex flex-col gap-5">
          {cart.map((item) => (
            <li key={item.id}>
              <div className="flex gap-1 items-center justify-between">
                <Image
                  src={item.image}
                  alt="item image"
                  width={150}
                  height={150}
                />

                <div>
                  <h3 className="text-lg font-bold !mb-5">{item.name}</h3>

                  <div className="flex justify-between">
                    <p className="text-gray-400">Size: {item.size.name}</p>
                    <p>x{item.quantity}</p>
                  </div>

                  <div className="flex justify-between">
                    {item.extras?.map((e) => (
                      <div key={e.id} className="flex gap-2">
                        <p className="text-gray-400">Extras: {e.name}</p>
                        <p>{`${formatCurrency(e.price*(item.quantity??0))}`}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <TrashIcon
                onClick={()=>dispatch(removeCartItem({id:item.id}))}
                 className="!cursor-pointer !m-2 text-red-600" color="#e02121" fill="#dd1e1e"/>
                
              </div> 
            </li>
          ))}
        </ul>
      ) : (
        ""
      )}
    </div>
  );
}
