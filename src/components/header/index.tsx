import React from 'react';
import { NavBar } from './NavBar'
import { Button } from '../ui/button';
import { PrefetchOnHoverLink } from '../Link';

export default function Index() {
  return (
    <header className='container flex justify-between items-center'>
      <p className='text-primary flex items-center text-lg font-bold md:font-extrabold md:text-3xl '>
        <img src='/images/pizzeria logo.jpg' width={85} height={50} alt="logo" />
        Pizza
      </p>
      <NavBar></NavBar>
   
    
    </header>
  );
}
