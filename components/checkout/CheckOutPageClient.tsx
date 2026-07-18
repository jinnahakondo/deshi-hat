"use client"
import React, { useEffect } from 'react'
import ShippingBillingCard from './ShippingBillingCard'
import OrderReviewCard from './OrderReviewCard'
import OrderSummaryCard from './OrderSummaryCard'
import { useCartStore } from '@/store/useCartStore'
import { useRouter } from 'next/navigation'

export default function CheckOutPageClient() {

    const cartItems = useCartStore(state => state.cartItems);

    const router = useRouter();

 useEffect(() => {
  if (cartItems.length > 0) return;

  const timeout = setTimeout(() => {
    router.push('/');
  }, 1000);

  return () => clearTimeout(timeout);
}, [cartItems.length]);

    return (
        <div className='py-16'>
            <div className='grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-4'>
                <div className='space-y-4 flex-1'>
                    <ShippingBillingCard />
                    <OrderReviewCard />
                </div>
                <div>
                    <OrderSummaryCard />
                </div>
            </div>
        </div>
    )
}
