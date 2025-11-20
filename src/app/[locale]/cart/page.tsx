import React from 'react'
import CartItems from './_component/CartItems'
import CheckoutForm from './_component/CheckoutForm'
import MainHeading from '@/components/MainHeading'
export default function CartPage() {
  return (
  <main>
    <section className='section gap container  flex flex-col text-center !gap-11 min-h-screen'>
        <MainHeading  subtitle='cart' title=' '></MainHeading>
        <div className='flex flex-col md:flex-row  gap-30'>
            <CartItems />
            <CheckoutForm />
        </div>
    </section>
  </main>
  )
}
