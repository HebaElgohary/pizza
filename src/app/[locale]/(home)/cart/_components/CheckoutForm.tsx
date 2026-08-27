
"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";

import { useAppSelector } from "@/redux/hooks";
import { getTotal } from "@/lib/CartQuantity";
import { formatCurrency } from "@/lib/formatters";

import {
  Truck,
  Phone,
  MapPin,
  Mail,
  ShieldCheck,
  ShoppingBag,
  ArrowRight,
} from "lucide-react";

export default function CheckoutForm() {
  const cart = useAppSelector((state) => state.cart.items);

  const total = getTotal(cart);

  if (!cart || cart.length === 0) {
    return null;
  }

  return (
    <div className="!mx-auto w-full max-w-3xl">
      {/* Main Card */}
      <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
        {/* ================= HEADER ================= */}
        <div className="border-b border-gray-100 bg-gradient-to-br from-primary/[0.08] via-white to-orange-50/60 !px-5 !py-6 sm:!px-8 sm:!py-7">
          <div className="flex items-start gap-4">
            {/* Icon */}
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/20">
              <Truck className="h-6 w-6" />
            </div>

            <div>
              <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                Checkout
              </h1>

              <p className="!mt-1.5 text-sm leading-relaxed text-gray-500">
                Enter your delivery details to complete your order.
              </p>
            </div>
          </div>
        </div>

        {/* ================= FORM ================= */}
        <form className="!space-y-8 !p-5 sm:!p-8">
          {/* ================= DELIVERY INFORMATION ================= */}
          <section>
            <div className="!mb-5 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <MapPin className="h-4 w-4" />
              </div>

              <div>
                <h2 className="font-bold text-gray-900">
                  Delivery information
                </h2>

                <p className="text-xs text-gray-500">
                  Where should we deliver your order?
                </p>
              </div>
            </div>

            <div className="!space-y-5">
              {/* Phone */}
              <div className="!space-y-2">
                <Label
                  htmlFor="phone"
                  className="flex items-center gap-2 text-sm font-semibold text-gray-700"
                >
                  <Phone className="h-3.5 w-3.5 text-gray-400" />
                  Phone number
                </Label>

                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="01XXXXXXXXX"
                  autoComplete="tel"
                  required
                  className="
                    h-12
                    rounded-xl
                    border-gray-200
                    bg-gray-50/70
                    !px-4
                    transition-all
                    placeholder:text-gray-400
                    hover:border-gray-300
                    focus:border-primary
                    focus:bg-white
                    focus:ring-2
                    focus:ring-primary/20
                  "
                />

                <p className="text-xs text-gray-400">
                  We will use this number to contact you about your order.
                </p>
              </div>

              {/* Address */}
              <div className="!space-y-2">
                <Label
                  htmlFor="address"
                  className="flex items-center gap-2 text-sm font-semibold text-gray-700"
                >
                  <MapPin className="h-3.5 w-3.5 text-gray-400" />
                  Street address
                </Label>

                <Input
                  id="address"
                  name="address"
                  type="text"
                  placeholder="Enter your street address"
                  autoComplete="street-address"
                  required
                  className="
                    h-12
                    rounded-xl
                    border-gray-200
                    bg-gray-50/70
                    !px-4
                    transition-all
                    placeholder:text-gray-400
                    hover:border-gray-300
                    focus:border-primary
                    focus:bg-white
                    focus:ring-2
                    focus:ring-primary/20
                  "
                />
              </div>

              {/* Postal + City */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {/* Postal Code */}
                <div className="!space-y-2">
                  <Label
                    htmlFor="postalCode"
                    className="text-sm font-semibold text-gray-700"
                  >
                    Postal code
                  </Label>

                  <Input
                    id="postalCode"
                    name="postalCode"
                    type="text"
                    placeholder="e.g. 12345"
                    autoComplete="postal-code"
                    required
                    className="
                      h-12
                      rounded-xl
                      border-gray-200
                      bg-gray-50/70
                      !px-4
                      transition-all
                      placeholder:text-gray-400
                      hover:border-gray-300
                      focus:border-primary
                      focus:bg-white
                      focus:ring-2
                      focus:ring-primary/20
                    "
                  />
                </div>

                {/* City */}
                <div className="!space-y-2">
                  <Label
                    htmlFor="city"
                    className="text-sm font-semibold text-gray-700"
                  >
                    City
                  </Label>

                  <Input
                    id="city"
                    name="city"
                    type="text"
                    placeholder="Enter your city"
                    autoComplete="address-level2"
                    required
                    className="
                      h-12
                      rounded-xl
                      border-gray-200
                      bg-gray-50/70
                      !px-4
                      transition-all
                      placeholder:text-gray-400
                      hover:border-gray-300
                      focus:border-primary
                      focus:bg-white
                      focus:ring-2
                      focus:ring-primary/20
                    "
                  />
                </div>
              </div>

              {/* Country */}
              <div className="!space-y-2">
                <Label
                  htmlFor="country"
                  className="flex items-center gap-2 text-sm font-semibold text-gray-700"
                >
                  <MapPin className="h-3.5 w-3.5 text-gray-400" />
                  Country
                </Label>

                <Input
                  id="country"
                  name="country"
                  type="text"
                  placeholder="Enter your country"
                  autoComplete="country-name"
                  required
                  className="
                    h-12
                    rounded-xl
                    border-gray-200
                    bg-gray-50/70
                    !px-4
                    transition-all
                    placeholder:text-gray-400
                    hover:border-gray-300
                    focus:border-primary
                    focus:bg-white
                    focus:ring-2
                    focus:ring-primary/20
                  "
                />
              </div>
            </div>
          </section>

          {/* Divider */}
          <div className="border-t border-gray-100" />

          {/* ================= ORDER SUMMARY ================= */}
          <section>
            <div className="!mb-5 flex items-center gap-3">
              <div className="flex !h-9 !w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <ShoppingBag className="!h-4 !w-4" />
              </div>

              <div>
                <h2 className="font-bold text-gray-900">
                  Order summary
                </h2>

                <p className="text-xs text-gray-500">
                  Review your order before placing it.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-primary/10 bg-primary/[0.04] !p-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Total amount
                  </p>

                  <p className="!mt-1 text-xs text-gray-400">
                    {cart.length} {cart.length === 1 ? "item" : "items"} in
                    your order
                  </p>
                </div>

                <span className="text-2xl font-black tracking-tight text-primary sm:text-3xl">
                  {formatCurrency(total)}
                </span>
              </div>
            </div>
          </section>

          {/* ================= PLACE ORDER ================= */}
          <div className="!space-y-4">
            <Button
              type="submit"
              className="
                h-14
                w-full
                rounded-xl
                bg-primary
                text-base
                font-bold
                text-white
                shadow-lg
                shadow-primary/20
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-primary/90
                hover:shadow-xl
                hover:shadow-primary/25
                active:translate-y-0
              "
            >
              <span>Place order</span>

              <span className="!mx-3 h-5 w-px bg-white/30" />

              <span>{formatCurrency(total)}</span>

              <ArrowRight className="!ml-2 h-5 w-5" />
            </Button>

            {/* Security */}
            <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
              <ShieldCheck className="h-4 w-4 text-green-500" />

              <span>
                Your information is securely protected.
              </span>
            </div>
          </div>
        </form>
      </div>

      {/* Small trust information */}
      <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-gray-400">
        <div className="flex items-center gap-1.5">
          <ShieldCheck className="h-3.5 w-3.5 text-green-500" />
          Secure checkout
        </div>

        <div className="flex items-center gap-1.5">
          <Truck className="h-3.5 w-3.5 text-primary" />
          Fast delivery
        </div>

        <div className="flex items-center gap-1.5">
          <Phone className="h-3.5 w-3.5 text-primary" />
          Order support
        </div>
      </div>
    </div>
  );
}

