import { productLists } from '@/constants/product-lists'
import React from 'react'
import ProductList from './ProductList'



export default function Products() {
  return (
    <div className='w-full '>
     <h1 className='sm:text-4xl text-2xl font-semibold'>Browse Acme products</h1>
     <div className="mt-8">
        <div className="px-3 py-4">
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {
                    productLists.map(product => (
                        <ProductList key={product.id} product={product} />
                    ))
                }
            </div>
        </div>
     </div>
    </div>
  )
}
