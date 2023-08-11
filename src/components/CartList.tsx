"use client";
import { CartState, removeFromCart } from '@/redux/cart-slice'
import React from 'react'
import Image from 'next/image';
import { formatNumber } from '@/lib/helper';
import { useDispatch } from 'react-redux';
interface CartListProps {
    cartList : CartState
}
export default function CartList({cartList} : CartListProps) {
    const dispatch = useDispatch();
  return (
    <div className='space-y-8 px-6'>
        <div className="flex gap-4 justify-between items-start ">
            <div className="flex gap-x-3 items-start">
            <div className='shrink-0 relative w-12 h-12 ring-6 ring-slate-300'>
          <Image src={cartList.image} fill alt={cartList.title} className='rounded-md object-cover' />
            </div>
              <div>
                <h3 className=''>{cartList.title}</h3>
                <p className='text-sm '>{formatNumber(cartList.price)}</p>
              </div>
            </div>
            <div className='bg-rose-500 p-2 
            cursor-pointer rounded-full'
            onClick={() => dispatch(removeFromCart(cartList.id))}
            >
            <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-4 w-4"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </div>
        </div>
    </div>
  )
}
