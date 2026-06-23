import ShopHeader from '@/components/shop/ShopHeader'
import SidebarFilters from '@/components/shop/SidebarFilters'
import React from 'react'

export default function Shop() {
    return (
        <div>
            <ShopHeader />
            <main >
                <SidebarFilters />
            </main>
        </div>
    )
}
