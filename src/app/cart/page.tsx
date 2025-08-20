import React from 'react'
import CartItems from './_component/CartItems'
import CheckoutForm from './_component/CheckoutForm'
export default function CartPage() {
  return (
  <main>
    <section className='section gap container'>
        <h1 className='text-primary'>Cart</h1>
        <div className='grid grid-cols-1 m'>
            <CartItems />
            <CheckoutForm />
        </div>
    </section>
  </main>
  )
}
