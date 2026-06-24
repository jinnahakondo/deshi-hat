import React from 'react'
import ShopHeader from './ShopHeader'
import ProductCard from '../ProductCard'
import { Product } from '@/types/Product'

interface Props{
  products:Product[]
}


export default async function Shop({ products }:Props) {

  return (
    <div>
      <ShopHeader totalProducts={String(products.length)} />
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        {
          products.map((product: Product) => <ProductCard key={product._id} product={product} />)
        }
      </div>
    </div>
  )
}
