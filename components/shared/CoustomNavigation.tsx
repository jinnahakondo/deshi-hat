"use client"
import React from 'react'
import { useSwiper } from 'swiper/react'
import { Button } from '../ui/button'

export default function CoustomNavigation() {
    const swiper = useSwiper()
    console.log("coustom navigation:", swiper);
    return (
        <div>
            <Button
                onClick={() => swiper.slidePrev()}
            >prev</Button>
            <Button
                onClick={() => swiper.slideNext()}
            >Next</Button>
        </div>
    )
}
