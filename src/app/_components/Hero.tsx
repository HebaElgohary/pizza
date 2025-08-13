import React from 'react'
import Image from 'next/image' 
import { Button } from '@/components/ui/button'
import { MoveRight } from 'lucide-react';


export  function Hero() {
  return (
  <section className='grid grid-cols-1 md:grid-cols-2 container section-gap gap-20' >
 
    <div className='!pl-11 !md:pl-5'>
        <h1 className='text-primary text-2xl md:text-mxl font-bold !pt-5 !mb-3 '>Slice into happiness</h1>
        <p className='text-gray-400 text-sm md:text-lg'>At Pizzanova, we believe that pizza is more than just food . it’s a story told in every slice.
It’s the aroma that brings people to the table, the first bite that sparks joy, and the warmth that lingers in every gathering. To us, pizza is a universal language </p>
        <Button className='!p-4 !mt-2 rounded-2xl !mt-5 !mr-3'>Order now <span className='w-6 h-6 rounded-xl border-white border-1 flex items-center justify-center p-'> <MoveRight/></span>  </Button>
        <Button className='!p-4 !mt-2 rounded-2xl !mt-5  font-bold border-none' variant={'outline'}>Learn more <span className='w-6 h-6 rounded-xl border-black border-2 flex items-center justify-center '> <MoveRight/></span>  </Button>

    </div>
    <div className='relative hidden md:block '>

       <Image 
    src={'/images/pizza.jpg'}
    alt='pizza'
    loading='eager'
  //  fill
   width={300}
   height={100}
        priority
        className='object-contain absolute right-20'

    ></Image>
    </div>
  </section>
  )
}
