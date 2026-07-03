import { ReviewType } from '@/types/types'
import React from 'react'

export default async function CustomerReviews({ productId }: { productId: string }) {
    const url = `${process.env.BASE_URL}/api/reviews/${productId}`

    const res = await fetch(url)

    if (!res.ok) {
        throw new Error("failed to get data")
    }

    const { data: reviews }: { data: ReviewType[] } = await res.json()
    return (
        <div>CustomerReviews</div>
    )
}
