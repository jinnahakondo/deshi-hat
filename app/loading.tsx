import { Spinner } from '@/components/ui/spinner'
import React from 'react'

export default function loading() {
    return (
        <div className='h-screen grid place-items-center'>
            <Spinner className="size-8" />
        </div>
    )
}
