"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { useAppSelector } from "@/redux/hooks";
import { getTotal } from "@/lib/CartQuantity";
import { formatCurrency } from "@/lib/formatters";

export default function CheckoutForm() {
  const cart = useAppSelector(
    (state) => state.cart.items
  );

  const total = getTotal(cart);

  if (!cart || cart.length === 0) {
    return null;
  }

  return (
    <div
      className="
        w-full
        overflow-hidden
        rounded-3xl
        border
        shadow-xl
        border-gray-100
        bg-white
        // shadow-[0_15px_50px_rgb(0,0,0,0.08)]
        md:!max-w-2xl
      "
    >
      {/* =====================================
          HEADER
      ====================================== */}

      <div
        className="
          border-b
          border-gray-100
          bg-gradient-to-br
          from-primary/10
          via-white
          to-orange-50
          !px-6
          !py-7
          sm:!px-8
        "
      >
        <div className="flex items-center !space-x-3">
          <div
            className="
              flex
              h-11
              w-11
              shrink-0
              items-center
              justify-center
              rounded-2xl
              bg-primary
              text-xl
              shadow-md
            "
          >
            🛵
          </div>

          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
              Checkout
            </h2>

            <p className="!mt-1 text-sm text-gray-500">
              Enter your delivery details
            </p>
          </div>
        </div>
      </div>

      {/* =====================================
          FORM
      ====================================== */}

      <form className="!space-y-6 !p-6 sm:!p-8">

        {/* Phone */}
        <div className="!space-y-2">
          <Label
            htmlFor="phone"
            className="text-sm font-semibold text-gray-700"
          >
            Phone Number
          </Label>

          <Input
            id="phone"
            placeholder="01XXXXXXXXX"
            type="tel"
            name="phone"
            className="
              !h-12
              !rounded-xl
              border-gray-200
              bg-gray-50
              !px-4
              transition-all
              placeholder:text-gray-400
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

        {/* Street Address */}
        <div className="!space-y-2">
          <Label
            htmlFor="address"
            className="text-sm font-semibold text-gray-700"
          >
            Street Address
          </Label>

          <Input
            id="address"
            placeholder="Enter your street address"
            type="text"
            name="address"
            className="
              !h-12
              !rounded-xl
              border-gray-200
              bg-gray-50
              !px-4
              transition-all
              placeholder:text-gray-400
              focus:border-primary
              focus:bg-white
              focus:ring-2
              focus:ring-primary/20
            "
          />
        </div>

        {/* Postal Code + City */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

          {/* Postal Code */}
          <div className="!space-y-2">
            <Label
              htmlFor="postalCode"
              className="text-sm font-semibold text-gray-700"
            >
              Postal Code
            </Label>

            <Input
              id="postalCode"
              placeholder="e.g. 12345"
              type="text"
              name="postalCode"
              className="
                !h-12
                !rounded-xl
                border-gray-200
                bg-gray-50
                !px-4
                transition-all
                placeholder:text-gray-400
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
              placeholder="Enter your city"
              type="text"
              name="city"
              className="
                !h-12
                !rounded-xl
                border-gray-200
                bg-gray-50
                !px-4
                transition-all
                placeholder:text-gray-400
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
            className="text-sm font-semibold text-gray-700"
          >
            Country
          </Label>

          <Input
            id="country"
            placeholder="Enter your country"
            type="text"
            name="country"
            className="
              !h-12
              !rounded-xl
              border-gray-200
              bg-gray-50
              !px-4
              transition-all
              placeholder:text-gray-400
              focus:border-primary
              focus:bg-white
              focus:ring-2
              focus:ring-primary/20
            "
          />
        </div>

        {/* =====================================
            ORDER SUMMARY
        ====================================== */}

        <div
          className="
            !mt-2
            rounded-2xl
            border
            border-primary/10
            bg-primary/5
            !p-5
          "
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">
                Order Total
              </p>

              <p className="!mt-1 text-xs text-gray-400">
                Including your selected items
              </p>
            </div>

            <span className="text-2xl font-black text-primary">
              {formatCurrency(total)}
            </span>
          </div>
        </div>

        {/* =====================================
            PAY BUTTON
        ====================================== */}

        <Button
          type="submit"
          className="
            !h-13
            !w-full
            !rounded-xl
            !py-3
            text-base
            font-bold
            shadow-lg
            shadow-primary/20
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:shadow-xl
            hover:shadow-primary/25
          "
        >
          <span>Place Order</span>

          <span className="!mx-2 opacity-50">
            •
          </span>

          <span>
            {formatCurrency(total)}
          </span>
        </Button>

        {/* Security / Info */}
        <p className="text-center text-xs text-gray-400">
          🔒 Your information is secure and protected.
        </p>
      </form>
    </div>
  );
}