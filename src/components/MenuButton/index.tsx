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
import { Label } from "@radix-ui/react-label";
import { productWithPayLoad } from "@/types/productWithPayLoad";
import { Size, ProductSizes, Extra } from "@prisma/client";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";

// -------------- Main Component ----------------
export default function MenuBtn({ item }: { item: productWithPayLoad }) {
  const cart = useAppSelector((state: RootState) => state.cart).items;

  const defaultSize =
    cart.find((product) => product.id === item.id)?.size ||
    item.sizes.find((p) => p.name === ProductSizes.SMALL);

  const defaultExtra = cart.find((p) => p.id === item.id)?.extras || [];

  const [selectedSize, setSelectedSize] = useState<Size>(defaultSize!);
  const [selectedExtras, setSelectedExtras] = useState<Extra[]>(defaultExtra!);

  const [totalPrice,setTotalPrice] =useState( item.basePrice);
  useMemo(() => {
    let extraPrice = 0;
    for (const extra of selectedExtras) {
      extraPrice += extra.price;
    }
    setTotalPrice(item.basePrice + selectedSize.price + extraPrice);
  }, [selectedSize, selectedExtras]);
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button className="!p-3 rounded-2xl">Add to cart</Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[425px] md:max-w-[500px] max-h-[60vh] flex flex-col overflow-y-auto">
          <DialogHeader className="flex flex-col items-center !p-1">
            <Image src={item.img} alt="pizza" width={200} height={100} />
            <DialogTitle className="text-primary text-2xl">
              {item.name}
            </DialogTitle>
            <DialogDescription>{item.description}</DialogDescription>
          </DialogHeader>

          <div>
            {/* Sizes */}
            <div className="flex flex-col gap-2 !p-11 !pt-0">
              <Label htmlFor="size" className="text-lg font-bold text-center">
                Pick your size
              </Label>
              <RadioGroupDemo
                sizes={item.sizes}
                selectedSize={selectedSize}
                setSelectedSize={setSelectedSize}
                item={item}
              />
            </div>

            {/* Extras */}
            <div className="!p-11 !pt-3 flex flex-col gap-2">
              <Label htmlFor="extra" className="text-lg font-bold text-center">
                Any Extras?
              </Label>
              <CheckboxDemo
                extras={item.extras}
                selectedExtras={selectedExtras}
                setSelectedExtras={setSelectedExtras}
              />
            </div>
          </div>

          <DialogFooter className="!justify-center !py-3">
            <DialogClose asChild>
              <Button className="!p-3 rounded-2xl w-1/3">Add to cart {formatCurrency(totalPrice)}</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}

// -------------- Radio group component ----------------
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

function RadioGroupDemo({
  sizes,
  selectedSize,
  setSelectedSize,
  item,
}: {
  sizes: Size[];
  selectedSize: Size;
  setSelectedSize: React.Dispatch<React.SetStateAction<Size>>;
  item: productWithPayLoad;
}) {
  return (
    <RadioGroup>
      {sizes.map((size) => (
        <div key={size.id} className="flex items-center gap-3">
          <RadioGroupItem
            value={size.name}
            checked={selectedSize.id === size.id}
            onClick={() => {
              setSelectedSize(size);
            }}
            id={`size-${size.id}`}
            className="border-primary"
          />
          <Label htmlFor={`size-${size.id}`} className="text-gray-500">
            {size.name} ({formatCurrency(size.price + item.basePrice)})
          </Label>
        </div>
      ))}
    </RadioGroup>
  );
}

// -------------- Checkbox component for Extras ----------------
import { Checkbox } from "@/components/ui/checkbox";

export function CheckboxDemo({
  extras,
  selectedExtras,
  setSelectedExtras,
}: {
  extras: Extra[];
  selectedExtras: Extra[];
  setSelectedExtras: React.Dispatch<React.SetStateAction<Extra[]>>;
}) {
  return (
    <div className="flex flex-col gap-6">
      {extras.map((extra) => (
        <div key={extra.id} className="flex items-center gap-3">
          <Checkbox
            id={`extra-${extra.id}`}
            className="border-primary"
            value={extra.name}
            checked={selectedExtras.some(
              (selectedExtra: Extra) => selectedExtra.id === extra.id
            )}
            onCheckedChange={(checked) => {
              if (checked) setSelectedExtras([...selectedExtras, extra]);
              else {
                setSelectedExtras(
                  selectedExtras.filter(
                    (selectedExtra) => selectedExtra.id !== extra.id
                  )
                );
              }
            }}
          />
          <Label htmlFor={`extra-${extra.id}`} className="text-gray-500">
            {extra.name} {formatCurrency(extra.price)}
          </Label>
        </div>
      ))}
    </div>
  );
}
