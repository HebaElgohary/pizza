'use client'

import { useAppSelector } from '@/redux/hooks'
import React from 'react'
import { RootState } from '@/redux/store'

export default function CartItems() {
    const cart=useAppSelector((state:RootState)=>state.cart)
  return (
    <div>
      CartItems
    </div>
  )
}
