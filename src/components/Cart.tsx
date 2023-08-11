"use client";

import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { selectCartItemsCount } from '@/redux/cart-selector';

import { useDispatch, useSelector } from 'react-redux'
import CartList from './CartList';
import { formatNumber } from '@/lib/helper';
import { removeAllItemsFromCart } from '@/redux/cart-slice';
export default function Cart() {
  const [open, setOpen] = useState(false)
  // get the cart count 
  const cart = useSelector(selectCartItemsCount);
  const dispatch = useDispatch();

  // get the totalprice of all items listed in the cart
  const totalPrice = cart.cartItems.reduce((acc, currVal) => {
    return acc + currVal.price
  } , 0);

  return (
  <> 
     <svg 
     onClick={() => setOpen(true)}
     xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
       {
        cart.cartLength > 0 && <div className="absolute -top-2 -right-3 p-3 text-sm h-4 w-4 flex items-center justify-center bg-rose-500 rounded-full" >{cart.cartLength}</div>
       }
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative  bg-gray-900 z-50" onClose={() => setOpen(false)}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500/[0.4] backdrop-blur-md bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                      <button
                        type="button"
                        className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={() => setOpen(false)}
                      >
                        <span className="absolute -inset-2.5" />
                        <span className="sr-only">Close panel</span>
                        {/* Close button */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex h-full flex-col overflow-y-scroll bg-gray-600/[0.9] py-6 shadow-xl">
                    <div className="px-4 sm:px-6">
                      <Dialog.Title className=" font-semibold leading-6 dark:text-gray-100 text-xl text-gray-900">
                       Cart Items
                      </Dialog.Title>
                    </div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                        <div  className='flex flex-col gap-y-8'>
                        {cart?.cartItems?.map(cartItem => (
                                <CartList key={cartItem.id} cartList={cartItem}/>
                                ))}
                                </div>

                                <div className='h-[1px] bg-gray-300 mt-14' />

                                <div className="p-4 flex justify-between">
                                    <p className='text-xl font-semibold'>Total</p>
                                    <p className='px-3 py-1 bg-slate-500'>{formatNumber(totalPrice)}</p>

                                </div>
                                
                                <button className='w-full
                                rounded-md mt-6 bg-sky-400 px-3 py-2' onClick={() => dispatch(removeAllItemsFromCart())}>Checkout</button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  </>
  )
}
