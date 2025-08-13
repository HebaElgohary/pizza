import React from 'react'



export default function MainHeading ({title ,subtitle}:{title:string ,subtitle:string}) {
  return (
    <div className='flex flex-col'>
      <span className='text-gray-500 leading-8 font-bold uppercase text-lg text-center'>{title}</span>
      <h2 className='text-2xl  font-bold  text-primary italic'>{subtitle}</h2>
    </div>
  )
}
