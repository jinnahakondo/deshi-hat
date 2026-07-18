
"use client"
import React from 'react'
import { Button } from '../ui/button'
import { useCartStore } from '@/store/useCartStore'
import { CartItemType, CategoryType, ProductType } from '@/types/types'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

export default function BuyNowButton({ children, product }: {
    children: React.ReactNode,
    product: ProductType<CategoryType>
}) {

    const { status } = useSession()

    const addToCart = useCartStore(state => state.addToCart)

    const router = useRouter();

    const newItem: CartItemType = {
        _id: product._id,
        title: product.title,
        image: product.images[0],
        price: product.price,
        quantity: 1
    }

    return (
        <Button
            onClick={() => {
                addToCart(
                    { newItem, status: status === 'authenticated' }
                )
                router.push('/checkout')
            }
            }

            size="lg" variant="secondary" className="flex-1 font-medium cursor-pointer">
            {children}
        </Button>
    )
}
