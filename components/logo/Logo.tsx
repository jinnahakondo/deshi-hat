import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


export default function Logo() {
    return (
        <Link href={'/'}
            className='flex items-center text-lg md:text-2xl font-bold tracking-tight ml-2 md:ml-0'
        >
            <Image
                src={'/images/paracom.png'}
                alt='paracom store'
                className='h-10 w-fit'
                width={30}
                height={40}
            />
            <span className='text-primary'>aracom</span>
        </Link>
    )
}
