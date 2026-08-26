"use client";

import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import Image from "next/image";
import { RootState } from "@/redux/store";
import { formatCurrency } from "@/lib/formatters";
import { getSubtotal, getTotal, delivery } from "@/lib/CartQuantity";
import { TrashIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { removeCartItem } from "@/redux/features/cart/cartSlice";
import { useEffect } from "react";
import { cartItem } from "@/redux/features/cart/cartSlice";

export default function CartItems() {
  const cart = useAppSelector((state: RootState) => state.cart?.items);
  const subtotal = getSubtotal(cart);
  const total = getTotal(cart);
  const dispatch = useAppDispatch();

  useEffect(
    () => localStorage.setItem("cartItems", JSON.stringify(cart)),
    [cart],
  );

  return (
    <div className="w-full !space-y-6">
      {" "}
      {cart.length > 0 ? (
        <>
          <ul className="!space-y-4">
            {cart.map((item: cartItem) => (
              <li
                key={item.id}
                className="
    group
    flex
    items-center
    gap-4
    rounded-2xl
    border
    border-gray-100
    bg-white
    !p-4
    shadow-sm
    transition-all
    duration-300
    hover:-translate-y-0.5
    hover:border-primary/20
    hover:shadow-md
  "
              >
                <div
                  className="
    relative
    h-24
    w-24
    shrink-0
    overflow-hidden
    rounded-2xl
    bg-gray-100
  "
                >
                  <Image
                    src={item.image || "/images/OIP (2).png"}
                    alt={item.name}
                    fill
                    className="
      object-cover
      transition-transform
      duration-300
      group-hover:scale-110
    "
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="truncate text-base font-bold text-gray-900 sm:text-lg">
                      {item.name}
                    </h3>

                    <span
                      className="
      shrink-0
      rounded-full
      bg-primary/10
      !px-3
      !py-1
      text-xs
      font-bold
      text-primary
    "
                    >
                      ×{item.quantity}
                    </span>
                  </div>

                  <p className="!mt-1 text-sm text-gray-500">
                    Size:{" "}
                    <span className="font-medium text-gray-700">
                      {item.size.name}
                    </span>
                  </p>
                  {item.extras && item.extras.length > 0 && (
                    <div className="!mt-3 !space-y-1.5">
                      {item.extras.map((e) => (
                        <div
                          key={e.id}
                          className="
          flex
          items-center
          justify-between
          gap-3
          text-xs
          text-gray-500
        "
                        >
                          <span className="flex items-center">
                            <span className="!mr-2 text-primary">+</span>

                            {e.name}

                            <span
                              className="
              !ml-2
              rounded-full
              bg-gray-100
              !px-2
              !py-0.5
              text-[10px]
              font-semibold
              text-gray-500
            "
                            >
                              ×{item.quantity}
                            </span>
                          </span>

                          <span className="font-medium text-gray-600">
                            {formatCurrency(e.price * (item.quantity ?? 0))}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <Button
                  variant="ghost"
                  size="icon"
                  className="
    !h-9
    !w-9
    shrink-0
    rounded-full
    text-gray-400
    transition-all
    hover:bg-red-50
    hover:text-red-500
    hover:scale-105
  "
                  onClick={() => dispatch(removeCartItem({ id: item.id }))}
                >
                  <TrashIcon className="h-4 w-4" />
                </Button>
              </li>
            ))}
          </ul>

          {/* Totals Section */}
<div
  className="
    !mt-6
    rounded-2xl
    border
    border-gray-100
    bg-[#faf8f6]
    !p-5
    !space-y-4
  "
>
  <div className="flex items-center justify-between text-sm">
    <span className="text-gray-500">
      Subtotal
    </span>

    <span className="font-semibold text-gray-800">
      {formatCurrency(subtotal)}
    </span>
  </div>

  <div className="flex items-center justify-between text-sm">
    <span className="text-gray-500">
      Delivery
    </span>

    <span className="font-semibold text-gray-800">
      {formatCurrency(delivery)}
    </span>
  </div>

  <div className="border-t border-gray-200 !pt-4">
    <div className="flex items-center justify-between">
      <span className="text-base font-bold text-gray-900">
        Total
      </span>

      <span className="text-2xl font-black text-primary">
        {formatCurrency(total)}
      </span>
    </div>
  </div>
</div>
        </>
      ) : (
     <div
  className="
    flex
    min-h-[300px]
    flex-col
    items-center
    justify-center
    !space-y-4
    text-center
  "
>
  <div
    className="
      flex
      h-20
      w-20
      items-center
      justify-center
      rounded-full
      bg-primary/10
      text-4xl
    "
  >
    🍕
  </div>

  <div>
    <h3 className="text-xl font-bold text-gray-900">
      Your cart is empty
    </h3>

    <p className="!mt-2 text-sm text-gray-500">
      Looks like you have not added anything yet.
    </p>
  </div>
</div>
      )}
    </div>
  );
}
