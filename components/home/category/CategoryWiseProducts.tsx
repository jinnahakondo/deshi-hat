import ProductCard from '@/components/ProductCard';
import Title from '@/components/shared/SectionTitle';
import { getCategoryWiseProduct } from '@/lib/fetchData';
import { CategoryType, ProductType } from '@/types/types';

import React, { ReactNode } from 'react'


export default async function CategoryWiseProducts(
    {
        children,
        categorySlug }: {
            children: ReactNode,
            categorySlug: string
        }) {
    const categoryWiseProducts = await getCategoryWiseProduct(categorySlug)

    if (categoryWiseProducts.length === 0) {
        return <div className='grid place-items-center'>No products found!</div>
    }

    return (
        <div>
            <Title>{children}</Title>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {
                    categoryWiseProducts?.map((product) => <ProductCard key={product._id} product={product} />
                    )
                }
            </div>
        </div>
    )
}
