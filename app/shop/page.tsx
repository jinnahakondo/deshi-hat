
import DynamicBreadcrumb, { BreadcrumbItemProps } from '@/components/shared/DynamicBreadcrumb'
import Pagination from '@/components/shop/Pagination'
import Shop from '@/components/shop/ShopProducts'
import SidebarFilters from '@/components/shop/sidebar/SidebarFilters'
import ProductCardSkeleton from '@/components/skeleton/ProductCardSekleton'
import React, { Suspense } from 'react'

export default async function ShopPage({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
    const params = await searchParams
    const sort = params.sort_by || ''
    const category = params.category || ''
    const min_price = params.min_price || ''
    const max_price = params.max_price || ''
    const page = params.page || 1


    const urlParams = new URLSearchParams();

    if (sort) urlParams.append("sort_by", String(sort));
    if (min_price) urlParams.append("min_price", String(min_price));
    if (max_price) urlParams.append("max_price", String(max_price));
    if (page) urlParams.append("page", String(page))

    if (category) {
        if (Array.isArray(category)) {
            category.forEach(c => urlParams.append("category", c))
        } else {
            urlParams.append("category", category)
        }
    }

    const limit = 6
    urlParams.append("limit", String(limit))


    const res = await fetch(`${process.env.BASE_URL}/api/products?${urlParams.toString()}`)

    if (!res.ok) {
        throw new Error("failed to fetch data")
    }
    const { data: products, total } = await res.json()

    const breadcrumbItems: BreadcrumbItemProps[] = [
        { label: "Home", href: "/" },
        { label: "Shop" },
    ]

    const totalPage = Math.ceil(total / limit)

    const loadingProducts = <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 pb-16 gap-6">
        {
            [...Array(9)].map((_, i) => <ProductCardSkeleton key={i} />)
        }
    </div>

    return (
        <div>
            <div className='sticky top-22'>
                <DynamicBreadcrumb items={breadcrumbItems} />
            </div>
            <main className='grid grid-cols-1 lg:grid-cols-[256px_1fr] gap-10 py-16 items-start'>
                <div className='sticky top-36 h-fit'>
                    <SidebarFilters />
                </div>
                <Suspense fallback={loadingProducts}>
                    <Shop products={products} total={total} />
                </Suspense>
            </main>
            <div className='flex items-center justify-center mb-8'>
                <Pagination totalPage={totalPage} />
            </div>
        </div>
    )
}
