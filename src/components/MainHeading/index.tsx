import React from 'react'



export default function MainHeading ({title ,subtitle}:{title:string ,subtitle:string}) {
  return (
    <div className='flex flex-col !mt-11'>
      <span className='text-gray-500 leading-8 font-bold uppercase text-xl text-center'>{title}</span>
      <h2 className='text-3xl  font-bold  text-primary italic'>{subtitle}</h2>
    </div>
  )
}
