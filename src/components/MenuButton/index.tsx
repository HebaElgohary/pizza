"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import { formatCurrency } from "@/lib/formatters";
import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { getItemQuantity } from "@/lib/CartQuantity";
import { Label } from "@radix-ui/react-label";
import { productWithPayLoad } from "@/types/productWithPayLoad";
import { Size, ProductSizes, Extra } from "@prisma/client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";

import {
  addCartItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  cartItem,
} from "@/redux/features/cart/cartSlice";

import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group";

import { Checkbox } from "@/components/ui/checkbox";
import { useSession } from "next-auth/react";

// --------------------------------------------------
// Main Component
// --------------------------------------------------

export default function MenuBtn({
  item,
}: {
  item: productWithPayLoad;
}) {
  const session = useSession();

  const cart = useAppSelector(
    (state: RootState) => state.cart!.items
  );

  const dispatch = useAppDispatch();

  const defaultSize =
    cart.find(
      (product: cartItem) => product.id === item.id
    )?.size ||
    item.sizes.find(
      (size) => size.name === ProductSizes.SMALL
    );

  const defaultExtra =
    cart.find(
      (product: cartItem) => product.id === item.id
    )?.extras || [];

  const [selectedSize, setSelectedSize] =
    useState<Size>(defaultSize!);

  const [selectedExtras, setSelectedExtras] =
    useState<Extra[]>(defaultExtra);

  const itemQuantity = getItemQuantity(
    cart,
    item.id,
    selectedSize?.id,
    selectedExtras
  );

  // Calculate total price
  const totalPrice = useMemo(() => {
    const extraPrice = selectedExtras.reduce(
      (total, extra) => total + extra.price,
      0
    );

    return (
      item.basePrice +
      (selectedSize?.price ?? 0) +
      extraPrice
    );
  }, [item.basePrice, selectedSize, selectedExtras]);

  const handleAddToCart = (
    item: productWithPayLoad
  ) => {
    dispatch(
      addCartItem({
        id: item.id,
        name: item.name,
        image: item.img,
        basePrice: item.basePrice,
        size: selectedSize,
        extras: selectedExtras,
      })
    );
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="
            !w-full
            !rounded-xl
            !py-3
            bg-primary
            font-semibold
            text-white
            shadow-sm
            transition-all
            duration-300
          
            hover:-translate-y-0.5
            hover:shadow-lg
          "
        >
          Add to cart
        </Button>
      </DialogTrigger>

      <DialogContent
        className="
          !w-[calc(100%-2rem)]
          !max-w-[520px]
          h-[95%]
!mb-11
          !p-0
          overflow-hidden
          rounded-3xl
          border-0
          bg-white
          shadow-2xl
        "
      >
        {/* =========================================
            HEADER / IMAGE
        ========================================= */}

        <DialogHeader className="!space-y-0 !p-0">
          <div className="relative h-52 w-full overflow-hidden sm:h-60">
            <Image
              src={
                item.img ||
                "/images/OIP (2).png"
              }
              alt={item.name}
              fill
              className="
                object-cover
                transition-transform
                duration-700
                hover:scale-105
              "
            />

            {/* Image gradient */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/70
                via-black/10
                to-transparent
              "
            />

            {/* Price */}
            <div
              className="
                absolute
                bottom-4
                right-4
                rounded-full
                bg-white/95
                !px-4
                !py-2
                shadow-lg
                backdrop-blur
              "
            >
              <span className="font-bold text-primary">
                {formatCurrency(totalPrice)}
              </span>
            </div>

            {/* Product name */}
            <div className="absolute bottom-4 left-5 right-20">
              <DialogTitle
                className="
                  text-left
                  text-2xl
                  font-extrabold
                  text-white
                  drop-shadow-lg
                  sm:text-3xl
                "
              >
                {item.name}
              </DialogTitle>
            </div>
          </div>

          {/* Description */}
          <div className="!px-6 !pt-5">
            <DialogDescription
              className="
                text-left
                text-sm
                leading-6
                text-gray-500
              "
            >
              {item.description}
            </DialogDescription>
          </div>
        </DialogHeader>

        {/* =========================================
            OPTIONS
        ========================================= */}

        <div
          className="
            max-h-[45vh]
            overflow-y-auto
            !px-6
            !pb-6
            !pt-5
          "
        >
          {/* SIZE */}
          <section>
            <div className="!mb-4 flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-gray-900">
                  Choose your size
                </h3>

                <p className="!mt-1 text-xs text-gray-400">
                  Select the perfect size for you
                </p>
              </div>

              <span className="rounded-full bg-primary/10 !px-3 !py-1 text-xs font-semibold text-primary">
                Required
              </span>
            </div>

            <RadioGroup>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {item.sizes.map((size) => (
                  <label
                    key={size.id}
                    htmlFor={`size-${size.id}`}
                    className={`
                      group
                      relative
                      cursor-pointer
                      rounded-2xl
                      border
                      !p-4
                      transition-all
                      duration-200
                      ${
                        selectedSize?.id === size.id
                          ? "border-primary bg-primary/5 shadow-sm"
                          : "border-gray-200 bg-white hover:border-primary/40 hover:bg-gray-50"
                      }
                    `}
                  >
                    <div className="flex items-center !space-x-3">
                      <RadioGroupItem
                        value={size.name}
                        checked={
                          selectedSize?.id === size.id
                        }
                        onClick={() =>
                          setSelectedSize(size)
                        }
                        id={`size-${size.id}`}
                        className="border-primary"
                      />

                      <div>
                        <p
                          className={`
                            text-sm
                            font-bold
                            ${
                              selectedSize?.id === size.id
                                ? "text-primary"
                                : "text-gray-700"
                            }
                          `}
                        >
                          {size.name}
                        </p>

                        <p className="!mt-1 text-xs text-gray-400">
                          {formatCurrency(
                            size.price +
                              item.basePrice
                          )}
                        </p>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </RadioGroup>
          </section>

          {/* DIVIDER */}
          <div className="!my-6 h-px bg-gray-100" />

          {/* EXTRAS */}
          <section>
            <div className="!mb-4 flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-gray-900">
                  Add extras
                </h3>

                <p className="!mt-1 text-xs text-gray-400">
                  Make your pizza even better
                </p>
              </div>

              <span className="rounded-full bg-gray-100 !px-3 !py-1 text-xs font-medium text-gray-500">
                Optional
              </span>
            </div>

            <CheckboxDemo
              extras={item.extras}
              selectedExtras={selectedExtras}
              setSelectedExtras={setSelectedExtras}
            />
          </section>
        </div>

        {/* =========================================
            FOOTER
        ========================================= */}

        <DialogFooter
          className="
            !m-0
            !p-4
            border-t
            border-gray-100
            bg-gray-50/80
            backdrop-blur
            sm:!p-5
          "
        >
          {itemQuantity > 0 ? (
            <div className="flex w-full items-center justify-between !space-x-4">
              {/* Quantity */}
              <div
                className="
                  flex
                  items-center
                  rounded-xl
                  border
                  border-gray-200
                  bg-white
                  !p-1
                  shadow-sm
                "
              >
                <Button
                  type="button"
                  variant="ghost"
                  className="
                    !h-9
                    !w-9
                    !p-0
                    rounded-lg
                    text-lg
                    font-bold
                    text-primary
                    hover:bg-primary/10
                  "
                  onClick={() =>
                    dispatch(
                      decreaseItemQuantity({
                        id: item.id,
                        sizeId: selectedSize.id,
                        extras: selectedExtras,
                      })
                    )
                  }
                >
                  −
                </Button>

                <span className="!w-9 text-center text-sm font-bold text-gray-800">
                  {itemQuantity}
                </span>

                <Button
                  type="button"
                  variant="ghost"
                  className="
                    !h-9
                    !w-9
                    !p-0
                    rounded-lg
                    text-lg
                    font-bold
                    text-primary
                    hover:bg-primary/10
                  "
                  onClick={() =>
                    dispatch(
                      increaseItemQuantity({
                        id: item.id,
                        sizeId: selectedSize.id,
                        extras: selectedExtras,
                      })
                    )
                  }
                >
                  +
                </Button>
              </div>

              {/* Done */}
              <DialogClose asChild>
                <Button
                  className="
                    !flex-1
                    !rounded-xl
                    !py-3
                    font-bold
                    shadow-md
                    transition-all
                    hover:shadow-lg
                  "
                >
                  Done
                </Button>
              </DialogClose>
            </div>
          ) : (
            <DialogClose asChild>
              <Button
                onClick={() =>
                  handleAddToCart(item)
                }
                className="
                  !w-full
                  !rounded-xl
                  !py-3
                  text-sm
                  font-bold
                  shadow-md
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:shadow-xl
                "
              >
                <span>Add to cart</span>

                <span className="!mx-2 opacity-50">
                  •
                </span>

                <span>
                  {formatCurrency(totalPrice)}
                </span>
              </Button>
            </DialogClose>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

// ==================================================
// Radio Group
// ==================================================

function RadioGroupDemo({
  sizes,
  selectedSize,
  setSelectedSize,
}: {
  sizes: Size[];
  selectedSize: Size;
  setSelectedSize: React.Dispatch<
    React.SetStateAction<Size>
  >;
}) {
  return (
    <RadioGroup>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {sizes.map((size) => (
          <label
            key={size.id}
            htmlFor={`size-${size.id}`}
            className={`
              cursor-pointer
              rounded-2xl
              border
              !p-4
              transition-all
              ${
                selectedSize?.id === size.id
                  ? "border-primary bg-primary/5"
                  : "border-gray-200 hover:border-primary/40"
              }
            `}
          >
            <div className="flex items-center !space-x-3">
              <RadioGroupItem
                value={size.name}
                checked={
                  selectedSize?.id === size.id
                }
                onClick={() =>
                  setSelectedSize(size)
                }
                id={`size-${size.id}`}
                className="border-primary"
              />

              <div>
                <p className="text-sm font-bold text-gray-800">
                  {size.name}
                </p>

                <p className="!mt-1 text-xs text-gray-400">
                  {formatCurrency(size.price)}
                </p>
              </div>
            </div>
          </label>
        ))}
      </div>
    </RadioGroup>
  );
}

// ==================================================
// Extras
// ==================================================

export function CheckboxDemo({
  extras,
  selectedExtras,
  setSelectedExtras,
}: {
  extras: Extra[];
  selectedExtras: Extra[];
  setSelectedExtras: React.Dispatch<
    React.SetStateAction<Extra[]>
  >;
}) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {extras.map((extra) => {
        const isSelected = selectedExtras.some(
          (selectedExtra) =>
            selectedExtra.id === extra.id
        );

        return (
          <label
            key={extra.id}
            htmlFor={`extra-${extra.id}`}
            className={`
              flex
              cursor-pointer
              items-center
              justify-between
              rounded-2xl
              border
              !p-4
              transition-all
              duration-200
              ${
                isSelected
                  ? "border-primary bg-primary/5"
                  : "border-gray-200 bg-white hover:border-primary/40 hover:bg-gray-50"
              }
            `}
          >
            <div className="flex items-center !space-x-3">
              <Checkbox
                id={`extra-${extra.id}`}
                className="border-primary"
                checked={isSelected}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setSelectedExtras([
                      ...selectedExtras,
                      extra,
                    ]);
                  } else {
                    setSelectedExtras(
                      selectedExtras.filter(
                        (selectedExtra) =>
                          selectedExtra.id !==
                          extra.id
                      )
                    );
                  }
                }}
              />

              <span className="text-sm font-medium text-gray-700">
                {extra.name}
              </span>
            </div>

            <span className="text-sm font-bold text-primary">
              +{formatCurrency(extra.price)}
            </span>
          </label>
        );
      })}
    </div>
  );
}