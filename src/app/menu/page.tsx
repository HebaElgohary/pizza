import React from 'react'
import { getProductsByCategories } from '@/server/db/products'
import { categoryWithPayLoad } from '../../types/productWithPayLoad';
import Image from 'next/image';
import MenuButton from '@/components/MenuButton/index'
import { formatCurrency } from '@/lib/formatters';
export default async function menu() {
  const categories:categoryWithPayLoad[]=await getProductsByCategories()

  return (
  <main className='container min-h-[76vh]'>
{
  categories.map((category)=>
    <div key={category.id}>
    <h3 className='text-3xl text-primary font-bold text-center !my-11'>{category.name}</h3>
 
   <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 !my-5 container '>
            {category.products.map((product)=>
           <li key={product.id}>
  <div className="group bg-white rounded-2xl shadow-md overflow-hidden transition-transform hover:scale-105 hover:shadow-xl">
    <div className="relative w-full h-48">
      <Image 
        src={product.img} 
        alt={product.name} 
        fill
        className="object-cover group-hover:scale-110 transition-transform"
      />
    </div>
    <div className="!p-4 flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <h4 className="text-lg font-semibold">{product.name}</h4>
        <span className="text-primary font-bold">{formatCurrency(product.basePrice)}</span>
      </div>
      <p className="text-gray-500 text-sm line-clamp-2">{product.description}</p>
      <div className="!mt-3 flex justify-center">
        <MenuButton item={product} />
      </div>
    </div>
  </div>
</li>

    )}
      </ul>
      
    </div>
  
  )
}
  </main>
  )

}