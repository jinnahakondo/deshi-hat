
import React from 'react'
import { Button } from '../ui/button'

export default function BuyNowButton({ children }:) {
    return (
        <Button size="lg" variant="secondary" className="flex-1 font-medium">
            {children}
        </Button>
    )
}
