"use client";

import { formatNumber } from "@/lib/helper";
import { CartState, addToCart } from "@/redux/cart-slice";

import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";
interface ProductListProps {
  product: CartState;
}
export default function ProductList({ product }: ProductListProps) {
  const dispatch = useDispatch();
  return (
    <div className="bg-gray-500/[0.2]  flex flex-col gap-4 bg-opacity-40 backdrop-blur-sm rounded-md p-4">
    
        <div className="h-64  group relative rounded-md bg-slate-900  w-full mx-auto ">
        <Image
          src={product.image}
          alt={product.title}
          className="object-contain   transition-all duration-75 "
          fill
        />
        <div className="bg-gray-400 w-full px-4 py-6 backdrop-blur-lg bg-opacity-50 absolute group-hover:flex hidden bottom-0">
        <div className="bg-gray-400 rounded-full w-fit p-4 mx-auto" onClick={() => dispatch(addToCart(product))}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-baggage-claim"><path d="M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2"/><path d="M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10"/><rect width="13" height="8" x="8" y="6" rx="1"/><circle cx="18" cy="20" r="2"/><circle cx="9" cy="20" r="2"/></svg>
        </div>
        </div>
      </div>
      <div className="flex gap-x-8  flex-col">
     <div>
     <h3 className="text-xl mb-4 font-semibold ">{product.title}</h3>
        <p className="dark:text-gray-200/[0.7] text-sm">
          {product.description.length < 100
            ? product.description
            : `${product.description.trim().slice(0, 100)}...`}
        </p>
     </div>
     <div className="mt-8 flex justify-between">
    <p className="text-lg font-semibold font-mono text-gray-200"> {formatNumber(product.price)}</p>
    <p className="bg-slate-600/[0.5] text-[15px] tracking-wide px-3 py-1 rounded-lg">{product.category}</p>
     </div>
      </div>
    </div>

  );
}
