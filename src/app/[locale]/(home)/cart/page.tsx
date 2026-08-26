import React from "react";

import CartItems from "./_components/CartItems";
import CheckoutForm from "./_components/CheckoutForm";
import MainHeading from "@/components/MainHeading";

export default function CartPage() {
  return (
    <main className="min-h-screen bg-[#faf8f6]">

      <section
        className="
          container
          !my-10
          !px-4
          sm:!my-14
          sm:!px-6
        "
      >

        {/* =========================
            PAGE HEADING
        ========================== */}

        <div className="!mb-10 text-center">
          <MainHeading
            subtitle="Cart"
            title="Your Order"
          />

          <p className="!mt-3 text-sm text-gray-500 sm:text-base">
            Review your delicious picks before placing your order.
          </p>
        </div>


        {/* =========================
            CART CONTENT
        ========================== */}

     <div
  className="
    grid
    grid-cols-1
    items-start
    gap-8
    lg:grid-cols-[1fr_420px]
    xl:gap-10
  "
>
  <div
    className="
      rounded-3xl
      border
      border-gray-200
      bg-white
      !p-5
      shadow-[0_8px_30px_rgba(0,0,0,0.05)]
      sm:!p-7
    "
  >
    <CartItems />
  </div>

  <div className="lg:sticky lg:top-24">
    <CheckoutForm />
  </div>
</div>

      </section>
    </main>
  );
}