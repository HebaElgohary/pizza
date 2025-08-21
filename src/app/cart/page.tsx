import React from 'react'
import CartItems from './_component/CartItems'
import CheckoutForm from './_component/CheckoutForm'
import MainHeading from '@/components/MainHeading'
import { clsx } from 'clsx';
export default function CartPage() {
  return (
  <main>
    <section className='section gap container  flex flex-col text-center gap-5 min-h-[50vh]'>
        <MainHeading  subtitle='cart' title=' '></MainHeading>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-11'>
            <CartItems />
            <CheckoutForm />
        </div>
    </section>
  </main>
  )
}
