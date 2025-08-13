// import { Button } from '@/components/ui/button';
import Image from 'next/image'
import { formatCurrency } from '@/lib/formatters'
import MenuButton from '@/components/MenuButton/index'
// import { Product } from '@prisma/client'
import {productWithPayLoad} from'@/types/productWithPayLoad'
// import { clsx } from 'clsx';

export default function index({items}:{items:productWithPayLoad[]}) {
    // const sizes=[{id:crypto.randomUUID(),name:'small',price:0},
    //     {id:crypto.randomUUID(),name:'medium',price:4},
    //     {id:crypto.randomUUID(),name:'large',price:8},
    // ]

    //     const extras=[{id:crypto.randomUUID(),name:'cheese',price:2},
    //     {id:crypto.randomUUID(),name:'onion',price:4},
    //     {id:crypto.randomUUID(),name:'Potato',price:6},
    // ]
  return (
    <div>
          <ul className='grid grid-cols-1 md:grid-cols-3 gap-20 !my-5 container'>{
        items.map( (product)=>
            <li key={product.id}>
                <div className='flex flex-col  hover:bg-red-100 !my-5 gap-2 rounded-xl'>
                    <Image src={product.img} width={250} height={100} objectFit='cover' alt='pizza' />
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
    </div>
  )
}
