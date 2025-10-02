import { PrefetchOnHoverLink } from '../Link'
import { Routes } from '@/constants/enums'
import { ShoppingCart } from 'lucide-react'
import { getCartQuantity } from '@/lib/CartQuantity'
import { useAppSelector } from '@/redux/hooks'
export default function CartButton() {

const cart =useAppSelector((state)=>state.cart.items)
  const quantity=getCartQuantity(cart)
  return (
<PrefetchOnHoverLink href={`/${Routes.CART}`} className=''>
<span className=' bg-red-500 text-xs !px-2 !py-1  rounded-full relative top-1 right-[-10] '>{quantity}</span>
<ShoppingCart size={35} /></PrefetchOnHoverLink>
 
  )
}
