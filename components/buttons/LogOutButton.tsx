"use client"
import { useCartStore } from '@/store/useCartStore'
import { LogOut } from 'lucide-react'
import { signOut } from 'next-auth/react'
import React from 'react'

export default function LogOutButton() {
    const clearCart = useCartStore(state => state.clearCart)
    return (
        <button
            onClick={() => {
                signOut();
                clearCart()
            }}
            className='text-red-500 flex items-center justify-center gap-2 '>
            Logout <LogOut size={18} />
        </button>
    )
}
