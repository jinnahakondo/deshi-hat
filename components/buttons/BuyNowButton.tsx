
"use client"
import React from 'react'
import { Button } from '../ui/button'
import { CartItem, useCartStore } from '@/store/useCartStore'
import { CategoryType, ProductType } from '@/types/types'
import { useRouter } from 'next/navigation'

export default function BuyNowButton({ children, product }: {
    children: React.ReactNode,
    product: ProductType<CategoryType>
}) {

    const addToCart = useCartStore(state => state.addToCart)

    const router = useRouter();

    const checkoutItem: CartItem = {
        _id: product._id,
        title: product.title,
        image: product.images[0],
        price: product.price,
        quantity: 1
    }

    return (
        <Button
            onClick={() => {
                addToCart({ product: checkoutItem })
                router.push('/checkout')
            }
            }

            size="lg" variant="secondary" className="flex-1 font-medium cursor-pointer">
            {children}
        </Button>
    )
}
