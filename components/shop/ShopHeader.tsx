import React from 'react'
import { SortProduct } from './SortProduct'

export default function ShopHeader({ totalProducts }: { totalProducts: string }) {
    return (
        <div className='flex justify-between items-center mb-4'>
            <h3 className='text-sm font-bold'>{totalProducts} product found</h3>
            <div className='flex items-center gap-4'>
                <span className='text-xs font-medium text-muted-foreground whitespace-nowrap'>Sort by:</span>
                <SortProduct />
            </div>
        </div>
    )
}
