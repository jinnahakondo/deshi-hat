"use client"
import React from 'react'
import { Button } from '../ui/button'
import { ShoppingCart } from 'lucide-react'

export default function AddToCartButton() {
    return (
        <Button size="lg" className="flex-1 gap-2 shadow-sm font-medium">
            <ShoppingCart className="h-4 w-4" /> Add to Cart
        </Button>
    )
}
