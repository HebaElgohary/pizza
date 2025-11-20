"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { useAppSelector } from "@/redux/hooks";
import { getTotal } from "@/lib/CartQuantity";
import { formatCurrency } from "@/lib/formatters";


export default function CheckoutForm() {
  const cart = useAppSelector((state) => state.cart.items);
  const total = getTotal(cart);
  return (
    cart &&
    cart.length > 0 && (
      <div className="grid gap-6 bg-gray-100 rounded-md !p-6 md:w-2/3">
        <h2 className="text-2xl text-black font-semibold ">Checkout </h2>
        <form>
          <div className="grid gap-4 ">
            <div className="grid gap-2 ">
              <Label className="text-gray-500 font-bold flex " htmlFor="phone">
                Phone{" "}
              </Label>
              <Input
                  className="!p-2"

                id="phone "
                placeholder="Enter your phone "
                type="text"
                name="phone"
              ></Input>

              <Label className="text-gray-500 font-bold flex" htmlFor="Address">
                Street Address{" "}
              </Label>
              <Input
                  className="!p-2"

                id="Address "
                placeholder="Enter your Address"
                type="text"
                name="Address"
              ></Input>
              <div className="flex gap-5">
                <div>
                  <Label className="text-gray-500 font-bold flex" htmlFor="postalCode">
                    Postal Code{" "}
                  </Label>
                  <Input
                  className="!p-2"

                    id="postalCode "
                    placeholder="Enter  postal Code "
                    type="text"
                    name="postalCode"
                  ></Input>
                </div>

                <div>
                  <Label className="text-gray-500 font-bold flex" htmlFor="City">
                    City{" "}
                  </Label>
                  <Input
                  className="!p-2"

                    id="City "
                    placeholder="Enter your City "
                    type="text"
                    name="City"
                  ></Input>
                </div>
              </div>

               <div className="w-1/2">
                  <Label className="text-gray-500 font-bold flex" htmlFor="Country">
                     Country{" "}
                  </Label>
                  <Input
                  className="!p-2"
                    id="Country "
                    placeholder="Enter Country "
                    type="text"
                    name="Country"
                  ></Input>
                </div>

            </div>
          <Button className="w-full">Pay {formatCurrency(total)} $</Button>

          </div>
        </form>
      </div>

//       <div className="bg-white shadow-lg rounded-xl p-6 md:w-2/3 space-y-6 border border-gray-100">
//   <h2 className="text-2xl font-bold text-gray-800">Checkout</h2>

//   <form className="space-y-5">
//     {/* Phone */}
//     <div className="space-y-2">
//       <Label htmlFor="phone" className="text-gray-600 font-medium">
//         Phone
//       </Label>
//       <Input
//         className="p-3 rounded-lg border-gray-300 focus:ring-2 focus:ring-primary"
//         id="phone"
//         placeholder="Enter your phone number"
//         type="text"
//         name="phone"
//       />
//     </div>

//     {/* Address */}
//     <div className="space-y-2">
//       <Label htmlFor="address" className="text-gray-600 font-medium">
//         Street Address
//       </Label>
//       <Input
//         className="p-3 rounded-lg border-gray-300 focus:ring-2 focus:ring-primary"
//         id="address"
//         placeholder="123 Main Street"
//         type="text"
//         name="address"
//       />
//     </div>

//     {/* Postal & City */}
//     <div className="flex gap-4">
//       <div className="flex-1 space-y-2">
//         <Label htmlFor="postalCode" className="text-gray-600 font-medium">
//           Postal Code
//         </Label>
//         <Input
//           className="p-3 rounded-lg border-gray-300 focus:ring-2 focus:ring-primary"
//           id="postalCode"
//           placeholder="Enter postal code"
//           type="text"
//           name="postalCode"
//         />
//       </div>

//       <div className="flex-1 space-y-2">
//         <Label htmlFor="city" className="text-gray-600 font-medium">
//           City
//         </Label>
//         <Input
//           className="p-3 rounded-lg border-gray-300 focus:ring-2 focus:ring-primary"
//           id="city"
//           placeholder="Enter your city"
//           type="text"
//           name="city"
//         />
//       </div>
//     </div>

//     {/* Country */}
//     <div className="w-1/2 space-y-2">
//       <Label htmlFor="country" className="text-gray-600 font-medium">
//         Country
//       </Label>
//       <Input
//         className="p-3 rounded-lg border-gray-300 focus:ring-2 focus:ring-primary"
//         id="country"
//         placeholder="Enter country"
//         type="text"
//         name="country"
//       />
//     </div>

//     {/* Pay Button */}
//     <Button className="w-full py-3 text-lg rounded-lg bg-primary text-white hover:opacity-90 transition-all">
//       Pay {formatCurrency(total)}
//     </Button>
//   </form>
// </div>

    )
  );
}
