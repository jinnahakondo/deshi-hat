import React from 'react'
import { Button } from '../ui/button'
import { FcGoogle } from 'react-icons/fc'

export default function SocialLogin() {
    return (
        <div>
            <Button variant={"outline"} size={"lg"} className='w-full'>
                <FcGoogle />
                <span className='text-foreground'>
                    Continue with Google
                </span>
            </Button>
        </div>
    )
}
