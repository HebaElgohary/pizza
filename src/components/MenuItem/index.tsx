// import { Button } from '@/components/ui/button';
import Image from 'next/image'
import { formatCurrency } from '@/lib/formatters'
import MenuButton from '@/components/MenuButton/index'
// import { Product } from '@prisma/client'
import {productWithPayLoad} from'@/types/productWithPayLoad'
// import { clsx } from 'clsx';

export default function index({items}:{items:productWithPayLoad[]}) {
 
  return (
    <div>
      {items?
          <ul className='grid grid-cols-1 md:grid-cols-3 gap-10 !my-5 container '>{
        items.map( (product)=>
            <li key={product.id}>
                <div className='flex flex-col items-center hover:bg-red-100 bg-red-200 !my-5  gap-2 rounded-xl !p-9' >
                    <Image src={product.img} width={200} height={100} objectFit='cover' alt='pizza' />
                    <div className='flex justify-around w-full items-center '>
                        <div className='text-lg font-bold'>{product.name}</div>
                        <div className='text-sm text-gray-500'>{formatCurrency(product.basePrice)}</div>
                    </div>
                    <div className='text-center text-gray-500'> {product.description}</div>

                    {/* <Button className='!p-3 rounded-2xl'>Add to cart</Button> */}
                    <div className='text-center'>
                    <MenuButton item={product}  />
                    </div>
                    </div>   
                 </li>
  )}
    </ul>
    : <div className='text-2xl !mt-11 text-red-500 '> No Products Found 😑 !</div>}
    </div>
  )
}
