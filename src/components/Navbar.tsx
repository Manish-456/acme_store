"use client";
import { selectCartItemsCount } from '@/redux/cart-selector';
import React from 'react'
import { useSelector } from 'react-redux';
import Cart from './Cart';

export default function Navbar() {

  // get the cart count 
  const cart = useSelector(selectCartItemsCount);
  
  return (

     <div className='px-8 py-6 max-w-7xl w-full top-0 z-40 backdrop-blur-md bg-opacity-20 sticky  '>
      <div className="flex justify-between items-center">
       <h1 className='text-2xl font-extrabold sm:text-3xl'>
          Acme
       </h1>
       <div className='bg-gray-400/[0.3] relative rounded-full p-3'>
    <Cart />
       </div>
      </div>
    </div>
  )
}
