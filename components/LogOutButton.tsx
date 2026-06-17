"use client"
import { LogOut } from 'lucide-react'
import { signOut } from 'next-auth/react'
import React from 'react'

export default function LogOutButton() {
    return (
        <button
            onClick={() => signOut()}
            className='text-red-500 flex items-center justify-center gap-2 '>
            Logout <LogOut size={18} />
        </button>
    )
}
