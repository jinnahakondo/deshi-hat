"use client"
import React from 'react'
import { Button } from '../ui/button'
import { useQuantity } from '@/store/orderStore'

export default function QuantityButton() {
    const { increaseQty, decreaseQty, quantity } = useQuantity(state => state)

    return (
        <div className='flex items-center gap-2'>
            <Button
                onClick={decreaseQty}
                disabled={quantity === 1}
                variant={"secondary"}
                className='text-2xl'>-</Button>
            <span>{quantity}</span>
            <Button
                onClick={increaseQty}
                variant={"secondary"}
                className='text-2xl'>+</Button>
        </div>
    )
}
