import React from 'react'
import Image from 'next/image' 
import { Button } from '@/components/ui/button'
import { MoveRight } from 'lucide-react';
import { getDictionary } from '../dictionaries';
import { Languages } from '@/constants/enums';
import { headers } from 'next/headers';
import { Locale } from '@/i18n.config';


export async function  Hero() {
  const url=(await headers()).get('x-url')
  const locale = (url?.split('/')[3] ?? Languages.ENGLISH) as Locale

  
  console.log('url is ',url)
  console.log('locale is ',locale)

// console.log (params)
  const {hero}=await getDictionary(locale)
  return (
  <section className='grid grid-cols-1 md:grid-cols-2 container section-gap gap-1   ' >
 
    <div className='!pl-11 !md:pl-3 !lg:my-5'>
        <h1 className='text-primary text-2xl md:text-3xl lg:text-4xl font-bold !pt-5 !mb-3 '>{hero.title}</h1>
        <p className='text-gray-400 text-sm md:text-xl !mb-5'>{hero.decription} </p>
        <Button className='!p-6 !mt-2 rounded-2xl !mt-9 !mr-3 text-2xl'>{hero.btn1} <span className='w-6 h-6 rounded-xl border-white border-1 flex items-center justify-center p-'> <MoveRight/></span>  </Button>
        <Button className='!p-6 !mt-2 rounded-2xl !mt-9  font-bold border-none text-2xl' variant={'outline'}>{hero.btn2} <span className='w-6 h-6 rounded-xl border-black border-2 flex items-center justify-center '> <MoveRight/></span>  </Button>

    </div>
    <div className='relative hidden md:block  '>

       <Image 
    src={'/images/OIP (2).png'}
    alt='pizza'
    loading='eager'
  //  fill
      width={300}
      
      height={100}
        priority
        className='object-contain absolute right-10 '

    ></Image>
    </div>
  </section>
  )
}
