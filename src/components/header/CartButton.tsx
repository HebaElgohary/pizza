import { Link } from 'lucide-react'
import React from 'react'
import { PrefetchOnHoverLink } from '../Link'
import { Routes } from '@/constants/enums'
import { ShoppingCart } from 'lucide-react'
export default function CartButton() {
  return (
<PrefetchOnHoverLink href={`/${Routes.CART}`} className='absolute right-4'>
<span className=' bg-red-500 text-xs !px-2 !py-1  rounded-full relative top-1 right-[-4] '>2</span>
<ShoppingCart size={35} /></PrefetchOnHoverLink>
 
  )
}
