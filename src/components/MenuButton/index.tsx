"use client";
import React from "react";
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

export default function index({ item }: { item: productWithPayLoad }) {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button className="!p-3 rounded-2xl">Add to cart</Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[425px] md:max-w-[500px] max-h-[60vh] flex flex-col  overflow-y-auto">
          <DialogHeader className="flex flex-col items-center !p-4">
            <Image src={item.img} alt="pizza" width={200} height={100} />
            <DialogTitle>{item.name}</DialogTitle>
            <DialogDescription>{item.description}</DialogDescription>
          </DialogHeader>

          <div className="">
            <div className=" flex flex-col gap-2 !p-11 !pt-3 ">
              <Label htmlFor="size" className="text-lg font-bold text-center">
                pick your size
              </Label>
              <RadioGroupDemo sizes={item.sizes} item={item}></RadioGroupDemo>
            </div>

            <div className=" !p-11 !pt-3 flex flex-col gap-2">
              <Label htmlFor="extra" className="text-lg font-bold text-center">
                Any Extras?
              </Label>
              <CheckboxDemo extras={item.extras}></CheckboxDemo>
            </div>
          </div>
          <DialogFooter className="!justify-center !py-3">
            <DialogClose asChild>
              <Button className="!p-3 rounded-2xl w-1/3   ">Add to cart</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}

//  Radio group component
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

function RadioGroupDemo({
  sizes,
  item,
}: {
  sizes: Size[];
  item: productWithPayLoad;
}) {
  return (
    <RadioGroup defaultValue="comfortable">
      {sizes.map((size) => (
        <div key={size.id} className="flex items-center gap-3">
          <RadioGroupItem
            value={size.name}
            id="r1"
            className="border-primary"
          />
          <Label htmlFor="size" className="text-gray-500">
            {size.name} ({formatCurrency(size.price + item.basePrice)})
          </Label>
        </div>
      ))}
    </RadioGroup>
  );
}
//  Radio group component

//  checkbox component
// "use client"

import { Checkbox } from "@/components/ui/checkbox";
// import { Item } from '@radix-ui/react-radio-group'
import { Extra, Size } from "@prisma/client";

export function CheckboxDemo({ extras }: { extras: Extra[] }) {
  return (
    <div className="flex flex-col gap-6">
      {extras.map((extra) => (
        <div key={extra.id} className="flex items-center gap-3">
          <Checkbox id="extras" className="border-primary" />
          <Label htmlFor="extras" className="text-gray-500">
            {extra.name} {formatCurrency(extra.price)}
          </Label>
        </div>
      ))}
    </div>
  );
}

//  checkbox component
